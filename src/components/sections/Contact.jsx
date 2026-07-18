import { useState } from "react";
import { IconMail, IconSend, IconCheck, IconAlertCircle } from "@tabler/icons-react";
import { Section } from "../ui/Section";
import profile from "../../data/profile.json";
import site from "../../data/site.json";

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`;

export function Contact() {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  if (!profile?.email) return null;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          subject: form.subject,
          message: form.message,
          _subject: `[Portfolio] ${form.subject}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
      setForm({ name: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-surface px-4 py-3 text-left text-ink placeholder:text-ink-muted/70 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20";

  return (
    <Section
      id="contact"
      title={site.contact.title}
      subtitle={site.contact.subtitle}
    >
      <div className="mx-auto w-full max-w-xl">
        <form onSubmit={onSubmit} className="space-y-4 text-left" noValidate>
          <div>
            <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">
              {site.contact.fields.name}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={onChange}
              placeholder={site.contact.fields.namePlaceholder}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-ink">
              {site.contact.fields.subject}
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              required
              value={form.subject}
              onChange={onChange}
              placeholder={site.contact.fields.subjectPlaceholder}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink">
              {site.contact.fields.message}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={onChange}
              placeholder={site.contact.fields.messagePlaceholder}
              className={`${inputClass} resize-y min-h-[140px]`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
          >
            {status === "sending" ? (
              site.contact.fields.sending
            ) : (
              <>
                <IconSend size={18} stroke={1.75} aria-hidden />
                {site.contact.cta}
              </>
            )}
          </button>
        </form>

        {status === "success" && (
          <p
            className="mt-4 flex items-start gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300"
            role="status"
          >
            <IconCheck size={18} stroke={1.75} className="mt-0.5 shrink-0" />
            {site.contact.success}
          </p>
        )}

        {status === "error" && (
          <p
            className="mt-4 flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300"
            role="alert"
          >
            <IconAlertCircle size={18} stroke={1.75} className="mt-0.5 shrink-0" />
            {site.contact.error}{" "}
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1 font-medium underline underline-offset-2"
            >
              <IconMail size={14} stroke={1.75} />
              {profile.email}
            </a>
          </p>
        )}

        <p className="mt-6 text-center text-sm text-ink-muted">
          O escríbeme directamente a{" "}
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-accent hover:text-accent-ink"
          >
            {profile.email}
          </a>
        </p>
      </div>
    </Section>
  );
}
