import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import Cards from './Cards';

const SideBar = () => {
  const sidebar1Ref = useRef(null);
  const sidebar2Ref = useRef(null);
  const [sidebar1Width, setSidebar1Width] = useState(300);
  const [setSidebar2Width] = useState(200);
  const [isResizing1, setIsResizing1] = useState(false);
  const [isResizing2, setIsResizing2] = useState(false);

  const startResizing1 = useCallback(() => {
    setIsResizing1(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing1(false);
    setIsResizing2(false);
  }, []);

  const resize1 = useCallback(
    (mouseMoveEvent) => {
      if (isResizing1) {
        const newWidth =
          mouseMoveEvent.clientX -
          sidebar1Ref.current.getBoundingClientRect().left;
        setSidebar1Width(newWidth);
      }
    },
    [isResizing1],
  );

  const resize2 = useCallback(
    (mouseMoveEvent) => {
      if (isResizing2) {
        const newWidth =
          sidebar2Ref.current.getBoundingClientRect().right -
          mouseMoveEvent.clientX;
        setSidebar2Width(newWidth);
      }
    },
    [isResizing2],
  );

  useEffect(() => {
    window.addEventListener('mousemove', resize1);
    window.addEventListener('mousemove', resize2);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize1);
      window.removeEventListener('mousemove', resize2);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize1, resize2, stopResizing]);

  return (
    <div
      ref={sidebar1Ref}
      className="app-sidebar bg-deepBlack"
      id="sidebar-container"
      style={{ width: sidebar1Width }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="app-sidebar-content ">
        <Cards
          navbarCards=" "
          navbarLibrary=" "
          navbarCardsAlbum=" "
          navbarCardsLike=" "
          createdPlaylist=" "
        />
      </div>
      <div className="app-sidebar-resizer" onMouseDown={startResizing1}></div>
    </div>
  );
};

export default SideBar;