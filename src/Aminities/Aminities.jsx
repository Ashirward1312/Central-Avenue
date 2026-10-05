import { useId, useMemo, useState } from "react";
import img1 from "../Images/hh.png";
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
  ChevronRight,
  Diamond
} from "lucide-react";

const TABS = [
  { id: "safety", label: "Safety & Security", Icon: ShieldCheck },
  { id: "parking", label: "Parking & Access", Icon: ParkingSquare },
  { id: "utilities", label: "Utilities", Icon: Zap },
  { id: "support", label: "Business Support", Icon: Building2 },
];

const PANELS = {
  safety: {
    title: "Safety & Security",
    intro: "Secure planning for daily operations and customer confidence.",
    features: [
      { Icon: Camera, title: "CCTV Coverage", text: "Common-area surveillance (as per plan)." },
      { Icon: ShieldCheck, title: "Security Support", text: "Project-level security assistance." },
      { Icon: FireExtinguisher, title: "Fire Safety", text: "Provisions as per applicable norms." },
    ],
    extras: ["Well-lit common areas", "Controlled entry/exit planning"],
  },
  parking: {
    title: "Parking & Access",
    intro: "Convenient access and smoother movement for visitors & occupants.",
    features: [
      { Icon: ParkingSquare, title: "Parking Availability", text: "Visitor/occupant parking (as per plan)." },
      { Icon: Accessibility, title: "Easy Accessibility", text: "Better circulation & reduced congestion." },
      { Icon: Users, title: "Customer-Friendly Layout", text: "Planned for simple navigation." },
    ],
    extras: ["Clear zone markings", "Drop-off zone (as applicable)"],
  },
  utilities: {
    title: "Utilities",
    intro: "Essential services planned for everyday commercial use.",
    features: [
      { Icon: Zap, title: "Power Provision", text: "Commercial power planning (terms apply)." },
      { Icon: Droplets, title: "Water Supply", text: "Regular supply provisions as planned." },
      { Icon: Lightbulb, title: "Lighting", text: "Comfortable movement across zones." },
    ],
    extras: ["Waste management support", "Connectivity ready (provider dependent)"],
  },
  support: {
    title: "Business Support",
    intro: "An ecosystem designed to help brands operate smoothly.",
    features: [
      { Icon: Building2, title: "Multiple Formats", text: "Shops, showrooms & offices (availability-based)." },
      { Icon: ShieldCheck, title: "Upkeep Support", text: "Common-area maintenance assistance." },
      { Icon: ParkingSquare, title: "Convenience", text: "Access + layout support daily flow." },
    ],
    extras: ["Footfall-friendly planning", "Long-term value by design"],
  },
};

const CHIPS = [
  { Icon: ShieldCheck, text: "Security support" },
  { Icon: Camera, text: "CCTV (common areas)" },
  { Icon: ParkingSquare, text: "Parking availability" },
];

