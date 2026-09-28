import { gear, visible } from '../content';
import PlaceholderImage from './PlaceholderImage';
import styles from './Gear.module.css';

export default function Gear() {
  return (
    // Grauer Hintergrund, solange „Fahrer“ ausgeblendet ist (sonst zwei weiße Sektionen hintereinander)
    <section
      id="bikes-trikots"
      className={visible.riders ? 'section' : 'section section--alt'}
      aria-labelledby="bikes-trikots-title">
      <div className="container">
        <h2 id="bikes-trikots-title" className="section-title">
          {gear.title}
        </h2>
        <p className="lead">{gear.intro}</p>

        <div className={styles.grid}>
          {gear.items.map((item) => (
            <article key={item.title} className={styles.item}>
              <PlaceholderImage src={item.image.src} alt={item.image.alt} className={styles.image} />
              <h3 className={styles.title}>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
