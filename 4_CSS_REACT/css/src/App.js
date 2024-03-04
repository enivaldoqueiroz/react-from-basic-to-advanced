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

      {/* 54. CSS inline */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
    </div>
  );
}

export default App;
