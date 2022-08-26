import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Massage from './Massage';

function App() {
  const [state, setState] = useState([
    {
      id: 1,
      name: 'Nikita'
    },
    {
      id: 2,
      name: 'Ivan'
    }
  ])
  const ref = useRef(null)
  const handleFocus = () => {
    console.log(ref.current.focus())
  }
  const [timer, setTimer] = useState(0)
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [name] = useState('Nikita');
  const increase = () => {
    setCount(count + 1)
  };
  const decrease = () => {
    setCount2(count2 - 1)
  };
  useEffect(() => {
    console.log('123');
  }, [count2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => clearInterval(interval)
  })

  return (
    <div >
      <input ref={ref} />
      <button onClick={handleFocus}>ref</button>
      Hellow {name}
      count {count}
      <button onClick={increase}>+</button>
      count2 {count2}
      <button onClick={decrease}>-</button>
      Time {timer}

      {state.map((item, index) => {
        return (
          <div key={item.id}>
            {item.name}
          </div>
        )
      })}
    </div >
  );
}

export default App;
