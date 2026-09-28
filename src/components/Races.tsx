import { races } from '../content';
import styles from './Races.module.css';

export default function Races() {
  return (
    <section id="rennen" className={`section ${styles.races}`} aria-labelledby="rennen-title">
      <div className={`container ${styles.inner}`}>
        <h2 id="rennen-title" className="section-title">
          {races.title}
        </h2>
        <p className={styles.text}>{races.text}</p>
      </div>
    </section>
  );
}
