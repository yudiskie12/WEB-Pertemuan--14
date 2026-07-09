import React from "react";
import { FaBookmark, FaRegBookmark, FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";

class CatalogItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      image: this.props.book[0],
      title: this.props.book[1],
      author: this.props.book[2],
      publisher: this.props.book[3],
      year: this.props.book[4],
      bookmark: false,
      likes: Math.floor(Math.random() * 11), 
      isLiked: false 
    };
    
    this.check_bookmark = this.check_bookmark.bind(this);
    this.handle_like = this.handle_like.bind(this); 
  }

  check_bookmark() {
    this.setState({ bookmark: !this.state.bookmark });
  }

  handle_like() {
    this.setState((prevState) => ({
      isLiked: !prevState.isLiked,
      likes: prevState.isLiked ? prevState.likes - 1 : prevState.likes + 1
    }));
  }

  render() {
    return (
      <div className="card text-center">
        <div className="card-body">
          <img
            src={`img/${this.state.image}`}
            alt={this.state.title}
            width="150px"
            height="200px"
            style={{ marginBottom: "10px" }}
          />
          <h5 className="card-title title">{this.state.title}</h5>
          <p className="card-text author">{this.state.author}</p>
          <p className="card-text text-muted publisher">
            {this.state.publisher} <small className="year">{this.state.year}</small>
          </p>
        </div>
        
        <div className="card-footer text-muted d-flex justify-content-between align-items-center">
          <div className="text-start" onClick={this.handle_like} style={{ cursor: 'pointer' }}>
            {this.state.isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />} {this.state.likes} like(s)
          </div>

          <div className="text-end d-flex align-items-center gap-2">
            <span>{this.state.bookmark ? "Bookmark!" : ""}</span>
            <span onClick={this.check_bookmark} style={{ cursor: 'pointer' }}>
              {this.state.bookmark ? <FaBookmark /> : <FaRegBookmark />}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default CatalogItem;