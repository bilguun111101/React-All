import { useState } from 'react';
import './App.css';
import Build from './components/build';

const words = ["Banana", "Orange", "Apple", "Mango", "Grape", "Watermelon", "Pineapple"];

function App() {
  let [Inputvalue, setvalue] = useState('');
  const takeInputValue = (e) => {
    setvalue(Inputvalue = e.target.value)
  }

  return (
    <div>
      <input type='search'
      placeholder='ug oruulna uu'
      onChange={takeInputValue}
      />
      <div>
        {words.filter(a => {
          if(Inputvalue === "") return a
          else if(a.toLowerCase().includes(Inputvalue) || a.toLocaleUpperCase().includes(Inputvalue)) return a;
        }).map(build => <Build data={build} key={build} />)}
      </div>
    </div>
  );
}

export default App;
