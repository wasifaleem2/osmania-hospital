import React from "react";
import styles from "./donationzakat.module.scss";

const DonationZakat = ({ title, description, bankDetails, contactInfo, importantNote }) => {
  return (
    <div className={styles.introductionContainer}>
      <div className={styles.introductionContent}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.textSection}>
          <p className={styles.paragraph}>{description}</p>

          <div className={styles.detailsCard}>
            <h3 className={styles.sectionTitle}>Bank Account Details</h3>
            {bankDetails.map((detail, index) => (
              <div key={index} className={styles.detailItem}>
                <span className={styles.detailLabel}>{detail.label}:</span>
                <span className={styles.detailValue}>{detail.value}</span>
              </div>
            ))}
          </div>

          <div className={styles.contactInfo}>
            <h3 className={styles.sectionTitle}>Contact Information</h3>
            <p className={styles.paragraph}>{contactInfo.instruction}</p>
            <ul className={styles.emailList}>
              {contactInfo.emails.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
            <p className={styles.paragraph}>{contactInfo.additionalInfo}</p>
          </div>

          <div className={styles.importantNote}>
            <h3 className={styles.sectionTitle}>Important Note</h3>
            <p className={styles.paragraph}>{importantNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationZakat;