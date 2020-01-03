import React from 'react';
import Card from './card.jsx';
import config from '../../env.config.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticker: 'ABCD',
      // TODO: how to alternate this theme with the orange one?
      theme: 'pab-theme-closed-up',
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

  // TODO: flickering? might need to debounce this so it only fires every certain frequency??
  onMouseEnterOrLeave(e) {
    let tooltip = e.currentTarget.parentNode.parentNode.querySelector('.pab-rating-container-tooltip');
    if (Array.from(tooltip.classList).indexOf('active') === -1) {
      tooltip.classList.add('active')
    } else {
      tooltip.classList.remove('active')
    }
  }

  // TODO: add tests
  componentDidMount() {
    console.log('config: ', config);
    let ticker = this.state.ticker;

    // // TODO: will need to set up a route that still serves the app but can handle having the ticker in the pathname
    // // this assumes that nothing will be in the pathname expect for the ticker
    // ticker = window.location.pathname.slice(1) || ticker;
    // console.log('window.location.pathname.slice(1): ', window.location.pathname.slice(2));
    // console.log('ticker: ', ticker);

    fetch(`${config.SERVICE_PEOPLE_ALSO_BOUGHT_URL}:${config.SERVICE_PEOPLE_ALSO_BOUGHT_PORT}/people-also-bought/${ticker}`)
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
        theme={this.state.theme}
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