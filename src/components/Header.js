import Nav from './Nav';

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="page-inner header-inner">
        <img
          src="/assets/Logo.png"
          className="logo"
          alt="Little Lemon Restaurant Logo"
        />
        <Nav /> {/* Nav already renders .menu-icon and .nav-links */}
      </div>
    </header>
  );
}