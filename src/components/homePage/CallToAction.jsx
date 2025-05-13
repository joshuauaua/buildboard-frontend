import styles from './CallToAction.module.css';

function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.heading}>Redo att komma igång?</h2>
      <p className={styles.subtext}>Skapa ett konto och börja planera smartare med ditt team idag.</p>
      <button className={styles.ctaButton}>Skapa konto</button>
    </section>
  );
}

export default CallToAction;