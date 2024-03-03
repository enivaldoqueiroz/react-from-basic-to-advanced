import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
      <h2>Detalhes do Pessoa</h2>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissão: {profissao}</li>
      </ul>
      { idade >=18 ? (
        <p>Pode tirar CNH</p>
      ) : (
        <p>Não pode tirar CNH</p>
      ) }
    </div>
  )
}

export default UserDetails
