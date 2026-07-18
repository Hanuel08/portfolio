import profile from "../../data/profile.json";
import site from "../../data/site.json";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-surface-raised">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 py-10 text-center sm:px-6">
        <p className="text-sm font-medium text-ink">{profile.name}</p>
        <p className="text-sm text-ink-muted">{site.footer.tagline}</p>
        <p className="text-xs text-ink-muted">
          © {year} {profile.name}. {site.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
