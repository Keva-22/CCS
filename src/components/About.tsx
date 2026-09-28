import { about } from '../content';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="ueber-uns" className="section" aria-labelledby="ueber-uns-title">
      <div className="container">
        <h2 id="ueber-uns-title" className="section-title">
          {about.title}
        </h2>
        <p className="lead">{about.intro}</p>

        <div className={styles.values}>
          {about.values.map((value) => (
            <article key={value.title} className={styles.value}>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
