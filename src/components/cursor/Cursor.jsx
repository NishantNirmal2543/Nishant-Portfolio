import React, { useEffect, useState } from 'react';
import './Cursor.scss';

const Cursor = () => {
  const [cursorX, setCursorX] = useState(-100);
  const [cursorY, setCursorY] = useState(-100);

  // Update cursor position on mouse movement
  const updateCursor = (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursor);
    return () => document.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ top: cursorY, left: cursorX }}
    ></div>
  );
};

export default Cursor;
