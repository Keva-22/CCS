import { riders } from '../content';
import PlaceholderImage from './PlaceholderImage';
import styles from './Riders.module.css';

export default function Riders() {
  return (
    <section id="fahrer" className="section section--alt" aria-labelledby="fahrer-title">
      <div className="container">
        <h2 id="fahrer-title" className="section-title">
          {riders.title}
        </h2>

        <ul className={styles.grid}>
          {riders.list.map((rider, i) => (
            <li key={i} className={styles.card}>
              <PlaceholderImage
                src={rider.photo}
                alt={rider.name ? `Foto von ${rider.name}` : 'Fahrerfoto folgt'}
                className={styles.photo}
              />
              <div className={styles.body}>
                {rider.name ? (
                  <>
                    <h3 className={styles.name}>{rider.name}</h3>
                    {rider.info && <p className={styles.info}>{rider.info}</p>}
                  </>
                ) : (
                  <p className={styles.empty}>{riders.emptyLabel}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
