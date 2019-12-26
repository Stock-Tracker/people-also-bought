import React from 'react';

const Card = ({ onMouseEnterOrLeave, index }) => {
  return (
    <div className="pag-card" data-index={index}>
      <div className="pag-name">Microsoft</div>
      <div
        className="pag-rating-container"
        onMouseEnter={onMouseEnterOrLeave}
        onMouseLeave={onMouseEnterOrLeave}
      >
        <span>g</span>
        <span className="pag-rating">88% Buy</span>
      </div>
      <div className="pag-rating-container-tooltip">
        88% of analysts rate Microsoft as a buy.
      </div>
      <div className="pag-price">$156.45</div>
      <div className="pag-percent-change">+0.54%</div>
    </div>
  );
}

export default Card;