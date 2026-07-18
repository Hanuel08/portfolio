import { IconCertificate } from "@tabler/icons-react";
import { Section } from "../ui/Section";
import certifications from "../../data/certifications.json";
import site from "../../data/site.json";

export function Certifications() {
  if (!certifications?.length) return null;

  return (
    <Section
      id="certifications"
      title={site.sections.certifications.title}
      subtitle={site.sections.certifications.subtitle}
    >
      <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <li
            key={cert.id}
            className="rounded-2xl border border-line bg-surface-raised p-5 text-left"
          >
            <div className="flex gap-3">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <IconCertificate size={20} stroke={1.75} aria-hidden />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-ink">{cert.name}</h3>
                  {cert.status === "pending" && (
                    <span className="rounded-md bg-amber-500/15 px-2 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-300">
                      Pendiente
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-accent-ink">{cert.issuer}</p>
                <p className="mt-1 text-sm text-ink-muted">{cert.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
