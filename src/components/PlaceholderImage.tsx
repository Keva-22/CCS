import { useState } from 'react';
import styles from './PlaceholderImage.module.css';

type Props = {
  src: string; // Pfad ab public/, z. B. 'images/hero.jpg'
  alt: string;
  className?: string;
};

// Zeigt das Bild aus public/. Fehlt die Datei, erscheint stattdessen ein
// grauer Platzhalter mit Beschreibung und erwartetem Dateinamen.
export default function PlaceholderImage({ src, alt, className = '' }: Props) {
  const [missing, setMissing] = useState(!src);

  if (missing) {
    return (
      <div className={`${styles.placeholder} ${className}`} role="img" aria-label={alt}>
        <span className={styles.label} aria-hidden="true">
          {alt}
          {src && <span className={styles.file}>{src.split('/').pop()}</span>}
        </span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={import.meta.env.BASE_URL + src}
      alt={alt}
      loading="lazy"
      onError={() => setMissing(true)}
    />
  );
}
