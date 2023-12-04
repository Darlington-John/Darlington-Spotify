import React from 'react';
import Cards from './Cards';
import FiltersData from './ArrayData';
const Filters = () => {
  const greeting = getGreeting();
  return (
    <div className="flex flex-col py-6 gap-4  2xs:hidden">
      <h1 className="text-white text-3xl font-bold xs:hidden">{greeting}</h1>

      <div className="grid-cols-3 grid  justify-between w-full gap-3 md:grid-cols-2  ">
        {FiltersData.map((playlist) => (
          <div>
            <Cards
              key={playlist.PlaylistTitle}
              {...playlist}
              playlist={playlist}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const getGreeting = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
};
export default Filters;
