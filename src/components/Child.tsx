import React from 'react';
import { Lifter, Developer} from '../Interfaces';

class Child extends React.Component<Lifter, {}> {

  getDeveloperDetails = () => {
    const details: Developer = {
      name: "Rahul",
      stack: ["React", "JSON"],
      details: {
        exercise: true
      }
    }
    return (
      <>
        <p>{details.name}</p>
        <p>{details.stack.join(", ")}</p>
      </>
    );
  }

  render() {
    const { name, age } = this.props
    return (
      <>
        <h1>hello {name}. I know that you are {age} years old</h1>
        {this.getDeveloperDetails()}
      </>
    );
  }
}

export default Child;
