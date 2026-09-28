import { gallery } from '../content';
import PlaceholderImage from './PlaceholderImage';
import styles from './Gallery.module.css';

export default function Gallery() {
  return (
    <section id="galerie" className="section section--alt" aria-labelledby="galerie-title">
      <div className="container">
        <h2 id="galerie-title" className="section-title">
          {gallery.title}
        </h2>

        <ul className={styles.grid}>
          {gallery.images.map((image) => (
            <li key={image.src}>
              <PlaceholderImage src={image.src} alt={image.alt} className={styles.image} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
