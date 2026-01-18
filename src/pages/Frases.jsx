import React, { useState } from 'react';
import { getPhrases, savePhrases } from '../utils/storage';

export default function Frases() {
  const [list, setList] = useState(getPhrases());
  const [text, setText] = useState('');

  function add() {
    const p = { id: Date.now().toString(), text };
    const next = [p, ...list]; setList(next); savePhrases(next); setText('');
  }

  function remove(id) {
    const next = list.filter(x => x.id !== id); setList(next); savePhrases(next);
  }

  return (
    <div className="page frases-page">
      <h2>Frases</h2>
      <div className="panel">
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Escribe frase" />
        <button className="btn primary" onClick={add}>Guardar</button>
      </div>
      <div className="panel">
        {list.map(p => (
          <div key={p.id} className="phrase-item">
            <div className="phrase-text">{p.text}</div>
            <div>
              <button className="btn" onClick={() => navigator.clipboard.writeText(p.text)}>Copiar</button>
              <button className="btn" onClick={() => remove(p.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}