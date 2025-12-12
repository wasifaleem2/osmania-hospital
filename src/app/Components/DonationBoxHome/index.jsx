import React from 'react';
import styles from './donationbox.module.scss';
import Link from 'next/link';

const DonationBox = () => {
  // Donation type links
  const donationLinks = [
    { label: "Zakat", href: "/help-us/zakat" },
    { label: "Donations / Sadqa", href: "/help-us/donations" },
    { label: "Sponsor An Equipment", href: "/help-us/sponsor-an-equipment" },
  ];
  
  return (
    <div className={styles.donationBox}>
      {/* Hero Section with Overlay - SEPARATE FROM MAIN BOX */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>Donation Box</h2>
          <h3 className={styles.heroSubtitle}>Support Deserving Patients</h3>
          <div className={styles.heroDivider}></div>
          <p className={styles.heroText}>Your contribution makes a difference in someone&apos;s life</p>
        </div>
      </div>

      {/* Main Content Box */}
      <div className={styles.mainBox}>
        <div className={styles.boxHeader}>
          <h2 className={styles.boxTitle}>How can you help deserving patients?</h2>
          {/* <p className={styles.boxSubtitle}>
            Your support can transform lives and provide essential medical care 
            to those who need it most. Choose from different ways to contribute:
          </p> */}
        </div>
        
        <div className={styles.donationLinks}>
          {donationLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.href}
              className={styles.donationLink}
            >
              <div className={styles.linkContent}>
                <span className={styles.linkIcon}>
                  {index === 0 ? "🕌" : index === 1 ? "🤲" : "🏥"}
                </span>
                <div className={styles.linkTextContainer}>
                  <span className={styles.linkText}>{link.label}</span>
                  <span className={styles.linkDescription}>
                    {index === 0 ? "Islamic obligation to support those in need" : 
                     index === 1 ? "General donations for patient welfare" : 
                     "Help us acquire essential medical equipment"}
                  </span>
                </div>
              </div>
              <span className={styles.linkArrow}>→</span>
            </Link>
          ))}
        </div>
        
        <div className={styles.boxFooter}>
          <p>
            Each donation type serves a specific purpose. Click on any option above 
            to learn more about how your contribution will be used.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationBox;