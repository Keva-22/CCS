import { useEffect, useState } from 'react';
import { navigation, team } from '../content';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menü mit der Escape-Taste schließen
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#start" className={styles.brand} onClick={closeMenu} aria-label={`${team.name} – zum Seitenanfang`}>
          <span className={styles.brandShort}>{team.shortName}</span>
          <span className={styles.brandLong}>{team.name.replace(`${team.shortName} – `, '')}</span>
        </a>

        <button
          type="button"
          className={styles.burger}
          aria-expanded={menuOpen}
          aria-controls="hauptmenue"
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={styles.burgerIcon} aria-hidden="true" />
        </button>

        <nav id="hauptmenue" className={`${styles.nav} ${menuOpen ? styles.open : ''}`} aria-label="Hauptnavigation">
          <ul className={styles.list}>
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={styles.link} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
