"use client";

import Image from "next/image";
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
    "mt-2 w-full border border-black/20 bg-white px-4 py-3.5 text-base text-black outline-none transition-colors placeholder:text-black/35 focus:border-black";

  return (
    <main className="bg-white text-black">
      <Script src="https://s.pageclip.co/v1/pageclip.js" strategy="afterInteractive" />

      <section className="relative min-h-[430px] overflow-hidden bg-[#020208] text-white">
        <Image
          src="/mach25/IMG_0265_Original.jpg"
          alt="HiPR students standing with Macha"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_38%] opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#020208_0%,rgba(2,2,8,0.94)_46%,rgba(2,2,8,0.28)_78%,rgba(2,2,8,0.45)_100%)]" />

        <div className="relative mx-auto flex min-h-[430px] max-w-[1180px] flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
            Contact HiPR
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">
            Start a conversation.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/72">
            Joining the team, supporting a project or asking about the rockets?
            Send HiPR a message.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1180px] gap-14 px-6 py-16 sm:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-24">
          <aside>
            <h2 className="text-3xl font-semibold">What can we help with?</h2>
            <div className="mt-9 divide-y divide-black/15 border-y border-black/15">
              {[
                ["Join the team", "Build, test, launch or support the next vehicle."],
                ["Partner with HiPR", "Sponsor student engineering or offer technical support."],
                ["General enquiry", "Ask about projects, competitions or the programme."],
              ].map(([title, description]) => (
                <div key={title} className="py-6">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-black/58">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm leading-6 text-black/48">
              HiPR is a student team. Replies may take a little longer during
              exams and launch campaigns.
            </p>
          </aside>

          <div className="border border-black/15 bg-[#f4f3f0] p-6 sm:p-10 lg:p-12">
            <div className="border-b border-black/15 pb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-black/45">
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
                  className="group inline-flex min-w-40 items-center justify-center gap-3 bg-black px-6 py-4 font-semibold text-white transition-colors hover:bg-[#c95049] disabled:cursor-wait disabled:opacity-60"
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
