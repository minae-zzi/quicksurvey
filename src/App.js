// src/App.js
import React from 'react';
import AppRouter from './Router/AppRouter';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const textContainers = document.querySelectorAll('.text-container');

    textContainers.forEach(container => {
      let text = container.innerHTML;
      text = text.replace(/(\.)([^\s])/g, '$1 $2'); // 마침표 다음에 공백 추가
      container.innerHTML = text;
    });
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
