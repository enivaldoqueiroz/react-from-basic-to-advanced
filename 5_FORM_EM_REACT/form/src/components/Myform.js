import React from "react";
import "./MyForm.css";
import { useState } from "react"

const Myform = ({user}) => {
  // 6 - Controlando input
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const handleName = (e) => {
    setName(e.target.value);
  }
  // console.log(name);
  // console.log(email);

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("Enviando o formulario");
    console.log(name, email);
  }

  return (
    <div>
      {/* 60. Criando formulários */}
      {/* 5 - envio de form */}
      <form onSubmit={handleSubmit}>
        {/* 1 - Criação de form */}
        <div>
          <label htmlFor="name">Nome:</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Digite seu nome" 
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail</span>
          {/* 4 - Simplificação de  manipulação de state*/}
          <input 
            type="email" 
            name="email" 
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
          <input type="submit" value='Enviar'/>
      </form>
    </div>
  );
};

export default Myform;
