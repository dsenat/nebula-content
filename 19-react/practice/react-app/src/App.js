// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import FavoriteColorInput from "./components/FavoriteColorInput/FavoriteColorInput"
import About from "./components/About/About"
import Hobbies from "./components/Hobbies/Hobbies"
import Goals from "./components/Goals/Goals"

function App() {
  return (
    <div className="App">
      <FavoriteColorInput />
      <Counter />
      <About />
      <Hobbies />
      <Goals />
    </div>
  );
}

export default App;
