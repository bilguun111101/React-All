import './App.css';
import Table from './components/table';

const data = [
  {id: "1", firstName: "Jon", lastName: "Snow", age: 35},
  {id: "2", firstName: "Cersei", lastName: "Lannister", age: 42},
  {id: "3", firstName: "Jaime", lastName: "Lannister", age: 45},
  {id: "4", firstName: "Arya", lastName: "Stark", age: 16},
  {id: "5", firstName: "Daenerys", lastName: "Targaryen", age: 30},
];
const style = {
  display: 'flex',
  width: "100%",
  height: 'auto',
  padding: '1rem 0',
  fontSize: '1.5rem',
  borderBottom: '1px solid #fff',
  color: '#fff',
  fontWeight: '0'
}
const span = {
  minWidth: '250px',
}

function App() {
  return (
    <div><Table data={data} style={style} span={span}/></div>
  );
}

export default App;
