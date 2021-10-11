import React from 'react';

const ProfileFunc = ({ name, registredAt }) => {
  const getName = () => {
    return name.split(' ')[0];
  };

  const calcDate = () => {
    return `
    ${registredAt.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
    })} 
    ${registredAt.getFullYear()}
    `;
  };

  return (
    <div className="profile">
      <div>
        Привет, <b>{getName()}!</b>
      </div>
      <div>Дата регистрации: {calcDate()}</div>
    </div>
  );
};

export default ProfileFunc;
