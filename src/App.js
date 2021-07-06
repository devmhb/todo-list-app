import Form from './components/Form'
import Todolist from './components/Todolist'
import { useState } from 'react';
import './App.css';

function App() {
  let [inputText,setInputText] = useState('');
  let [todos,setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
       <h1>Todo List!</h1>
      </header>
     <Form 
     todos={todos}
     inputText={inputText}
     setInputText={setInputText}
     setTodos={setTodos}
      />
     <Todolist setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
