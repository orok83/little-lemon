const specialsData = [
  {
    id: 1,
    title: "Greek Salad",
    price: "$12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.",
    image: "greek_salad.jpg"
  },
  {
    id: 2,
    title: "Bruchetta",
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt.",
    image: "bruchetta.svg"
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: "$5.00",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced.",
    image: "lemon_dessert.jpg"
  }
];

function Main() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 style={{color: '#F4CE14'}}>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className="yellow-btn">Reserve a Table</button>
        </div>
        <img src="./assets/restauranfood.jpg" alt="Chef serving food" />
      </section>

      {/* Specials Section */}
      <section className="specials">
        <div className="specials-header">
          <h2>This weeks specials!</h2>
          <button className="yellow-btn">Online Menu</button>
        </div>

        <div className="cards-container">
          {specialsData.map((item) => (
            <article key={item.id} className="card">
              <img src={`./assets/${item.image}`} alt={item.title} className="card-image" />
              <div className="card-content">
                <div className="card-title">
                  <h3>{item.title}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.description}</p>
                <button className="delivery-btn">Order a delivery 
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M280-200q-50 0-85-35t-35-85H80v-120q0-66 47-113t113-47h160v200h140l140-174v-106H560v-80h120q33 0 56.5 23.5T760-680v134L580-320H400q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T320-320h-80q0 17 11.5 28.5T280-280Zm-80-360v-80h200v80H200Zm560 440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T800-320q0-17-11.5-28.5T760-360q-17 0-28.5 11.5T720-320q0 17 11.5 28.5T760-280Z"/></svg>
                    </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;