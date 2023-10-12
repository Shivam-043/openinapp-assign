import React from 'react'

const CoinCard = ({coin}) => {

  return (
    <div className="card__wrapper">
      <div className="coin__img">
        {/* <img src={coin?.image} alt={coin?.name} /> */}
      </div>

      <h4>{coin.title}</h4>

      <div className="price__status">
        <h3>₹{coin.data}</h3>

        <span className="coin__status">
            {
                // coin.market_cap_change_percentage_24h.toFixed(1) > 0 ? 
                    <p className="status__positive">{coin.profit}</p>
                    // :
                    // <p className="status__negative">-{coin.market_cap_change_percentage_24h.toFixed(1)}%</p>
            }
        </span>
      </div>
    </div>
  );
}

export default CoinCard;