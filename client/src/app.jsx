import React from 'react';
import Card from './card.jsx';
import config from '../../env.config.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticker: 'ABCD',
      // TODO: how to alternate this theme with the orange one?
      theme: 'light',
      isLoading: true,
      pab: [
        {
          __v: 0,
          _id: '5e0d1bc4ebc3c52930ce3707',
          name: 'sample',
          percentChange: 0,
          price: 0,
          rating: 0,
          ticker: "AAAA"
        },
        {
          __v: 0,
          _id: '5e0d1bc4ebc3c52930ce3707',
          name: 'sample',
          percentChange: 0,
          price: 0,
          rating: 0,
          ticker: "AAAA"
        },
        {
          __v: 0,
          _id: '5e0d1bc4ebc3c52930ce3707',
          name: 'sample',
          percentChange: 0,
          price: 0,
          rating: 0,
          ticker: "AAAA"
        },
        {
          __v: 0,
          _id: '5e0d1bc4ebc3c52930ce3707',
          name: 'sample',
          percentChange: 0,
          price: 0,
          rating: 0,
          ticker: "AAAA"
        },
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

  componentDidMount() {
    // console.log('config: ', config);

    fetch(`${config.SERVICE_PEOPLE_ALSO_BOUGHT_URL}:${config.SERVICE_PEOPLE_ALSO_BOUGHT_PORT}/people-also-bought/${this.state.ticker}`)
      .then(pab => {
        return pab.json()
      })
      .then(pab => {
        this.setState({ pab, isLoading: false, test: true });
      })
      .catch(error => {
        console.log(error);
      })

    // // TODO: will need to set up a route that still serves the app but can handle having the ticker in the pathname
    // // this assumes that nothing will be in the pathname expect for the ticker
    // ticker = window.location.pathname.slice(1) || ticker;
    // console.log('window.location.pathname.slice(1): ', window.location.pathname.slice(2));
    // console.log('ticker: ', ticker);
  }

  render() {
    if (this.state.isLoading) {
      return <h2 className="pab-loading">Loading...</h2>
    } else {
      let row = this.state.pab.map((pab, i) => {
        return (
          <Card
            key={i}
            onMouseEnterOrLeave={this.onMouseEnterOrLeave}
            index={i}
            name={pab.name}
            price={pab.price}
            percentChange={pab.percentChange}
            theme={this.state.theme}
          >
          </Card>
        );
      });

      return (
        <>
          <h2>People Also Bought</h2>
          <div className="pab-row-container">{row}</div>
        </>
      );
    }
  }
}

export default App;