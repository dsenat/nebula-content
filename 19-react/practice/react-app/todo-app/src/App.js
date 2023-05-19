
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}



export default App;
