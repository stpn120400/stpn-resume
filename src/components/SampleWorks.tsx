import { useState } from "react";
import styles from "../style/SampleWorks.module.css";

import SectionTitle from "./SectionTitle";

const base = import.meta.env.BASE_URL;
const vectorArts = [
  `${base}assets/vector_arts/VA_1.jpg`,
  `${base}assets/vector_arts/VA_2.jpg`,
  `${base}assets/vector_arts/VA_3.jpg`,
  `${base}assets/vector_arts/VA_4.jpg`,
  `${base}assets/vector_arts/VA_5.jpg`,
  `${base}assets/vector_arts/VA_6.jpg`,
  `${base}assets/vector_arts/VA_7.jpg`,
  `${base}assets/vector_arts/VA_8.jpg`,
  `${base}assets/vector_arts/VA_9.jpg`,
  `${base}assets/vector_arts/VA_10.jpg`,
  `${base}assets/vector_arts/VA_11.jpg`,
];

export default function SampleWorks() {
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const total = vectorArts.length;

  const animDuration = 400;
  const [current, setCurrent] = useState(0);

  const handleNav = (dir: 'next' | 'prev') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) =>
        dir === 'next' ? (c + 1) % total : (c - 1 + total) % total
      );
      setAnimating(false);
      setDirection(null);
    }, animDuration);
  };
  const next = () => handleNav('next');
  const prev = () => handleNav('prev');

  return (
    <>
      <SectionTitle>Sample Works</SectionTitle>
      <div>
        <h3 className={styles.sampleWorksTitle}>VECTOR ARTS</h3>
        <div className={styles.carousel} aria-label="Vector art carousel">
          <div
            className={[
              styles.carouselTrack,
              animating && direction === 'next' && styles.animatingNext,
              animating && direction === 'prev' && styles.animatingPrev,
              animating && styles.carouselDisabled
            ].filter(Boolean).join(' ')}
          >
            <button
              className={styles.sideImageBtn}
              onClick={prev}
              aria-label="Previous image"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") prev();
              }}
            >
              <img
                src={vectorArts[(current - 1 + total) % total]}
                alt="Previous preview"
                className={`${styles.sideImage} ${styles.blurred}`}
                aria-hidden="true"
              />
            </button>
            <img
              src={vectorArts[current]}
              alt={`Vector Art ${current + 1}`}
              className={styles.mainImage}
            />
            <button
              className={styles.sideImageBtn}
              onClick={next}
              aria-label="Next image"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") next();
              }}
            >
              <img
                src={vectorArts[(current + 1) % total]}
                alt="Next preview"
                className={`${styles.sideImage} ${styles.blurred}`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
        {/* Navigation dots */}
        <div className={styles.dots} aria-label="Carousel navigation dots">
          {vectorArts.map((art, idx) => (
            <button
              key={art}
              className={idx === current ? styles.activeDot : styles.dot}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to image ${idx + 1}`}
              aria-current={idx === current ? "true" : undefined}
              tabIndex={0}
            />
          ))}
        </div>
      </div>
      {/*<div className={styles.githubProjects}>
        <h3 className={styles.sampleWorksTitle}>GitHub Projects</h3>
        <ul>
          <li>
            <a
              href="https://github.com/your-username/project1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project 1
            </a>
          </li>
          <li>
            <a
              href="https://github.com/your-username/project2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project 2
            </a>
          </li>
        </ul>
      </div>*/}
    </>
  );
}
