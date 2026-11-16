import { useEffect, useRef, useState } from 'react';
import { gallery } from '../content';
import PlaceholderImage from './PlaceholderImage';
import styles from './Gallery.module.css';

export default function Gallery() {
  // Nummer des Fotos, das gerade groß angezeigt wird (null = keins)
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openImage = openIndex === null ? null : gallery.images[openIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (openIndex !== null && dialog && !dialog.open) dialog.showModal();
  }, [openIndex]);

  return (
    <section id="galerie" className="section section--alt" aria-labelledby="galerie-title">
      <div className="container">
        <h2 id="galerie-title" className="section-title">
          {gallery.title}
        </h2>

        <ul className={styles.grid}>
          {gallery.images.map((image, i) => (
            <li key={image.src}>
              <button
                type="button"
                className={styles.thumb}
                aria-label={`Foto vergrößern: ${image.alt}`}
                onClick={() => setOpenIndex(i)}
              >
                <PlaceholderImage src={image.src} alt={image.alt} className={styles.image} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Großansicht: schließt per Button, Escape-Taste oder Klick neben das Foto */}
      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        aria-label="Foto in Großansicht"
        onClose={() => setOpenIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        {openImage && (
          <PlaceholderImage key={openImage.src} src={openImage.src} alt={openImage.alt} className={styles.large} priority />
        )}
        <button
          type="button"
          className={styles.close}
          aria-label="Großansicht schließen"
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>
      </dialog>
    </section>
  );
}
