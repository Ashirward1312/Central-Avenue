import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/", Icon: FaInstagram },
  { label: "Facebook", href: "https://facebook.com/", Icon: FaFacebookF },
  { label: "LinkedIn", href: "https://linkedin.com/", Icon: FaLinkedinIn },
  { label: "YouTube", href: "https://youtube.com/", Icon: FaYoutube },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft">
      <div className="ft__inner">

        {/* TOP ROW */}
        <div className="ft__top">

          {/* Logo */}
          <div className="ft__brand">
            <a href="#home" className="ft__logo">
              <div className="ft__logoMark">
                <div className="ft__bar ft__bar--a" />
                <div className="ft__bar ft__bar--b" />
                <div className="ft__bar ft__bar--c" />
              </div>
              <div className="ft__logoText">
                <div className="ft__logoName">Central</div>
                <div className="ft__logoSub">Avenue</div>
              </div>
            </a>
            <p className="ft__tagline">
              A premium commercial destination in Kamal Vihar, Raipur — home to food joints, gyms, salons, retail shops and corporate offices. Possession ready.
            </p>
            {/* Socials */}
            <div className="ft__socials">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="ft__socialBtn"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="ft__col">
            <div className="ft__colTitle">Quick Links</div>
            <nav className="ft__nav">
              {NAV.map((n) => (
                <a key={n.label} href={n.href} className="ft__navLink">
                  {n.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="ft__col">
            <div className="ft__colTitle">Contact Us</div>
            <div className="ft__contact">
              <a href="mailto:mventures011@gmail.com" className="ft__contactRow">
                <Mail size={14} strokeWidth={1.6} className="ft__contactIco" />
                <span>mventures011@gmail.com</span>
              </a>
              <a href="tel:+918871090476" className="ft__contactRow">
                <Phone size={14} strokeWidth={1.6} className="ft__contactIco" />
                <span>+91 88710 90476</span>
              </a>
              <div className="ft__contactRow">
                <MapPin size={14} strokeWidth={1.6} className="ft__contactIco" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>L.K Corporate And Logistic Park, Kurru, 3rd Floor, Near Kamal Vihar, Raipur (C.G)</span>
              </div>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="ft__divider" />

        {/* BOTTOM ROW */}
        <div className="ft__bottom">
          <span className="ft__copy">
            © {year} Central Avenue. All rights reserved.
          </span>

          <span className="ft__copy ft__copy--right">
            Designed &amp; Developed With Care By{" "}
            <a
              href="https://spadvertising.in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "inherit",
                textDecoration: "none",
                fontWeight: "600",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A46D")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
            >
              SP Advertising
            </a>
          </span>
        </div>
      </div>

      <style>{`
        .ft {
          background: #0B121B;
          position: relative;
          overflow: hidden;
        }

        /* Subtle grid overlay like hero */
        .ft::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          opacity: 0.5;
        }

        /* Gold top accent line */
        .ft::after {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #C9A45C, #8F613B, transparent);
        }

        .ft__inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 60px 24px 28px;
        }

        /* TOP ROW */
        .ft__top {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1.6fr;
          gap: 48px;
          align-items: flex-start;
        }

        /* BRAND */
        .ft__brand { display: flex; flex-direction: column; gap: 18px; }

        .ft__logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .ft__logoMark {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 6px;
          border: 1px solid rgba(201,164,92,0.35);
          border-radius: 6px;
        }
        .ft__bar {
          border-radius: 999px;
          background: linear-gradient(90deg, #B58D56, #8F613B);
        }
        .ft__bar--a { width: 22px; height: 2.5px; }
        .ft__bar--b { width: 16px; height: 2.5px; }
        .ft__bar--c { width: 10px; height: 2.5px; }

        .ft__logoText { display: flex; flex-direction: column; }
        .ft__logoName {
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          font-weight: 600;
          color: #fff;
          line-height: 1;
        }
        .ft__logoSub {
          font-family: 'Poppins', sans-serif;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: #C9A45C;
          text-transform: uppercase;
        }

        .ft__tagline {
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          line-height: 1.7;
          color: rgba(255,255,255,0.52);
          max-width: 30ch;
          margin: 0;
        }

        .ft__socials {
          display: flex;
          gap: 10px;
        }
        .ft__socialBtn {
          width: 36px; height: 36px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.65);
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          transition: border-color .18s, background .18s, color .18s, transform .18s;
        }
        .ft__socialBtn:hover {
          border-color: rgba(201,164,92,0.50);
          background: rgba(201,164,92,0.12);
          color: #C9A45C;
          transform: translateY(-2px);
        }

        /* COLUMN */
        .ft__col { display: flex; flex-direction: column; gap: 14px; }

        .ft__colTitle {
          font-family: 'Poppins', sans-serif;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #C9A45C;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(201,164,92,0.20);
        }

        /* NAV */
        .ft__nav { display: flex; flex-direction: column; gap: 10px; }
        .ft__navLink {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.60);
          text-decoration: none;
          transition: color .18s, padding-left .18s;
          display: inline-block;
        }
        .ft__navLink:hover {
          color: #C9A45C;
          padding-left: 4px;
        }

        /* CONTACT */
        .ft__contact { display: flex; flex-direction: column; gap: 12px; }
        .ft__contactRow {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          color: rgba(255,255,255,0.60);
          text-decoration: none;
          transition: color .18s;
          line-height: 1.6;
        }
        a.ft__contactRow:hover { color: #C9A45C; }
        .ft__contactIco {
          color: #C9A45C;
          margin-top: 2px;
          flex-shrink: 0;
        }

        /* DIVIDER */
        .ft__divider {
          margin: 40px 0 20px;
          height: 1px;
          background: rgba(255,255,255,0.08);
        }

        /* BOTTOM */
        .ft__bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }
        .ft__copy {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.38);
        }

        /* Responsive */
        @media (max-width: 860px) {
          .ft__top {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .ft__brand {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 540px) {
          .ft__top { grid-template-columns: 1fr; }
          .ft__bottom { flex-direction: column; align-items: flex-start; gap: 6px; }
        }
      `}</style>
    </footer>
  );
}
