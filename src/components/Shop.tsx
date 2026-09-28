import { links, shop } from '../content';
import PlaceholderImage from './PlaceholderImage';
import styles from './Shop.module.css';

export default function Shop() {
  return (
    <section id="shop" className="section section--alt" aria-labelledby="shop-title">
      <div className="container">
        <h2 id="shop-title" className="section-title">
          {shop.title}
        </h2>
        <p className="lead">{shop.intro}</p>

        {shop.products.map((product) => (
          <article key={product.name} className={styles.product}>
            <PlaceholderImage src={product.image.src} alt={product.image.alt} className={styles.image} />
            <div className={styles.body}>
              <h3 className={styles.name}>{product.name}</h3>
              <p className={styles.price}>{product.price}</p>
              <p>{product.description}</p>
              <p className={styles.howTo}>{shop.howToBuy}</p>
              <a className="button" href={links.instagram} target="_blank" rel="noopener noreferrer">
                {shop.buttonLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
