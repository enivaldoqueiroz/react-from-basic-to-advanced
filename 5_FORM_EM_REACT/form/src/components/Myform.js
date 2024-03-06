import React from "react";
import "./MyForm.css";
import { useState } from "react"

const Myform = () => {
  // 3 - Gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  }
  console.log(name);
  console.log(email);


  return (
    <div>
      {/* 60. Criando formulários */}
      <form>
        {/* 1 - Criação de form */}
        <div>
          <label htmlFor="name">Nome:</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Digite seu nome" 
            onChange={handleName}
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
          />
        </label>
          <input type="submit" value='Enviar'/>
      </form>
    </div>
  );
};

export default Myform;
