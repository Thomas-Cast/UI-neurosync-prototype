import React from 'react';
import './ajustes.css';

export default function Ajustes() {
  function toggleTheme() {
    document.documentElement.classList.toggle('light');
  }
  return (
    <div className="page ajustes-page">
      <h2>Ajustes</h2>
      <div className="panel">
        <label>Tema</label>
        <div className="row">
          <button className="btn" onClick={() => document.documentElement.classList.remove('light')}>Oscuro</button>
          <button className="btn" onClick={() => document.documentElement.classList.add('light')}>Claro</button>
        </div>
        <label>Accesibilidad</label>
        <p className="muted">Opciones futuras: tamaño de fuente, alto contraste, etc.</p>
      </div>
    </div>
  );
}