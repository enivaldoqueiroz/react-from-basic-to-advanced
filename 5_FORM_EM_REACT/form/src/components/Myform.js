import React from "react";
import "./MyForm.css";

const Myform = () => {
  return (
    <div>
      {/* 60. Criando formulários */}
      <form>
        {/* 1 - Criação de form */}
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome" />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail</span>
          <input type="email" name="email" placeholder="Digite o seu e-mail"/>
        </label>
          <input type="submit" value='Enviar'/>
      </form>
    </div>
  );
};

export default Myform;
