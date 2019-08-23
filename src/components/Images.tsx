import React from 'react';
import Axios from 'axios';

interface PhotosAPI {
  "albumId": number,
  "id": number,
  "title": string,
  "url": string,
  "thumbnailUrl": string
}

interface State {
  data: PhotosAPI[] | null
}

class Images extends React.Component<any,State> {

  constructor(props: any){
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount(){
    Axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(res => {
        const data = res.data.splice(0, 10);
        this.setState({ data });
      })
      .catch(err => {console.log(err)})
  }

  render() {
    const { data } = this.state
    return (
      <>
        {data && data.map(item => (
          <div>
            <p>
              <a href={item.url}>{item.title}</a>
            </p>
            <img src={item.thumbnailUrl} alt={`${item.id}`}/>
          </div>
        ))}
      </>
    );
  }
}

export default Images;
