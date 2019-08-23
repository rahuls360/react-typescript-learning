import React from 'react';
import Axios from 'axios';
// import User from '../Interfaces';

interface PhotosAPI {
  "albumId": number,
  "id": number,
  "title": string,
  "url": string,
  "thumbnailUrl": string
}

class Images extends React.Component<any,any> {

  constructor(props: any){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    // Axios.get("https://jsonplaceholder.typicode.com/photos")
    //   .then(res => {
    //     console.log(res);
    //     const data = res.data.splice(0, 10);
    //     this.setState({ data });
    //   })
    //   .catch(err => {console.log(err)})
  }

  render() {
    // const { name, age } = this.props
    return (
      <h1>hello </h1>
    );
  }
}

export default Images;
