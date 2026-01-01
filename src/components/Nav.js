import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="menu-icon"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
        type="button"
      >
        <span className={`bar ${open ? 'open' : ''}`}></span>
        <span className={`bar ${open ? 'open' : ''}`}></span>
        <span className={`bar ${open ? 'open' : ''}`}></span>
      </button>

      <nav>
        <ul className={`nav-links ${open ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </>
  );
}