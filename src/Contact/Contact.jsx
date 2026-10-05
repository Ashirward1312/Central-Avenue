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
    "L.K Corporate And Logistic Park, Kurru, 3rd Floor, Near Karnal Vihar, Raipur (C.G)",
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
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
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
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="cp">
      {/* LIGHT HERO (Black patti removed) */}
      <div className="cp__hero">
        <div className="cp__container cp__heroInner">
          <div className="cp__pill">CONTACT US</div>

          <h1 className="cp__heroTitle">
            We&apos;d Love To Hear <span>From You</span>
          </h1>

          <p className="cp__heroSub">
            Have a question or want to book a site visit? Send us a message and our team will respond soon.
          </p>

          <div className="cp__heroChips" aria-label="Quick contact">
            <a className="cp__chip" href={`tel:${CONTACT.phoneHref}`}>
              <Phone size={16} strokeWidth={1.6} />
              <span>Call</span>
              <ArrowUpRight size={14} />
            </a>
            <a className="cp__chip" href={`mailto:${CONTACT.email}`}>
              <Mail size={16} strokeWidth={1.6} />
              <span>Email</span>
              <ArrowUpRight size={14} />
            </a>
            <a className="cp__chip" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={16} strokeWidth={1.6} />
              <span>WhatsApp</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="cp__body">
        <div className="cp__container">
          <div className="cp__grid">
            {/* LEFT CARD */}
            <div className="cp__card">
              <div className="cp__cardHead">
                <div className="cp__cardHeading">Get In Touch</div>
                <div className="cp__cardLine" />
              </div>

              <div className="cp__cardBody">
                <div className="cp__info">
                  <div className="cp__infoRow">
                    <div className="cp__ico">
                      <Mail size={18} strokeWidth={1.6} />
                    </div>
                    <div className="cp__infoText">
                      <div className="cp__label">Email</div>
                      <a className="cp__value" href={`mailto:${CONTACT.email}`}>
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>

                  <div className="cp__infoRow">
                    <div className="cp__ico">
                      <Phone size={18} strokeWidth={1.6} />
                    </div>
                    <div className="cp__infoText">
                      <div className="cp__label">Phone</div>
                      <a className="cp__value" href={`tel:${CONTACT.phoneHref}`}>
                        {CONTACT.phoneText}
                      </a>
                    </div>
                  </div>

                  <div className="cp__infoRow">
                    <div className="cp__ico">
                      <MapPin size={18} strokeWidth={1.6} />
                    </div>
                    <div className="cp__infoText">
                      <div className="cp__label">Office Address</div>
                      <div className="cp__value">{CONTACT.address}</div>
                    </div>
                  </div>

                  <div className="cp__infoRow">
                    <div className="cp__ico">
                      <Clock size={18} strokeWidth={1.6} />
                    </div>
                    <div className="cp__infoText">
                      <div className="cp__label">Working Hours</div>
                      <div className="cp__value">{CONTACT.hours}</div>
                    </div>
                  </div>
                </div>

                <div className="cp__social">
                  <div className="cp__socialTitle">SOCIAL</div>
                  <div className="cp__socialRow">
                    {SOCIALS.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        className="cp__socialBtn"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        title={label}
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="cp__quickBand" aria-label="Quick actions">
                  <div className="cp__quickText">Need faster response? Call or WhatsApp us.</div>
                  <div className="cp__quickBtns">
                    <a className="cp__miniBtn" href={`tel:${CONTACT.phoneHref}`}>
                      CALL
                    </a>
                    <a
                      className="cp__miniBtn cp__miniBtn--gold"
                      href={CONTACT.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WHATSAPP
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="cp__card">
              <div className="cp__cardHead">
                <div className="cp__cardHeading">Send Us a Message</div>
                <div className="cp__cardLine" />
              </div>

              <form className="cp__form" onSubmit={onSubmit}>
                <label className="cp__field">
                  <span className="cp__fieldLabel">Name</span>
                  <input
                    className="cp__input"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>

                <label className="cp__field">
                  <span className="cp__fieldLabel">Phone</span>
                  <input
                    className="cp__input"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+91..."
                    autoComplete="tel"
                  />
                </label>

                <label className="cp__field">
                  <span className="cp__fieldLabel">Message</span>
                  <textarea
                    className="cp__input cp__textarea"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="How can we help you?"
                    rows={6}
                  />
                </label>

                {status.type !== "idle" && (
                  <div className={`cp__alert ${status.type === "success" ? "isSuccess" : "isError"}`}>
                    <span className="cp__alertIcon">
                      {status.type === "success" ? (
                        <CheckCircle2 size={16} strokeWidth={1.6} />
                      ) : (
                        <AlertCircle size={16} strokeWidth={1.6} />
                      )}
                    </span>
                    <span>{status.text}</span>
                  </div>
                )}

                <button className="cp__btn" type="submit">
                  <Send size={16} strokeWidth={1.6} />
                  <span>Send Message</span>
                </button>

                <div className="cp__fineprint">
                  By submitting, you agree to our <a href="#privacy">Terms &amp; Privacy Policy</a>.
                </div>
              </form>
            </div>
          </div>

          {/* MAP */}
          <div className="cp__mapCard">
            <div className="cp__mapHead">
              <div>
                <div className="cp__mapTitle">MAP</div>
                <div className="cp__mapSub">L.K. Corporate And Logistic Park</div>
              </div>
              <div className="cp__mapDot" aria-hidden="true" />
            </div>

            <div className="cp__mapFrame">
              <iframe
                title="Google Map"
                src={CONTACT.mapEmbedSrc}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cp{
          --bg: #F4F1E9;
          --ink: #0f172a;

          /* GOLD ONLY */
          --gold: #C9A45C;
          --gold2: #8F613B;
          --goldGrad: linear-gradient(135deg, #B58D56, #8F613B);

          background: var(--bg);
        }

        .cp__container{
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ===== LIGHT HERO (no black strip) ===== */
        .cp__hero{
          background:
            radial-gradient(900px 360px at 50% -10%, rgba(201,164,92,.18), transparent 60%),
            linear-gradient(180deg, #FBFAF7 0%, #F4F1E9 100%);
          padding: 56px 0 22px;
          border-bottom: 1px solid rgba(0,0,0,.06);
        }

        .cp__heroInner{ text-align:center; }

        .cp__pill{
          display:inline-flex;
          padding: 7px 14px;
          border-radius: 999px;
          border: 1px solid rgba(201,164,92,.34);
          background: rgba(201,164,92,.10);
          color: rgba(143,97,59,.95);
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .18em;
          text-transform: uppercase;
        }

        .cp__heroTitle{
          margin: 14px 0 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4.8vw, 60px);
          line-height: 1.05;
          font-weight: 600;
          color: var(--ink);
        }
        .cp__heroTitle span{ color: var(--gold2); }

        .cp__heroSub{
          margin: 10px auto 0;
          max-width: 70ch;
          font-family: 'DM Sans', sans-serif;
          font-size: 14.5px;
          line-height: 1.85;
          color: rgba(15,23,42,.68);
        }

        .cp__heroChips{
          margin-top: 18px;
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap: 10px;
        }

        .cp__chip{
          display:inline-flex;
          align-items:center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,.10);
          background: rgba(255,255,255,.70);
          color: rgba(15,23,42,.85);
          text-decoration:none;
          font-family:'DM Sans', sans-serif;
          font-size: 14px;
          transition: transform .16s ease, background .16s ease, border-color .16s ease;
        }
        .cp__chip:hover{
          transform: translateY(-2px);
          border-color: rgba(201,164,92,.40);
          background: rgba(201,164,92,.10);
        }

        /* ===== BODY ===== */
        .cp__body{
          padding: 26px 0 80px;
        }

        .cp__grid{
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: start; /* important */
        }

        .cp__card{
          background: rgba(255,255,255,.97);
          border: 1px solid rgba(0,0,0,.10);
          border-radius: 18px;
          box-shadow: 0 22px 55px rgba(0,0,0,.10);
          overflow:hidden;
        }

        .cp__cardHead{
          padding: 18px 18px 14px;
          border-bottom: 1px solid rgba(0,0,0,.06);
        }

        .cp__cardHeading{
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 13px;
          letter-spacing: .02em;
          color: var(--ink);
        }

        .cp__cardLine{
          margin-top: 10px;
          height: 2px;
          width: 54px;
          border-radius: 999px;
          background: var(--goldGrad);
        }

        .cp__cardBody{
          padding: 10px 18px 18px;
          display:flex;
          flex-direction:column;
          gap: 14px;
        }

        .cp__info{ display:flex; flex-direction:column; gap: 14px; }
        .cp__infoRow{ display:flex; gap: 12px; align-items:flex-start; }

        .cp__ico{
          width: 42px; height: 42px;
          border-radius: 14px;
          background: rgba(201,164,92,.14);
          border: 1px solid rgba(201,164,92,.28);
          color: var(--gold2);
          display:flex; align-items:center; justify-content:center;
          flex-shrink:0;
        }

        .cp__label{
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: rgba(15,23,42,.55);
        }

        .cp__value{
          margin-top: 4px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: rgba(15,23,42,.82);
          text-decoration:none;
          display:block;
        }

        .cp__social{
          padding-top: 14px;
          border-top: 1px solid rgba(0,0,0,.06);
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .cp__socialTitle{
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .16em;
          color: rgba(15,23,42,.55);
        }
        .cp__socialRow{ display:flex; gap: 10px; }

        .cp__socialBtn{
          width: 40px; height: 40px;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,.10);
          background: #fff;
          color: rgba(15,23,42,.78);
          display:flex; align-items:center; justify-content:center;
          text-decoration:none;
          transition: transform .16s ease, border-color .16s ease, background .16s ease;
        }
        .cp__socialBtn:hover{
          transform: translateY(-1px);
          border-color: rgba(201,164,92,.42);
          background: rgba(201,164,92,.10);
          color: rgba(15,23,42,.95);
        }

        .cp__quickBand{
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,.08);
          background: linear-gradient(180deg, rgba(0,0,0,.02), rgba(0,0,0,.01));
          padding: 12px;
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .cp__quickText{
          font-family:'DM Sans', sans-serif;
          font-size: 13.5px;
          color: rgba(15,23,42,.72);
        }
        .cp__quickBtns{ display:flex; gap: 10px; }
        .cp__miniBtn{
          display:inline-flex; align-items:center; justify-content:center;
          height: 36px; padding: 0 12px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,.12);
          background: #fff;
          text-decoration:none;
          font-family:'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .16em;
          color: rgba(15,23,42,.86);
        }
        .cp__miniBtn--gold{
          border-color: rgba(201,164,92,.32);
          background: var(--goldGrad);
          color: #fff;
        }

        .cp__form{
          padding: 14px 18px 18px;
          display:flex;
          flex-direction:column;
          gap: 12px;
        }
        .cp__field{ display:flex; flex-direction:column; gap: 8px; }
        .cp__fieldLabel{
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px;
          color: rgba(15,23,42,.74);
        }
        .cp__input{
          border: 1px solid rgba(15,23,42,.18);
          border-radius: 14px;
          padding: 12px 12px;
          outline:none;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          background: #fff;
        }
        .cp__input:focus{
          border-color: rgba(201,164,92,.58);
          box-shadow: 0 0 0 4px rgba(201,164,92,.18);
        }
        .cp__textarea{ resize: vertical; min-height: 170px; }

        .cp__alert{
          display:flex;
          gap: 10px;
          align-items:center;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,.10);
          background: rgba(0,0,0,.02);
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(15,23,42,.80);
        }
        .cp__alertIcon{ display:flex; }
        .cp__alert.isSuccess{ border-color: rgba(34,197,94,.25); background: rgba(34,197,94,.08); }
        .cp__alert.isError{ border-color: rgba(239,68,68,.25); background: rgba(239,68,68,.08); }

        .cp__btn{
          margin-top: 4px;
          width: 100%;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap: 10px;
          padding: 12px 14px;
          border: none;
          cursor:pointer;
          border-radius: 14px;
          background: var(--goldGrad);
          color: #fff;
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .16em;
          box-shadow: 0 16px 30px rgba(143,97,59,.22);
        }

        .cp__fineprint{
          text-align:center;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(15,23,42,.55);
        }
        .cp__fineprint a{ color: rgba(15,23,42,.72); }

        .cp__mapCard{
          margin-top: 20px;
          background: rgba(255,255,255,.97);
          border: 1px solid rgba(0,0,0,.10);
          border-radius: 18px;
          overflow:hidden;
          box-shadow: 0 22px 55px rgba(0,0,0,.10);
        }

        .cp__mapHead{
          padding: 16px 18px;
          border-bottom: 1px solid rgba(0,0,0,.06);
          display:flex;
          justify-content: space-between;
          align-items:center;
          gap: 12px;
          flex-wrap:wrap;
        }
        .cp__mapTitle{
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .18em;
          color: rgba(15,23,42,.55);
        }
        .cp__mapSub{
          margin-top: 4px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(15,23,42,.70);
        }
        .cp__mapDot{
          width: 10px; height: 10px;
          border-radius: 999px;
          background: var(--goldGrad);
          box-shadow: 0 0 0 6px rgba(201,164,92,.16);
        }

        .cp__mapFrame{
          width: 100%;
          aspect-ratio: 16 / 6;
          min-height: 320px;
        }
        .cp__mapFrame iframe{
          width: 100%;
          height: 100%;
          border:0;
          display:block;
        }

        @media (max-width: 980px){
          .cp__grid{ grid-template-columns: 1fr; }
          .cp__mapFrame{ aspect-ratio: 16 / 10; min-height: 320px; }
        }
      `}</style>
    </section>
  );
}