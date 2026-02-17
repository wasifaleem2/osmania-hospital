"use client";
import React from "react";

import styles from "./dashboardLayout.module.scss";
import DonationBox from "./DonationBox";
import CertificationsBox from "./CertificationBox";
import VideosBox from "./VideosBox";
import ReportDownloadWidget from "./ReportDownloadWidget";

const DashboardLayout = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        {/* <h1>Welcome to Osmania Hospital Portal</h1>
        <p>Access all your medical services from one place</p> */}
      </div>
      
      <div className={styles.fourBoxGrid}>
        {/* Box 1: Medical Reports */}
        <div className={styles.gridItem}>
          <ReportDownloadWidget />
        </div>
        
        {/* Box 2: Donation Box */}
        <div className={styles.gridItem}>
          <DonationBox />
        </div>
        
        {/* Box 3: Certifications */}
        <div className={styles.gridItem}>
          <CertificationsBox />
        </div>
        
        {/* Box 4: Educational Videos */}
        <div className={styles.gridItem}>
          <VideosBox />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;