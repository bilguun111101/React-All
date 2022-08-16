import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import customData from './data.json'
import Navbar from './components/navbar/navbar';
import Profile from './components/profile';
import { useButtonContext } from './context';

function App() {
  let [search, setSearch] = useState('')
  return (
    <div className='page'>
      <Navbar search={setSearch}/>
      <div className='grid-imformation'>
        <div className='grid-imformation-small'>
          {customData.filter(el => {
            if(search === '') return el
            else if(el.name.toLowerCase().includes(search) || el.name.toLowerCase().includes(search.toLowerCase())) return el
          }).map((a, i) => {
            // setIsClicked([...isClicked, false])
            return <Profile data={a} index={i} key={i}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;