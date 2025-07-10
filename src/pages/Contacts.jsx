import React from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.heading} data-aos="fade-right">
        Contact Me
      </h2>
      <form className={styles.form} data-aos="fade-up" data-aos-delay="200">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="6" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contacts;
