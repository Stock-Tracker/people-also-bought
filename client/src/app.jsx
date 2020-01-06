import React from 'react';
import Card from './card.jsx';
import config from '../../env.config.js';
import utils from './utils.js';

// // for Jest test suite (ie, that runs in node.js)
// if (!fetch) {
//   var fetch = require('node-fetch');
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticker: 'ABCD',
      // TODO: how to alternate this theme with the orange one?
      theme: 'pab-theme-closed-up',
      pab: [
        {
          __v: 0,
          _id: '5e0d1bc4ebc3c52930ce3707',
          name: 'Hamill - Keebler',
          percentChange: 0.0615,
          price: 18.13,
          rating: 0.55,
          ticker: "FEDC"
        },
        {
          __v: 0,
          _id: '5e0d1bc4ebc3c52930ce3707',
          name: 'Hamill - Keebler',
          percentChange: 0.0615,
          price: 18.13,
          rating: 0.55,
          ticker: "FEDC"
        },
        {
          __v: 0,
          _id: '5e0d1bc4ebc3c52930ce3707',
          name: 'Hamill - Keebler',
          percentChange: 0.0615,
          price: 18.13,
          rating: 0.55,
          ticker: "FEDC"
        },
        {
          __v: 0,
          _id: '5e0d1bc4ebc3c52930ce3707',
          name: 'Hamill - Keebler',
          percentChange: 0.0615,
          price: 18.13,
          rating: 0.55,
          ticker: "FEDC"
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
    utils.getPab(this.state.ticker)
      .then(pab => {
        console.log('pab: ', pab);
        this.setState({ pab });
      });

    // // TODO: will need to set up a route that still serves the app but can handle having the ticker in the pathname
    // // this assumes that nothing will be in the pathname expect for the ticker
    // ticker = window.location.pathname.slice(1) || ticker;
    // console.log('window.location.pathname.slice(1): ', window.location.pathname.slice(2));
    // console.log('ticker: ', ticker);
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