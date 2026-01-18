import React from 'react';
import './tile.css';

export default function Tile({ title, subtitle, onClick }) {
  return (
    <button className="tile" onClick={onClick}>
      <div className="tile-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </button>
  );
}