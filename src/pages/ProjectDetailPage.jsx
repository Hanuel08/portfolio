import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  IconArrowLeft,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import { TechBadge } from "../components/ui/TechBadge";
import projects from "../data/projects.json";

export function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-serif text-3xl font-semibold text-ink">
          Proyecto no encontrado
        </h1>
        <p className="mt-3 text-ink-muted">
          El proyecto que buscas no existe o fue eliminado del JSON.
        </p>
        <Link
          to="/#projects"
          className="mt-8 inline-flex items-center gap-2 text-accent hover:text-accent-ink"
        >
          <IconArrowLeft size={18} stroke={1.75} />
          Volver a proyectos
        </Link>
      </div>
    );
  }

  const paragraphs = project.longDescription
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <article className="pb-20">
      <div className="border-b border-line bg-surface-raised">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition hover:text-accent"
          >
            <IconArrowLeft size={18} stroke={1.75} />
            Volver
          </Link>

          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="text-center lg:text-left">
              <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {project.name}
              </h1>
              <p className="mt-4 text-base text-ink-muted sm:text-lg">
                {project.shortDescription}
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech.id} {...tech} />
                ))}
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:brightness-110"
                  >
                    <IconExternalLink size={16} stroke={1.75} />
                    Ver demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink hover:border-accent hover:text-accent mt-6"
                  >
                    <IconBrandGithub size={16} stroke={1.75} />
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <img
              src={project.cover}
              alt={`Portada de ${project.name}`}
              className="w-full rounded-2xl border border-line object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {project.images?.length > 0 && (
          <div className="mt-12 space-y-6">
            <h2 className="text-center font-serif text-2xl font-semibold text-ink">
              Galería
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.images.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={`Captura de ${project.name}`}
                  className="w-full rounded-xl border border-line object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
