import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { clearUser } from '../utils/storage';
import './header.css';

export default function Header() {
  const nav = useNavigate();
  function logout() {
    clearUser();
    nav('/login');
  }
  return (
    <header className="app-header">
      <div className="brand">
        <img src="/assets/logo.svg" alt="logo" className="logo" />
        <Link to="/">NeuroSync</Link>
      </div>
      <nav className="nav-actions">
        <Link to="/traductor">Traductor</Link>
        <Link to="/robots">Robots</Link>
        <Link to="/frases">Frases</Link>
        <Link to="/ajustes">Ajustes</Link>
        <button className="btn link" onClick={logout}>Cerrar sesión</button>
      </nav>
    </header>
  );
}