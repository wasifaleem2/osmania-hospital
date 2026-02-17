import React from 'react';
import styles from './donationbox.module.scss';
import Link from 'next/link';
import { FaHeart, FaHandHoldingHeart, FaProcedures, FaHandPointer  } from 'react-icons/fa';

const DonationBox = () => {
  const donationLinks = [
    { 
      label: "Zakat", 
      href: "/zakat", 
      icon: <FaHeart />,
      description: "Support with Zakat"
    },
    { 
      label: "Donations / Sadqa", 
      href: "/donations", 
      icon: <FaHandHoldingHeart />,
      description: "General donations"
    },
    { 
      label: "Sponsor Equipment", 
      href: "/sponsor-an-equipment", 
      icon: <FaProcedures />,
      description: "Sponsor medical equipment"
    },
  ];
  
  return (
    <div className={styles.donationBox}>
      <div className={styles.boxHeader}>
        <div className={styles.headerIcon}>
          <FaHeart />
        </div>
        <h3>Support Patients</h3>
        <p className={styles.headerSubtitle}>Make a difference today</p>
      </div>
      
      <div className={styles.donationLinks}>
        {donationLinks.map((link, index) => (
          <Link 
            key={index} 
            href={link.href}
            className={styles.donationLink}
          >
            <span className={styles.linkIcon}>{link.icon}</span>
            <span className={styles.linkText}>{link.label}</span>
          </Link>
        ))}
      </div>
      <div className={styles.donateButton}>
        Donate Now
       <FaHandPointer className={styles.linkIcon} />
      </div>
    </div>
  );
};

export default DonationBox;