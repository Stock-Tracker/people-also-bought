import React from 'react';
import Card from './card.jsx';
import config from '../../env.config.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticker: 'ABCD',
      pab: [
        {
          name: '',
          rating: 0,
          price: 0,
          percentChange: 0,
        },
        {
          name: '',
          rating: 0,
          price: 0,
          percentChange: 0,
        },
        {
          name: '',
          rating: 0,
          price: 0,
          percentChange: 0,
        },
        {
          name: '',
          rating: 0,
          price: 0,
          percentChange: 0,
        }
      ]
    };

    this.onMouseEnterOrLeave = this.onMouseEnterOrLeave.bind(this);
  }

  onMouseEnterOrLeave(e) {
    let tooltip = e.currentTarget.parentNode.querySelector('.pab-rating-container-tooltip');
    if (Array.from(tooltip.classList).indexOf('active') === -1) {
      tooltip.classList.add('active')
    } else {
      tooltip.classList.remove('active')
    }
  }

  // TODO: add tests
  componentDidMount() {
    console.log('config: ', config);
    const ticker = this.state.ticker;

    let pabUrl;
    if (config.SERVICE_API_URL === null) {
      pabUrl = `${window.location.protocol}//${window.location.hostname}`;
    } else {
      pabUrl = `${config.SERVICE_PEOPLE_ALSO_BOUGHT_URL}`;
    }

    fetch(`${pabUrl}:${config.SERVICE_PEOPLE_ALSO_BOUGHT_PORT}/people-also-bought/${ticker}`)
      .then(res => res.json())
      .then(pab => {
        this.setState({ pab });
      });
  }

  render() {
    let row = [];
    let card;
    for (let i = 0; i < 4; i++) {
      card = <Card
        key={i}
        onMouseEnterOrLeave={this.onMouseEnterOrLeave}
        index={i}
        name={this.state.pab[i].name}
        price={this.state.pab[i].price}
        percentChange={this.state.pab[i].percentChange}
      ></Card>
      row.push(card);
    }

    return (
      <>
        <h2>People Also Bought</h2>
        <div className="pab-row-container">{row}</div>
      </>
    );
  }
}

export default App;