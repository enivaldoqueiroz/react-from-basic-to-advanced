import React from 'react'

const Challenge = () => {
    const a = 10;
    const b = 15;
    const soma = a + b;

    const handleSoma = () => {
        alert(`Soma de A + B = ${soma}`);
    }
  return (
    <div>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button onClick={handleSoma}>Clique para ver a soma</button>

    </div>
  )
}

export default Challenge
