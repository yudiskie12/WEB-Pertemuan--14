import React from 'react';

class GuestBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestName: '',
      guests: []
    };
  }

  handleInputChange = (event) => {
    this.setState({ guestName: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.guestName.trim() !== '') {
      const currentTime = new Date().toLocaleString();
      const newGuest = { name: this.state.guestName, time: currentTime };
      
      this.setState((prevState) => ({
        guests: [...prevState.guests, newGuest],
        guestName: '' 
      }));
    }
  }

  render() {
    return (
      <div className="container mt-4">
        <h2 className="mb-4 text-secondary">Guest Book</h2>
        <form onSubmit={this.handleSubmit} className="d-flex mb-4">
          <input 
            type="text" 
            className="form-control me-2" 
            placeholder="Guest's Name" 
            value={this.state.guestName}
            onChange={this.handleInputChange}
          />
          <button type="submit" className="btn btn-success">Submit</button>
        </form>

        <ul className="list-group list-group-flush">
          {this.state.guests.map((guest, index) => (
            <li key={index} className="list-group-item d-flex align-items-center">
              <span className="badge bg-info text-dark me-3">{guest.time}</span> 
              {guest.name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default GuestBook;