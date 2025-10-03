import styles from '../style/ProfileSection.module.css';
import profile from '../data/profile.json';

export default function ProfileSection() {
  return (
    <section className={styles.profileSection}>
      <div className={styles.profileGrid}>
        <div className={styles.profileLabel}>Brief Bio</div>
        <div className={styles.profileSummary}>
          {profile.careerObjective.split('\n').map((paragraph) => (
            <p key={paragraph.substring(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className={styles.profileGrid}>
        <div className={styles.profileLabel}>Education</div>
        <div className={styles.profileSummary}>
          {profile.education.map((ed) => (
            <div key={ed.degree} className={styles.educationItem}>
              • {ed.degree} ({ed.years})
              <div className={styles.school}>{ed.school}</div>
              <div className={styles.school}>{ed.address}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}