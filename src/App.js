import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/theme.css';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import Traductor from './pages/Traductor';
import Robots from './pages/Robots';
import Frases from './pages/Frases';
import Ajustes from './pages/Ajustes';
import { getUser } from './utils/storage';

function App() {
  const user = getUser();

  return (
    <div className="app-root dark">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route path="/traductor" element={<Traductor />} />
          <Route path="/robots" element={<Robots />} />
          <Route path="/frases" element={<Frases />} />
          <Route path="/ajustes" element={<Ajustes />} />
          <Route path="*" element={<Navigate to={user ? '/' : '/login'} replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;