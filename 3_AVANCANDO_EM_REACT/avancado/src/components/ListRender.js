import React, { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias"]);

  //Correção do Warning: Each child in a list should have a unique "key" prop.
  const [users] = useState([
    { id: 1, name: "Matheus", age: 31 },
    { id: 2, name: "Pedro", age: 31 },
    { id: 3, name: "Josias", age: 31 },
  ]);
  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user.id} - {user.name} - {user.age}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
