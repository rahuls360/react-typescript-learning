import React from 'react';
import Child from './components/Child';

class App extends React.Component{

  // constructor(props: User){
  //   super(props);
  // }

  render(){
    return (
      <div>
        <Child name="Mamu" age={123}/>
      </div>
    );
  }
}

export default App;
