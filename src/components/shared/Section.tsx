import type { ReactNode } from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../../style/section.module.css';

export type SectionType = 'profile' | 'freelance' | 'professional' | 'certifications' | 'sampleworks' | 'abilities' | 'skills' | 'contact';

interface SectionProps {
  /** The type of section, determines background color and specific styling */
  readonly type: SectionType;
  /** The content to be rendered inside the section */
  readonly children: ReactNode;
  /** Optional additional class names */
  readonly className?: string;
}

/**
 * A reusable section component that provides consistent layout and styling
 * for all main sections of the resume. Includes:
 * - Full viewport height sections
 * - Centered content with max-width
 * - Background color based on section type
 */
export default function Section({ type, children, className }: SectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section 
      ref={sectionRef}
      className={`${styles.section} ${styles[type]} ${className || ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.inner}>
        {children}
      </div>
    </motion.section>
  );
}