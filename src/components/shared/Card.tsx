import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from '../../style/Card.module.css';

interface CardProps {
  /** Main content of the card */
  readonly children: ReactNode;
  /** Optional header content */
  readonly header?: ReactNode;
  /** Optional variant for different card styles */
  readonly variant?: 'default' | 'compact';
  /** Optional additional class names */
  readonly className?: string;
  /** Optional hover animation settings */
  readonly animate?: boolean;
}

/**
 * A reusable card component that provides consistent styling across all sections.
 * Features:
 * - Consistent width and padding
 * - Optional header section
 * - Hover animations
 * - Support for different variants
 */
export default function Card({ 
  children, 
  header, 
  variant = 'default',
  className = '',
  animate = true 
}: CardProps) {
  const cardContent = (
    <>
      {header && (
        <div className={styles.header}>
          {header}
        </div>
      )}
      <div className={styles.content}>
        {children}
      </div>
    </>
  );

  if (animate) {
    return (
      <motion.div 
        className={`${styles.card} ${styles[variant]} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.2 }
        }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`}>
      {cardContent}
    </div>
  );
}