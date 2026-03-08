export default function Specials({ specialsData = [] }) {
  return (
    <section className="specials" aria-labelledby="specials-heading">
      <div className="page-inner">
        <header className="specials-header">
          <h2 id="specials-heading">This week’s specials!</h2>
          <button className="yellow-btn" type="button" aria-label="View full online menu">
            Online Menu
          </button>
        </header>

        <div className="cards-container">
          {specialsData.length > 0 ? (
            specialsData.map(item => (
              <article key={item.id} className="card" aria-labelledby={`card-title-${item.id}`}>
                <img
                  src={`/assets/${item.image}`}
                  alt={item.title}
                  className="card-image"
                />
                <div className="card-content">
                  <div className="card-title">
                    <h3 id={`card-title-${item.id}`}>{item.title}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                  <button className="delivery-btn" type="button" aria-label={`Order ${item.title} for delivery`}>
                    Order a delivery
                  </button>
                </div>
              </article>
            ))
          ) : (
            <p>No specials available.</p>
          )}
        </div>
      </div>
    </section>
  );
}