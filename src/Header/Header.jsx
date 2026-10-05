import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home",      href: "#home" },
  { label: "About",     href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact",   href: "#contact" },
];

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState("Home");

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const handleLink = (label) => {
    setActive(label);
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`ca-header${scrolled ? " scrolled" : ""}`}>
        <div className="ca-header__inner">

          {/* ── Logo ── */}
          <a href="#home" className="ca-logo" onClick={() => handleLink("Home")}>
            <div className="ca-logo__mark">
              <div className="ca-logo__bar ca-logo__bar--a" />
              <div className="ca-logo__bar ca-logo__bar--b" />
              <div className="ca-logo__bar ca-logo__bar--c" />
            </div>
            <div className="ca-logo__text">
              <div className="ca-logo__name">Central</div>
              <div className="ca-logo__sub">Avenue</div>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="ca-nav">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className={`ca-nav__link${active === n.label ? " active" : ""}`}
                onClick={() => handleLink(n.label)}
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* ── CTA + Hamburger ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a href="#contact" className="ca-btn-primary desktop-only">
              Enquire Now
            </a>
            <button
              className="ca-hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* ── Mobile Menu ── */}
        {menuOpen && (
          <div className="ca-mobile-menu">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className={`ca-mobile-menu__link${active === n.label ? " active" : ""}`}
                onClick={() => handleLink(n.label)}
              >
                {n.label}
              </a>
            ))}
            <a href="#contact" className="ca-btn-primary ca-mobile-menu__cta" onClick={() => setMenuOpen(false)}>
              Enquire Now
            </a>
          </div>
        )}
      </header>
    </>
  );
}
