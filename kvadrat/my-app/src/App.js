import logo from './logo.svg';
import './App.css';
import Name from './dude';

function App() {
  let arr2 = []
  for(let i = 1; i <= 10; i++) {
    arr2.push(i);
  }
  return (
    <span>
      {arr2.map(a => <Name key={a} />)}
    </span>
  );
}

export default App;