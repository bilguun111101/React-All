import './App.css';
import React, { useContext, useState } from 'react'
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Middle from './components/middle/middle';
import datajson from './product.json'
import { CartContext } from './useContext';
import { v4 as uuid4 } from 'uuid';


function App() {
  let [cartArr, setCartArr] = useState([]);
  datajson.forEach(a => {a.id = uuid4()});
  let data = datajson;
  return (
      <CartContext.Provider value={{ cartArr, setCartArr }}>
        <div className="App">
          <Header />
          <Middle data={data}/>
          <Footer />
        </div>
      </CartContext.Provider>
  );
}

export default App;
