import { Section } from "../ui/Section";
import { TechBadge } from "../ui/TechBadge";
import skills from "../../data/skills.json";
import site from "../../data/site.json";

export function Skills() {
  if (!skills?.length) return null;

  return (
    <Section
      id="skills"
      title={site.sections.skills.title}
      subtitle={site.sections.skills.subtitle}
    >
      <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <TechBadge key={skill.id} {...skill} />
        ))}
      </div>
    </Section>
  );
}
