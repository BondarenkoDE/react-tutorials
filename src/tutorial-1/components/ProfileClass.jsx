import React, { Component } from 'react';

class ProfileClass extends Component {
  constructor(props) {
    super(props);
    this.getName = this.getName.bind(this);
    this.calcDate = this.calcDate.bind(this);
  }

  getName = () => {
    return this.props.name.split(' ')[0];
  };

  calcDate = () => {
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
