import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Building2 } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const BLOCKS = [
  { id: "a", label: "Block A", to: "/block/a" },
  { id: "b", label: "Block B", to: "/block/b" },
  { id: "c", label: "Block C", to: "/block/c" },
  { id: "d", label: "Block D", to: "/block/d" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileBlocksOpen, setMobileBlocksOpen] = useState(false);
  const dropdownRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleBlockSelect = (to) => {
    setDropdownOpen(false);
    setMenuOpen(false);
    navigate(to);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const isBlockActive = currentPath.startsWith("/block/");
  const isHomePage = currentPath === "/";
  const isHeaderSolid = scrolled || !isHomePage;

  return (
    <header className={`ca-header${isHeaderSolid ? " scrolled" : ""}`}>
      <div className="ca-header__inner">

        {/* ── Logo ── */}
        <Link to="/" className="ca-logo" onClick={handleLinkClick}>
          <div className="ca-logo__mark">
            <div className="ca-logo__bar ca-logo__bar--a" />
            <div className="ca-logo__bar ca-logo__bar--b" />
            <div className="ca-logo__bar ca-logo__bar--c" />
          </div>
          <div className="ca-logo__text">
            <div className="ca-logo__name">Central</div>
            <div className="ca-logo__sub">Avenue</div>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="ca-nav">
          <Link
            to="/"
            className={`ca-nav__link${currentPath === "/" ? " active" : ""}`}
            onClick={handleLinkClick}
          >
            Home
          </Link>

          {/* BLOCK DROPDOWN ITEM */}
          <div className="ca-nav__dropdown-wrap" ref={dropdownRef}>
            <button
              className={`ca-nav__dropdown-btn${isBlockActive ? " active" : ""}`}
              onClick={() => setDropdownOpen((o) => !o)}
              onMouseEnter={() => setDropdownOpen(true)}
            >
              <Building2 size={13} style={{ marginRight: 4 }} />
              <span>Blocks</span>
              <ChevronDown size={13} className={`ca-dropdown-arrow ${dropdownOpen ? "open" : ""}`} />
            </button>

            {dropdownOpen && (
              <div
                className="ca-dropdown-menu"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="ca-dropdown-header">
                  <span>Select Building Block</span>
                </div>
                {BLOCKS.map((b) => (
                  <Link
                    key={b.id}
                    to={b.to}
                    className={`ca-dropdown-item ${currentPath === b.to ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleBlockSelect(b.to);
                    }}
                  >
                    <div className="ca-dropdown-item__mark">{b.id.toUpperCase()}</div>
                    <div className="ca-dropdown-item__info">
                      <div className="ca-dropdown-item__title">{b.label}</div>
                      <div className="ca-dropdown-item__sub">{b.units}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            className={`ca-nav__link${currentPath === "/about" ? " active" : ""}`}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`ca-nav__link${currentPath === "/contact" ? " active" : ""}`}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </nav>

        {/* ── CTA + Hamburger ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link
            to="/contact"
            className="ca-btn-primary desktop-only"
            onClick={handleLinkClick}
          >
            Enquire Now
          </Link>
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
          <Link
            to="/"
            className={`ca-mobile-menu__link${currentPath === "/" ? " active" : ""}`}
            onClick={handleLinkClick}
          >
            Home
          </Link>

          {/* Mobile Blocks Accordion / List */}
          <div className="ca-mobile-blocks">
            <button
              className={`ca-mobile-blocks__toggle ${mobileBlocksOpen || isBlockActive ? "active" : ""}`}
              onClick={() => setMobileBlocksOpen((o) => !o)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Building2 size={16} />
                <span>Blocks (Block A - D)</span>
              </div>
              <ChevronDown size={16} className={`ca-dropdown-arrow ${mobileBlocksOpen ? "open" : ""}`} />
            </button>

            {(mobileBlocksOpen || isBlockActive) && (
              <div className="ca-mobile-blocks__list">
                {BLOCKS.map((b) => (
                  <Link
                    key={b.id}
                    to={b.to}
                    className={`ca-mobile-blocks__item ${currentPath === b.to ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleBlockSelect(b.to);
                    }}
                  >
                    <span className="ca-mobile-blocks__tag">{b.id.toUpperCase()}</span>
                    <div>
                      <div className="ca-mobile-blocks__title">{b.label}</div>
                      <div className="ca-mobile-blocks__sub">{b.units}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            className={`ca-mobile-menu__link${currentPath === "/about" ? " active" : ""}`}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`ca-mobile-menu__link${currentPath === "/contact" ? " active" : ""}`}
            onClick={handleLinkClick}
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="ca-btn-primary ca-mobile-menu__cta"
            onClick={handleLinkClick}
          >
            Enquire Now
          </Link>
        </div>
      )}
    </header>
  );
}
