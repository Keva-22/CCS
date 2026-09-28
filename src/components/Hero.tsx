import { hero, team } from '../content';
import PlaceholderImage from './PlaceholderImage';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="start" className={styles.hero} aria-labelledby="hero-title">
      <PlaceholderImage src={hero.background.src} alt={hero.background.alt} className={styles.bg} />

      <div className={`container ${styles.content}`}>
        <PlaceholderImage src={hero.logo.src} alt={hero.logo.alt} className={styles.logo} />
        <h1 id="hero-title" className={styles.title}>
          {team.name}
        </h1>
        <p className={styles.motto}>
          {/* Punkte im Motto in Akzentfarbe */}
          {team.motto.split(/(\.)/).map((part, i) =>
            part === '.' ? (
              <span key={i} className={styles.dot}>
                .
              </span>
            ) : (
              part
            ),
          )}
        </p>
      </div>
    </section>
  );
}
