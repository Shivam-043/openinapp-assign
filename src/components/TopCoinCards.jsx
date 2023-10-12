import React from 'react';
import CoinCard from './CoinCard';


const TopCoinCards = ({data}) => {
  return (
    <div className=" m-4 p-4 gap-8 flex justify-between w-[100%] flex-wrap">
      {data?.map((coin) => {
        return <CoinCard coin={coin} key={coin?.title} />;
      })}
    </div>
  );
}

export default TopCoinCards;