import '../styles/pages/Contact.scss';

export default function Contact() {
  return (
    <div className="Contact">
      <form className="Contact-form">
        <h3>Contact Us</h3>

        <label>
          <span>Your name</span>
          <input className="Contact-form-name" type="text" name="name" />
        </label>

        <label>
          <span>Email</span>
          <input className="Contact-form-email" type="email" name="email" />
        </label>

        <label>
          <span>Message</span>
          <textarea className="Contact-form-message" name="message" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
