import React from 'react'

const Card = ({data}) => {

  return (
    <div className="card__wrapper">
      <div className="coin__img">
        <img src={data.img} alt={data?.name} />
        {/* dangerouslySetInnerHTML={{ __html: coin.data }} */}
      </div>

      <p className='text-[15px] sm:text-[18px]'>{data.title}</p>

      <div className="price__status">
        <h3 className='font-bold'>{data.data}</h3>

        <span className="coin__status">
            {
                // coin.market_cap_change_percentage_24h.toFixed(1) > 0 ? 
                    <p className="status__positive">{data.profit}</p>
                    // :
                    // <p className="status__negative">-{coin.market_cap_change_percentage_24h.toFixed(1)}%</p>
            }
        </span>
      </div>
    </div>
  );
}

export default Card;