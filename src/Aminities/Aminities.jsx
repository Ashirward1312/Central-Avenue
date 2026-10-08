import { useState } from "react";
import imgBuilding from "../Images/hh.png";
import imgParking  from "../Images/parking.jpg";
import imgFood     from "../Images/food.jpg";
import imgTarget   from "../Images/Target.jpg";

import {
  ShieldCheck,
  Camera,
  ParkingSquare,
  Zap,
  Droplets,
  FireExtinguisher,
  Accessibility,
  Building2,
  Users,
  CheckCircle2,
  Lightbulb,
  UtensilsCrossed,
  Dumbbell,
  Scissors,
  ChevronRight,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";

/* ─────────────────────────────────────────────
   TAB DATA — each tab gets its own image + content
───────────────────────────────────────────── */
const TABS = [
  {
    id: "safety",
    label: "Safety & Security",
    subLabel: "24 / 7 protection",
    Icon: ShieldCheck,
    image: imgBuilding,
    imageAlt: "Central Avenue — secure commercial destination",
    accentColor: "#3B82F6",   /* blue tint for safety */
    title: "Safety & Security",
    tagline: "Your Business Deserves a Safe Home.",
    intro:
      "At Central Avenue, the security of your business, your staff and your customers is our top priority. A layered security framework ensures the complex operates safely and confidently around the clock.",
    features: [
      {
        Icon: Camera,
        title: "24 / 7 CCTV Surveillance",
        text: "High-definition cameras cover all common areas, entry & exit points and parking zones without any blind spots.",
      },
      {
        Icon: ShieldCheck,
        title: "On-Site Security Personnel",
        text: "Trained, uniformed security staff are deployed across the complex during all business hours.",
      },
      {
        Icon: FireExtinguisher,
        title: "Fire Safety Systems",
        text: "Fire suppression systems, extinguishers and clearly marked emergency exits installed as per statutory norms.",
      },
      {
        Icon: Lightbulb,
        title: "Well-Lit Premises",
        text: "Bright, energy-efficient lighting throughout lobbies, corridors, stairwells and parking areas for maximum visibility.",
      },
    ],
    extras: [
      "Controlled entry & exit management",
      "Emergency response planning",
      "Periodic security audits",
    ],
  },
  {
    id: "parking",
    label: "Parking & Access",
    subLabel: "Ample space for all",
    Icon: ParkingSquare,
    image: imgParking,
    imageAlt: "Ample parking at Central Avenue Kamal Vihar",
    accentColor: "#10B981",   /* green tint for parking */
    title: "Parking & Access",
    tagline: "Never Lose a Customer to a Parking Problem.",
    intro:
      "Central Avenue boasts one of the largest and best-organised parking facilities in Kamal Vihar — a critical differentiator that ensures customers and clients always find a convenient spot.",
    features: [
      {
        Icon: ParkingSquare,
        title: "Ample Four-Wheeler Bays",
        text: "Clearly marked, spacious car parking bays with smooth internal circulation to eliminate bottlenecks.",
      },
      {
        Icon: Accessibility,
        title: "Dedicated Two-Wheeler Zone",
        text: "Separate, secure motorcycle and scooter parking areas to keep all visitors comfortable.",
      },
      {
        Icon: Users,
        title: "Customer-First Layout",
        text: "Pedestrian walkways, drop-off zones and directional signage make navigation effortless for every visitor.",
      },
      {
        Icon: ShieldCheck,
        title: "Security-Monitored Parking",
        text: "CCTV coverage and security staff presence across all parking zones for complete peace of mind.",
      },
    ],
    extras: [
      "Drop-off & pick-up zones",
      "Separate staff & visitor parking",
      "24-hour access during business hours",
    ],
  },
  {
    id: "dining",
    label: "Food & Dining",
    subLabel: "Restaurant & café hub",
    Icon: UtensilsCrossed,
    image: imgFood,
    imageAlt: "Food joints and dining at Central Avenue",
    accentColor: "#F59E0B",   /* amber tint for food */
    title: "Food & Dining Hub",
    tagline: "The Most Delicious Destination in Kamal Vihar.",
    intro:
      "Central Avenue houses a vibrant selection of food joints, restaurant chains and cafés — making it the go-to dining hub for residents, office-goers and shoppers across Kamal Vihar and beyond.",
    features: [
      {
        Icon: UtensilsCrossed,
        title: "Multi-Cuisine Food Court",
        text: "A dedicated food court zone bringing together diverse cuisines, QSR brands and specialty restaurants under one roof.",
      },
      {
        Icon: Users,
        title: "Outdoor Dining Spaces",
        text: "Beautifully landscaped outdoor seating areas that create a vibrant al fresco dining experience.",
      },
      {
        Icon: Building2,
        title: "F&B Brand Spaces Available",
        text: "Ready-to-fit units ideal for national restaurant chains, cloud kitchens and specialty café brands.",
      },
      {
        Icon: Zap,
        title: "Commercial Kitchen Provisions",
        text: "Power, water and ventilation provisions planned to support full commercial kitchen operations.",
      },
    ],
    extras: [
      "High daily footfall from offices & retail",
      "Ideal for QSR, casual dining & cafés",
      "Delivery-friendly infrastructure",
    ],
  },
  {
    id: "support",
    label: "Business Support",
    subLabel: "Built for every brand",
    Icon: Building2,
    image: imgTarget,
    imageAlt: "Diverse businesses — gym, salon, shops, offices at Central Avenue",
    accentColor: "#8B5CF6",   /* purple tint for support */
    title: "Business Support",
    tagline: "Every Business Finds Its Perfect Space Here.",
    intro:
      "Central Avenue is designed for the full spectrum of commercial enterprise — from premium gyms and modern salons to leading retail boutiques and corporate offices. A complete, self-sustaining business ecosystem.",
    features: [
      {
        Icon: Dumbbell,
        title: "Gym & Fitness Studios",
        text: "Large-format units with high ceilings and ample power — ideal for premium gyms, yoga studios and wellness centres.",
      },
      {
        Icon: Scissors,
        title: "Salons & Beauty Clinics",
        text: "Dedicated spaces for premium salons, beauty clinics and spas with excellent visibility and customer flow.",
      },
      {
        Icon: Building2,
        title: "Corporate Offices",
        text: "Contemporary, light-filled office suites designed for productivity, professional image and client impressions.",
      },
      {
        Icon: BadgeCheck,
        title: "Common Area Maintenance",
        text: "Professional upkeep of all shared lobbies, corridors, façades and landscaping for a premium appearance year-round.",
      },
    ],
    extras: [
      "200+ diverse commercial units",
      "Retail shops & showroom spaces",
      "Long-term brand visibility & footfall",
    ],
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function Amenities() {
  const [active, setActive] = useState("safety");
  const tab = TABS.find((t) => t.id === active);

  return (
    <section id="amenities" className="am">
      <div className="am__inner">

        {/* ── SECTION HEADER ── */}
        <div className="am__header">
          <div className="am__kicker">
            <span className="am__kLine" />
            <span className="am__kText">AMENITIES & FACILITIES</span>
            <span className="am__kLine" />
          </div>
          <h2 className="am__h2">Everything Your Business Needs</h2>
          <h3 className="am__h3">Under One Roof.</h3>
          <p className="am__headerPara">
            Central Avenue is built with every infrastructure and lifestyle
            amenity a modern commercial destination demands — select a
            category below to explore what awaits you.
          </p>
        </div>

        {/* ── TAB SELECTOR BAR ── */}
        <div className="am__tabBar" role="tablist" aria-label="Amenity categories">
          {TABS.map(({ id, label, subLabel, Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                role="tab"
                type="button"
                aria-selected={isActive}
                className={`am__tabBtn${isActive ? " is-active" : ""}`}
                onClick={() => setActive(id)}
              >
                <span className="am__tabBtnIco">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <span className="am__tabBtnLabels">
                  <span className="am__tabBtnLabel">{label}</span>
                  <span className="am__tabBtnSub">{subLabel}</span>
                </span>
                <ChevronRight size={14} className="am__tabBtnArrow" />
              </button>
            );
          })}
        </div>

        {/* ── MAIN PANEL ── */}
        <div className="am__panel" key={active} role="tabpanel">

          {/* LEFT — IMAGE */}
          <div className="am__panelImg">
            <img
              src={tab.image}
              alt={tab.imageAlt}
              className="am__panelImgEl"
            />
            {/* Gradient overlay */}
            <div className="am__panelImgGrad" />
            {/* Floating label on image */}
            <div className="am__panelImgBadge">
              <tab.Icon size={14} strokeWidth={1.5} />
              <span>{tab.label}</span>
            </div>
            {/* Tagline ribbon */}
            <div className="am__panelTagline">"{tab.tagline}"</div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="am__panelBody">

            {/* Head */}
            <div className="am__panelHead">
              <div className="am__panelHeadIco">
                <tab.Icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <div className="am__panelHeadSup">SELECTED CATEGORY</div>
                <div className="am__panelHeadTitle">{tab.title}</div>
              </div>
            </div>

            {/* Intro */}
            <p className="am__panelIntro">{tab.intro}</p>

            {/* Feature grid */}
            <div className="am__featGrid">
              {tab.features.map(({ Icon, title, text }) => (
                <div key={title} className="am__feat">
                  <div className="am__featIco">
                    <Icon size={17} strokeWidth={1.5} />
                  </div>
                  <div className="am__featCopy">
                    <span className="am__featTitle">{title}</span>
                    <span className="am__featText">{text}</span>
                  </div>
                </div>
              ))}
            </div>

           
          </div>
        </div>

        {/* ── BOTTOM CTA BAND ── */}
        <div className="am__band">
          <img src={imgBuilding} alt="" className="am__bandBg" aria-hidden="true" />
          <div className="am__bandInner">
            <div className="am__bandLeft">
              <div className="am__bandSup">PLAN YOUR SPACE</div>
              <div className="am__bandTitle">
                Ready to find your perfect unit at{" "}
                <span>Central Avenue?</span>
              </div>
              <div className="am__bandSub">
                Share your requirement — Shop / Showroom / Office / Gym / Salon / Restaurant — and we will send you availability &amp; pricing immediately.
              </div>
            </div>
            <a href="#contact" className="am__bandBtn">
              GET IN TOUCH &nbsp;→
            </a>
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════════
          STYLES
      ══════════════════════════════════════════════ */}
      <style>{`
        /* ── TOKENS ── */
        .am {
          --navy:   #0D1520;
          --navy2:  #162030;
          --gold:   #A87952;
          --goldL:  #C9A45C;
          --goldG:  linear-gradient(135deg, #B58D56 0%, #8F613B 100%);
          --bg:     #F4F1E9;
          --bgW:    #FFFFFF;
          --text:   #4A4A4A;
          --border: rgba(0,0,0,0.08);

          background: var(--bg);
          padding: 72px 0 88px;
          overflow: hidden;
          position: relative;
        }

        /* faint dot-grid background */
        .am::before {
          content: "";
          position: absolute; inset: 0;
          background-image:
            radial-gradient(circle, rgba(168,121,82,0.10) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
          z-index: 0;
        }

        .am__inner {
          position: relative; z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(1.25rem, 4vw, 3rem);
          display: flex;
          flex-direction: column;
          gap: 52px;
        }

        /* ── SECTION HEADER ── */
        .am__header { text-align: center; max-width: 720px; margin: 0 auto; }

        .am__kicker {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }
        .am__kLine { width: 40px; height: 1px; background: var(--gold); }
        .am__kText {
          font-family: 'Poppins', sans-serif;
          font-size: 10px; font-weight: 800;
          letter-spacing: .18em; text-transform: uppercase;
          color: var(--gold);
        }

        .am__h2 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(32px, 4.2vw, 54px);
          font-weight: 600; line-height: 1.08;
          color: var(--navy); text-transform: uppercase; margin: 0;
        }
        .am__h3 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(34px, 4.6vw, 60px);
          font-weight: 400; 
          color: var(--gold); margin: -4px 0 0; line-height: 1.08;
        }
        .am__headerPara {
          font-family: 'Poppins', sans-serif;
          font-size: 15px; line-height: 1.85;
          color: var(--text); margin: 16px auto 0;
          max-width: 65ch;
        }

        /* ── TAB BAR ── */
        .am__tabBar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          background: var(--navy);
          border-radius: 18px;
          padding: 10px;
        }

        .am__tabBtn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 14px;
          border-radius: 12px;
          border: 1px solid transparent;
          background: transparent;
          cursor: pointer;
          text-align: left;
          transition: background .22s, border-color .22s;
          position: relative;
          overflow: hidden;
        }
        .am__tabBtn::before {
          content: "";
          position: absolute; inset: 0;
          background: rgba(201,164,92,.08);
          opacity: 0;
          transition: opacity .22s;
          border-radius: 11px;
        }
        .am__tabBtn:hover::before { opacity: 1; }

        .am__tabBtn.is-active {
          background: rgba(201,164,92,.14);
          border-color: rgba(201,164,92,.40);
        }

        .am__tabBtnIco {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.10);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,.50);
          flex-shrink: 0;
          transition: background .22s, color .22s, border-color .22s;
        }
        .am__tabBtn.is-active .am__tabBtnIco {
          background: var(--goldG);
          border-color: transparent;
          color: #fff;
        }

        .am__tabBtnLabels {
          display: flex; flex-direction: column; gap: 2px;
          flex: 1; min-width: 0;
        }
        .am__tabBtnLabel {
          font-family: 'Poppins', sans-serif;
          font-size: 11.5px; font-weight: 700;
          color: rgba(255,255,255,.75);
          line-height: 1.2;
          transition: color .22s;
        }
        .am__tabBtn.is-active .am__tabBtnLabel { color: #fff; }

        .am__tabBtnSub {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,.38);
          transition: color .22s;
        }
        .am__tabBtn.is-active .am__tabBtnSub { color: rgba(201,164,92,.80); }

        .am__tabBtnArrow {
          color: rgba(255,255,255,.18);
          flex-shrink: 0;
          transition: color .22s, transform .22s;
        }
        .am__tabBtn.is-active .am__tabBtnArrow {
          color: var(--goldL);
          transform: rotate(90deg);
        }

        /* ── MAIN PANEL ── */
        .am__panel {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 28px 72px rgba(0,0,0,0.14);
          animation: amFadeIn .35s ease both;
          height: 580px;
        }
        @keyframes amFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* LEFT — IMAGE SIDE */
        .am__panelImg {
          position: relative;
          overflow: hidden;
          min-width: 0;
        }
        .am__panelImgEl {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          display: block;
          transition: transform .6s ease;
        }
        .am__panelImg:hover .am__panelImgEl { transform: scale(1.04); }

        .am__panelImgGrad {
          position: absolute; inset: 0;
          background:
            linear-gradient(135deg, rgba(13,21,32,0.55) 0%, transparent 55%),
            linear-gradient(180deg, transparent 45%, rgba(13,21,32,0.72) 100%);
          pointer-events: none;
        }

        .am__panelImgBadge {
          position: absolute; top: 20px; left: 20px;
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(8px);
          font-family: 'Poppins', sans-serif;
          font-size: 10px; font-weight: 800; letter-spacing: .12em;
          color: var(--navy);
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
        }

        .am__panelTagline {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 20px 24px;
          font-family: 'Poppins', sans-serif;
          font-size: clamp(15px, 1.6vw, 19px);
          
          font-weight: 500;
          color: rgba(255,255,255,0.90);
          line-height: 1.4;
          text-shadow: 0 1px 4px rgba(0,0,0,0.4);
        }

        /* RIGHT — BODY SIDE */
        .am__panelBody {
          background: #fff;
          padding: clamp(24px, 3vw, 40px) clamp(24px, 3vw, 40px);
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-width: 0;
          overflow-y: auto;
        }
        
        .am__panelBody::-webkit-scrollbar {
          width: 6px;
        }
        .am__panelBody::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.02);
        }
        .am__panelBody::-webkit-scrollbar-thumb {
          background: rgba(168,121,82,0.3);
          border-radius: 10px;
        }
        .am__panelBody::-webkit-scrollbar-thumb:hover {
          background: rgba(168,121,82,0.6);
        }

        .am__panelHead {
          display: flex; align-items: flex-start; gap: 14px;
        }
        .am__panelHeadIco {
          width: 48px; height: 48px;
          border-radius: 14px;
          background: rgba(168,121,82,0.10);
          border: 1px solid rgba(168,121,82,0.24);
          color: var(--gold);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .am__panelHeadSup {
          font-family: 'Poppins', sans-serif;
          font-size: 9px; font-weight: 800; letter-spacing: .16em;
          color: var(--gold); text-transform: uppercase;
          margin-bottom: 4px;
        }
        .am__panelHeadTitle {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(26px, 2.8vw, 36px);
          font-weight: 600; line-height: 1.05;
          color: var(--navy);
        }

        .am__panelIntro {
          font-family: 'Poppins', sans-serif;
          font-size: 14.5px; line-height: 1.80;
          color: #555;
          border-left: 3px solid rgba(168,121,82,0.40);
          padding-left: 14px;
          margin: 0;
        }

        /* Feature grid */
        .am__featGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .am__feat {
          display: flex; align-items: flex-start; gap: 11px;
          padding: 14px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: rgba(244,241,233,0.50);
          transition: background .2s, transform .2s, box-shadow .2s;
        }
        .am__feat:hover {
          background: rgba(255,255,255,1);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.06);
        }
        .am__featIco {
          width: 34px; height: 34px;
          border-radius: 10px;
          background: rgba(168,121,82,0.10);
          border: 1px solid rgba(168,121,82,0.20);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold); flex-shrink: 0;
        }
        .am__featCopy { display: flex; flex-direction: column; gap: 4px; }
        .am__featTitle {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px; font-weight: 800; letter-spacing: .04em;
          color: var(--navy);
        }
        .am__featText {
          font-family: 'Poppins', sans-serif;
          font-size: 12.5px; line-height: 1.55;
          color: rgba(0,0,0,0.55);
        }

        /* Extra pills */
        .am__extras {
          display: flex; flex-wrap: wrap; gap: 8px;
          padding-top: 12px;
          border-top: 1px solid var(--border);
        }
        .am__pill {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 7px 12px;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.09);
          background: rgba(0,0,0,0.02);
          font-family: 'Poppins', sans-serif;
          font-size: 12.5px;
          color: rgba(0,0,0,0.64);
        }
        .am__pillIco { color: var(--gold); }

        /* CTA row */
        .am__panelCta {
          display: flex; gap: 10px; flex-wrap: wrap;
          margin-top: auto;
        }
        .am__ctaBtn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 22px;
          border-radius: 10px;
          font-family: 'Poppins', sans-serif;
          font-size: 10px; font-weight: 800; letter-spacing: .12em;
          text-decoration: none; white-space: nowrap;
          transition: transform .2s, box-shadow .2s, background .2s;
        }
        .am__ctaBtn--gold {
          background: var(--goldG); color: #fff;
          box-shadow: 0 10px 24px rgba(143,97,59,0.22);
        }
        .am__ctaBtn--gold:hover { transform: translateY(-2px); box-shadow: 0 16px 32px rgba(143,97,59,0.28); }
        .am__ctaBtn--ghost {
          background: rgba(255,255,255,0.30);
          color: var(--navy);
          border: 1px solid rgba(17,26,36,0.18);
        }
        .am__ctaBtn--ghost:hover { background: rgba(255,255,255,0.70); }

        /* ── BOTTOM BAND ── */
        .am__band {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          background: var(--navy);
          box-shadow: 0 24px 60px rgba(0,0,0,0.14);
        }
        .am__bandBg {
          position: absolute; right: 0; top: 0; bottom: 0;
          width: 45%; height: 100%;
          object-fit: cover; object-position: center left;
          opacity: 0.12;
          mask-image: linear-gradient(to right, transparent, black 60%);
          -webkit-mask-image: linear-gradient(to right, transparent, black 60%);
        }
        .am__bandInner {
          position: relative; z-index: 2;
          display: flex; justify-content: space-between; align-items: center;
          gap: 24px; flex-wrap: wrap;
          padding: clamp(28px, 3vw, 40px) clamp(28px, 4vw, 52px);
        }
        .am__bandLeft { flex: 1; min-width: 0; }
        .am__bandSup {
          font-family: 'Poppins', sans-serif;
          font-size: 9px; font-weight: 800; letter-spacing: .18em;
          color: var(--goldL); margin-bottom: 10px;
        }
        .am__bandTitle {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(24px, 2.6vw, 34px);
          font-weight: 600; line-height: 1.1;
          color: #fff; margin-bottom: 10px;
        }
        .am__bandTitle span { color: var(--goldL); }
        .am__bandSub {
          font-family: 'Poppins', sans-serif;
          font-size: 14px; line-height: 1.75;
          color: rgba(255,255,255,0.65);
          max-width: 66ch;
        }
        .am__bandBtn {
          display: inline-flex; align-items: center;
          padding: 16px 28px;
          border-radius: 12px;
          background: var(--goldG);
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 10px; font-weight: 800; letter-spacing: .14em;
          text-decoration: none; white-space: nowrap;
          box-shadow: 0 12px 28px rgba(143,97,59,0.28);
          transition: transform .2s, box-shadow .2s;
        }
        .am__bandBtn:hover { transform: translateY(-2px); box-shadow: 0 18px 36px rgba(143,97,59,0.34); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .am__tabBar { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 860px) {
          .am__panel { grid-template-columns: 1fr; }
          .am__panelImg { aspect-ratio: 16/9; min-height: 280px; }
          .am__panelImgEl { height: 100%; }
          .am__tabBar { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .am__featGrid { grid-template-columns: 1fr; }
          .am__tabBar { grid-template-columns: 1fr; }
          .am__tabBtnSub { display: none; }
          .am__bandInner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}