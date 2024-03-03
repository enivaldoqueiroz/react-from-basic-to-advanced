import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Jose");

  return (
    <div>
      <h1>IF SIMPLES</h1>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é false!</p>}
      <h1>IF TERNARIO</h1>
      {name === "João" ? (
      <div>
        <p>O nome é João</p>
      </div>
      ) : (
      <div>
        <p>O nome não encontrado</p>
      </div>
      ) }

      <button onClick={() => setName("João")}>Mudar nome</button>
    </div>
  )
}

export default ConditionalRender
