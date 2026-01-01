// src/components/Footer.js
export default function Footer() {
  return (
    <footer>
      <div className="page-inner footer-inner">
        <div className="footer-col">
          <img src="/assets/Logo.png" alt="Little Lemon" style={{width: '100px'}} />
        </div>

        <div className="footer-col">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>Address: 123 Town St, Chicago</li>
            <li>Phone: +1 (312) 555-0123</li>
            <li>Email: contact@littlelemon.com</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}