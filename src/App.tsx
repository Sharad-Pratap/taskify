import './App.css';
import InputField from './components/InputField';
import { useState } from 'react';

const App : React.FC = ()=> {
  const [todo, setTodo] = useState<string>("");
  console.log(todo);
  return (
    <div className="App">
      <span className="heading">taskify</span>
      <InputField todo={todo} setTodo={setTodo}/>
      </div>
    
  );
} 

export default App;
