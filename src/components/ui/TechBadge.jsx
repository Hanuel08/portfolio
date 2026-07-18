import { createElement } from "react";
import { getTechIcon } from "../../lib/icons";

export function TechBadge({ id, name, bg, color, size = "md" }) {
  const padding =
    size === "sm" ? "px-2.5 py-1 text-xs gap-1.5" : "px-3 py-1.5 text-sm gap-2";
  const iconSize = size === "sm" ? 14 : 16;

  return (
    <span
      className={`inline-flex items-center rounded-md font-medium ${padding}`}
      style={{
        backgroundColor: bg || "var(--accent-soft)",
        color: color || "var(--ink)",
      }}
    >
      {createElement(getTechIcon(id), {
        size: iconSize,
        stroke: 1.75,
        "aria-hidden": true,
      })}
      {name}
    </span>
  );
}
