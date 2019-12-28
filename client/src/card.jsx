import React from 'react';

const Card = ({ onMouseEnterOrLeave, index }) => {
  return (
    <div className="pab-card" data-index={index}>
      <div className="pab-name">Microsoft</div>
      <div
        className="pab-rating-container"
        onMouseEnter={onMouseEnterOrLeave}
        onMouseLeave={onMouseEnterOrLeave}
      >
        <span>g</span>
        <span className="pab-rating">88% Buy</span>
      </div>
      <div className="pab-rating-container-tooltip">
        88% of analysts rate Microsoft as a buy.
      </div>
      <div className="pab-price">$156.45</div>
      <div className="pab-percent-change">+0.54%</div>
    </div>
  );
}

export default Card;