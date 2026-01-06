export default function CallToAction() {
  return (
    <section className="hero">
      <div className="page-inner hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-sub">Chicago</h2>
          <p className="hero-desc">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button className="yellow-btn">Reserve a Table</button>
        </div>

        <div className="hero-image-wrap">
          <img src="/assets/restauranfood.jpg" alt="Chef serving food" className="hero-image" />
        </div>
      </div>
    </section>
  );
}