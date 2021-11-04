import logo from "./logo.svg";
import Menu from "./components/Menu.js";
import Content from "./components/Content.js";
import "./styling/App.css";
function App() {
  return (
    <div className="main-content">
      <Menu />
      <Content />
    </div>
  );
}

export default App;