export default function Amenities() {
  const [active, setActive] = useState("safety");
  const panel = useMemo(() => PANELS[active], [active]);

  const uid = useId();
  const panelId = `am-panel-${uid}`;

  return (
    <section id="amenities" className="am">
      {/* Side Decorative Text (optional) */}
      <div className="am__side am__side--left">
        <span>MODERN</span>
        <span>BUSINESS</span>
        <span>SPACES</span>
      </div>
      <div className="am__side am__side--right">
        <span>WORK</span>
        <span>CONNECT</span>
        <span>GROW</span>
      </div>

      <div className="am__inner">
        {/* HERO */}
        <header className="am__hero">
          <div className="am__kicker">
            <span className="am__kLine" />
            <span className="am__kText">AMENITIES & FACILITIES</span>
            <span className="am__kLine" />
          </div>

          <h2 className="am__h2">EVERYTHING YOU NEED</h2>
          <h3 className="am__h3">Under One Roof.</h3>

          <p className="am__para">
            A clean, secure and convenient commercial environment — <br />
            planned to support businesses and improve customer experience.
          </p>

          <div className="am__chips" aria-label="Highlights">
            {CHIPS.map((chip) => (
              <div key={chip.text} className="am__chip">
                <div className="am__chipIcoWrap">
                  <chip.Icon size={16} strokeWidth={1.5} />
                </div>
                <span>{chip.text}</span>
              </div>
            ))}
          </div>

          <div className="am__cta">
            <a href="#contact" className="am__btn am__btn--gold">
              ENQUIRE NOW &nbsp;&rarr;
            </a>
            <a href="#contact" className="am__btn am__btn--outline">
              PRICE ON REQUEST
            </a>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="am__layout">
          {/* LEFT NAV BOX */}
          <aside className="am__navBox" aria-label="Amenity categories">
            <div className="am__navHead">
              <div className="am__navSup">CATEGORIES</div>
              <div className="am__navTitle">
                Click to View <span>Details</span>
              </div>
            </div>

            <div className="am__navBody">
              {TABS.map(({ id, label, Icon }) => {
                const isActive = active === id;
                return (
                  <button
                    key={id}
                    type="button"
                    className={`am__navRow ${isActive ? "isActive" : ""}`}
                    aria-controls={panelId}
                    aria-current={isActive ? "true" : "false"}
                    onClick={() => setActive(id)}
                  >
                    <div className="am__navRowLeft">
                      <div className="am__navRowIcon">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <span className="am__navRowLabel">{label}</span>
                    </div>
                    <ChevronRight size={16} className="am__navRowArrow" />
                  </button>
                );
              })}
            </div>

            <div className="am__navFooter">
              <span className="am__navFooterLine"></span>
              <span className="am__navFooterText">PREMIUM COMMERCIAL SPACES</span>
              <span className="am__navFooterLine"></span>
            </div>
          </aside>

          {/* RIGHT PANEL BOX */}
          <div
            className="am__panelBox"
            id={panelId}
            role="region"
            aria-label="Selected amenity details"
          >
            <div className="am__panelContent">
              <div className="am__panelHeadRow">
                <div className="am__panelHeadLeft">
                  <div className="am__panelSup">SELECTED</div>
                  <div className="am__panelTitle">{panel.title}</div>
                </div>
                {/* <div className="am__panelHeadRight">
                  <span>SPACES</span>
                  <span>BUILT FOR</span>
                  <span>BUSINESS</span>
                </div> */}
              </div>

              <p className="am__intro">{panel.intro}</p>

              <div className="am__featuresGrid">
                {panel.features.map(({ Icon, title, text }) => (
                  <div key={title} className="am__feat">
                    <div className="am__featIconWrap">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div className="am__featBody">
                      <span className="am__featTitle">{title}</span>
                      <span className="am__featText">{text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="am__extras">
                {panel.extras.map((x) => (
                  <span key={x} className="am__pill">
                    <CheckCircle2 size={16} strokeWidth={1.5} className="am__pillIco" />
                    {x}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <img src={img1} alt="Building view" className="am__panelImg" />
          </div>
        </div>

        {/* BOTTOM BAND */}
        <div className="am__band" id="contact">
          <img src={img1} alt="" className="am__bandImg" aria-hidden="true" />
          <div className="am__bandContent">
            <div className="am__bandIcon">
              <Diamond size={24} strokeWidth={1} color="#C9A45C" />
            </div>
            <div className="am__bandText">
              <div className="am__bandSup">PLAN YOUR SPACE</div>
              <div className="am__bandTitle">
                Need full amenities list & <span>unit details?</span>
              </div>
              <div className="am__bandSub">
                Share your requirement (Shop / Showroom / Office) — we’ll send availability & pricing.
              </div>
            </div>
          </div>

          <a href="#contact" className="am__bandBtn">
            ENQUIRE NOW &nbsp;&rarr;
          </a>
        </div>
      </div>

      <style>{`
        .am{
          --bg: #F4F1E9;
          --navy: #111A24;
          --navy-light: #1A2533;
          --gold: #A87952;
          --gold-light: #C9A45C;
          --gold-gradient: linear-gradient(135deg, #B58D56, #8F613B);
          --text: #4A4A4A;
          --border: rgba(0,0,0,0.08);

          position: relative;
          background: var(--bg);
          padding: 56px 0 72px;
          overflow: hidden;
        }

        /* Decorative side text */
        .am__side{
          position:absolute;
          top: 110px;
          display:flex;
          flex-direction:column;
          gap:6px;
          font-family:'Montserrat', sans-serif;
          font-size:9px;
          font-weight:700;
          color: rgba(17,26,36,0.35);
          user-select:none;
        }
        .am__side--left{ left: 40px; border-left:2px solid rgba(168,121,82,0.35); padding-left:12px; }
        .am__side--right{ right: 40px; text-align:right; border-right:2px solid rgba(168,121,82,0.35); padding-right:12px; }

        .am__inner{
          position: relative;
          z-index: 2;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* HERO */
        .am__hero{ text-align:center; margin-bottom: 22px; }
        .am__kicker{
          display:inline-flex;
          align-items:center;
          gap:16px;
          margin-bottom: 16px;
        }
        .am__kLine{ width: 44px; height: 1px; background: var(--gold); }
        .am__kText{
          font-family:'Montserrat', sans-serif;
          font-size:10px;
          font-weight:800;
          letter-spacing: .12em;
          text-transform:uppercase;
          color: var(--gold);
        }

        .am__h2{
          margin:0;
          font-family:'Cormorant Garamond', serif;
          font-size: clamp(34px, 4.6vw, 56px);
          font-weight:600;
          line-height:1.08;
          color: var(--navy);
          text-transform: uppercase;
        }
        .am__h3{
          margin:-6px 0 0 0;
          font-family:'Cormorant Garamond', serif;
          font-weight:500;
          color: var(--gold);
          font-size: clamp(36px, 4.9vw, 62px);
          line-height:1.08;
        }
        .am__para{
          margin: 14px auto 0;
          font-family:'DM Sans', sans-serif;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text);
          max-width: 72ch;
        }

        /* Chips */
        .am__chips{
          margin-top: 22px;
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          gap: 10px;
        }
        .am__chip{
          display:inline-flex;
          align-items:center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(0,0,0,0.07);
          font-family:'DM Sans', sans-serif;
          font-size: 13.5px;
          color: var(--navy);
        }
        .am__chipIcoWrap{
          width: 34px;
          height: 34px;
          border-radius: 999px;
          border: 1px solid rgba(201,164,92,0.55);
          display:flex;
          align-items:center;
          justify-content:center;
          color: var(--gold);
          background: rgba(168,121,82,0.08);
        }

        /* CTA */
        .am__cta{
          margin-top: 22px;
          display:flex;
          gap: 12px;
          justify-content:center;
          flex-wrap:wrap;
        }
        .am__btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 14px 22px;
          min-width: 190px;
          border-radius: 12px;
          text-decoration:none;
          font-family:'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .12em;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .am__btn--gold{
          background: var(--gold-gradient);
          color:#fff;
          box-shadow: 0 12px 26px rgba(143,97,59,0.18);
        }
        .am__btn--gold:hover{ transform: translateY(-1px); }
        .am__btn--outline{
          background: rgba(255,255,255,0.25);
          color: var(--navy);
          border: 1px solid rgba(17,26,36,0.18);
        }
        .am__btn--outline:hover{ background: rgba(255,255,255,0.45); }

        /* Layout */
        .am__layout{
          margin-top: 18px;
          display:grid;
          grid-template-columns: 320px 1fr;
          gap: 22px;
          align-items: stretch;
        }

        /* Nav */
        .am__navBox{
          background: var(--navy);
          border-radius: 14px;
          padding: 24px 18px;
          display:flex;
          flex-direction:column;
          box-shadow: 0 20px 40px rgba(0,0,0,0.10);
          overflow:hidden;
        }
        .am__navHead{ margin-bottom: 14px; padding: 0 10px; }
        .am__navSup{
          font-family:'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .12em;
          color: var(--gold-light);
          margin-bottom: 10px;
        }
        .am__navTitle{
          font-family:'Montserrat', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color:#fff;
        }
        .am__navTitle span{ font-family:'Cormorant Garamond', serif; color: var(--gold-light); }

        .am__navBody{ display:flex; flex-direction:column; gap: 8px; }
        .am__navRow{
          background: transparent;
          border: 1px solid transparent;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 14px 12px;
          border-radius: 12px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          cursor:pointer;
          transition: background .2s ease, border-color .2s ease;
        }
        .am__navRow:hover{ background: rgba(255,255,255,0.04); }
        .am__navRow.isActive{
          background: linear-gradient(90deg, rgba(201,164,92,0.16) 0%, transparent 100%);
          border-color: rgba(201,164,92,0.38);
        }
        .am__navRowLeft{ display:flex; align-items:center; gap: 12px; }
        .am__navRowIcon{ color: rgba(255,255,255,0.55); }
        .am__navRow.isActive .am__navRowIcon{ color: var(--gold-light); }
        .am__navRowLabel{
          font-family:'DM Sans', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.78);
        }
        .am__navRow.isActive .am__navRowLabel{ color:#fff; }
        .am__navRowArrow{ color: rgba(255,255,255,0.25); }
        .am__navRow.isActive .am__navRowArrow{ color: var(--gold-light); }

        .am__navFooter{
          margin-top:auto;
          padding-top: 18px;
          display:flex;
          gap: 10px;
          align-items:center;
          opacity: .7;
        }
        .am__navFooterLine{ flex:1; height:1px; background: rgba(255,255,255,0.18); }
        .am__navFooterText{
          font-family:'Montserrat', sans-serif;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: .12em;
          color:#fff;
        }

        /* ===== Panel: Balanced (image not over) ===== */
        .am__panelBox{
          background:#fff;
          border-radius: 14px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
          overflow:hidden;

          /* IMPORTANT: fixed height so image/content match */
          height: 560px;

          /* content + image */
          display:grid;
          grid-template-columns: 1fr minmax(280px, 420px); /* image width cap */
        }

        .am__panelContent{
          padding: 26px 28px;
          display:flex;
          flex-direction:column;
          overflow:auto; /* content zyada ho to scroll, layout break na ho */
        }

        .am__panelImg{
          width: 100%;
          height: 100%;
          object-fit: cover;     /* no empty space */
          object-position: center;
          display:block;
          background: var(--bg);
        }

        .am__panelHeadRow{
          display:flex;
          justify-content:space-between;
          gap: 12px;
          align-items:flex-start;
          margin-bottom: 12px;
        }
        .am__panelSup{
          font-family:'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .12em;
          color: var(--gold);
          margin-bottom: 8px;
        }
        .am__panelTitle{
          font-family:'Cormorant Garamond', serif;
          font-size: 38px;
          font-weight: 600;
          line-height: 1.02;
          color: var(--navy);
        }
        .am__panelHeadRight{
          display:flex;
          flex-direction:column;
          align-items:flex-end;
          gap: 4px;
          font-family:'Montserrat', sans-serif;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: .12em;
          color: rgba(17,26,36,0.30);
        }

        .am__intro{
          margin: 0 0 14px 0;
          font-family:'DM Sans', sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: var(--text);
          max-width: 58ch;
        }

        .am__featuresGrid{
          display:grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-bottom: 14px;
        }
        .am__feat{
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 14px;
          padding: 12px;
          display:flex;
          gap: 10px;
          background: #fff;
        }
        .am__featIconWrap{
          width: 36px;
          height: 36px;
          background: rgba(168,121,82,0.10);
          border-radius: 12px;
          display:flex;
          align-items:center;
          justify-content:center;
          color: var(--gold);
          flex-shrink:0;
        }
        .am__featBody{ display:flex; flex-direction:column; gap: 4px; }
        .am__featTitle{
          font-family:'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: var(--navy);
        }
        .am__featText{
          font-family:'DM Sans', sans-serif;
          font-size: 13px;
          line-height: 1.45;
          color: rgba(0,0,0,0.58);
        }

        .am__extras{
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid var(--border);
          display:flex;
          flex-wrap:wrap;
          gap: 10px;
        }
        .am__pill{
          display:inline-flex;
          align-items:center;
          gap: 8px;
          padding: 8px 10px;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(0,0,0,0.02);
          font-family:'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(0,0,0,0.65);
        }
        .am__pillIco{ color: var(--gold); }

        /* Bottom band */
        .am__band{
          margin-top: 22px;
          background: var(--navy);
          border-radius: 14px;
          padding: 26px 28px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap: 18px;
          position:relative;
          overflow:hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }
        .am__bandImg{
          position:absolute;
          right:0; top:0; bottom:0;
          width: 42%;
          object-fit: cover;
          opacity: 0.13;
          mask-image: linear-gradient(to right, transparent, black);
          -webkit-mask-image: linear-gradient(to right, transparent, black);
          z-index:1;
        }
        .am__bandContent{ position:relative; z-index:2; display:flex; gap: 16px; align-items:flex-start; }
        .am__bandIcon{
          width:48px; height:48px;
          border-radius:999px;
          background: rgba(255,255,255,0.06);
          display:flex; align-items:center; justify-content:center;
          flex-shrink:0;
        }
        .am__bandSup{
          font-family:'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .12em;
          color: var(--gold);
          margin-bottom: 8px;
        }
        .am__bandTitle{
          font-family:'Cormorant Garamond', serif;
          font-size: 30px;
          font-weight: 600;
          color:#fff;
          line-height: 1.08;
          margin-bottom: 6px;
        }
        .am__bandTitle span{ color: var(--gold-light); }
        .am__bandSub{
          font-family:'DM Sans', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.72);
        }
        .am__bandBtn{
          position:relative; z-index:2;
          background: var(--gold-gradient);
          color:#fff;
          padding: 14px 22px;
          border-radius: 12px;
          font-family:'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .12em;
          text-decoration:none;
          white-space: nowrap;
          transition: transform .2s ease;
        }
        .am__bandBtn:hover{ transform: translateY(-1px); }

        /* Responsive */
        @media (max-width: 1100px){
          .am__side{ display:none; }
          .am__layout{ grid-template-columns: 1fr; }
          .am__panelBox{
            height: auto;
            grid-template-columns: 1fr;
          }
          .am__panelImg{
            height: 260px;
          }
          .am__panelContent{
            overflow: visible;
          }
        }
        @media (max-width: 900px){
          .am__featuresGrid{ grid-template-columns: 1fr; }
          .am__band{ flex-direction: column; align-items:flex-start; }
        }
      `}</style>
    </section>
  );
}