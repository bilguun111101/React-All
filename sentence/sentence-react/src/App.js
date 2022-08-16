import logo from './logo.svg';
import React, { Component, useState } from 'react';

import './App.css';

function App() {
  let [sen, setSen] = useState(""), holy = "Hi my name is Bilguun", p = 0, l = 0;
  holy.forEach(a => p++);
  const main = () => {
    setSen(sen += holy[l]);
    l++;
    if(l === p) {
      setSen("");
      l = 0;
    }
  }
  setInterval(main(), 10)
  return (
    <div>{sen}</div>
  );
}

export default App;
