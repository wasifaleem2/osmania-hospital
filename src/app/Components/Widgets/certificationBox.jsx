"use client";
import React from "react";
import Link from "next/link";
import { FaCertificate, FaArrowRight } from "react-icons/fa";
import styles from "./CertificationsBox.module.scss";

const CertificationsBox = () => {
  return (
    <div className={styles.certificationsBox}>
      <div className={styles.boxHeader}>
        <div className={styles.headerIcon}>
          <FaCertificate />
        </div>
        <h3>Certifications & Annual Reports</h3>
        <p className={styles.headerSubtitle}>View our certificates and annual reports</p>
      </div>
      
      <div className={styles.certificationsContent}>
        <p className={styles.description}>
          Certified assurance of compliance with institutional rules and obligations.
        </p>
      </div>
      
      <Link href="/certifications" className={styles.certificationsLink}>
        View
        <FaArrowRight className={styles.linkIcon} />
      </Link>
    </div>
  );
};

export default CertificationsBox;