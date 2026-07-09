import React from 'react';

class Faq extends React.Component {
  render() {
    return (
      <div className="container mt-4">
        <h2 className="text-secondary mb-4">Frequently Asked Questions (FAQs)</h2>
        
        <div className="mb-3">
          <h5 className="fw-bold">How many items of print books can I borrow from the library?</h5>
          <p className="text-muted">You can borrow up to 10 copies of print books per loan.</p>
        </div>
        
        <div className="mb-3">
          <h5 className="fw-bold">How long can I borrow the collections?</h5>
          <p className="text-muted">Our borrowing period is 10 days.</p>
        </div>
        
        <div className="mb-3">
          <h5 className="fw-bold">How many times can I renew the borrowed item(s)?</h5>
          <p className="text-muted">The borrowed item(s) can be renewed once, but when the item(s) is reserved by others, renewal is not allowed.</p>
        </div>
      </div>
    )
  }
}
export default Faq;