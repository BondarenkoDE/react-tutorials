import React from "react";
import axios from "axios";

import "./App.scss";

function App() {
  const [login, setLogin] = React.useState("");
  const [user, setUser] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getData = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { data } = await axios.get(`https://api.github.com/users/${login}`);

      console.log("user: ", data);
      setLoading(false);
      setUser(data);
    } catch (error) {
      setLoading(false);
      alert(`Пользователь "${login}" не найден!`);
    }
  };

  console.log("user: ", user);

  return (
    <div className="app-container">
      <form className="app-form">
        <input
          type="text"
          className="app-input"
          placeholder="Укажите GitHub-аккаунт"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <button className="app-form_btn" onClick={getData} disabled={loading}>
          {loading ? "Загрузка..." : "Найти"}
        </button>
      </form>
      {Object.keys(user).length !== 0 && (
        <div className="app-user">
          <div className="app-user_info">
            <div className="app-user_image">
              <img src={user.avatar_url} alt="" />
            </div>
            <div className="app-user_data">
              <h1 className="app-user_name">
                {user.name}
                <span>@{user.login}</span>
              </h1>
              <p className="app-user_about">{user.bio}</p>
            </div>
          </div>
          <ul className="app-user_stats">
            <li className="app-user_stats-item">
              Репозитории
              <span>{user.public_repos}</span>
            </li>
            <li className="app-user_stats-item">
              Подписчиков
              <span>{user.followers}</span>
            </li>
            <li className="app-user_stats-item">
              Подписок
              <span> {user.following}</span>
            </li>
          </ul>
          <ul className="app-user_location">
            <li className="app-user_location-item">{user.location}</li>
            <li className="app-user_location-item">
              <a href={`${user.html_url}`}>{user.html_url}</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
