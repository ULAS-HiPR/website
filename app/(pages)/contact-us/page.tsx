"use client";

import Script from "next/script";
import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

declare global {
  interface Window {
    Pageclip?: {
      send: (
        siteKey: string,
        formName: string,
        data: ContactForm,
        callback: (error: unknown, response: unknown) => void
      ) => void;
    };
  }
}

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactUs() {
  const [formData, setFormData] = useState<ContactForm>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const router = useRouter();

  function updateField(field: keyof ContactForm, value: string) {
    setFormData((previous) => ({ ...previous, [field]: value }));
    if (status === "error") setStatus("idle");
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!window.Pageclip) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    window.Pageclip.send(
      "LKzmlrF6e3DnK96laPtVYHxffKTLJAbP",
      "get-in-touch",
      formData,
      (error, response) => {
        if (response && !error) {
          router.push("/contact-us/success");
          return;
        }

        setStatus("error");
      }
    );
  }

  const fieldClass =
    "mt-2 w-full border border-white/20 bg-black px-4 py-3.5 text-base text-white outline-none transition-colors placeholder:text-white/30 focus:border-white";

  return (
    <main className="bg-black pt-[72px] text-white min-[760px]:pt-[88px]">
      <Script src="https://s.pageclip.co/v1/pageclip.js" strategy="afterInteractive" />

      <header className="bg-black">
        <div className="mx-auto grid min-h-[360px] max-w-[1500px] gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Contact HiPR
            </p>
            <h1 className="mt-5 text-5xl font-semibold uppercase tracking-[-0.03em] sm:text-7xl">
              Contact
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/62 lg:translate-y-[14px] lg:justify-self-end">
            Talk to HiPR about joining the team, supporting a project,
            technical collaboration or the wider rocketry programme.
          </p>
        </div>
      </header>

      <section className="bg-black">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-6 py-16 sm:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-24">
          <aside>
            <h2 className="text-3xl font-semibold">What can we help with?</h2>
            <div className="mt-9 divide-y divide-white/15 border-y border-white/15">
              {[
                ["Join the team", "Build, test, launch or support the next vehicle."],
                ["Partner with HiPR", "Sponsor student engineering or offer technical support."],
                ["General enquiry", "Ask about projects, competitions or the programme."],
              ].map(([title, description]) => (
                <div key={title} className="py-6">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/55">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm leading-6 text-white/42">
              HiPR is a student team. Replies may take a little longer during
              exams and launch campaigns.
            </p>
          </aside>

          <div className="border border-white/15 bg-[#070707] p-6 sm:p-10 lg:p-12">
            <div className="border-b border-white/15 pb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/40">
                Message the team
              </p>
              <h2 className="mt-3 text-3xl font-semibold">Get in touch</h2>
            </div>

            <form onSubmit={submitForm} className="mt-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm font-semibold" htmlFor="name">
                  Name
                  <input
                    className={fieldClass}
                    value={formData.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label className="block text-sm font-semibold" htmlFor="email">
                  Email
                  <input
                    className={fieldClass}
                    value={formData.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <label className="mt-6 block text-sm font-semibold" htmlFor="subject">
                Subject
                <input
                  className={fieldClass}
                  value={formData.subject}
                  onChange={(event) => updateField("subject", event.target.value)}
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                />
              </label>

              <label className="mt-6 block text-sm font-semibold" htmlFor="message">
                Message
                <textarea
                  className={`${fieldClass} min-h-44 resize-y`}
                  value={formData.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  id="message"
                  name="message"
                  placeholder="Tell us a little more"
                  rows={7}
                  required
                />
              </label>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p aria-live="polite" className="text-sm text-[#a33530]">
                  {status === "error"
                    ? "Message could not be sent. Please wait a moment and try again."
                    : ""}
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex min-w-40 items-center justify-center gap-3 border border-white/55 bg-transparent px-6 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-black disabled:cursor-wait disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                  {status !== "sending" ? (
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  ) : null}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
