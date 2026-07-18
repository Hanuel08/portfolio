import { Section } from "../ui/Section";
import about from "../../data/about.json";

export function About() {
  if (!about?.paragraphs?.length) return null;

  return (
    <Section id="about" title={about.title}>
      <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
        {about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
