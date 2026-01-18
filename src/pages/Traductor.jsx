import React, { useState, useRef } from 'react';
import RobotSimulator from '../components/RobotSimulator';
import { getRobots } from '../utils/storage';
import './traductor.css';

export default function Traductor() {
  const [text, setText] = useState('');
  const [log, setLog] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(() => getRobots()[0]?.id || '');
  const simulatorRef = useRef();

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert('Reconocimiento de voz no soportado en este navegador');
    const recog = new SpeechRecognition();
    recog.lang = 'es-CO';
    recog.onresult = (e) => { setText(e.results[0][0].transcript); };
    recog.start();
  };

  function sendToRobot() {
    // For prototype: simulate mapping -> send JSON to simulator
    const payload = { text, robotId: selectedRobot };
    setLog(prev => [JSON.stringify(payload), ...prev].slice(0, 10));
    if (simulatorRef.current) simulatorRef.current.playSequenceForText(text);
  }

  return (
    <div className="page traductor-page">
      <div className="panel">
        <h2>Traductor de Señas</h2>
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Escribe una palabra o frase" />
        <div className="row">
          <div>
            <button className="btn" onClick={startListening}>Usar voz</button>
            <button className="btn primary" onClick={sendToRobot}>Enviar al robot</button>
          </div>
          <select value={selectedRobot} onChange={e => setSelectedRobot(e.target.value)}>
            <option value="">Seleccionar robot (demo)</option>
            {getRobots().map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
          </select>
        </div>
      </div>
      <div className="panel">
        <h3>Simulación</h3>
        <RobotSimulator ref={simulatorRef} />
        <h4>Logs</h4>
        <pre className="log">{log.join('\n\n')}</pre>
      </div>
    </div>
  );
}