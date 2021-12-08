import React from "react";

import "./App.scss";

function App() {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://61afc3ac3e2aba0017c4907.mockapi.io/users"
      );
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(users);

  return (
    <div>
      <ul>
        {users.map((obj) => (
          <li key={obj.id}>
            {obj.id}. {obj.title}
          </li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
    </div>
  );
}

export default App;
