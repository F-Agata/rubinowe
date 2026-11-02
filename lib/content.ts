export const locales = ["pl", "en"] as const;
export type Locale = (typeof locales)[number];

/** Polish is the default and lives at the root; English under /en/. */
export const localePath: Record<Locale, string> = { pl: "/", en: "/en/" };

export const EMAIL = "rubinowe@rubinowe.pl";
export const COMPANY = "Rubinowe Sp. z o.o.";

type Item = { title: string; text: string };

export type Dictionary = {
  meta: { title: string; description: string };
  nav: { services: string; how: string; contact: string; home: string; language: string };
  hero: { title: string; lead: string; cta: string };
  services: { title: string; subtitle: string; items: [Item, Item] };
  why: { title: string; items: Item[] };
  how: { title: string; items: Item[] };
  contact: { title: string; text: string };
  footer: { tagline: string };
};

const en: Dictionary = {
  meta: {
    title: "Rubinowe – Software House",
    description:
      "Software development for IT companies and our own digital products. From idea to delivery.",
  },
  nav: {
    services: "Services",
    how: "How we work",
    contact: "Contact",
    home: "Rubinowe – home",
    language: "Language",
  },
  hero: {
    title: "Software house for IT companies and our own products",
    lead: "We support technology teams with development capacity and expertise, and we build our own digital products from idea to release.",
    cta: "Get in touch",
  },
  services: {
    title: "What we do",
    subtitle: "Two halves, one craft.",
    items: [
      {
        title: "For IT companies",
        text: "We join your projects as an extension of your team or take ownership of a well-defined part of the work. We fit into your processes, tools and pace, so you can deliver more without growing headcount.",
      },
      {
        title: "Our own products",
        text: "We design, build and maintain our own software. This keeps our skills sharp and our approach practical, because we live with the code we write.",
      },
    ],
  },
  why: {
    title: "What you can expect",
    items: [
      {
        title: "Experienced developers",
        text: "People who have built and shipped production software and know what it takes.",
      },
      {
        title: "Easy collaboration",
        text: "We adapt to your workflow, communicate clearly and integrate smoothly with your team.",
      },
      {
        title: "Flexible scope",
        text: "From a single specialist to complete delivery. We scale to what your project actually needs.",
      },
      {
        title: "Quality first",
        text: "Clean, maintainable code, code reviews and testing as standard, not as extras.",
      },
      {
        title: "Honest advice",
        text: "We share our perspective openly, including when a simpler solution is the better one.",
      },
      {
        title: "End-to-end ownership",
        text: "From concept through development to release and ongoing maintenance.",
      },
    ],
  },
  how: {
    title: "How we work",
    items: [
      {
        title: "We deliver on our commitments",
        text: "We agree on clear goals and timelines, and we stick to them. Reliable delivery matters as much to us as it does to you.",
      },
      {
        title: "We think like partners",
        text: "We treat your project as if it were our own. When something goes wrong, we focus on solving it, not on assigning blame.",
      },
      {
        title: "We stay open and transparent",
        text: "You always know where the project stands. We communicate progress, risks and decisions openly, at every step.",
      },
    ],
  },
  contact: {
    title: "Let’s talk",
    text: "Have a project in mind or need extra hands on your team? Drop us a line and we’ll get back to you.",
  },
  footer: { tagline: "Software House" },
};

const pl: Dictionary = {
  meta: {
    title: "Rubinowe – Software House",
    description:
      "Tworzymy oprogramowanie dla firm IT i rozwijamy własne produkty cyfrowe. Od pomysłu do wdrożenia.",
  },
  nav: {
    services: "Usługi",
    how: "Jak pracujemy",
    contact: "Kontakt",
    home: "Rubinowe – strona główna",
    language: "Język",
  },
  hero: {
    title: "Software house dla firm IT i twórca własnych produktów",
    lead: "Wspieramy zespoły technologiczne mocami developerskimi i doświadczeniem, a także tworzymy własne produkty cyfrowe – od pomysłu do wdrożenia.",
    cta: "Napisz do nas",
  },
  services: {
    title: "Czym się zajmujemy",
    subtitle: "Dwie połowy, jedno rzemiosło.",
    items: [
      {
        title: "Dla firm IT",
        text: "Dołączamy do Twoich projektów jako rozszerzenie zespołu albo przejmujemy jasno określoną część prac. Dopasowujemy się do Twoich procesów, narzędzi i tempa, by można było dostarczać więcej bez rozbudowy zespołu.",
      },
      {
        title: "Własne produkty",
        text: "Projektujemy, budujemy i utrzymujemy własne oprogramowanie. Dzięki temu nasze umiejętności są stale aktualne, a podejście praktyczne – bo sami żyjemy z kodem, który piszemy.",
      },
    ],
  },
  why: {
    title: "Czego możesz się spodziewać",
    items: [
      {
        title: "Doświadczeni developerzy",
        text: "Ludzie, którzy budowali i wdrażali oprogramowanie produkcyjne i wiedzą, czego to wymaga.",
      },
      {
        title: "Łatwa współpraca",
        text: "Dopasowujemy się do Twojego sposobu pracy, komunikujemy się jasno i płynnie wchodzimy w zespół.",
      },
      {
        title: "Elastyczny zakres",
        text: "Od jednego specjalisty po pełną realizację. Skalujemy się do tego, czego projekt naprawdę potrzebuje.",
      },
      {
        title: "Jakość przede wszystkim",
        text: "Czysty, łatwy w utrzymaniu kod, code review i testy jako standard, a nie dodatek.",
      },
      {
        title: "Szczera rada",
        text: "Otwarcie dzielimy się opinią – także wtedy, gdy prostsze rozwiązanie okazuje się lepsze.",
      },
      {
        title: "Odpowiedzialność od A do Z",
        text: "Od koncepcji, przez development, po wdrożenie i dalsze utrzymanie.",
      },
    ],
  },
  how: {
    title: "Jak pracujemy",
    items: [
      {
        title: "Dotrzymujemy zobowiązań",
        text: "Ustalamy jasne cele i terminy – i się ich trzymamy. Rzetelne dostarczanie jest dla nas tak samo ważne jak dla Ciebie.",
      },
      {
        title: "Myślimy jak partnerzy",
        text: "Traktujemy Twój projekt jak własny. Gdy coś idzie nie tak, skupiamy się na rozwiązaniu, a nie na szukaniu winnych.",
      },
      {
        title: "Jesteśmy otwarci i transparentni",
        text: "Zawsze wiesz, na jakim etapie jest projekt. Otwarcie mówimy o postępach, ryzykach i decyzjach – na każdym kroku.",
      },
    ],
  },
  contact: {
    title: "Porozmawiajmy",
    text: "Masz pomysł na projekt albo potrzebujesz wsparcia w zespole? Napisz do nas – odezwiemy się.",
  },
  footer: { tagline: "Software House" },
};

// Polish typography: one-letter words never end a line.
function bindOrphans<T>(value: T): T {
  if (typeof value === "string") return value.replace(/(^|\s)([aiouwzAIOUWZ])\s/g, "$1$2\u00A0") as T;
  if (Array.isArray(value)) return value.map(bindOrphans) as T;
  if (value && typeof value === "object")
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, bindOrphans(v)])) as T;
  return value;
}

export const dictionaries: Record<Locale, Dictionary> = { pl: bindOrphans(pl), en };

