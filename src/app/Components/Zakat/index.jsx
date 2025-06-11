import React from "react";
import styles from "./zakat.module.scss";

const Zakat = () => {
  return (
    <div className={styles.introductionContainer}>
      <div className={styles.introductionContent}>
        <h1 className="main-title">ZAKAT</h1>
        <div className={styles.textSection}>
          <p className={styles.paragraph}>
            Hyderabad Relief & Rehabilitation Trust receives Zakat for Medical
            Treatment of deserving Muslim patients. We take all possible
            measures to ensure that the Zakat received by us must be used only
            on medical treatment of deserving patients.
          </p>

          <div className={styles.zakatDetails}>
            <h3 className={styles.sectionTitle}>Bank Account Details</h3>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Title of Account:</span>
              <span className={styles.detailValue}>
                HYDERABAD RELIEF AND REHABILITATION TRUST
              </span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Account No.:</span>
              <span className={styles.detailValue}>1001-0081-047180-02-7</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>IBAN:</span>
              <span className={styles.detailValue}>
                PK76 BAHL 1001 0081 0471 8002
              </span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Bank:</span>
              <span className={styles.detailValue}>
                Bank Al-Habib Ltd, Main Branch, I.I.Chundrigar Road, Karachi
              </span>
            </div>
          </div>

          <div className={styles.contactInfo}>
            <h3 className={styles.sectionTitle}>Contact Information</h3>
            <p className={styles.paragraph}>
              Kindly inform us on following e-mail addresses to ensure proper
              record keeping and issuance of slip:
            </p>
            <ul className={styles.emailList}>
              <li>shakeel.ahmed@osmaniahospital.com</li>
              <li>mukhtar.ahmed@osmaniahospital.com</li>
            </ul>
            <p className={styles.paragraph}>
              Zakat can be deposited at accounts department of Osmania Hospital
              in cash or by cheque in favour of HYDERABAD RELIEF AND
              REHABILITATION TRUST on any working day during business hours.
            </p>
          </div>

          <div className={styles.importantNote}>
            <h3 className={styles.sectionTitle}>Important Note</h3>
            <p className={styles.paragraph}>
              RECEIPT MUST BE ISSUED TO EVERY DONOR IMMEDIATELY.
              <br />
              Zakat / Donations given to Hyderabad Relief & Rehabilitation Trust
              are exempted from income tax under Section 2(36)(C) of the Income
              Tax Ordinance, 2001.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zakat;
