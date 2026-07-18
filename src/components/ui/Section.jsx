export function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        {(title || subtitle) && (
          <header className="mb-10 text-center">
            {title && (
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto mt-3 max-w-2xl text-base text-ink-muted sm:text-lg">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
