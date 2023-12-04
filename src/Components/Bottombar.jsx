import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Bottombar = () => {
  const location = useLocation();
  return (
    <div className="flex  bottom-bar flex-row fixed justify-between w-screen bottom-0 z-30 bg-deepBlack p-2">
      <div className="w-full flex items-center justify-start gap-1 text-xs  font-sans hover:text-white nav-link duration-300 flex-wrap flex-col ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          class="Svg-sc-ytk21e-0 iYxpxA home-active-icon"
          viewBox="0 0 24 24"
          id="homeIcon"
        >
          <path
            d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"
            id="homePath"
            className={location.pathname === '/' ? 'active' : ''}
            fill="#b3b3b3"
          />
        </svg>
        <Link
          to="/"
          id={location.pathname === '/' ? 'active' : ''}
          className="text-silver"
        >
          Home
        </Link>
      </div>
      <div className="w-full flex items-center justify-start gap-1 text-xs  font-sans hover:text-white nav-link duration-300 flex-wrap flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          class="Svg-sc-ytk21e-0 iYxpxA search-active-icon"
          viewBox="0 0 24 24"
          id="homeIcon"
        >
          <path
            d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"
            fill="transparent"
          />
          <path
            d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"
            id="searchPath"
            fill="#b3b3b3"
          />
        </svg>
        <Link to="/" id={location.pathname === '/' ? 'active' : ''}>
          Search
        </Link>
      </div>{' '}
      <div className="w-full flex items-center justify-start gap-1 text-xs  font-sans hover:text-white nav-link duration-300 flex-wrap flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          class="Svg-sc-ytk21e-0 iYxpxA"
          id="homeIcon"
        >
          <path
            d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
            fill="#b3b3b3"
          />
        </svg>
        <Link
          to="#"
          id={location.pathname === '/' ? 'active' : ''}
          className="text-silver"
        >
          Library
        </Link>
      </div>{' '}
      <div className="w-full flex items-center justify-start gap-1 text-xs  font-sans hover:text-white nav-link duration-300 flex-wrap flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          class="Svg-sc-ytk21e-0 iYxpxA"
          id="homeIcon"
          fill="#d3d3d3"
        >
          <path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm5.045 15.866a.686.686 0 0 1-.943.228c-2.583-1.579-5.834-1.935-9.663-1.06a.686.686 0 0 1-.306-1.337c4.19-.958 7.785-.546 10.684 1.226a.686.686 0 0 1 .228.943zm1.346-2.995a.858.858 0 0 1-1.18.282c-2.956-1.817-7.464-2.344-10.961-1.282a.856.856 0 0 1-1.11-.904.858.858 0 0 1 .611-.737c3.996-1.212 8.962-.625 12.357 1.462a.857.857 0 0 1 .283 1.179zm.116-3.119c-3.546-2.106-9.395-2.3-12.78-1.272a1.029 1.029 0 0 1-.597-1.969c3.886-1.18 10.345-.952 14.427 1.471a1.029 1.029 0 0 1-1.05 1.77z" />
        </svg>
        <Link to="/" id={location.pathname === '/' ? 'active' : ''}>
          Get app
        </Link>
      </div>
    </div>
  );
};

export default Bottombar;
