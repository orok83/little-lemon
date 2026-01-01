// src/components/Main.js
const specialsData = [
  { id: 1, title: "Greek Salad", price: "$12.99", description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.", image: "greek_salad.jpg" },
  { id: 2, title: "Bruschetta", price: "$5.89", description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.", image: "bruchetta.svg" },
  { id: 3, title: "Lemon Dessert", price: "$5.00", description: "This comes straight from grandma's recipe book, every last ingredient has been sourced.", image: "lemon_dessert.jpg" }
];

export default function Main() {
  return (
    <main>
      <section className="hero">
        <div className="page-inner hero-inner">
          <div className="hero-content">
            <h1 className="hero-title">Little Lemon</h1>
            <h2 className="hero-sub">Chicago</h2>
            <p className="hero-desc">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className="yellow-btn">Reserve a Table</button>
          </div>

          <div className="hero-image-wrap">
            <img src="/assets/restauranfood.jpg" alt="Chef serving food" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="specials">
        <div className="page-inner">
          <div className="specials-header">
            <h2>This weeks specials!</h2>
            <button className="yellow-btn">Online Menu</button>
          </div>

          <div className="cards-container">
            {specialsData.map(item => (
              <article key={item.id} className="card">
                <img src={`/assets/${item.image}`} alt={item.title} className="card-image" />
                <div className="card-content">
                  <div className="card-title">
                    <h3>{item.title}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                  <button className="delivery-btn">Order a delivery
                    {/* svg icon inline if needed */}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}