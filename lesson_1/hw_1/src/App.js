import logo from './logo.svg';
import './App.css';
import Massage from './Massage';

function App() {
  const name = 'Nikita';
  return (
    <div >
      <Massage name={name} />

    </div>
  );
}

export default App;
