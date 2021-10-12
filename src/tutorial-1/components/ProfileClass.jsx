import React, { Component } from 'react';

class ProfileClass extends Component {
  getName = () => {
    if (!this.props.name) {
      return 'Неверное имя';
    }
    return this.props.name.split(' ')[0];
  };

  calcDate = () => {
    if (!this.props.registredAt) {
      return 'Неверная дата';
    }
    return `
    ${this.props.registredAt.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
    })} 
    ${this.props.registredAt.getFullYear()}
    `;
  };

  render() {
    return (
      <div className="profile">
        <div>
          Привет, <b>{this.getName()}!</b>
        </div>
        <div>Дата регистрации: {this.calcDate()}</div>
      </div>
    );
  }
}

export default ProfileClass;
