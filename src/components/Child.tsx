import React from 'react';
import User from '../Interfaces';

class Child extends React.Component<User, {}> {

  render() {
    const { name, age } = this.props
    return (
      <h1>hello {name}. I know that you are {age} years old</h1>
    );
  }
}

export default Child;
