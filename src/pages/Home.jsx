import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tile from '../components/Tile';
import './home.css';

export default function Home() {
  const nav = useNavigate();
  return (
    <div className="page home-page">
      <h1>NeuroSync</h1>
      <p className="lead">Selecciona lo que quieras hacer</p>
      <div className="tiles">
        <Tile title="Traductor" subtitle="Texto → Señas" onClick={() => nav('/traductor')} />
        <Tile title="Robots" subtitle="Agregar / Configurar robots" onClick={() => nav('/robots')} />
        <Tile title="Frases" subtitle="Frases guardadas" onClick={() => nav('/frases')} />
        <Tile title="Ajustes" subtitle="Tema y accesibilidad" onClick={() => nav('/ajustes')} />
      </div>
    </div>
  );
}