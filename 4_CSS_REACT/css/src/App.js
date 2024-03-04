import "./App.css";
import MyComponent from "./component/MyComponent";

function App() {
  return (
    <div className="App">
      {/* 52. CSS global */}
      <h1>React com CSS</h1>

      {/* 53. CSS de componentes */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
    </div>
  );
}

export default App;
