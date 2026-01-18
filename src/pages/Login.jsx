import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../utils/storage';
import '../styles/login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Placeholder for external auth - currently saves a lightweight user object
    const user = { name: name || 'Usuario', email: email || 'user@example.com', placeholderAuth: true };
    saveUser(user);
    navigate('/');
  }

  return (
    <div className="page login-page">
      <div className="card">
        <h2>Iniciar sesión</h2>
        <p className="muted">Placeholder para autenticación externa. Completa y continúa.</p>
        <form onSubmit={handleSubmit} className="login-form">
          <label>Nombre</label>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Tu nombre" />
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@email.com" />
          <button type="submit" className="btn primary">Continuar</button>
        </form>
      </div>
    </div>
  );
}