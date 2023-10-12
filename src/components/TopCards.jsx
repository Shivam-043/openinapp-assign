import React from 'react';
import Card from './Card';


const TopCards = ({data}) => {
  return (
    <div className=" m-4 p-4 gap-8 flex justify-between w-[100%] flex-wrap">
      {data?.map((data) => {
        return <Card data={data} key={data?.title}/>;
      })}
    </div>
  );
}

export default TopCards;