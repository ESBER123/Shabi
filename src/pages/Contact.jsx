import "../assets/styles/Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="left">
        <h1>Contact</h1>

        <p>📞TEL : +43 677 63471705</p>
        <p>📧Email : Office@drshadi.at</p>
        <p>📍 Billrothstraße 58/DG, 1190 Wien</p>
        <p>🕒 Sat - Thu | 9:00 AM - 5:00 PM</p>
        <p>
          Termin online :
          https://manager.docfinder.at/booking/org-WzFOhvFpa4/dr-med-dent-shadi-loutfi
        </p>
      </div>

      <div className="right">
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Phone" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Your Message"></textarea>

        <button>Send</button>
      </div>
    </div>
  );
};
export default Contact;
