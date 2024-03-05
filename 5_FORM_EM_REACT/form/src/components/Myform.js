import React from "react";
import "./MyForm.css";

const Myform = () => {
  return (
    <div>
      {/* 60. Criando formulários */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome" />
          <input type="submit" value='Enviar'/>
        </div>
      </form>
    </div>
  );
};

export default Myform;
