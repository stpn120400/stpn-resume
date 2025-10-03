import ExperienceList from "../components/experience/ExperienceList";
import ProfessionalExperience from "../components/experience/ProfessionalExperience";
import Certifications from "../components/Certifications";
import SampleWorks from "../components/SampleWorks";
import Abilities from "../components/Abilities";
import ContactSection from "../components/ContactSection";
import ProfileSection from "../components/ProfileSection";
import Section from "../components/shared/Section";
import professionalExperience from "../data/professional-experience.json";
import freelanceExperience from "../data/freelance-experience.json";
import profile from "../data/profile.json";
import type { Experience } from "../components/experience/types";
import SkillsSection from "../components/SkillsSection";

export default function Resume() {
  return (
    <main>
      <Section type="profile">
        <ProfileSection />
      </Section>
      <Section type="freelance">
        <ExperienceList
          title="VA / Freelance Experience"
          experiences={freelanceExperience as Experience[]}
        />
      </Section>
      <Section type="professional">
        <ProfessionalExperience
          roles={professionalExperience as Experience[]}
        />
      </Section>
      <Section type="certifications">
        <Certifications certifications={profile.certifications} />
      </Section>
      <Section type="abilities">
        <Abilities />
      </Section>
      <Section type="skills">
        <SkillsSection
          technicalSkills={profile.technicalSkills}
          coreVASkills={profile.coreVASkills}
          personalSkills={profile.personalSkills}
        />
      </Section>
      <Section type="sampleworks">
        <SampleWorks />
      </Section>
      <Section type="contact">
        <ContactSection />
      </Section>
    </main>
  );
}
