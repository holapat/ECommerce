import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

const color ={
  backgroundColor: 'gray',
  width: '100%',
  height: '50vw',
};
const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'Black',
  color: 'white',
  margin:'0',
  padding: '20px 0px 20px 0px'
};


function App() {
  return (
    <>
    <div style={color}>  
      <div>
        <h1 style={style}>Gaming E-Commerce</h1>
      </div>
      <div>
        <NavBar/>
      </div>
    </div>
    </>
  );
}

export default App;
