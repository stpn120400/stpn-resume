import { motion } from 'framer-motion';
import styles from '../style/Hero.module.css';

export default function Hero({ onCTAClick }: { readonly onCTAClick: () => void }) {
  return (
    <motion.section 
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.content}>
        <motion.div 
          className={styles.mainContent}
        >
          <h1 className={styles.name}>
            <motion.span 
              className={styles.greeting}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hi, I'm
            </motion.span>
            <motion.span 
              className={styles.mainName}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {'</STPN.>'}
            </motion.span>
          </h1>
          <motion.div 
            className={`${styles.tagline} ${styles.inlineTagline} ${styles.noWrap}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <span className={`${styles.title} ${styles.inlineTitle}`}>A Software Engineer</span>
            <span className={`${styles.divider} ${styles.inlineDivider}`}> / </span>
            <span className={`${styles.title} ${styles.inlineTitle}`}>Virtual Assistant.</span>
          </motion.div>
          <motion.p 
            className={`${styles.tagline} ${styles.noGap}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
           {'{'}  Code that empowers. Support that elevates. {'}'}
          </motion.p>
        </motion.div>
        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.button 
            className={styles.cta} 
            onClick={onCTAClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>See More Details</span>
          </motion.button>
          <motion.div 
            className={styles.scrollCue}
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className={styles.line} />
            <span className={styles.text}>Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}