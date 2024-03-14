import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h1 className="title">Todo App</h1>
          <div className="header">
            <input
              className="inputText"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="todoAdd" onClick={handleAddTodo}>
              Add
            </button>
          </div>
          <ul className="list">
            {todos.map((todo, index) => (
              <li className="item" key={index}>
                {todo}
                <button
                  className="dangerBtn"
                  onClick={() => handleDeleteTodo(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
