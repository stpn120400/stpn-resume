import styles from '../style/theme.module.css';
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <button 
        className={styles.backToTop} 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <FaArrowUp className={styles.arrowIcon} />
        Back to Top
      </button>
      <div className={styles.footer}>
        <div className={styles.socialLinks}>
          <a href="https://linkedin.com/in/stephen-rey-agustinez-8b86041b3" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            LinkedIn
          </a>
          <a href="https://www.facebook.com/stephen.agustinez" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            Facebook
          </a>
          <a href="https://dribbble.com/stephen-rey-agustinez" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            Dribbble
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} STPN. All rights reserved.</p>
      </div>
    </footer>
  );
}
