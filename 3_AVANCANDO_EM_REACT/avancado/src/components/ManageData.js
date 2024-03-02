import React, { useState } from 'react'

const ManageData = () => {
    let someData = 10;
    //alert(someData);
    //console.log(someData);

    const [number, setNumber] = useState(15);
    console.log(number);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => {someData = 15}}>Mudar variável</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar valor</button>
      </div>
    </div>
  )
}

export default ManageData
