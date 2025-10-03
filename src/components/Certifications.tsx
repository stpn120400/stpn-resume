import Card from './shared/Card';
import styles from '../style/Certifications.module.css';
import SectionTitle from './SectionTitle';

export default function Certifications({ certifications }: { readonly certifications: string[] }) {
  return (
    <>
      <SectionTitle>Certifications & Training</SectionTitle>
      <Card variant="default">
        <ul className={styles.certList}>
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </Card>
    </>
  );
}
