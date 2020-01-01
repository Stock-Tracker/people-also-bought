import React from 'react';

const Card = ({ onMouseEnterOrLeave, index, name, price, percentChange }) => {
  return (
    <div className="pab-card" data-index={index}>
      <div className="pab-name">{name}</div>
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
      <div className="pab-price">{price}</div>
      <div className="pab-percent-change">{percentChange}</div>
    </div>
  );
}

export default Card;