import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../style/CTAButton.module.css';

export default function CTAButton({ 
  children, 
  onClick,
  variant = 'primary'
}: { 
  readonly children: React.ReactNode; 
  readonly onClick: () => void;
  readonly variant?: 'primary' | 'secondary';
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button 
      className={`${styles.ctaButton} ${styles[variant]}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{
        boxShadow: isHovered 
          ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      <motion.span
        animate={{
          x: isHovered ? 5 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        {children}
      </motion.span>
      <motion.span
        className={styles.arrow}
        initial={{ opacity: 0, x: -10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : -10
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        →
      </motion.span>
    </motion.button>
  );
}
