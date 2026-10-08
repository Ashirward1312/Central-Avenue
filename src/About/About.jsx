import img1 from "../Images/1.jpg";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const FEATURES = [
  "Premium retail & dining spaces",
  "Modern corporate office suites",
  "Ample multi-level parking",
  "Ready for possession today",
];

const STATS = [
  { num: "3+",   label: "Lakh Sq. Ft.",   sub: "Total built-up area" },
  { num: "200+", label: "Business Units",  sub: "Retail, showroom & office" },
  { num: "01",   label: "Prime Address",   sub: "Kamal Vihar, Raipur" },
  { num: "Now",  label: "Possession Ready",sub: "Move in immediately" },
];

export default function About() {
  return (
    <>
      {/* ══════════════════════════════
          ABOUT SECTION
      ══════════════════════════════ */}
      <section id="about" className="about">
        <div className="about__inner">

          {/* Kicker */}
          <div className="about__kicker">
            <span className="about__kicker-line" />
            <span className="about__kicker-text">About Central Avenue</span>
          </div>

          {/* Grid */}
          <div className="about__grid">

            {/* ── LEFT ── */}
            <div>
              <h2 className="about__h2">
                A Commercial
                <br />Destination
                <span className="about__h2-accent">Built for Business.</span>
              </h2>

              <p className="about__para">
                Central Avenue is Kamal Vihar's most prestigious commercial address. Thoughtfully designed for retail boutiques, food joints, premium showrooms, and corporate offices — it is the destination where top brands choose to be.
              </p>

              {/* Feature checklist */}
              <ul className="about__list">
                {FEATURES.map((f, i) => (
                  <li key={i} className="about__list-item">
                    <CheckCircle2 size={16} strokeWidth={1.8} className="about__list-icon" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="about__cta-wrap">
                <a href="#contact" className="about__cta">
                  Know More <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* ── RIGHT ── */}
            <div className="about__img-wrap">
              <img
                src={img1}
                alt="Central Avenue building exterior"
                className="about__img"
                loading="lazy"
              />
              <div className="about__img-tint" />
              <div className="about__badge">
                <div className="about__badge-title">✦ Possession Ready — Move In Today</div>
                <div className="about__badge-sub">Kamal Vihar, Raipur, Chhattisgarh</div>
              </div>
            </div>

          </div>
        </div>

        {/* Stats bar */}
        <div className="about__stats-bar">
          <div className="about__stats-bar-inner">
            {STATS.map((s, i) => (
              <div key={i} className="about__stat">
                <div className="about__stat-num">{s.num}</div>
                <div className="about__stat-label">{s.label}</div>
                <div className="about__stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}