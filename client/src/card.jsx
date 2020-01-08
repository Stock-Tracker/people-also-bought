import React from 'react';

const Card = ({ onMouseEnterOrLeave, index, name, price, percentChange, theme }) => {
  percentChange = percentChange > 0 ? `+${percentChange * 100}%` : `${percentChange * 100}%`;

  return (
    <div className="pab-card" data-theme={theme} data-index={index}>
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
        <span className="pab-analysts-summary" data-theme={theme}>88% of analysts rate Microsoft as a buy.</span>
      </div>

      <div className="pab-card-bottom">
        <h2 className="pab-price" data-theme={theme}>${price}</h2>
        <div className="pab-percent-change" data-theme={theme}>{percentChange}</div>
      </div>
    </div>
  );
}

export default Card;