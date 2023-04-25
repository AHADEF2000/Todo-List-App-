import { useEffect, useState } from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import './style.css'



function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue == null) {
      return []
    } else {
      return JSON.parse(localValue)
    }
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodo => {
      return [
        ...currentTodo,
        {
          id: crypto.randomUUID(), title, completed: false
        }
      ]
    })
  }

  function toggleTodo(id, completed) {

    setTodos(currentTodo => {
      return currentTodo.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }


  function deleteTodo(id) {

    setTodos(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })

  }

  return (
    <>

      <Form onSubmit={addTodo} />

      <h1 className="header">Todo List</h1>

      <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
