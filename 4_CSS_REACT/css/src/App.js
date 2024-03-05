import {useState} from 'react'
import "./App.css";
import MyComponent from "./component/MyComponent";

function App() {
  const n = 15;
  const [name] = useState('Enivaldo')
  const redTitle = false;
  return (
    <div className="App">
      {/* 52. CSS global */}
      <h1>React com CSS</h1>

      {/* 53. CSS de componentes */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>

      {/* 54. CSS inline */}
      <p
        style={{
          color: "blue",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      {/* 55. CSS inline dinâmico  */}
      <h2 style={n < 10 ? 
        { color: "purple" } : { color: "pink" }}>
        CSS Dinâmico
      </h2>
      <h2 style={n > 10 ? 
        { color: "purple" } : { color: "pink" }}>
        CSS Dinâmico
      </h2>
      <h2 style={name === 'Enivaldo' ? 
        { color: "purple", backgroundColor: "yellow" } : null}>
        Enivaldo Queiroz
      </h2>

      {/* 56. Classes dinâmicas */}
      <h2 className={redTitle ? "red-title":"title"}>Este título vai ter classe dinâmica</h2>
    </div>
  );
}

export default App;
