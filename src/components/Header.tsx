import { useEffect, useState } from 'react';
import { logo, navigation, team, visible } from '../content';
import PlaceholderImage from './PlaceholderImage';
import styles from './Header.module.css';

// Menüpunkte ausgeblendeter Sektionen weglassen
const hiddenIds = [!visible.riders && 'fahrer', !visible.shop && 'shop'];
const menuItems = navigation.filter((item) => !hiddenIds.includes(item.id));

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Sektion, die gerade im Bild ist → ihr Menüpunkt wird hervorgehoben
  const [activeId, setActiveId] = useState('');

  // Menü mit der Escape-Taste schließen
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  // Aktive Sektion: die unterste, deren Oberkante schon im oberen Fünftel des Bildschirms liegt.
  // Am Seitenende ist es immer die letzte (sie kommt auf großen Bildschirmen nie so weit nach oben).
  useEffect(() => {
    const sections = [...document.querySelectorAll('main > section')];
    const update = () => {
      const line = window.innerHeight * 0.2;
      const atPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const reached = sections.filter((section) => section.getBoundingClientRect().top <= line);
      const current = atPageEnd ? sections[sections.length - 1] : reached[reached.length - 1];
      setActiveId(current?.id ?? '');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#start" className={styles.brand} onClick={closeMenu} aria-label={`${team.name} – zum Seitenanfang`}>
          <PlaceholderImage src={logo.src} alt={logo.alt} className={styles.logo} priority />
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

        {/* Abgedunkelte Fläche unter dem offenen Menü: Antippen schließt das Menü */}
        {menuOpen && <div className={styles.backdrop} onClick={closeMenu} />}

        <nav id="hauptmenue" className={`${styles.nav} ${menuOpen ? styles.open : ''}`} aria-label="Hauptnavigation">
          <ul className={styles.list}>
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={styles.link}
                  aria-current={activeId === item.id ? 'true' : undefined}
                  onClick={closeMenu}
                >
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
