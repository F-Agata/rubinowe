import { COMPANY, EMAIL, dictionaries, localePath, locales, type Locale } from "@/lib/content";
import { Fold } from "@/components/papercut/Fold";
import { FoldObserver } from "@/components/papercut/FoldObserver";
import { contactRosette, heroRosette, howCuts, servicesTree } from "@/components/papercut/motifs";

const mailto = `mailto:${EMAIL}`;

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HomePage({ lang }: { lang: Locale }) {
  const t = dictionaries[lang];
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip" href="#main">
        {lang === "pl" ? "Przejdź do treści" : "Skip to content"}
      </a>

      <header className="nav">
        <a className="nav__logo" href={localePath[lang]} aria-label={t.nav.home}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Rubinowe" width={148} height={45} />
        </a>
        <nav className="nav__links" aria-label="Main">
          <a href="#services">{t.nav.services}</a>
          <a href="#how">{t.nav.how}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <ul className="nav__lang" aria-label={t.nav.language}>
          {locales.map((l) => (
            <li key={l}>
              <a href={localePath[l]} hrefLang={l} lang={l} aria-current={l === lang ? "page" : undefined}>
                {l.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <main id="main">
        <section className="hero">
          <div className="hero__art">
            <Fold motif={heroRosette} id="hero" trigger="load" />
          </div>
          <div className="hero__copy">
            <h1 className="hero__title">{t.hero.title}</h1>
            <a className="hero__mail" href={mailto} aria-label={`${t.hero.cta}: ${EMAIL}`}>
              <span>{EMAIL}</span>
              <Arrow />
            </a>
          </div>
        </section>

        <section className="services" id="services" aria-labelledby="services-title">
          <header className="services__head">
            <h2 id="services-title">{t.services.title}</h2>
            <p className="services__subtitle">{t.services.subtitle}</p>
            <p className="services__lead">{t.hero.lead}</p>
          </header>
          <div className="services__sheet">
            <article className="services__item services__item--left">
              <h3>{t.services.items[0].title}</h3>
              <p>{t.services.items[0].text}</p>
            </article>
            <div className="services__tree">
              <Fold motif={servicesTree} id="tree" trigger="scroll" />
            </div>
            <article className="services__item services__item--right">
              <h3>{t.services.items[1].title}</h3>
              <p>{t.services.items[1].text}</p>
            </article>
          </div>
        </section>

        <section className="why" aria-labelledby="why-title">
          <div className="why__head">
            <h2 id="why-title">{t.why.title}</h2>
          </div>
          <ul className="why__list">
            {t.why.items.map((item) => (
              <li key={item.title} className="why__row">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="how" id="how" aria-labelledby="how-title">
          <header className="section-head">
            <h2 id="how-title">{t.how.title}</h2>
          </header>
          <ol className="how__list">
            {t.how.items.map((item, i) => (
              <li key={item.title} className="how__item">
                <div className="how__art">
                  <Fold motif={howCuts[i]} id={`how-${i}`} trigger="scroll" />
                </div>
                <div className="how__copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact__inner">
            <h2 id="contact-title">{t.contact.title}</h2>
            <p>{t.contact.text}</p>
            <a className="contact__mail" href={mailto}>
              {EMAIL}
            </a>
          </div>
          <div className="contact__art">
            <Fold motif={contactRosette} id="contact" trigger="scroll" />
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>
          © {year} {COMPANY}
        </span>
        <span>{t.footer.tagline}</span>
        <a href={mailto}>{EMAIL}</a>
      </footer>

      <FoldObserver />
    </>
  );
}
