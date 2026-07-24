import { Link } from "react-router-dom";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { Section } from "../ui/Section";
import { TechBadge } from "../ui/TechBadge";
import projects from "../../data/projects.json";
import site from "../../data/site.json";

export function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface-raised text-left transition hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
      <Link to={`/projects/${project.id}`} className="relative block overflow-hidden">
        <img
          src={project.cover}
          alt={`Portada de ${project.name}`}
          className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {project.inDevelopment && (
          <span className="absolute left-3 top-3 rounded-md bg-amber-500/95 px-2.5 py-1 text-xs font-semibold tracking-wide text-white shadow-sm">
            En desarrollo
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold text-ink">
          <Link
            to={`/projects/${project.id}`}
            className="transition hover:text-accent"
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech.id} size="sm" {...tech} />
          ))}
        </div>

        {(project.githubUrl || project.demoUrl) && (
          <div className="mt-5 flex flex-wrap items-center gap-6 border-t border-line pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-accent"
              >
                <IconBrandGithub size={16} stroke={1.75} />
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-ink"
              >
                <IconExternalLink size={16} stroke={1.75} />
                Deploy
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  if (!projects?.length) return null;

  return (
    <Section
      id="projects"
      title={site.sections.projects.title}
      subtitle={site.sections.projects.subtitle}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
