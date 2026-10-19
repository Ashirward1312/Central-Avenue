import "./Hero.css";
import img1 from "../Images/hero7.png";

import {
  ShoppingBag,
  Building2,
  Monitor,
  Landmark,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const STATS = [
  { Icon: ShoppingBag, label: "Retail & Shops", sub: "Premium Retail" },
  { Icon: Building2, label: "Office Spaces", sub: "Modern Workspaces" },
  { Icon: Monitor, label: "Food & Dining", sub: "Cafés & Restaurants" },
  { Icon: Landmark, label: "Ready to Move", sub: "Commercial Spaces" },
];

export default function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <img
          src={img1}
          alt="Central Avenue — Premium Commercial Destination, Kamal Vihar, Raipur"
          className="hero__bg"
          fetchPriority="high"
          decoding="async"
        />

        {/* overlays */}
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__ambient" aria-hidden="true" />
        <div className="hero__vignette" aria-hidden="true" />
        <div className="hero__grain" aria-hidden="true" />

        <div className="hero__content">
          {/* glass plate for premium look */}
          <div className="hero__plate" aria-hidden="true" />

          <div className="hero__text">
            <div className="hero__kicker">
              <span className="hero__kicker-line" />
              <span className="hero__kicker-text">Premium Commercial Spaces</span>
              <span className="hero__kicker-line" />
            </div>

            <h1 className="hero__h1">
              Central <span className="hero__h1-gold">Avenue</span>
            </h1>

            <div className="hero__heading-accent" aria-hidden="true">
              <span />
            </div>

            <p className="hero__tagline">Where Business Meets Opportunity.</p>

            {/* <p className="hero__description">
              Discover thoughtfully designed commercial spaces where modern
              business, premium retail and opportunity come together.
            </p> */}

            <div className="hero__actions">
              <Link to="/about" className="hero__btn hero__btn--primary">
                <span className="hero__btn-text">Explore Project</span>
                <ArrowUpRight size={18} strokeWidth={1.9} aria-hidden="true" />
                <span className="hero__btn-shine" aria-hidden="true" />
              </Link>

              <Link to="/contact" className="hero__btn hero__btn--secondary">
                <MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" />
                <span className="hero__btn-text">Enquire Now</span>
                <span className="hero__btn-shine" aria-hidden="true" />
              </Link>
            </div>

            <div className="hero__location">
              <span className="hero__location-dot" />
              <span>Kamal Vihar, Raipur, Chhattisgarh</span>
            </div>
          </div>
        </div>

        <div className="hero__bottom-line" aria-hidden="true" />
      </section>

      <section className="hero__stats">
        <div className="hero__stats-inner">
          <div className="hero__stats-grid">
            {STATS.map(({ Icon, label, sub }) => (
              <div key={label} className="hero__stat">
                <div className="hero__stat-icon-wrap">
                  <Icon
                    size={22}
                    strokeWidth={1.6}
                    className="hero__stat-icon"
                    aria-hidden="true"
                  />
                </div>

                <div className="hero__stat-content">
                  <p className="hero__stat-label">{label}</p>
                  <p className="hero__stat-sub">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}