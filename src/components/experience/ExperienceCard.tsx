import Card from '../shared/Card';
import styles from '../../style/experience/experience-card.module.css';
import type { Experience } from './types';

type ExperienceCardProps = Experience;

export default function ExperienceCard({ title, company, location, date, details, projects }: Readonly<ExperienceCardProps>) {
  const header = (
    <>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.meta}>
        <span className={styles.company}>{company}</span>
        {location && <span className={styles.location}>• {location}</span>}
        <span className={styles.date}>• {date}</span>
      </div>
    </>
  );
  
  return (
    <Card header={header}>
      <div className={styles.content}>
        <ul className={styles.details}>
          {details.map((detail: string) => (
            <li key={detail.slice(0, 20)}>{detail}</li>
          ))}
        </ul>
        {projects && projects.length > 0 && (
          <div className={styles.projects}>
            <h4 className={styles.projectsTitle}>Selected Projects</h4>
            <ul className={styles.projectsList}>
              {projects.map((project: string) => (
                <li key={project.slice(0, 20)}>{project}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
}
