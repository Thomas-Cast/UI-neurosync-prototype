import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import './robotsim.css';

const RobotSimulator = forwardRef((props, ref) => {
  const leftRef = useRef();
  const rightRef = useRef();

  useImperativeHandle(ref, () => ({
    playSequenceForText(text) { playText(text); }
  }));

  function playText(text) {
    // Very simple demo: animate hands for each word
    const words = (text || '').split(/\s+/).filter(Boolean);
    let t = 0;
    words.forEach((w, i) => {
      setTimeout(() => {
        blink(leftRef.current); blink(rightRef.current);
      }, t);
      t += 700;
    });
  }

  function blink(el) {
    if (!el) return;
    el.classList.add('active');
    setTimeout(() => el.classList.remove('active'), 600);
  }

  return (
    <div className="robot-sim">
      <div className="hand left" ref={leftRef}></div>
      <div className="hand right" ref={rightRef}></div>
    </div>
  );
});

export default RobotSimulator;