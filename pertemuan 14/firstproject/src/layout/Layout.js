import React from 'react';
import { Outlet, Link } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <main className='container'>
        <div className='row'>
          <header>
            <nav className='navbar navbar-expand-lg navbar-light mt-4 mb-4'>
              <a className='navbar-brand' href='/'>
                <img src="img/book-edu.png" alt="Logo" className="img-fluid" style={{ width: '25%' }} />
              </a>
              <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                <ul className='navbar-nav mr-auto'>
                  <li className='nav-item'>
                    <Link to="/" className='nav-link'>Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/about" className='nav-link'>About</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/guestbook" className='nav-link'>Guest Book</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/faq" className='nav-link'>FAQ</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
        <Outlet />
      </main>
    )
  }
}
export default Layout;