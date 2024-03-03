import { useState } from "react";
import "./App.css";
import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const name = "Joaquim";
  const [userName, setName] = useState("Maria");
  const [userAge, setAge] = useState(25);

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      {/* <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div> */}

      {/* Imagem em asset */}
      {/* <div>
        <img src={City} alt="Cidade" />
      </div> */}

      <ManageData></ManageData>

      <ListRender />

      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} age={userAge} />
      {/* desctruturing props */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando componentes */}
      <CarDetails brand={"Ford"} km={2000} color={"Prata"} newCar={true} />
      <CarDetails brand={"Fiat"} km={6000} color={"Branco"} newCar={false} />
    </div>
  );
}

export default App;
