import React from 'react';
import Card from './card.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

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

  render() {
    let row = [];
    let card;
    for (let i = 0; i < 4; i++) {
      card = <Card
        key={i}
        onMouseEnterOrLeave={this.onMouseEnterOrLeave}
        index={i}
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