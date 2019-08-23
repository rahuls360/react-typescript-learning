import React from 'react';
import Child from './components/Child';
import Images from './components/Images';

class App extends React.Component{

  // constructor(props: User){
  //   super(props);
  // }

  render(){
    return (
      <div>
        <Child name="Mamu" age={123}/>
        <Images />
      </div>
    );
  }
}

export default App;
