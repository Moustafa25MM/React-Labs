import './App.css';
import { useState } from 'react';


function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
    // setInput(input + value);
  };
  const handleClear = () => {
    setInput('');
    setResult('');
  };
  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };


  const [todos,setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  function handleInputChange(event) {
    setTodoText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault('');
    if(todoText.trim()!==''){

      const newTodo = {text: todoText };
      setTodos([...todos, newTodo ]);
    }    

  setTodoText('');
  }

  // function delete(){

  // }
  return (
  
  
    
    // <div>
    // <h1>Calculator</h1>
    // <input type="text" value={input} readOnly/>
    // <br />
    // <button onClick={() => handleInput('0')}>0</button>
    // <button onClick={() => handleInput('1')}>1</button>
    // <button onClick={() => handleInput('2')}>2</button>
    // <button onClick={() => handleInput('3')}>3</button>
    // <button onClick={() => handleInput('+')}>+</button>
    // <br />
    // <button onClick={() => handleInput('4')}>4</button>
    //   <button onClick={() => handleInput('5')}>5</button>
    //   <button onClick={() => handleInput('6')}>6</button>
    //   <button onClick={() => handleInput('-')}>-</button>
    //   <br />
    //   <button onClick={() => handleInput('7')}>7</button>
    //   <button onClick={() => handleInput('8')}>8</button>
    //   <button onClick={() => handleInput('9')}>9</button>
    //   <button onClick={() => handleInput('*')}>*</button>
    //   <br />
    //   <button onClick={() => handleInput('/')}>/</button>
    //   <br />

    // <button onClick={() => handleCalculate()}>
    // =
    // </button>

    
    //   <br />
    //   <button onClick={() => handleClear()}>Clear</button>
    //   <input type="text" value={result} readOnly />


    // </div>

    <div className="todo-app">
      <h1>My Todo List</h1>


      {/* Todo Form */}
      <form onSubmit={handleSubmit}>
        <button type="submit">Add Todo</button>
        <input
          type="text"
          placeholder="Enter a new todo"
          value={todoText}
          onChange={handleInputChange}
          />
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
      </form>
    </div>
    
    
);
}

export default App;
