export default function CustomersSay() {
  const testimonials = [
    { id: 1, name: 'Ava', text: 'Amazing food and cozy atmosphere.', stars: 5, image: '/assets/ava.jpg' },
    { id: 2, name: 'Liam', text: 'Best lemon dessert in town!', stars: 4, image: '/assets/liam.jpg' },
    { id: 3, name: 'Noah', text: 'Friendly staff and great flavors.', stars: 5, image: '/assets/noah.jpg' },
    { id: 4, name: 'Mia', text: 'A lovely spot for family dinners.', stars: 4, image: '/assets/mia.jpg' }
  ];

  return (
    <section className="customers-say" aria-labelledby="testimonials-heading">
      <div className="page-inner">
        <h2 id="testimonials-heading" className="section-title">Testimonials</h2>
        
        <div className="testimonials">
          {testimonials.map(t => (
            <article key={t.id} className="testimonial" aria-labelledby={`testimonial-${t.id}-name`}>
              
              {/* Stars */}
              <div className="testimonial-stars" aria-label={`${t.stars} out of 5 stars`}>
                <span className="stars" aria-hidden="true">{'★'.repeat(t.stars)}</span>
              </div>

              {/* Image + Name */}
              <header className="testimonial-header">
                <img src={t.image} alt={`Photo of ${t.name}`} className="testimonial-img" />
                <h3 id={`testimonial-${t.id}-name`} className="testimonial-name">{t.name}</h3>
              </header>

              {/* Review text */}
              <p className="testimonial-text">{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}