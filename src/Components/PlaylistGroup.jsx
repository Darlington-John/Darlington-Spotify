import React from 'react';

export const PlayListGroup = (props) => {
  return (
    <div>
      <div className="grid-table grid grid-cols-3 text-white md:hidden px-4  border-b border-grey xl:justify-between xl:grid-cols-2">
        <div className="grid-cell heading flex gap-2 py-3">
          <h1>{props.number}</h1>
          <h1>{props.title}</h1>
        </div>
        <div className="grid-cell heading py-3 flex justify-end xl:hidden">
          <h1> {props.album}</h1>
        </div>

        <div className="grid-cell flex  justify-end py-3">
          <img src={props.duration} className="w-4" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PlayListGroup;
