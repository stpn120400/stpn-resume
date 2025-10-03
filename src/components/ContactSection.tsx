import Card from './shared/Card';
import styles from '../style/ContactSection.module.css';
import SectionTitle from './SectionTitle';
import profile from '../data/profile.json';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <>
      <SectionTitle>Contact Information</SectionTitle>
      <div className={styles.contactDecorWrap}>
        <div className={styles.contactDecorTop}></div>
        <Card variant="default">
          <ul className={styles.contactList}>
            <li><FaEnvelope className={styles.icon} /> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><FaPhoneAlt className={styles.icon} /> {profile.phone}</li>
            <li><FaMapMarkerAlt className={styles.icon} /> {profile.address}</li>
          </ul>
        </Card>
        <div className={styles.contactDecorBottom}></div>
      </div>
    </>
  );
}
