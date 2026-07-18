import { createFileRoute } from "@tanstack/react-router";
import { Nav, LogoMark } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";

import pg01 from "../assets/pages/pg-01.jpg";
import pg02 from "../assets/pages/pg-02.jpg";
import pg03 from "../assets/pages/pg-03.jpg";
import pg04 from "../assets/pages/pg-04.jpg";
import pg05 from "../assets/pages/pg-05.jpg";
import pg06 from "../assets/pages/pg-06.jpg";
import pg07 from "../assets/pages/pg-07.jpg";
import pg08 from "../assets/pages/pg-08.jpg";
import pg09 from "../assets/pages/pg-09.jpg";
import pg10 from "../assets/pages/pg-10.jpg";
import pg11 from "../assets/pages/pg-11.jpg";
import pg12 from "../assets/pages/pg-12.jpg";
import pg13 from "../assets/pages/pg-13.jpg";
import pg14 from "../assets/pages/pg-14.jpg";
import pg15 from "../assets/pages/pg-15.jpg";
import pg16 from "../assets/pages/pg-16.jpg";
import pg17 from "../assets/pages/pg-17.jpg";
import pg18 from "../assets/pages/pg-18.jpg";
import pg19 from "../assets/pages/pg-19.jpg";
import pg20 from "../assets/pages/pg-20.jpg";
import pg21 from "../assets/pages/pg-21.jpg";
import pg22 from "../assets/pages/pg-22.jpg";
import pg23 from "../assets/pages/pg-23.jpg";
import pg24 from "../assets/pages/pg-24.jpg";

