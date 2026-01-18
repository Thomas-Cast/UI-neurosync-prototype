import React, { useState } from 'react';
import { getRobots, saveRobots } from '../utils/storage';
import CodeEditorSimple from '../components/CodeEditorSimple';

export default function Robots() {
  const [list, setList] = useState(getRobots());
  const [name, setName] = useState('');
  const [code, setCode] = useState('{\n  "hola": [{ "servo":1, "pos":30, "time":500 }]\n}');

  function addRobot() {
    const r = { id: Date.now().toString(), name: name || `Robot-${list.length+1}`, code };
    const next = [r, ...list];
    setList(next); saveRobots(next);
    setName('');
  }

  function updateCode(id, newCode) {
    const next = list.map(r => r.id === id ? { ...r, code: newCode } : r);
    setList(next); saveRobots(next);
  }

  return (
    <div className="page robots-page">
      <h2>Robots</h2>
      <div className="panel">
        <label>Nombre del robot</label>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Mi robot" />
        <label>Plantilla JSON (mapping gesto → posiciones)</label>
        <CodeEditorSimple value={code} onChange={setCode} />
        <button className="btn primary" onClick={addRobot}>Agregar robot</button>
      </div>

      <div className="panel">
        <h3>Robots añadidos</h3>
        {list.length === 0 && <p className="muted">No hay robots aún.</p>}
        {list.map(r => (
          <div key={r.id} className="robot-item">
            <h4>{r.name}</h4>
            <CodeEditorSimple value={r.code} onChange={newCode => updateCode(r.id, newCode)} />
          </div>
        ))}
      </div>
    </div>
  );
}