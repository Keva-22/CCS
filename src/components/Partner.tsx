import { links, partner } from '../content';
import styles from './Partner.module.css';

// Solange die URL noch ein Platzhalter ist, bekommt der Link kein Ziel.
const martinoUrl = links.martino.startsWith('http') ? links.martino : undefined;

export default function Partner() {
  return (
    <section id="partner" className="section" aria-labelledby="partner-title">
      <div className="container">
        <h2 id="partner-title" className="section-title">
          {partner.title}
        </h2>

        <div className={styles.card}>
          <h3 className={styles.name}>{partner.name}</h3>
          <div className={styles.body}>
            <p>{partner.text}</p>
            <a
              className="button"
              href={martinoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={martinoUrl ? undefined : 'Link folgt'}
            >
              {partner.buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