const pages = [pg01, pg02, pg03, pg04, pg05, pg06, pg07, pg08, pg09, pg10, pg11, pg12, pg13, pg14, pg15, pg16, pg17, pg18, pg19, pg20, pg21, pg22, pg23, pg24];
const pg = (n: number) => pages[n - 1] ?? "";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Egypt Elite 2030 — Egypt in One Grip" },
      {
        name: "description",
        content:
          "Egypt Elite 2030 (EE2030), member of the Lebanese Egyptian Alliance (LEAID) — business consultancy, company establishment, legal, media, investment and government relations in Egypt.",
      },
      { property: "og:title", content: "Egypt Elite 2030 — Egypt in One Grip" },
      { property: "og:description", content: "Egypt Elite 2030 (EE2030), member of the Lebanese Egyptian Alliance (LEAID) — business consultancy, company establishment, legal, media, investment and government relations in Egypt." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- Service card ---------- */
function ServiceCard({
  id,
  title,
  bg,
  items,
  delay = 0,
}: {
  id: string;
  title: string;
  bg: string;
  items: string[];
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--ee-navy)] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:-translate-y-1"
    >
      <div id={id} className="absolute -top-24" />
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={bg}
          alt=""
          loading="lazy"
          className="h-full w-full scale-105 object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ee-navy)] via-[color:var(--ee-navy)]/60 to-transparent" />
        <h3 className="absolute inset-x-0 bottom-4 px-6 font-display text-2xl font-extrabold uppercase tracking-tight text-white md:text-3xl">
          {title}
        </h3>
      </div>
      <ul className="space-y-2 px-6 py-6 text-[15px] leading-relaxed text-white/85">
        {items.map((it) => (
          <li key={it} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--ee-pink)]" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

function Index() {
  const services = [
    {
      id: "consultancy",
      title: "Business Consultancy",
      bg: pg(4),
      items: ["Feasibility Study", "Market Study", "Marketing Study", "Investments", "Providing Partners", "Providing Projects"],
    },
    {
      id: "companies",
      title: "Companies Establishment",
      bg: pg(5),
      items: [
        "Individual companies: Sole Entity, Solidarity Company, Simple Recommendation Company",
        "Capital Companies: Limited Liability (LLC), Shareholding, Joint Stock",
        "Franchising Company",
      ],
    },
    {
      id: "legal",
      title: "Business Legal Services",
      bg: pg(6),
      items: [
        "Open Personal Bank Account",
        "Open Company Bank Account (Business Account)",
        "Issuing Bank Guarantee Letters",
        "Companies Establishment",
        "Issuing all work licenses / permissions",
        "Taxes / VAT",
        "Customs & Shipping",
      ],
    },
    {
      id: "media",
      title: "Media & Website Designs",
      bg: pg(7),
      items: [
        "High Quality Logo Designs",
        "Full Company Identity Design (Brochures, Company Profile, etc.)",
        "High Quality Motion Graphics Videos",
        "Video Editing",
        "Custom Static & Dynamic Website Design & Development",
        "CMS for Dynamic Websites",
        "Online Marketing, SEO & Social Media",
        "Unlimited Hosting & Business E-Mails",
      ],
    },
    {
      id: "agencies",
      title: "Agencies Providing",
      bg: pg(8),
      items: ["Local & international agency sourcing", "Distributor & reseller matchmaking", "Contract negotiation & onboarding"],
    },
    {
      id: "events",
      title: "Conferences & Events Management",
      bg: pg(9),
      items: ["End-to-end conference production", "Corporate events & launches", "Speakers, staging & logistics"],
    },
    {
      id: "meetings",
      title: "Official Meeting Arrangement",
      bg: pg(10),
      items: [
        "Ministers",
        "Businessmen",
        "Chiefs of Businessmen Services Departments",
        "Provide Contact Data (Phones, E-mails or Addresses)",
      ],
    },
    {
      id: "education",
      title: "Educational Services",
      bg: pg(11),
      items: [
        "School Registration",
        "Universities Registration",
        "Postgraduate Studies: Master, PhD",
        "Courses and Training",
        "Educational Scholarships",
      ],
    },
    {
      id: "health",
      title: "Health & Medical Services",
      bg: pg(12),
      items: ["Hospitals Reservations", "Clinics Reservations", "Provide Medical Supplies"],
    },
    {
      id: "shopping",
      title: "Shopping & Shopping Guides",
      bg: pg(13),
      items: ["Online Shopping", "Shopping and Delivery", "Provide Shops & Products Data", "Provide Shopping Guides"],
    },
    {
      id: "translation",
      title: "Translators & Translation Services",
      bg: pg(14),
      items: ["Provide Interpreters for All Languages", "Certified Translation", "Legal Translation"],
    },
    {
      id: "tourism",
      title: "Tourism & Tourist Guides",
      bg: pg(15),
      items: [
        "Arranging Tourism Trips for Businessmen",
        "Arranging Tourism Trips for Companies",
        "Provide Tour Guides",
        "Provide Professional Photographers",
      ],
    },
    {
      id: "market",
      title: "Market Exchange — Forex",
      bg: pg(16),
      items: ["Forex advisory", "Currency exchange coordination", "Market intelligence"],
    },
    {
      id: "investment",
      title: "Investment & Project Management",
      bg: pg(17),
      items: ["End-to-end project management", "Investor relations", "Financial modeling & reporting"],
    },
    {
      id: "matchmaking",
      title: "Business Matchmaking",
      bg: pg(18),
      items: ["B2B introductions", "Strategic partnerships", "Deal facilitation"],
    },
    {
      id: "networking",
      title: "Networking & National Investment Maps",
      bg: pg(19),
      items: ["National investment mapping", "Sector & regional insights", "Cross-border networking"],
    },
    {
      id: "trust",
      title: "Trust / Hedge Funds Management",
      bg: pg(20),
      items: ["Trust structuring", "Hedge fund advisory", "Wealth preservation strategies"],
    },
    {
      id: "government",
      title: "Government Support & Relations",
      bg: pg(21),
      items: ["Government liaison", "Regulatory navigation", "Policy & permits advisory"],
    },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--ee-navy)] font-body text-white">
      <Nav />

      {/* HERO */}
      <section
        id="home"
        className="relative isolate min-h-[100svh] w-full overflow-hidden"
      >
        <img
          src={pg(1)}
          alt="Egypt Elite 2030"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--ee-navy)]/85 via-[color:var(--ee-navy)]/40 to-transparent" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-28 md:px-10">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--ee-pink)]">
              www.ee2030.com
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display text-6xl font-black leading-[0.9] tracking-tight text-white md:text-8xl">
              EGYPT
              <br />
              ELITE
              <br />
              <span className="bg-[image:var(--gradient-ee)] bg-clip-text text-transparent">
                2030
              </span>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-6 font-script text-4xl text-[color:var(--ee-pink)] md:text-5xl">
              Egypt in one grip
            </p>
          </Reveal>
          <Reveal delay={420}>
            <p className="mt-10 max-w-md text-lg font-semibold uppercase tracking-wide text-white/85">
              Member of Lebanese Egyptian Alliance (LEAID)
            </p>
          </Reveal>
          <Reveal delay={560}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-full bg-[color:var(--ee-pink)] px-7 py-3 text-sm font-semibold text-white shadow-[var(--shadow-ee)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore our services
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="about" className="relative isolate overflow-hidden">
        <img src={pg(2)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--ee-navy)] via-[color:var(--ee-navy)]/85 to-[color:var(--ee-navy)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10">
          <Reveal>
            <h2 className="font-display text-5xl font-black uppercase tracking-tight text-white md:text-7xl">
              What we do?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-4 h-1 w-24 rounded-full bg-[image:var(--gradient-ee)]" />
          </Reveal>
          <Reveal delay={300}>
            <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-3 text-[15px] text-white/90 md:grid-cols-2">
              {[
                "Business Consultancy",
                "Companies Establishment",
                "Business Legal Services",
                "Media & Website Designs",
                "Agencies Providing",
                "Conferences & Events Management",
                "Accommodation, Hotels & Cars (Reservations)",
                "Official Meeting Arrangement",
                "Educational Services",
                "Health & Medical Services",
                "Shopping & Shopping Guides",
                "Translators & Translation Services",
                "Tourism & Tourist Guides",
                "Market Exchange",
                "Investment & Project Management",
                "Business Matchmaking",
                "Networking & National Investment Maps",
                "Trust / Hedge Funds Management",
              ].map((s) => (
                <li key={s} className="flex items-center gap-3 border-b border-white/10 py-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[color:var(--ee-pink)]" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CEO */}
      <section id="ceo" className="relative isolate overflow-hidden bg-[color:var(--ee-navy)]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-28 md:grid-cols-2 md:px-10">
          <Reveal className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-ee)]">
            <img src={pg(3)} alt="Dr. Ahmed Saber Abo Khadra, CEO" className="h-full w-full object-cover" />
          </Reveal>
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--ee-pink)]">
                Leadership
              </p>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="mt-3 font-display text-6xl font-black uppercase leading-none tracking-tight md:text-7xl">
                CEO
              </h2>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-4 text-2xl font-semibold text-white/90">Dr. Ahmed Saber Abo Khadra</p>
            </Reveal>
            <Reveal delay={400}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/80">
                I consider myself one of the GATES for investment in Egypt. Strong government ties.
                Experienced Chief Executive Officer with a demonstrated history of working in the think
                tanks industry — the founder of what is nowadays called EE2030. Skilled in negotiation,
                business planning, business networking, MICE and medical devices. Strong business
                development professional with multiple diplomas from The American University in Cairo,
                Cairo University, Helwan University, Goethe Institute and the Arab League Organization.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="relative bg-[color:var(--ee-navy)]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--ee-pink)]">
              Our Services
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="mt-3 font-display text-5xl font-black uppercase tracking-tight md:text-6xl">
              Everything you need — in one grip
            </h2>
          </Reveal>
          <Reveal delay={250}>
            <p className="mt-4 max-w-2xl text-white/70">
              A full spectrum of business, legal, investment and lifestyle services curated for
              investors, businessmen and companies operating in Egypt.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.id} {...s} delay={(i % 3) * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="relative isolate overflow-hidden bg-[color:var(--ee-navy)]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--ee-pink)]">
              Trusted Partners
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="mt-3 font-display text-5xl font-black uppercase tracking-tight md:text-6xl">
              Our Clients
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 shadow-[var(--shadow-ee)]">
              <img src={pg(22)} alt="Our Clients" className="block w-full" />
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 shadow-[var(--shadow-ee)]">
              <img src={pg(23)} alt="Our Clients" className="block w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative isolate overflow-hidden">
        <img src={pg(24)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--ee-navy)]/60 via-[color:var(--ee-navy)]/80 to-[color:var(--ee-navy)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--ee-pink)]">
                Get in touch
              </p>
              <h2 className="mt-3 font-display text-5xl font-black uppercase tracking-tight md:text-6xl">
                Let's build in Egypt — together
              </h2>
              <p className="mt-4 max-w-md text-white/75">
                Reach out to plan your next investment, project or partnership. Our team is ready to
                open the right doors for you.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="space-y-4 text-lg text-white/90">
                <li>
                  <a href="tel:+201002003820" className="hover:text-[color:var(--ee-pink)]">
                    +20 100 200 3820
                  </a>
                </li>
                
                <li>
                  <a href="mailto:info@ee2030.com" className="hover:text-[color:var(--ee-pink)]">
                   info@egypt-elite2030.com
                  </a>
                </li>
                <li>AlManar Tower 2, AlGabl AlAkhdar st, Zahraa Nasr city, Cairo Egypt</li>
                <li>
                  <a href="https://www.ee2030.com" className="hover:text-[color:var(--ee-pink)]">
                    www.egypt-elite2030.com
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[color:var(--ee-navy)]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-10 w-10" />
              <div>
                <p className="font-display text-lg font-semibold leading-none">egypt elite</p>
                <p className="font-display text-sm font-bold text-[color:var(--ee-pink)]">2030</p>
              </div>
            </div>
            <p className="mt-4 font-script text-2xl text-[color:var(--ee-pink)]">Egypt in one grip</p>
            <p className="mt-3 text-sm text-white/60">
              Member of Lebanese Egyptian Alliance (LEAID)
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Sections</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/80">
              {["home", "about", "ceo", "services", "clients", "contact"].map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="capitalize hover:text-[color:var(--ee-pink)]">
                    {id}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>+20 100 200 3820</li>
              
              <li>info@egypt-elite2030.com</li>
              <li>AlManar Tower 2, AlGabl AlAkhdar st, Zahraa Nasr city, Cairo Egypt</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Egypt Elite 2030 — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
