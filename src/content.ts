/* =====================================================================
   CCS – Cycling Collective Salzburg · ALLE INHALTE DER WEBSITE
   =====================================================================

   So änderst du Inhalte:
   • Ändere nur den Text zwischen den einfachen Anführungszeichen '…'.
     Brauchst du im Text selbst ein Apostroph, nimm ’ statt '.
   • Mit `npm run dev` siehst du jede Änderung sofort im Browser.

   Bilder:
   • Fotos in den Ordner  public/images/  legen.
   • Der Dateiname muss exakt so heißen wie hier angegeben (z. B. hero.jpg).
   • Fehlt ein Bild, zeigt die Seite automatisch einen grauen Platzhalter.
   • „alt“ = kurze Bildbeschreibung für Screenreader und Suchmaschinen.
     Wenn du ein echtes Foto einsetzt, beschreibe dort, was darauf zu sehen ist.

   OFFENE PLATZHALTER (alles in [eckigen Klammern] muss noch ersetzt werden):
   • [MARTINO_URL]         → Website von Martino Cycling    (siehe: links)
   • [PREIS]               → Preis der Trinkflasche         (siehe: shop)
   • [BIKE-MARKE / MODELL] → Infos zu den Teambikes         (siehe: gear)
   • [TRIKOT-DETAILS]      → Infos zur Teamkleidung         (siehe: gear)
   • Fahrer                → Namen, Kurzinfos, Fotos        (siehe: riders)
   • Impressum             → Name, Anschrift, E-Mail …      (siehe: imprint)
   • Entwurfstexte        → markiert mit  // TODO: Text prüfen
   ===================================================================== */

export type Rider = {
  name: string; // leer lassen → Karte zeigt „Fahrer folgt bald“
  info: string; // Kurzinfo, z. B. Lieblingsstrecke oder Rad
  photo: string; // Pfad ab public/, z. B. 'images/rider-1.jpg'
};

/* ---------- Team ---------- */
export const team = {
  name: 'CCS – Cycling Collective Salzburg',
  shortName: 'CCS',
  motto: 'Cycling. Community. Friendship.',
};

/* ---------- Links ---------- */
export const links = {
  instagram: 'https://www.instagram.com/ccs_salzburg/',
  // Solange hier ein Platzhalter steht, ist der Martino-Button nicht klickbar.
  martino: '[MARTINO_URL]',
};

/* ---------- Menü im Header ----------
   Nur „label“ ändern. „id“ verweist auf die Sektion und muss so bleiben. */
export const navigation = [
  { label: 'Über uns', id: 'ueber-uns' },
  { label: 'Fahrer', id: 'fahrer' },
  { label: 'Bikes & Trikots', id: 'bikes-trikots' },
  { label: 'Rennen', id: 'rennen' },
  { label: 'Shop', id: 'shop' },
  { label: 'Partner', id: 'partner' },
  { label: 'Galerie', id: 'galerie' },
];

/* ---------- 1. Hero ---------- */
export const hero = {
  logo: {
    src: 'images/logo.png',
    alt: 'Logo von CCS – Cycling Collective Salzburg',
  },
  background: {
    src: 'images/hero.jpg',
    alt: 'Fahrer von CCS auf dem Rennrad',
  },
};

/* ---------- 2. Über uns ---------- */
export const about = {
  title: 'Über uns',
  // TODO: Text prüfen
  intro:
    'CCS – Cycling Collective Salzburg ist ein Hobby-Radsportteam aus Salzburg. Was uns antreibt, steckt schon in unserem Motto:',
  values: [
    {
      title: 'Cycling.',
      // TODO: Text prüfen
      text: 'Im Mittelpunkt steht das Rennrad. Wir fahren, weil wir es lieben: gemeinsame Ausfahrten, lange Kilometer, steile Anstiege – mal locker, mal mit Tempo.',
    },
    {
      title: 'Community.',
      // TODO: Text prüfen
      text: 'CCS gibt es, weil Radfahren zusammen mehr Spaß macht. Wir wollen Menschen zusammenbringen, die dieselbe Leidenschaft teilen, und ein Team sein, in dem man sich gegenseitig motiviert.',
    },
    {
      title: 'Friendship.',
      // TODO: Text prüfen
      text: 'Aus gemeinsamen Kilometern werden Freundschaften. Unser Ziel: als Team zusammenwachsen, neue Strecken und Rennen gemeinsam erleben und das Collective Schritt für Schritt weiterentwickeln.',
    },
  ],
};

/* ---------- 3. Fahrer ----------
   Neuen Fahrer eintragen: Name und Kurzinfo in eine leere Karte schreiben
   und das Foto als rider-1.jpg, rider-2.jpg … in public/images/ legen.
   Weitere Fahrer: einfach eine Zeile { name: …, info: …, photo: … } ergänzen. */
