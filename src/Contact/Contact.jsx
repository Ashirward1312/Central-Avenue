import { useMemo, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const CONTACT = {
  email: "mventures011@gmail.com",
  phoneText: "+91 88710 90476",
  phoneHref: "+918871090476",
  whatsappHref:
    "https://wa.me/918871090476?text=Hi%2C%20I%20want%20details%20for%20commercial%20spaces.",
  address:
    "L.K Corporate And Logistic Park, Kurru, 3rd Floor, Near Kamal Vihar, Raipur (C.G)",
  hours: "Mon – Sat : 9:30 AM – 6:30 PM",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.6856654245576!2d81.693438!3d21.1961479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c34ae4f42f47%3A0x4fbb8df483243127!2sL.K.%20Corporate%20And%20Logistic%20Park!5e1!3m2!1sen!2sin!4v1791179503665!5m2!1sen!2sin",
};

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/", Icon: FaInstagram },
  { label: "Facebook", href: "https://facebook.com/", Icon: FaFacebookF },
  { label: "LinkedIn", href: "https://linkedin.com/", Icon: FaLinkedinIn },
  { label: "YouTube", href: "https://youtube.com/", Icon: FaYoutube },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "Retail Shop", message: "" });
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const isValid = useMemo(() => {
    const nameOk = form.name.trim().length >= 2;
    const phoneOk = form.phone.trim().length >= 8;
    return nameOk && phoneOk;
  }, [form]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (status.type !== "idle") setStatus({ type: "idle", text: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      setStatus({ type: "error", text: "Please enter valid Name and Phone." });
      return;
    }

    setStatus({ type: "success", text: "Message received! We will contact you shortly." });
    setForm({ name: "", phone: "", email: "", interest: "Retail Shop", message: "" });
  };

  return (
    <section id="contact" className="cp">
      <div className="cp__container">
        
        {/* HEADER SECTION */}
        <div className="cp__header">
          <div className="cp__kicker">
            <span className="cp__kLine" />
            <span className="cp__kText">GET IN TOUCH</span>
            <span className="cp__kLine" />
          </div>
          <h2 className="cp__h2">
            Let's Discuss Your <span>Future Space</span>
          </h2>
          <p className="cp__headerPara">
            Reach out to our team to book a site visit, request pricing details, or learn more about the available commercial units at Central Avenue.
          </p>
        </div>

        <div className="cp__layout">
          
          {/* LEFT SIDE - CONTACT DETAILS (DARK THEME) */}
          <div className="cp__infoPanel">
            <div className="cp__infoContent">
              <h3 className="cp__infoTitle">Contact Information</h3>
              <p className="cp__infoSub">Fill up the form and our team will get back to you within 24 hours.</p>

              <div className="cp__infoList">
                <div className="cp__infoRow">
                  <Phone className="cp__infoIco" size={20} />
                  <div className="cp__infoTextWrap">
                    <span className="cp__infoLabel">Phone</span>
                    <a href={`tel:${CONTACT.phoneHref}`} className="cp__infoLink">{CONTACT.phoneText}</a>
                  </div>
                </div>

                <div className="cp__infoRow">
                  <Mail className="cp__infoIco" size={20} />
                  <div className="cp__infoTextWrap">
                    <span className="cp__infoLabel">Email</span>
                    <a href={`mailto:${CONTACT.email}`} className="cp__infoLink">{CONTACT.email}</a>
                  </div>
                </div>

                <div className="cp__infoRow">
                  <MapPin className="cp__infoIco" size={24} />
                  <div className="cp__infoTextWrap">
                    <span className="cp__infoLabel">Office Address</span>
                    <span className="cp__infoText">{CONTACT.address}</span>
                  </div>
                </div>

                <div className="cp__infoRow">
                  <Clock className="cp__infoIco" size={20} />
                  <div className="cp__infoTextWrap">
                    <span className="cp__infoLabel">Working Hours</span>
                    <span className="cp__infoText">{CONTACT.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials & WhatsApp at bottom */}
            <div className="cp__infoFooter">
              <div className="cp__socials">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="cp__socialBtn">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              
              <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="cp__waBtn">
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Decorative circles */}
            <div className="cp__decorCircle cp__decorCircle--1"></div>
            <div className="cp__decorCircle cp__decorCircle--2"></div>
          </div>

          {/* RIGHT SIDE - FORM (LIGHT THEME) */}
          <div className="cp__formPanel">
            <form className="cp__form" onSubmit={onSubmit}>
              
              <div className="cp__formGrid">
                <div className="cp__field">
                  <label htmlFor="name" className="cp__label">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    className="cp__input"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={onChange}
                  />
                </div>
                <div className="cp__field">
                  <label htmlFor="phone" className="cp__label">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    className="cp__input"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={onChange}
                  />
                </div>
                <div className="cp__field">
                  <label htmlFor="email" className="cp__label">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="cp__input"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={onChange}
                  />
                </div>
                <div className="cp__field">
                  <label htmlFor="interest" className="cp__label">I am interested in</label>
                  <select
                    id="interest"
                    name="interest"
                    className="cp__input"
                    value={form.interest}
                    onChange={onChange}
                  >
                    <option value="Retail Shop">Retail Shop</option>
                    <option value="Office Space">Corporate Office Space</option>
                    <option value="Food Joint">Food Joint / Restaurant</option>
                    <option value="Gym Space">Gym / Fitness Studio</option>
                    <option value="Salon">Premium Salon / Clinic</option>
                  </select>
                </div>
              </div>

              <div className="cp__field">
                <label htmlFor="message" className="cp__label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="cp__input cp__textarea"
                  placeholder="Tell us what you are looking for..."
                  value={form.message}
                  onChange={onChange}
                  rows={4}
                />
              </div>

              {status.type !== "idle" && (
                <div className={`cp__alert cp__alert--${status.type}`}>
                  {status.type === "success" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  <span>{status.text}</span>
                </div>
              )}

              <button type="submit" className="cp__submitBtn">
                <span>Send Message</span>
                <Send size={16} />
              </button>

            </form>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="cp__mapSection">
          <iframe
            title="Google Map Location"
            src={CONTACT.mapEmbedSrc}
            className="cp__mapIframe"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <style>{`
        /* =======================================
           CONTACT SECTION - PREMIUM DESIGN
        ======================================= */
        .cp {
          --navy: #0F172A;
          --gold: #A87952;
          --goldL: #C9A45C;
          --goldGrad: linear-gradient(135deg, #B58D56, #8F613B);
          --bg: #F8F9FA;
          --text: #475569;
          --border: #E2E8F0;

          background-color: var(--bg);
          padding: 100px 0;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .cp__container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* --- HEADER --- */
        .cp__header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 700px;
          margin-inline: auto;
        }

        .cp__kicker {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
          justify-content: center;
        }
        .cp__kLine { width: 40px; height: 2px; background: var(--gold); }
        .cp__kText {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--gold);
        }

        .cp__h2 {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          color: var(--navy);
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .cp__h2 span { color: var(--gold); }

        .cp__headerPara {
          font-size: 15px;
          color: var(--text);
          line-height: 1.8;
        }

        /* --- LAYOUT (SIDE BY SIDE) --- */
        .cp__layout {
          display: flex;
          background: #fff;
          border-radius: 24px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.06);
          overflow: hidden;
          margin-bottom: 40px;
          max-width: 1040px;
          margin-inline: auto;
        }

        /* --- LEFT PANEL (DARK) --- */
        .cp__infoPanel {
          flex: 0 0 420px;
          background: var(--navy);
          color: #fff;
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .cp__infoContent {
          position: relative;
          z-index: 2;
        }

        .cp__infoTitle {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .cp__infoSub {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .cp__infoList {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .cp__infoRow {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .cp__infoIco {
          color: var(--goldL);
          flex-shrink: 0;
          margin-top: 4px;
        }

        .cp__infoTextWrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cp__infoLabel {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.5);
        }

        .cp__infoLink, .cp__infoText {
          font-size: 15px;
          color: #fff;
          text-decoration: none;
          line-height: 1.5;
          transition: color 0.2s;
        }
        .cp__infoLink:hover { color: var(--goldL); }

        .cp__infoFooter {
          position: relative;
          z-index: 2;
          margin-top: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .cp__socials {
          display: flex;
          gap: 12px;
        }
        .cp__socialBtn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          color: #fff;
          transition: all 0.2s;
        }
        .cp__socialBtn:hover {
          background: var(--gold);
          transform: translateY(-2px);
        }

        .cp__waBtn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #25D366;
          color: #fff;
          padding: 10px 16px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }
        .cp__waBtn:hover {
          background: #1EBE5C;
          transform: translateY(-2px);
        }

        /* Decorative Background Circles */
        .cp__decorCircle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          z-index: 1;
        }
        .cp__decorCircle--1 {
          width: 250px;
          height: 250px;
          bottom: -50px;
          right: -50px;
        }
        .cp__decorCircle--2 {
          width: 150px;
          height: 150px;
          bottom: 120px;
          right: 80px;
        }

        /* --- RIGHT PANEL (FORM) --- */
        .cp__formPanel {
          flex: 1;
          padding: 64px 56px;
        }

        .cp__form {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .cp__formGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .cp__field {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cp__label {
          font-size: 13px;
          font-weight: 600;
          color: var(--navy);
        }

        .cp__input {
          padding: 16px;
          border: 1px solid var(--border);
          border-radius: 12px;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: var(--navy);
          background: #fff;
          transition: all 0.2s;
          outline: none;
        }
        .cp__input::placeholder { color: #94A3B8; }
        .cp__input:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 4px rgba(201,164,92,0.1);
        }

        .cp__textarea {
          resize: vertical;
          min-height: 140px;
        }

        /* Alerts */
        .cp__alert {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 500;
        }
        .cp__alert--success {
          background: rgba(34,197,94,0.1);
          color: #15803d;
          border: 1px solid rgba(34,197,94,0.2);
        }
        .cp__alert--error {
          background: rgba(239,68,68,0.1);
          color: #b91c1c;
          border: 1px solid rgba(239,68,68,0.2);
        }

        /* Submit Button */
        .cp__submitBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 32px;
          background: var(--goldGrad);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 10px;
        }
        .cp__submitBtn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 32px rgba(168,121,82,0.25);
        }

        /* --- MAP SECTION --- */
        .cp__mapSection {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0,0,0,0.06);
          height: 400px;
        }

        .cp__mapIframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 960px) {
          .cp__layout {
            flex-direction: column;
          }
          .cp__infoPanel {
            flex: auto;
            padding: 40px 32px;
          }
          .cp__formPanel {
            padding: 48px 32px;
          }
        }
        @media (max-width: 640px) {
          .cp__formGrid {
            grid-template-columns: 1fr;
          }
          .cp__formPanel {
            padding: 32px 24px;
          }
          .cp__infoPanel {
            padding: 32px 24px;
          }
          .cp__mapSection {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
}