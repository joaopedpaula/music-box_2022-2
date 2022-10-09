import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/*
  podemos importar qualqeur CSS no arquivo "index.js" e com isso, todos os componentes que o index.js manipular para renderizar na div "root" herdarão esse CSS importado;
  
  também pode importar CSS no componente para uma estilização mais específica;
  
  lembre que para utilizar classes CSS no React, precisa utilizar o atributo "className" invés de "class";
*/
import './assets/css/style.css'; // importando CSS com as estilizações para o music-box
import './assets/css/reset.css'; // importando CSS que limpa o comportamento padrão dos elementos HTML

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

