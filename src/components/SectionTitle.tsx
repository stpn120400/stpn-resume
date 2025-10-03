import { useEffect, useRef } from 'react';
import styles from '../style/SectionTitle.module.css';

interface SectionTitleProps {
  readonly children: React.ReactNode;
  readonly align?: 'left' | 'center';
}

export default function SectionTitle({ children, align = 'left' }: SectionTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = titleRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className={`${styles.titleWrapper} ${align === 'center' ? styles.center : ''}`}>
      <h2 ref={titleRef} className={styles.sectionTitle}>
        {children}
      </h2>
    </div>
  );
}
