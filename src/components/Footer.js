export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="page-inner footer-inner">
        
        <section className="footer-col" aria-labelledby="footer-logo">
          <img
            src="/assets/Logo.png"
            alt="Little Lemon Restaurant Logo"
            style={{ width: '100px' }}
            id="footer-logo"
          />
        </section>

        <nav className="footer-col" aria-label="Doormat Navigation">
          <h3>Doormat Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/booking">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>

        <address className="footer-col" aria-label="Contact Information">
          <h3>Contact</h3>
          <ul>
            <li>123 Town St, Chicago</li>
            <li>Phone: <a href="tel:+13125550123">+1 (312) 555-0123</a></li>
            <li>Email: <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></li>
          </ul>
        </address>

        <nav className="footer-col" aria-label="Social Media Links">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}