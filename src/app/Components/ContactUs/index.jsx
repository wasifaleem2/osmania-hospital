import React from "react";
import styles from "./contactus.module.scss";
import LocationMap from "../LocationMap/Index";

const ContactUs = () => {
  const mapData = {
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.664763302964!2d67.02885631500986!3d24.9146069840293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f5e5a1d5e5d%3A0x8d1c5a5d5a5d5a5d!2sOsmania%20Hospital%20Karachi!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s",
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <h1 className={styles.contactTitle}>Contact Us</h1>

        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <h2 className={styles.contactSubtitle}>
              Hyderabad Trust Osmania Hospital
            </h2>

            <div className={styles.contactDetails}>
              <div className={styles.addressCard}>
                <h3 className={styles.sectionHeading}>Address</h3>
                <p className={styles.contactText}>
                  <i className={`${styles.icon} fas fa-map-marker-alt`}></i>
                  249 Hyderabad Colony, Opp. Central Jail, Karachi, Pakistan
                </p>
              </div>

              <div className={styles.contactCard}>
                <h3 className={styles.sectionHeading}>Contact Information</h3>
                <p className={styles.contactText}>
                  <i className={`${styles.icon} fas fa-phone-alt`}></i>
                  <strong>Tel:</strong> +92 (21) 34123450, 34121053, 34120292
                </p>
                <p className={styles.contactText}>
                  <i className={`${styles.icon} fas fa-envelope`}></i>
                  <strong>Email:</strong> info@osmaniahospital.com
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contactMap}>
            <LocationMap mapSrc={mapData.mapSrc} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
