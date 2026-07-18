import { SocialButton } from "../ui/SocialButton";
import profile from "../../data/profile.json";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--hero-glow)" }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28">
        {profile.photo && (
          <img
            src={profile.photo}
            alt={`Foto de ${profile.name}`}
            className="mb-8 size-28 rounded-full object-cover shadow-lg ring-4 ring-accent-soft sm:size-32"
            width={128}
            height={128}
          />
        )}

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {profile.role}
        </p>

        <h1 className="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-5 max-w-2xl text-base text-ink-muted sm:text-lg">
          {profile.shortBio}
        </p>

        {profile.location && (
          <p className="mt-8 text-sm text-ink-muted">{profile.location}</p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {profile.links.map((link) => (
            <SocialButton key={link.id} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}
