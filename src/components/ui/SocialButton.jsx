import { createElement } from "react";
import { getSocialIcon } from "../../lib/icons";

export function SocialButton({
  label,
  url,
  icon,
  download = false,
  bg,
  color,
  border,
  hoverBg,
}) {
  const isExternal = url.startsWith("http");
  const hasCustomColor = Boolean(bg || color);

  const style = hasCustomColor
    ? {
        "--btn-bg": bg || "var(--surface-raised)",
        "--btn-color": color || "var(--ink)",
        "--btn-border": border || bg || "var(--line)",
        "--btn-hover-bg": hoverBg || bg || "var(--accent-soft)",
        backgroundColor: "var(--btn-bg)",
        color: "var(--btn-color)",
        borderColor: "var(--btn-border)",
      }
    : undefined;

  return (
    <a
      href={url}
      download={download || undefined}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={style}
      className={
        hasCustomColor
          ? "group inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition hover:bg-[var(--btn-hover-bg)] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--btn-border)]"
          : "group inline-flex items-center gap-2 rounded-lg border border-line bg-surface-raised px-4 py-2.5 text-sm font-medium text-ink transition hover:border-accent hover:bg-accent-soft hover:text-accent-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      }
    >
      {createElement(getSocialIcon(icon), {
        size: 18,
        stroke: 1.75,
        "aria-hidden": true,
      })}
      {label}
    </a>
  );
}
