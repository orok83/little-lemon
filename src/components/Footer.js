function Footer() {
  return (
    <footer>
      <img src="./assets/Logo.png" alt="Little Lemon" style={{width: '100px'}} />
      
      <section>
        <h3>Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
        </ul>
      </section>

      <section>
        <h3>Contact</h3>
        <ul>
          <li>Address: 123 Town St, Chicago</li>
          <li>Phone: +1 (312) 555-0123</li>
          <li>Email: contact@littlelemon.com</li>
        </ul>
      </section>

      <section>
        <h3>Social Media</h3>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;