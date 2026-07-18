import { Section } from "../ui/Section";
import { TechBadge } from "../ui/TechBadge";
import experience from "../../data/experience.json";
import skills from "../../data/skills.json";
import site from "../../data/site.json";

const skillLookup = Object.fromEntries(skills.map((s) => [s.id, s]));

export function Experience() {
  if (!experience?.length) return null;

  return (
    <Section
      id="experience"
      title={site.sections.experience.title}
      subtitle={site.sections.experience.subtitle}
    >
      <ol className="mx-auto max-w-3xl space-y-6">
        {experience.map((job) => (
          <li
            key={job.id}
            className="relative border-l-2 border-accent/40 pl-6 text-left"
          >
            <span className="absolute left-[7px] top-1.5 size-3 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-ink">{job.role}</h3>
              <span className="text-sm text-ink-muted">
                {job.startDate} — {job.endDate}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-accent-ink">
              {job.company}
              {job.location ? ` · ${job.location}` : ""}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              {job.description}
            </p>
            {job.technologies?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {job.technologies.map((techId) => {
                  const tech = skillLookup[techId] || {
                    id: techId,
                    name: techId,
                  };
                  return (
                    <TechBadge key={techId} size="sm" {...tech} />
                  );
                })}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
