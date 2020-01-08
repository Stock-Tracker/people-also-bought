import React from 'react';

const Card = ({ onMouseEnterOrLeave, index, name, price, percentChange, theme }) => {
  percentChange = percentChange > 0 ? `+${percentChange * 100}%` : `${percentChange * 100}%`;

  return (
    <div className="pab-card" data-index={index}>
      <div className="pab-card-top">
        <div className="pab-name">{name}</div>
        <div
          className="pab-rating-container"
          onMouseEnter={onMouseEnterOrLeave}
          onMouseLeave={onMouseEnterOrLeave}
        >
          <span>g</span>
          <span className="pab-rating">88% Buy</span>
        </div>
      </div>

      <div className="pab-rating-container-tooltip">
        88% of analysts rate Microsoft as a buy.
      </div>

      <div className="pab-card-bottom">
        <h2 className={`pab-price ${theme}`}>${price}</h2>
        <div className={`pab-percent-change ${theme}`}>{percentChange}</div>
      </div>
    </div>
  );
}

export default Card;