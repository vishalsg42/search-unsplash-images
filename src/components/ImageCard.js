import React from 'react';
import './ImageList.css';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      spans: 0,
    }
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    // console.log();
    let height = this.imageRef.current.clientHeight;
    let spans = Math.ceil(height / 10);
 console.log("spans ", spans);
    this.setState({ spans });
  }

  render() {
    let { alt, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={alt} />
      </div>
    )
  }
}
export default ImageCard;
