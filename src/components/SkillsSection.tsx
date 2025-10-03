import { FaTools, FaUserTie, FaStar } from "react-icons/fa";
import styles from "../style/SkillsSection.module.css";
import SectionTitle from "./SectionTitle";

interface SkillsSectionProps {
  technicalSkills: string[];
  coreVASkills: string[];
  personalSkills: string[];
}

export default function SkillsSection({
  technicalSkills,
  coreVASkills,
  personalSkills,
}: SkillsSectionProps) {
  return (
    <>
      <SectionTitle>Skills</SectionTitle>
      <section className={styles.skillsSection}>
        <div className={styles.skillsColumns}>
          <div className={styles.skillsCard}>
            <h3 className={styles.skillsSubtitle}>
              <FaTools className={styles.icon} /> Technical Skills
            </h3>
            <ul className={styles.skillsList}>
              {technicalSkills.map((skill) => (
                <li key={skill}>
                  <FaTools className={styles.iconBullet} /> {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.skillsCard}>
            <h3 className={styles.skillsSubtitle}>
              <FaUserTie className={styles.icon} /> Core VA Skills
            </h3>
            <ul className={styles.skillsList}>
              {coreVASkills.map((skill) => (
                <li key={skill}>
                  <FaUserTie className={styles.iconBullet} /> {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.skillsCard}>
            <h3 className={styles.skillsSubtitle}>
              <FaStar className={styles.icon} /> Personal Skills
            </h3>
            <ul className={styles.skillsList}>
              {personalSkills.map((skill) => (
                <li key={skill}>
                  <FaStar className={styles.iconBullet} /> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
