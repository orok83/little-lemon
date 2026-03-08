export default function Chicago() {
  return (
    <section className="chicago" aria-labelledby="chicago-heading">
      <div className="page-inner chicago-inner">
        
        <article className="chicago-text">
          <h2 id="chicago-heading" className="section-title">Little Lemon</h2>
          <h3 className="section-sub">Chicago</h3>
          <p className="lead">
            Little Lemon is a family-run Mediterranean restaurant in Chicago, known for its warm hospitality and inviting atmosphere. Every plate is crafted with care, using the freshest ingredients sourced from local farms and trusted suppliers. Our goal is to bring people together around the table, offering not just a meal but a memorable experience that celebrates the heart of Mediterranean culture.
          </p>
        </article>

        <figure className="chicago-images">
          <img
            src="/assets/restaurant.jpg"
            alt="Interior view of Little Lemon restaurant"
            className="overlap-img img-b"
          />
          <img
            src="/assets/restaurant chef B.jpg"
            alt="Chef preparing Mediterranean food"
            className="overlap-img img-a"
          />
          <figcaption className="visually-hidden">
            Scenes from Little Lemon restaurant and kitchen
          </figcaption>
        </figure>
        
      </div>
    </section>
  );
}