import ExperienceCard from './ExperienceCard';
import SectionTitle from '../SectionTitle';
import styles from '../../style/experience/experience-list.module.css';
import type { Experience } from './types';

export default function ExperienceList({ title, experiences }: { readonly title: string; readonly experiences: Experience[] }) {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <div className={styles.timelineGrid}>
        {experiences.map((exp, idx) => (
          <div className={styles.timelineRow} key={exp.id}>
            {/* Date column */}
            <div className={styles.timelineDateCol}>
              <span className={styles.timelineDate}>{exp.date}</span>
            </div>
            {/* Line + circle column */}
            <div className={styles.timelineLineCol + (idx === experiences.length - 1 ? ' ' + styles.lastRow : '')}>
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
