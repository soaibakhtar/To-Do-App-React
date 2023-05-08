import { useEffect, useState } from 'react';
import "./styles.css"
import {AiOutlineSend,AiFillDelete} from "react-icons/ai"
function App() {

  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  const [newText,setNewText] = useState("")

  const handelSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos,{text : newText,completed : false}])
    setNewText("")
  }

  const handelDelete = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <div className="App">
      <div className='container'>
        <h1>Schedule-Me</h1>
        <form onSubmit={handelSubmit}>
          <input 
            onChange={(event) => setNewText(event.target.value)}
            className='input-box'
            type='text'
            placeholder='Write Anything...'
            value={newText}
            required
          />
          <button type='submit'><AiOutlineSend/></button>
        </form>

        <div className='todo-item'>
          {todos.map((todo,index)=>{
            return (
              <div key={index} className='todo-table'>
                  <span style={{textDecoration : todo.completed ? "line-through" : "none"}}>
                    {todo.text}
                  </span>

                  <div className='check-box'>
                    <input
                      type='checkbox'
                      checked={todo.completed}
                      onChange={() => {
                        const newTodo = [...todos]
                        newTodo[index].completed = !newTodo[index].completed
                        setTodos(newTodo)
                      }}
                    />

                    {todo.completed ? (<button onClick={() => handelDelete(index)} className='delete-btn'><AiFillDelete/></button>) : null}
                  </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
