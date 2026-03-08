import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="menu-icon"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen(prev => !prev)}
        type="button"
      >
        <span className={`bar ${open ? 'open' : ''}`}></span>
        <span className={`bar ${open ? 'open' : ''}`}></span>
        <span className={`bar ${open ? 'open' : ''}`}></span>
      </button>

      <nav role="navigation" aria-label="Primary">
        <ul
          id="primary-navigation"
          className={`nav-links ${open ? 'active' : ''}`}
        >
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/menu" onClick={() => setOpen(false)}>Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/order" onClick={() => setOpen(false)}>Order Online</Link></li>
          <li><Link to="/login" onClick={() => setOpen(false)}>Login</Link></li>
        </ul>
      </nav>
    </>
  );
}