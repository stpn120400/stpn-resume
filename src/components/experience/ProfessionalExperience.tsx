import ExperienceCard from './ExperienceCard';
import SectionTitle from '../SectionTitle';
import styles from '../../style/experience/experience-list.module.css';
import type { Experience } from './types';

interface ProfessionalExperienceProps {
  readonly roles: Experience[];
}

export default function ProfessionalExperience({ roles }: ProfessionalExperienceProps) {
  return (
    <>
      <SectionTitle>Professional Experience</SectionTitle>
      <div className={styles.timelineGrid}>
        {roles.map((exp, idx) => (
          <div className={styles.timelineRow} key={exp.id}>
            {/* Date column */}
            <div className={styles.timelineDateCol}>
              <span className={styles.timelineDate}>{exp.date}</span>
            </div>
            {/* Line + circle column */}
            <div className={styles.timelineLineCol + (idx === roles.length - 1 ? ' ' + styles.lastRow : '')}>
              <div className={styles.timelineLine} />
              <span className={styles.timelineCircle} />
            </div>
            {/* Card column */}
            <div className={styles.timelineCardCol}>
              <ExperienceCard {...exp} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}