export const riders: {
  title: string;
  emptyLabel: string;
  list: Rider[];
} = {
  title: 'Fahrer',
  emptyLabel: 'Fahrer folgt bald',
  list: [
    { name: '', info: '', photo: 'images/rider-1.jpg' },
    { name: '', info: '', photo: 'images/rider-2.jpg' },
    { name: '', info: '', photo: 'images/rider-3.jpg' },
    { name: '', info: '', photo: 'images/rider-4.jpg' },
    { name: '', info: '', photo: 'images/rider-5.jpg' },
    { name: '', info: '', photo: 'images/rider-6.jpg' },
  ],
};

/* ---------- 4. Bikes & Trikots ---------- */
export const gear = {
  title: 'Bikes & Trikots',
  // TODO: Text prüfen
  intro: 'Unser Material und unser Look – daran erkennt man CCS auf der Straße.',
  items: [
    {
      title: 'Teambikes',
      // TODO: Text prüfen
      text: 'Unsere Teambikes: [BIKE-MARKE / MODELL]. Hier stellen wir bald vor, womit wir unterwegs sind.',
      image: { src: 'images/bike-1.jpg', alt: 'Teambike von CCS' },
    },
    {
      title: 'Teamkleidung',
      // TODO: Text prüfen
      text: 'Unser Teamtrikot: [TRIKOT-DETAILS]. Gemeinsame Farben, ein gemeinsamer Auftritt – auf jeder Ausfahrt.',
      image: { src: 'images/jersey-1.jpg', alt: 'Teamtrikot von CCS' },
    },
  ],
};

/* ---------- 5. Rennen ---------- */
export const races = {
  title: 'Rennen',
  // TODO: Text prüfen
  text: 'Einige unserer Fahrer bestreiten ab und zu Hobbyrennen. Dort kannst du uns im CCS-Teamtrikot sehen – halt Ausschau nach uns und feuer uns an!',
};

/* ---------- 6. Shop ----------
   Kein Online-Shop: Bestellungen laufen über eine Nachricht auf Instagram. */
export const shop = {
  title: 'Shop',
  // TODO: Text prüfen
  intro: 'Ein Stück CCS für jede Ausfahrt.',
  products: [
    {
      name: 'CCS Team-Trinkflasche',
      // TODO: Text prüfen
      description: 'Die Trinkflasche im Look von CCS – für dich oder als Geschenk für deine Radsport-Freunde.',
      price: '[PREIS]',
      image: { src: 'images/bottle-1.jpg', alt: 'Team-Trinkflasche von CCS' },
    },
  ],
  howToBuy: 'So bestellst du: Schreib uns eine Nachricht auf Instagram.',
  buttonLabel: 'Schreib uns auf Instagram',
};

/* ---------- 7. Partner ---------- */
export const partner = {
  title: 'Partner',
  name: 'Martino Cycling',
  // TODO: Text prüfen
  text: 'Martino Cycling ist Marke und Teamwerkstatt von CCS und eng mit dem Team verbunden. Hier werden unsere Räder betreut, damit wir sorgenfrei unterwegs sind.',
  buttonLabel: 'Zur Website von Martino Cycling',
};

/* ---------- 8. Galerie ---------- */
export const gallery = {
  title: 'Galerie',
  images: [
    { src: 'images/gallery-1.jpg', alt: 'Galerie-Foto 1' },
    { src: 'images/gallery-2.jpg', alt: 'Galerie-Foto 2' },
    { src: 'images/gallery-3.jpg', alt: 'Galerie-Foto 3' },
    { src: 'images/gallery-4.jpg', alt: 'Galerie-Foto 4' },
    { src: 'images/gallery-5.jpg', alt: 'Galerie-Foto 5' },
    { src: 'images/gallery-6.jpg', alt: 'Galerie-Foto 6' },
  ],
};

/* ---------- Impressum (steht im Footer) ----------
   Pflichtangaben für Websites in Österreich. Welche Zeilen nötig sind, hängt davon ab,
   ob CCS ein eingetragener Verein ist: Wenn nicht, die Zeilen „ZVR-Zahl“ und
   „Vertretungsbefugt“ einfach komplett löschen (die ganze Zeile { … },). */
export const imprint = {
  title: 'Impressum',
  legalBasis: 'Informationen und Offenlegung gemäß § 5 ECG und § 25 MedienG',
  entries: [
    { label: 'Medieninhaber & Herausgeber', value: '[NAME ODER VEREINSNAME]' },
    { label: 'Anschrift', value: '[STRASSE HAUSNUMMER], [PLZ] [ORT], Österreich' },
    { label: 'E-Mail', value: '[E-MAIL-ADRESSE]' },
    { label: 'ZVR-Zahl', value: '[ZVR-ZAHL]' },
    { label: 'Vertretungsbefugt', value: '[NAME, FUNKTION]' },
    // TODO: Text prüfen
    { label: 'Inhalt der Website', value: 'Informationen über das Hobby-Radsportteam CCS – Cycling Collective Salzburg.' },
  ],
};

/* ---------- 9. Footer ---------- */
export const footer = {
  instagramLabel: 'Instagram',
  martinoLabel: 'Martino Cycling',
  copyright: '© CCS – Cycling Collective Salzburg',
};
