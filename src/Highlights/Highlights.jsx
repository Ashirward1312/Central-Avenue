import imgFood from "../Images/food.jpg";
import imgTarget from "../Images/Target.jpg";
import imgParking from "../Images/parking.jpg";
import imgMost from "../Images/most.jpg";
import {
  UtensilsCrossed,
  Dumbbell,
  Scissors,
  ShoppingBag,
  Building2,
  ParkingSquare,
  Flame,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";

/* ── Target Audience Cards ── */
const TARGETS = [
  {
    Icon: Dumbbell,
    title: "Gym & Fitness Studios",
    text: "High-footfall commercial complex ideal for premium fitness centres and wellness brands seeking active customer bases.",
  },
  {
    Icon: ShoppingBag,
    title: "Retail Shops & Boutiques",
    text: "Ground and upper-floor retail spaces with glass frontage and excellent street visibility — perfect for growing brands.",
  },
  {
    Icon: Scissors,
    title: "Salons & Beauty Clinics",
    text: "Dedicated units for premium salons, spas and beauty studios catering to the area's affluent residential catchment.",
  },
  {
    Icon: Building2,
    title: "Corporate Offices",
    text: "Contemporary office suites with modern interiors, ample natural light and a professional business environment.",
  },
];

/* ── Food Joint Chain Highlights ── */
const FOOD_FEATURES = [
  "Multiple food joint chains & restaurants",
  "Café & quick-service restaurant spaces",
  "Dedicated outdoor dining areas",
  "High-footfall food court environment",
  "Ideal for national & regional F&B brands",
  "Ready-to-fit commercial kitchen provisions",
];

export default function Highlights() {
  return (
    <section id="highlights" className="hl">
      <div className="hl__inner">

        {/* ── SECTION BADGE ── */}
        <div className="hl__badge">
          <span className="hl__badgeLine" />
          <span className="hl__badgeText">WHY CENTRAL AVENUE</span>
          <span className="hl__badgeLine" />
        </div>

        {/* ═══════════════════════════════════════════
            BLOCK 1 — FOOD COURT & DINING
        ═══════════════════════════════════════════ */}
        <div className="hl__block hl__block--imageLeft">
          <div className="hl__imgWrap">
            <img src={imgFood} alt="Food joints and dining at Central Avenue" className="hl__img" loading="lazy" />
            <div className="hl__imgOverlay" />
            <div className="hl__imgChip">
              <UtensilsCrossed size={14} strokeWidth={1.5} />
              <span>Food &amp; Dining Hub</span>
            </div>
          </div>
          <div className="hl__content">
            <div className="hl__kicker">
              <UtensilsCrossed size={16} strokeWidth={1.5} className="hl__kickerIco" />
              <span>F&amp;B &amp; DINING</span>
            </div>
            <h2 className="hl__h2">
              A Thriving <span>Food Court</span> &amp; Dining Destination
            </h2>
            <p className="hl__para">
              Central Avenue is home to a curated selection of food joints, restaurant chains and cafés — making it one of Kamal Vihar's most sought-after dining addresses. Whether you are a QSR brand, a casual dining chain or a specialty café, this is where your business finds the right audience.
            </p>
            <ul className="hl__list">
              {FOOD_FEATURES.map((f) => (
                <li key={f} className="hl__listItem">
                  <CheckCircle2 size={15} strokeWidth={1.8} className="hl__listIco" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="hl__cta">
              Book Your F&amp;B Space <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            BLOCK 2 — MOST HAPPENING PLACE
        ═══════════════════════════════════════════ */}
        <div className="hl__block hl__block--imageRight hl__block--dark">
          <div className="hl__content hl__content--light">
            <div className="hl__kicker hl__kicker--gold">
              <Flame size={16} strokeWidth={1.5} className="hl__kickerIco" />
              <span>KAMAL VIHAR'S #1 DESTINATION</span>
            </div>
            <h2 className="hl__h2 hl__h2--light">
              The Most <span>Happening Place</span> in Kamal Vihar
            </h2>
            <p className="hl__para hl__para--light">
              Central Avenue is Kamal Vihar's most vibrant commercial landmark — buzzing with activity from morning until late evening. With a diverse tenant mix, organised events and a high-footfall environment, it is the address every business aspires to be part of.
            </p>
            <div className="hl__statsRow">
             
            </div>
            <div className="hl__locationBadge">
              <MapPin size={14} strokeWidth={1.5} />
              <span>Kamal Vihar, Raipur, Chhattisgarh</span>
            </div>
          </div>
          <div className="hl__imgWrap">
            <img src={imgMost} alt="Vibrant footfall at Central Avenue Kamal Vihar" className="hl__img" loading="lazy" />
            <div className="hl__imgOverlay hl__imgOverlay--dark" />
            <div className="hl__imgChip hl__imgChip--gold">
              <Flame size={14} strokeWidth={1.5} />
              <span>Live &amp; Thriving</span>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            BLOCK 3 — AMPLE PARKING
        ═══════════════════════════════════════════ */}
        <div className="hl__block hl__block--imageLeft">
          <div className="hl__imgWrap">
            <img src={imgParking} alt="Ample parking at Central Avenue" className="hl__img" loading="lazy" />
            <div className="hl__imgOverlay" />
            <div className="hl__imgChip">
              <ParkingSquare size={14} strokeWidth={1.5} />
              <span>Ample Parking</span>
            </div>
          </div>
          <div className="hl__content">
            <div className="hl__kicker">
              <ParkingSquare size={16} strokeWidth={1.5} className="hl__kickerIco" />
              <span>PARKING &amp; ACCESSIBILITY</span>
            </div>
            <h2 className="hl__h2">
              Stress-Free Parking <span>for Every Visitor</span>
            </h2>
            <p className="hl__para">
              Central Avenue offers a sprawling, well-organised parking facility — one of the largest in Kamal Vihar. Wide drive aisles, clearly marked bays, dedicated two-wheeler zones and smooth entry / exit circulation ensure a seamless experience for customers, clients and business owners alike.
            </p>
            <div className="hl__parkingGrid">
              {[
                { label: "Four-Wheeler Parking", sub: "Dedicated bays with marked zones" },
                { label: "Two-Wheeler Zone", sub: "Separate, secure motorcycle parking" },
                { label: "Easy Circulation", sub: "Wide drive lanes for smooth movement" },
                { label: "24 × 7 Availability", sub: "Open access during all business hours" },
              ].map((p) => (
                <div key={p.label} className="hl__parkCard">
                  <div className="hl__parkCardTitle">{p.label}</div>
                  <div className="hl__parkCardSub">{p.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            BLOCK 4 — TARGET AUDIENCE
        ═══════════════════════════════════════════ */}
        <div className="hl__targetSection">
          <div className="hl__targetTop">
            <div className="hl__targetLeft">
              <div className="hl__kicker">
                <Flame size={16} strokeWidth={1.5} className="hl__kickerIco" />
                <span>IDEAL FOR</span>
              </div>
              <h2 className="hl__h2 hl__h2--dark">
                Who Should <span>Be Here?</span>
              </h2>
              <p className="hl__para">
                Central Avenue is thoughtfully designed to support a wide spectrum of businesses. From fitness centres and lifestyle brands to corporate offices and dining establishments — every enterprise finds its perfect home here.
              </p>
            </div>
            <div className="hl__targetImgWrap">
              <img
                src={imgTarget}
                alt="Diverse businesses at Central Avenue — gym, salon, shops, offices"
                className="hl__targetImg"
                loading="lazy"
              />
              <div className="hl__targetImgOverlay" />
            </div>
          </div>
          <div className="hl__targetGrid">
            {TARGETS.map(({ Icon, title, text }) => (
              <div key={title} className="hl__targetCard">
                <div className="hl__targetIcoWrap">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className="hl__targetBody">
                  <div className="hl__targetTitle">{title}</div>
                  <div className="hl__targetText">{text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="hl__targetCta">
            <a href="#contact" className="hl__ctaGold">
              Enquire About Your Space <ArrowUpRight size={15} />
            </a>
            <a href="#amenities" className="hl__ctaOutline">
              View All Amenities
            </a>
          </div>
        </div>

      </div>

      <style>{`
        /* ─── SECTION SHELL ─── */
        .hl {
          background: #F4F1E9;
          padding: 80px 0 100px;
          overflow: hidden;
        }
        .hl__inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 clamp(1.25rem, 4vw, 3rem);
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        /* ─── BADGE ─── */
        .hl__badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        .hl__badgeLine { flex: 0 0 48px; height: 1px; background: #A87952; }
        .hl__badgeText {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .18em;
          color: #A87952;
          white-space: nowrap;
        }

        /* ─── SHARED BLOCK ─── */
        .hl__block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          border-radius: 20px;
          overflow: hidden;
        }
        .hl__block--imageRight { direction: rtl; }
        .hl__block--imageRight > * { direction: ltr; }
        .hl__block--dark {
          background: #111A24;
          padding: 0;
        }

        /* ─── IMAGE WRAP ─── */
        .hl__imgWrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          flex-shrink: 0;
        }
        .hl__block--dark .hl__imgWrap {
          border-radius: 0;
          aspect-ratio: 4 / 3.2;
        }
        .hl__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.6s ease;
        }
        .hl__imgWrap:hover .hl__img { transform: scale(1.04); }
        .hl__imgOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(168,121,82,0.18), transparent 60%),
                      linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.22) 100%);
          pointer-events: none;
        }
        .hl__imgOverlay--dark {
          background: linear-gradient(90deg, rgba(17,26,36,0.55), transparent 60%);
        }
        .hl__imgChip {
          position: absolute;
          bottom: 16px;
          left: 16px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(8px);
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .12em;
          color: #111A24;
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
        }
        .hl__imgChip--gold {
          background: linear-gradient(135deg, #B58D56, #8F613B);
          color: #fff;
        }

        /* ─── CONTENT ─── */
        .hl__content {
          padding: 0 8px;
        }
        .hl__block--dark .hl__content {
          padding: 48px 40px;
        }
        .hl__content--light {}

        /* ─── KICKER ─── */
        .hl__kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .16em;
          color: #A87952;
          text-transform: uppercase;
        }
        .hl__kicker--gold { color: #C9A45C; }
        .hl__kickerIco { flex-shrink: 0; }

        /* ─── HEADINGS ─── */
        .hl__h2 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(28px, 3.2vw, 44px);
          font-weight: 600;
          line-height: 1.1;
          color: #111A24;
          margin-bottom: 16px;
        }
        .hl__h2 span { color: #A87952; }
        .hl__h2--light { color: #fff; }
        .hl__h2--light span { color: #C9A45C; }
        .hl__h2--dark { color: #111A24; }

        /* ─── PARAGRAPH ─── */
        .hl__para {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          line-height: 1.85;
          color: #555;
          margin-bottom: 20px;
          max-width: 52ch;
        }
        .hl__para--light { color: rgba(255,255,255,0.72); }

        /* ─── CHECKLIST ─── */
        .hl__list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 16px;
          margin-bottom: 28px;
        }
        .hl__listItem {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          color: #444;
          line-height: 1.5;
        }
        .hl__listIco { color: #A87952; flex-shrink: 0; margin-top: 1px; }

        /* ─── CTA BUTTONS ─── */
        .hl__cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 26px;
          background: linear-gradient(135deg, #B58D56, #8F613B);
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .14em;
          text-decoration: none;
          border-radius: 10px;
          box-shadow: 0 12px 28px rgba(143,97,59,0.22);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .hl__cta:hover { transform: translateY(-2px); box-shadow: 0 18px 36px rgba(143,97,59,0.28); }

        /* ─── STATS ROW (dark block) ─── */
        .hl__statsRow {
          display: flex;
          align-items: center;
          gap: 0;
          margin-bottom: 24px;
        }
        .hl__stat { text-align: center; padding: 0 20px 0 0; }
        .hl__stat:first-child { padding-left: 0; }
        .hl__statNum {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 600;
          color: #C9A45C;
          line-height: 1;
        }
        .hl__statLabel {
          font-family: 'Poppins', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.60);
          margin-top: 4px;
        }
        .hl__statDiv {
          width: 1px;
          height: 36px;
          background: rgba(255,255,255,0.15);
          margin: 0 20px 0 0;
          flex-shrink: 0;
        }
        .hl__locationBadge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(201,164,92,0.35);
          color: rgba(255,255,255,0.65);
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .12em;
        }
        .hl__locationBadge svg { color: #C9A45C; }

        /* ─── PARKING GRID ─── */
        .hl__parkingGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 0;
        }
        .hl__parkCard {
          padding: 16px;
          border-radius: 12px;
          border: 1px solid rgba(168,121,82,0.18);
          background: rgba(255,255,255,0.70);
          transition: background .2s, transform .2s;
        }
        .hl__parkCard:hover { background: rgba(255,255,255,1); transform: translateY(-2px); }
        .hl__parkCardTitle {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .06em;
          color: #111A24;
          margin-bottom: 4px;
        }
        .hl__parkCardSub {
          font-family: 'Poppins', sans-serif;
          font-size: 12.5px;
          color: #666;
          line-height: 1.5;
        }

        /* ─── TARGET SECTION ─── */
        .hl__targetSection {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .hl__targetTop {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .hl__targetImgWrap {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 16 / 10;
          box-shadow: 0 24px 60px rgba(0,0,0,0.14);
        }
        .hl__targetImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.6s ease;
        }
        .hl__targetImgWrap:hover .hl__targetImg { transform: scale(1.04); }
        .hl__targetImgOverlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(168,121,82,0.16), transparent 55%),
                      linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.24) 100%);
          pointer-events: none;
        }

        .hl__targetGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .hl__targetCard {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 22px 18px;
          border-radius: 16px;
          border: 1px solid rgba(168,121,82,0.18);
          background: #fff;
          box-shadow: 0 8px 28px rgba(0,0,0,0.06);
          transition: transform .2s, box-shadow .2s;
        }
        .hl__targetCard:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.10);
        }
        .hl__targetIcoWrap {
          width: 48px; height: 48px;
          border-radius: 14px;
          background: rgba(168,121,82,0.10);
          border: 1px solid rgba(168,121,82,0.22);
          display: flex; align-items: center; justify-content: center;
          color: #A87952;
          flex-shrink: 0;
        }
        .hl__targetTitle {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #111A24;
          letter-spacing: .04em;
        }
        .hl__targetText {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: #666;
          line-height: 1.65;
        }

        .hl__targetCta {
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
        }
        .hl__ctaGold {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 26px;
          background: linear-gradient(135deg, #B58D56, #8F613B);
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .14em;
          text-decoration: none;
          border-radius: 10px;
          box-shadow: 0 12px 28px rgba(143,97,59,0.22);
          transition: transform .2s ease;
        }
        .hl__ctaGold:hover { transform: translateY(-2px); }
        .hl__ctaOutline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 26px;
          border: 1.5px solid rgba(17,26,36,0.20);
          color: #111A24;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .14em;
          text-decoration: none;
          border-radius: 10px;
          transition: border-color .2s, background .2s;
        }
        .hl__ctaOutline:hover { border-color: #A87952; background: rgba(168,121,82,0.06); }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1024px) {
          .hl__targetGrid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 860px) {
          .hl__block { grid-template-columns: 1fr; direction: ltr; gap: 24px; }
          .hl__block--dark .hl__content { padding: 32px 24px; }
          .hl__block--imageRight { direction: ltr; }
          .hl__targetTop { grid-template-columns: 1fr; }
          .hl__list { grid-template-columns: 1fr; }
          .hl__parkingGrid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .hl__targetGrid { grid-template-columns: 1fr; }
          .hl__statsRow { flex-direction: column; gap: 16px; align-items: flex-start; }
          .hl__statDiv { width: 40px; height: 1px; margin: 0; }
          .hl__stat { padding: 0; text-align: left; }
        }
      `}</style>
    </section>
  );
}
