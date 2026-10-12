import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import imgBlock from "../Images/block1.JPG";
import { BLOCKS_DATA } from "../data/blocksData";
import {
  Building2,
  Layers,
  Store,
  Ruler,
  Maximize2,
  Phone,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Send,
  ChevronRight,
  ArrowRight,
  MapPin,
  Award,
  TrendingUp,
  Users,
} from "lucide-react";
import "./BlockDetail.css";

export default function BlockDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blockId = id || "a";
  const currentBlockId = BLOCKS_DATA[blockId.toLowerCase()] ? blockId.toLowerCase() : "a";
  const block = BLOCKS_DATA[currentBlockId];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    unitType: "Retail Shop",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFloorIndex, setActiveFloorIndex] = useState(0);

  useEffect(() => {
    setForm((prev) => ({ ...prev }));
    setSubmitted(false);
    setActiveFloorIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentBlockId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setSubmitted(true);
  };

  const blockKeys = Object.keys(BLOCKS_DATA);

  return (
    <div className="bd">


      {/* =========================================================
    CENTRAL AVENUE HERO — PREMIUM SINGLE IMAGE
========================================================= */}
      <section className="bd-hero bd-hero--simple">
        <div className="bd-hero__bg" aria-hidden="true" />

        <div className="bd-hero__inner">
          <div className="bd-container">



            {/* Main Hero Layout */}
            <div className="bd-hero__grid">

              {/* LEFT CONTENT */}
              <div className="bd-hero__content">

                {/* RERA Information */}
                <div
                  className="bd-hero__rera bd-hero__rera--small"
                  title={`RERA: ${block.rera}`}
                >
                  <ShieldCheck size={15} aria-hidden="true" />
                  <span>RERA: {block.rera}</span>
                </div>

                {/* Heading */}
                <h1 className="bd-hero__title">
                  {block.name}
                </h1>

                <p className="bd-hero__subtitle">
                  {block.title}
                </p>

                <p className="bd-hero__tagline">
                  {block.tagline}
                </p>

                {/* Property Highlights */}
                <div className="bd-hero__stats">

                  <div className="bd-hero__stat">
                    <div className="bd-hero__stat-icon-wrap">
                      <Store size={19} aria-hidden="true" />
                    </div>
                    <div className="bd-hero__stat-info">
                      <span className="bd-hero__stat-num">
                        {block.totalUnits}
                      </span>
                      <span className="bd-hero__stat-label">
                        Total Units
                      </span>
                    </div>
                  </div>

                  <div className="bd-hero__stat">
                    <div className="bd-hero__stat-icon-wrap">
                      <Layers size={19} aria-hidden="true" />
                    </div>
                    <div className="bd-hero__stat-info">
                      <span className="bd-hero__stat-num">
                        {block.levelsCount}
                      </span>
                      <span className="bd-hero__stat-label">
                        Total Levels
                      </span>
                    </div>
                  </div>

                  <div className="bd-hero__stat">
                    <div className="bd-hero__stat-icon-wrap">
                      <Ruler size={19} aria-hidden="true" />
                    </div>
                    <div className="bd-hero__stat-info">
                      <span className="bd-hero__stat-num">
                        {String(block.plotArea).split(" ")[0]}
                      </span>
                      <span className="bd-hero__stat-label">
                        Plot Area (sq. m.)
                      </span>
                    </div>
                  </div>

                  <div className="bd-hero__stat">
                    <div className="bd-hero__stat-icon-wrap">
                      <Building2 size={19} aria-hidden="true" />
                    </div>
                    <div className="bd-hero__stat-info">
                      <span className="bd-hero__stat-num">
                        {block.liftCount}
                      </span>
                      <span className="bd-hero__stat-label">
                        {Number(block.liftCount) === 1 ? "Lift" : "Lifts"}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Call To Action */}
                <div className="bd-hero__actions">

                  <a href="#bd-inquire" className="bd-cta-gold">
                    <span>Request Pricing</span>
                    <ChevronRight size={17} aria-hidden="true" />
                  </a>

                  <a
                    href={`https://wa.me/918720001111?text=${encodeURIComponent(
                      `Hi, I am interested in Central Avenue ${block.name}. Please share the pricing and property details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bd-cta-wa"
                  >
                    <MessageCircle size={17} aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>

                  <a href="tel:+917777889762" className="bd-cta-ghost">
                    <Phone size={16} aria-hidden="true" />
                    <span>Call Now</span>
                  </a>

                </div>

                <p className="bd-hero__trust">
                  <ShieldCheck size={14} aria-hidden="true" />
                  <span>Property details and pricing on request</span>
                </p>

              </div>

              {/* RIGHT — SINGLE PROPERTY IMAGE */}
              <div className="bd-hero__visual">
                <div className="bd-hero__img-card">

                  <img
                    src={imgBlock}
                    alt={`${block.name} at Central Avenue, Kamal Vihar, Raipur`}
                    className="bd-hero__img"
                    fetchPriority="high"
                    decoding="async"
                  />

                  <div className="bd-hero__img-overlay" />

                  <div className="bd-hero__img-top">
                    <span className="bd-hero__img-dot" />
                    <span>Central Avenue</span>
                  </div>

                  <div className="bd-hero__img-badge">
                    <div className="bd-hero__img-badge-icon">
                      <MapPin size={17} aria-hidden="true" />
                    </div>
                    <div className="bd-hero__img-badge-text">
                      <span className="bd-hero__img-location">
                        Kamal Vihar, Raipur
                      </span>
                      <span className="bd-hero__img-caption">
                        Explore the property
                      </span>
                    </div>
                    <ChevronRight
                      className="bd-hero__img-arrow"
                      size={19}
                      aria-hidden="true"
                    />
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="bd-hero__bottomFade" aria-hidden="true" />
      </section>


      {/* ══════════════════════════════════════════
          OVERVIEW — light section
      ══════════════════════════════════════════ */}
      <section className="bd-section bd-overview">
        <div className="bd-container">

          <div className="bd-section-label">
            <TrendingUp size={14} />
            <span>Block Overview & Specifications</span>
          </div>

          <div className="bd-overview__grid">

            {/* Description + highlights */}
            <div>
              <h2 className="bd-h2 bd-h2--dark">
                Engineered for <span>Peak Commercial Performance</span>
              </h2>
              <p className="bd-overview__desc">{block.description}</p>

              <ul className="bd-highlights">
                {block.highlights.map((item, i) => (
                  <li key={i} className="bd-highlights__item">
                    <CheckCircle2 size={17} className="bd-highlights__icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs card */}
            <div className="bd-specs-card">
              <div className="bd-specs-card__head">
                <h3>{block.name} — Core Specifications</h3>
                <span className="bd-tag-gold">RERA Approved</span>
              </div>
              <div className="bd-specs-card__body">
                {[
                  { label: "RERA Registration", value: block.rera, gold: true },
                  { label: "Plot Area", value: block.plotArea },
                  { label: "Floor Configuration", value: block.levels },
                  { label: "Total Commercial Units", value: `${block.totalUnits} Units` },
                  { label: "Units Per Floor", value: block.unitsPerFloor },
                  { label: "Shop Dimensions", value: block.shopSize },
                  { label: "Store / Layout Size", value: block.storeSize },
                  { label: "Core Infrastructure", value: block.core },
                ].map(({ label, value, gold }) => (
                  <div key={label} className="bd-spec-row">
                    <span className="bd-spec-label">{label}</span>
                    <span className={`bd-spec-value${gold ? " gold" : ""}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
    FLOOR BREAKDOWN — CENTERED + EQUAL HEIGHT CARDS
========================================================= */}
      <section className="bd-section bd-floors">
        <div className="bd-container">

          {/* Centered Section Heading */}
          <div className="bd-floors__intro">
            <div className="bd-section-label bd-section-label--light">
              <Layers size={14} />
              <span>Level-by-Level Breakdown</span>
            </div>

            <h2 className="bd-h2 bd-h2--light">
              Floor Plan & <span>Unit Distribution</span>
            </h2>

            <p className="bd-floors__subtitle">
              Explore each of the {block.levelsCount} levels of {block.name},
              crafted for diverse commercial formats — from ground-level
              retail to corporate floors and dining suites.
            </p>
          </div>

          {/* Equal Height Layout */}
          <div className="bd-floors__layout">

            {/* LEFT — FLOOR SELECTOR CARD */}
            <div className="bd-floor-list">
              {block.floors.map((floor, i) => (
                <button
                  key={i}
                  type="button"
                  className={`bd-floor-btn${activeFloorIndex === i ? " active" : ""
                    }`}
                  aria-pressed={activeFloorIndex === i}
                  onClick={() => setActiveFloorIndex(i)}
                >
                  <div className="bd-floor-btn__left">
                    <span className="bd-floor-btn__num">
                      L{i + 1}
                    </span>

                    <span className="bd-floor-btn__name">
                      {floor.name}
                    </span>
                  </div>

                  <span className="bd-floor-btn__badge">
                    {floor.count} Units
                  </span>
                </button>
              ))}
            </div>

            {/* RIGHT — ACTIVE FLOOR DETAILS */}
            <div className="bd-floor-panel">

              <div className="bd-floor-panel__head">
                <div className="bd-floor-panel__heading">
                  <div className="bd-floor-panel__level">
                    Level {activeFloorIndex + 1} of {block.levelsCount}
                  </div>

                  <h3 className="bd-floor-panel__title">
                    {block.floors[activeFloorIndex].name}
                  </h3>
                </div>

                <div className="bd-floor-panel__count">
                  <Store size={16} />
                  <span>
                    {block.floors[activeFloorIndex].count} Units
                  </span>
                </div>
              </div>

              <p className="bd-floor-panel__desc">
                {block.floors[activeFloorIndex].description}
              </p>

              <div className="bd-floor-panel__specs">

                <div className="bd-floor-spec">
                  <Ruler size={18} className="bd-floor-spec__icon" />
                  <div className="bd-floor-spec__content">
                    <div className="bd-floor-spec__label">
                      Shop Size
                    </div>
                    <div className="bd-floor-spec__value">
                      {block.shopSize}
                    </div>
                  </div>
                </div>

                <div className="bd-floor-spec">
                  <Maximize2 size={18} className="bd-floor-spec__icon" />
                  <div className="bd-floor-spec__content">
                    <div className="bd-floor-spec__label">
                      Store / Layout Size
                    </div>
                    <div className="bd-floor-spec__value">
                      {block.storeSize}
                    </div>
                  </div>
                </div>

                <div className="bd-floor-spec">
                  <Building2 size={18} className="bd-floor-spec__icon" />
                  <div className="bd-floor-spec__content">
                    <div className="bd-floor-spec__label">
                      Vertical Access
                    </div>
                    <div className="bd-floor-spec__value">
                      {block.liftCount} High-Speed Lift
                      {Number(block.liftCount) > 1 ? "s" : ""} + Staircase
                    </div>
                  </div>
                </div>

                <div className="bd-floor-spec">
                  <Users size={18} className="bd-floor-spec__icon" />
                  <div className="bd-floor-spec__content">
                    <div className="bd-floor-spec__label">
                      Core Facilities
                    </div>
                    <div className="bd-floor-spec__value">
                      Dedicated Restrooms on Every Floor
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          INQUIRY SECTION
      ══════════════════════════════════════════ */}
      <section id="bd-inquire" className="bd-section bd-inquire">
        <div className="bd-container">

          <div className="bd-inquire__card">

            {/* Left info panel */}
            <div className="bd-inquire__info">
              <div className="bd-section-label bd-section-label--light">
                <Award size={14} />
                <span>Official Sales Desk · Mahesh Ventures</span>
              </div>

              <h2 className="bd-h2 bd-h2--light">
                Interested in <span>{block.name}?</span>
              </h2>

              <p className="bd-inquire__para">
                Contact our authorised sales team to confirm current unit availability, floor-wise pricing, corner
                unit premiums, and flexible payment plans for {block.name} at Central Avenue, Kamal Vihar.
              </p>

              <div className="bd-inquire__meta">
                <div className="bd-meta-item">
                  <ShieldCheck size={17} className="bd-meta-item__icon" />
                  <div>
                    <div className="bd-meta-item__label">Official Marketed By</div>
                    <div className="bd-meta-item__value">Mahesh Ventures</div>
                  </div>
                </div>
                <div className="bd-meta-item">
                  <MapPin size={17} className="bd-meta-item__icon" />
                  <div>
                    <div className="bd-meta-item__label">Project Location</div>
                    <div className="bd-meta-item__value">Sector 7B, CBD Chowk, Kamal Vihar, Raipur</div>
                  </div>
                </div>
                <div className="bd-meta-item">
                  <Award size={17} className="bd-meta-item__icon" />
                  <div>
                    <div className="bd-meta-item__label">RERA Registration</div>
                    <div className="bd-meta-item__value">{block.rera}</div>
                  </div>
                </div>
              </div>

              <div className="bd-inquire__direct">
                <a href="tel:+917777889762" className="bd-pill-phone">
                  <Phone size={15} />
                  <span>+91 77778 89762</span>
                </a>
                <a
                  href={`https://wa.me/918720001111?text=Hi%2C%20I%20want%20pricing%20for%20Central%20Avenue%20${block.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bd-pill-wa"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp Sales Desk</span>
                </a>
              </div>
            </div>

            {/* Right form panel */}
            <div className="bd-inquire__form-wrap">
              {submitted ? (
                <div className="bd-success">
                  <div className="bd-success__icon">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3>Inquiry Received!</h3>
                  <p>Our sales representative will reach out shortly with pricing details and unit availability for {block.name}.</p>
                  <button className="bd-cta-gold" onClick={() => setSubmitted(false)}>
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bd-form">
                  <div className="bd-form__head">
                    <h3>Request Unit Pricing &amp; Details</h3>
                    <p>Complete this form and our team will respond within 2 hours.</p>
                  </div>

                  <div className="bd-form__grid">
                    <div className="bd-field">
                      <label>Selected Block</label>
                      <input type="text" value={block.name} disabled className="bd-input bd-input--disabled" />
                    </div>
                    <div className="bd-field">
                      <label>Space Requirement</label>
                      <select
                        value={form.unitType}
                        onChange={(e) => setForm({ ...form, unitType: e.target.value })}
                        className="bd-input"
                      >
                        <option>Retail Shop</option>
                        <option>Corporate Office</option>
                        <option>Food Joint / Restaurant</option>
                        <option>Gym / Fitness Studio</option>
                        <option>Salon / Clinic</option>
                      </select>
                    </div>
                    <div className="bd-field">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="bd-input"
                      />
                    </div>
                    <div className="bd-field">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="bd-input"
                      />
                    </div>
                    <div className="bd-field bd-field--full">
                      <label>Email Address (Optional)</label>
                      <input
                        type="email"
                        placeholder="yourname@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="bd-input"
                      />
                    </div>
                    <div className="bd-field bd-field--full">
                      <label>Message (Optional)</label>
                      <textarea
                        rows={3}
                        placeholder="Preferred floor, corner unit, budget range..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="bd-input bd-textarea"
                      />
                    </div>
                  </div>

                  <button type="submit" className="bd-submit-btn">
                    <Send size={15} />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EXPLORE OTHER BLOCKS
      ══════════════════════════════════════════ */}
      <section className="bd-explore">
        <div className="bd-container">
          <div className="bd-explore__inner">
            <div className="bd-explore__text">
              <h3>Explore Other Blocks at Central Avenue</h3>
              <p>Compare floor plans, plot areas and commercial configurations across all four blocks.</p>
            </div>
            <div className="bd-explore__blocks">
              {blockKeys.map((key) => {
                const b = BLOCKS_DATA[key];
                const isActive = key === currentBlockId;
                return (
                  <button
                    key={key}
                    className={`bd-explore__btn${isActive ? " active" : ""}`}
                    onClick={() => navigate(`/block/${key}`)}
                  >
                    <span className="bd-explore__btn-name">{b.name}</span>
                    <span className="bd-explore__btn-sub">{b.totalUnits} Units · {b.levelsCount} Levels</span>
                    <ArrowRight size={14} className="bd-explore__btn-arrow" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}