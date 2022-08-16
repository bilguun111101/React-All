import './App.css';
import List from './components/list';
import Input from './components/input';
import React, {useState} from 'react';

function App() {
  let [arr, setArr] = useState([])
  return (
    <div className='todo-list'>
      <div className='tod'>Todo list</div>
      <div className='input'>
        <Input setArr={setArr}/>
      </div>
      <div>
        {arr.map((a, i) => <List mes={a.text} id={a.id} setArr={setArr}/>)}
      </div>
    </div>
  );
}

export default App;
