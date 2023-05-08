import { useState } from 'react';
import logo from './logo.svg';
import "./styles.css"

function App() {

  const [todos,setTodos] = useState([]);
  const [newText,setNewText] = useState("")

  return (
    <div className="App">
      <div className='container'>
        <h1>Schedule-Me</h1>
        <form>
          <input 
            onChange={(event) => setNewText(event.target.value)}
            className='input-box'
            type='text'
            placeholder='Write Anything...'
            value={newText}
            required
          />
        </form>
      </div>
    </div>
  );
}

export default App;
