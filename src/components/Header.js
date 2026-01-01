import Nav from './Nav';

export default function Header() {
  return (
<header className="header">
  <div className="page-inner header-inner">
    <img src="/assets/Logo.png" className="logo" alt="logo" />
    <div className="nav-container">
      <Nav />   {/* Nav renders .menu-icon and .nav-links */}
    </div>
  </div>
</header>

  );
}