import { footer, imprint, links, team, visible } from '../content';
import styles from './Footer.module.css';

// Solange die URL noch ein Platzhalter ist, bekommt der Link kein Ziel.
const martinoUrl = links.martino.startsWith('http') ? links.martino : undefined;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.motto}>{team.motto}</p>

        <ul className={styles.links}>
          <li>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">
              {footer.instagramLabel}
            </a>
          </li>
          <li>
            <a
              href={martinoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={martinoUrl ? undefined : 'Link folgt'}
            >
              {footer.martinoLabel}
            </a>
          </li>
        </ul>

        {visible.imprint && (
          <section id="impressum" className={styles.imprint} aria-labelledby="impressum-title">
            <h2 id="impressum-title" className={styles.imprintTitle}>
              {imprint.title}
            </h2>
            <p className={styles.imprintBasis}>{imprint.legalBasis}</p>
            <dl className={styles.imprintList}>
              {imprint.entries.map((entry) => (
                <div key={entry.label}>
                  <dt>{entry.label}</dt>
                  <dd>{entry.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <p className={styles.copyright}>{footer.copyright}</p>
      </div>
    </footer>
  );
}
