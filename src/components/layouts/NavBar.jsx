import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { IconMenu2, IconMoon, IconSun, IconX } from "@tabler/icons-react";
import { useTheme } from "../../context/useTheme";
import site from "../../data/site.json";
import profile from "../../data/profile.json";
import about from "../../data/about.json";
import education from "../../data/education.json";
import projects from "../../data/projects.json";
import skills from "../../data/skills.json";
import certifications from "../../data/certifications.json";

const sectionData = {
  about: about?.paragraphs?.length > 0,
  education: education?.length > 0,
  projects: projects?.length > 0,
  skills: skills?.length > 0,
  certifications: certifications?.length > 0,
  contact: Boolean(profile?.email),
};

export function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => site.nav.filter((item) => sectionData[item.section] !== false),
    [],
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          onClick={closeMenu}
          className="font-semibold tracking-tight text-ink transition hover:text-accent"
        >
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {links.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition hover:bg-accent-soft hover:text-accent-ink"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="ml-2 inline-flex size-10 items-center justify-center rounded-lg border border-line bg-surface-raised text-ink transition hover:border-accent hover:text-accent cursor-pointer"
            aria-label={
              theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"
            }
          >
            {theme === "dark" ? (
              <IconSun size={18} stroke={1.75} />
            ) : (
              <IconMoon size={18} stroke={1.75} />
            )}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line bg-surface-raised text-ink cursor-pointer"
            aria-label={
              theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"
            }
          >
            {theme === "dark" ? (
              <IconSun size={18} stroke={1.75} />
            ) : (
              <IconMoon size={18} stroke={1.75} />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line bg-surface-raised text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? (
              <IconX size={20} stroke={1.75} />
            ) : (
              <IconMenu2 size={20} stroke={1.75} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-surface px-4 py-4 md:hidden"
          aria-label="Móvil"
        >
          <ul className="flex flex-col gap-1">
            {links.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-accent-soft hover:text-accent-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
