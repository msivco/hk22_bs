import { useState } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Button>Button</Button>
  );
}

export default App;
