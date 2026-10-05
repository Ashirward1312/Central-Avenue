import img1 from "../Images/Park.PNG";
import { ArrowDown, ArrowUpRight, MapPin, ShoppingBag, Building2, Monitor, Landmark } from "lucide-react";

const STATS = [
  { Icon: ShoppingBag, label: "Retail Spaces",   sub: "For growing brands" },
  { Icon: Building2,   label: "Showrooms",        sub: "Designed for visibility" },
  { Icon: Monitor,     label: "Office Spaces",    sub: "For modern businesses" },
  { Icon: Landmark,    label: "Prime Location",   sub: "In Kamal Vihar" },
];

export default function Hero() {
  return (
    <>
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section id="home" className="hero">
        <img src={img1} alt="Central Avenue – Premium Commercial Destination" className="hero__bg" />
        <div className="hero__overlay" />
        <div className="hero__gradient-left" />
        <div className="hero__gradient-bottom" />

        <div className="hero__content">
          <div className="hero__inner">
            <div className="hero__text">

              {/* Kicker */}
              <div className="hero__kicker">
                <span className="hero__kicker-line" />
                <span className="hero__kicker-text">A Premium Commercial Destination</span>
              </div>

              {/* H1 */}
              <h1 className="hero__h1">
                Central
                <span className="hero__h1-accent">Avenue</span>
              </h1>

              {/* Tagline */}
              <p className="hero__tagline">Where Business Meets Opportunity.</p>

              {/* Description */}
              <p className="hero__desc">
                A thoughtfully designed commercial address in Kamal Vihar — where
                contemporary architecture, refined retail spaces and modern offices
                come together in one vibrant destination.
              </p>

              {/* Location */}
              <div className="hero__location">
                <MapPin size={15} strokeWidth={1.5} className="hero__location-icon" />
                <span className="hero__location-text">Kamal Vihar · Raipur, Chhattisgarh</span>
              </div>

              {/* Buttons */}
              <div className="hero__buttons">
                <a href="#about" className="hero__btn-main">
                  Explore the Project <ArrowUpRight size={15} />
                </a>
                <a href="#contact" className="hero__btn-ghost">
                  Enquire Now <ArrowDown size={14} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          STATS STRIP
      ══════════════════════════════ */}
      <section className="hero__stats">
        <div className="hero__stats-grid">
          {STATS.map(({ Icon, label, sub }) => (
            <div key={label} className="hero__stat">
              <Icon size={26} strokeWidth={1.2} className="hero__stat-icon" />
              <p className="hero__stat-label">{label}</p>
              <p className="hero__stat-sub">{sub}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}