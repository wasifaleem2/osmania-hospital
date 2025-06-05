import React from 'react';
import styles from './donationbox.module.scss';

const DonationBox = () => {
  const donationAmounts = [1000, 2000, 5000, 10000];
  
  return (
    <div className={styles.donationBox}>
      {/* Hero Section with Overlay */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>Donation Box</h2>
          <h3 className={styles.heroSubtitle}>Support Deserving People</h3>
          <div className={styles.heroDivider}></div>
          <p className={styles.heroText}>Your contribution makes a difference in someone&apos;s life</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Hospital Logo */}
        <div className={styles.logoSection}>
          <div className={styles.logoContainer}>
            <img 
              src="assets/img/osmania-logo.png" 
              alt="Osmania Hospital Logo" 
              className={styles.logo}
            />
            <div className={styles.logoGlow}></div>
          </div>
          <h3 className={styles.logoTitle}>Hyderabad Trust</h3>
          <p className={styles.logoSubtitle}>Osmania Hospital</p>
        </div>

        {/* Donation Details */}
        <div className={styles.donationSection}>
          <h2 className={styles.sectionTitle}>Make a Donation</h2>
          <p className={styles.sectionText}>
            Your generous donations help us provide medical care to those in need.
            Please contribute to our cause by donating to the following account:
          </p>

          <div className={styles.bankDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Account Title:</span>
              <span className={styles.detailValue}>Hyderabad Relief and Rehabilitation Trust</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Account No.:</span>
              <span className={styles.detailValue}>0105-8020-1003-0799</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>IBAN:</span>
              <span className={styles.detailValue}>PK78MUCB0105802010030799</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Bank:</span>
              <span className={styles.detailValue}>MCB Bank Ltd.</span>
            </div>
          </div>

          {/* Custom Amount Input */}
          {/* <div className={styles.amountInput}>
            <label htmlFor="donationAmount" className={styles.inputLabel}>
              Enter Account Number:
            </label>
            <div className={styles.inputGroup}>
              <span className={styles.currency}>Rs.</span>
              <input
                type="number"
                id="donationAmount"
                className={styles.amountField}
                placeholder="Enter amount"
                min="100"
              />
            </div>
          </div> */}

          {/* Quick Donation Buttons */}
          {/* <div className={styles.quickDonations}>
            <h4 className={styles.quickDonationTitle}>Or select a quick amount:</h4>
            <div className={styles.amountButtons}>
              {donationAmounts.map((amount) => (
                <button 
                  key={amount} 
                  className={styles.amountButton}
                >
                  Rs. {amount.toLocaleString()}
                </button>
              ))}
            </div>
          </div> */}

          {/* Donate Button */}
          {/* <button className={styles.donateButton}>
            Proceed to Donation
            <span className={styles.buttonIcon}>→</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default DonationBox;