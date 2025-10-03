import styles from "../style/Abilities.module.css";
import SectionTitle from "./SectionTitle";
import { useEffect, useState } from "react";

type Skill = { name: string; level: number };

export default function Abilities() {
  const [codingSkills, setCodingSkills] = useState<Skill[]>([]);
  const [languageSkills, setLanguageSkills] = useState<Skill[]>([]);
  const [toolSkills, setToolSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetch("/src/data/abilities-coding.json")
      .then((res) => res.json())
      .then(setCodingSkills);
    fetch("/src/data/abilities-languages.json")
      .then((res) => res.json())
      .then(setLanguageSkills);
    fetch("/src/data/abilities-tools.json")
      .then((res) => res.json())
      .then(setToolSkills);
  }, []);

  function renderStars(level: number, skillName: string) {
    return (
      <span>
        {[...Array(5)].map((_, i) => (
          <i
            key={`${skillName}-star-${i}`}
            className={
              i < level
                ? `${styles.star} ${styles.filled}`
                : `${styles.star} ${styles.empty}`
            }
            aria-hidden="true"
          />
        ))}
      </span>
    );
  }

  return (
    <>
      <SectionTitle>Abilities</SectionTitle>
      <div className={styles.headerGrid}>
        <div className={styles.headerSubtitleWrap}>
          <p className={styles.subtitle}>
            Here is a summary of my most important skills and abilities as a
            Creative Web Developer and Virtual Assistant:
          </p>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.skillsGrid}>
        <div className={styles.skillsCol}>
          <h3 className={styles.skillCategory}>Coding</h3>
          {codingSkills.map((skill) => (
            <dl className={styles.skillRow} key={skill.name}>
              <dt>{skill.name}</dt>
              <dd>{renderStars(skill.level, skill.name)}</dd>
            </dl>
          ))}
          <h3 className={styles.skillCategory}>Languages</h3>
          {languageSkills.map((skill) => (
            <dl className={styles.skillRow} key={skill.name}>
              <dt>{skill.name}</dt>
              <dd>{renderStars(skill.level, skill.name)}</dd>
            </dl>
          ))}
        </div>
        <div className={styles.skillsCol}>
          <h3 className={`${styles.skillCategory}`}>Tools / Others</h3>
          {toolSkills.map((skill) => (
            <dl className={styles.skillRow} key={skill.name}>
              <dt>{skill.name}</dt>
              <dd>{renderStars(skill.level, skill.name)}</dd>
            </dl>
          ))}
        </div>
      </div>
    </>
  );
}
