export default function CustomersSay() {
  const testimonials = [
    { id: 1, name: 'Ava', text: 'Amazing food and cozy atmosphere.', stars: 5, image: '/assets/ava.jpg' },
    { id: 2, name: 'Liam', text: 'Best lemon dessert in town!', stars: 4, image: '/assets/liam.jpg' },
    { id: 3, name: 'Noah', text: 'Friendly staff and great flavors.', stars: 5, image: '/assets/noah.jpg' },
    { id: 4, name: 'Mia', text: 'A lovely spot for family dinners.', stars: 4, image: '/assets/mia.jpg' }
  ];

  return (
    <section className="customers-say">
      <div className="page-inner">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials">
          {testimonials.map(t => (
<div key={t.id} className="testimonial">
  {/* First line: stars left */}
  <div className="testimonial-stars">
    <div className="stars">{'★'.repeat(t.stars)}</div>
  </div>

  {/* Second line: image left, name centered */}
  <div className="testimonial-header">
    <img src={t.image} alt={t.name} className="testimonial-img" />
    <span className="testimonial-name">{t.name}</span>
  </div>

  {/* Third line: review text */}
  <p className="testimonial-text">{t.text}</p>
</div>

          ))}
        </div>
      </div>
    </section>
  );
}