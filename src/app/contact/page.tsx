"use client";
import ContactForm from "@/components/ui/Home/Contact/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen text-zinc-100 font-sans antialiased">
      <style>{`
        .accent-text { color: #5dcaa5; }
      `}</style>

      {/* Hero */}
      <section className="relative container mx-auto lg:px-24 md:px-12 sm:px-8 px-6 pt-16 pb-12 overflow-hidden">
        <span className="absolute -top-6 left-0 text-[6rem] md:text-[11rem] font-bold text-zinc-900/90 select-none leading-none tracking-tight font-mono pointer-events-none whitespace-nowrap">
          CONTACT
        </span>
        <div className="relative">
          <p className="font-mono text-sm accent-text mb-3">
            {`// contact.init() — get in touch`}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s build together
          </h1>
          <p className="text-zinc-400 max-w-xl leading-relaxed">
            Have a project in mind, want to discuss software engineering, or
            just say hello? Drop a message and I&apos;ll get back to you within
            24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form component with header hidden */}
      <ContactForm hideHeader={true} />
    </div>
  );
}
