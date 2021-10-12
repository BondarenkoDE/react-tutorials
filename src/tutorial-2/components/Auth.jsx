import React from 'react';

const Auth = () => {
  let email = '';
  let password = '';

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      email = e.target.value;
    } else {
      password = e.target.value;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() && !password.trim()) {
      alert(`Введите почту и пароль`);
      return;
    }
    if (!email.trim()) {
      alert(`Введите E-mail`);
      return;
    }
    if (!password.trim()) {
      alert(`Введите пароль`);
      return;
    }

    console.log({
      email,
      password,
    });

    e.target.reset();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="email" onChange={handleChange} name="email" placeholder="E-Mail" />
        <input type="password" onChange={handleChange} name="password" placeholder="Пароль" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Auth;
