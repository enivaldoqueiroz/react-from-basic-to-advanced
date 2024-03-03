import React from 'react'

const ShowUserName = (props) => {
    console.log(props);
    // Obter as chaves (propriedades) do objeto props
    const keys = Object.keys(props);
    // Contar o número de chaves
    const numAttributes = keys.length;
    console.log(numAttributes);

  return (
    <div>
      <h2>O nome do usuário: {props.name}</h2>
      <h2>O nome do usuário: {props.age}</h2>
    </div>
  )
}

export default ShowUserName
