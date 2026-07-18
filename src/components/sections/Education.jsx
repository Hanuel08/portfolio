import { IconSchool } from "@tabler/icons-react";
import { Section } from "../ui/Section";
import education from "../../data/education.json";
import site from "../../data/site.json";

export function Education() {
  if (!education?.length) return null;

  return (
    <Section
      id="education"
      title={site.sections.education.title}
      subtitle={site.sections.education.subtitle}
    >
      <ul className="mx-auto max-w-3xl space-y-6">
        {education.map((item) => (
          <li
            key={item.id}
            className="rounded-2xl border border-line bg-surface-raised p-6 text-left sm:p-8"
          >
            <div className="flex flex-wrap items-start gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <IconSchool size={22} stroke={1.75} aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-ink sm:text-xl">
                    {item.degree}
                  </h3>
                  <span className="text-sm text-ink-muted">
                    {item.startDate} — {item.endDate}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent-ink sm:text-base">
                  {item.institution}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
                {item.details?.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
