import React from 'react';

import Cards from './Cards';
import { mixData, madeForUser, radioData, ThisIsData } from './ArrayData';

const Features = (props) => {
  return (
    <div className="flex flex-col gap-5 py-5">
      {props.topMixes && (
        <>
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-white text-3xl font-bold hover:underline cursor-pointer 2xs:text-lg">
              {props.FeaturesTitle}
            </h1>
          </div>
          <div className="swiper-container flex flex-row gap-5 overflow-auto pb-4">
            {mixData.map(
              (mix) =>
                [mix.key] && <Cards key={mix.key} {...mix} FeaturesCard=" " />,
            )}
          </div>
        </>
      )}
      {props.madeForUser && (
        <>
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-white text-3xl font-bold hover:underline cursor-pointer 2xs:text-lg">
              {props.FeaturesTitle}
            </h1>
          </div>
          <div className="swiper-container flex flex-row gap-5 overflow-auto pb-4">
            {madeForUser.map(
              (mix) =>
                [mix.key] && <Cards key={mix.key} {...mix} FeaturesCard=" " />,
            )}
          </div>
        </>
      )}
      {props.Radio && (
        <>
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-white text-3xl font-bold hover:underline cursor-pointer 2xs:text-lg">
              {props.FeaturesTitle}
            </h1>
          </div>
          <div className="swiper-container flex flex-row gap-5 overflow-auto pb-4">
            {radioData.map(
              (mix) =>
                [mix.key] && <Cards key={mix.key} {...mix} FeaturesCard=" " />,
            )}
          </div>
        </>
      )}
      {props.thisIs && (
        <>
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-white text-3xl font-bold hover:underline cursor-pointer 2xs:text-lg">
              {props.FeaturesTitle}
            </h1>
          </div>
          <div className="swiper-container flex flex-row gap-5 overflow-auto pb-4">
            {ThisIsData.map(
              (mix) =>
                [mix.key] && <Cards key={mix.key} {...mix} FeaturesCard=" " />,
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Features;
