import { useState } from "react";
import "./App.css";
//import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  //const name = "Joaquim";
  const [userName, setName] = useState("Maria");
  const [userAge, setAge] = useState(25);

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelho Ferrari", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 35000 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 1000 },
  ];

  const pessoas = [
    {id: 1, nomePessoa: "Jose", idade: 20, profissao:"Dev"},
    {id: 2, nomePessoa: "Pedro", idade: 17, profissao:"DBA"},
    {id: 3, nomePessoa: "Carlos", idade: 40, profissao:"DevOps"}
  ]

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

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

      {/* <ListRender /> */}

      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} age={userAge} />
      {/* desctruturing props */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando componentes */}
      <CarDetails brand={"Ford"} km={2000} color={"Prata"} newCar={true} />
      <CarDetails brand={"Fiat"} km={6000} color={"Branco"} newCar={false} />

      {/* Loop  em Array de objetos*/}
      <p>==========================================</p>
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          newCar={car.newCar}
        />
      ))}

      {/* Fragment no React */}
      <p>==========================================</p>
      <Fragment nomeTerceiroTitulo="Título via props desconstruida" />
      <p>==========================================</p>

      {/* Children */}
      <Container myValue="PassandoValorNaProp">
        <p>Testando um novo childrenTag</p>
        <p>E este é o conteúdo</p>
      </Container>

      <Container myValue="PassandoValorNaProp 2">
        <h3>Testando Conteiner</h3>
      </Container>

      <p>==========================================</p>
      {/* 48. Função como prop - Executar função*/}
      <ExecuteFunction myFunction={showMessage} />
      <p>==========================================</p>
      {/* 49. State lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      <p>==========================================</p>
      {/* Tarefa 4: Desafio sobre componentes e recursos do React*/}
      {pessoas.map((pessoa) => (
        <UserDetails 
          key={pessoa.id}
          nome={pessoa.nomePessoa}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
        />
      ))}
    </div>
  );
}

export default App;
