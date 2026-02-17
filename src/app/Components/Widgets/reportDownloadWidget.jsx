"use client";
import React from "react";
import Link from "next/link";
import { FaFileAlt, FaArrowRight } from "react-icons/fa";
import styles from "./reportDownloadWidget.module.scss";

const ReportDownloadWidget = () => {
  return (
    <div className={styles.reportWidget}>
      <div className={styles.boxHeader}>
        <div className={styles.headerIcon}>
          <FaFileAlt />
        </div>
        <h3>Medical Reports</h3>
        <p className={styles.headerSubtitle}>View your test results</p>
      </div>
      
      <div className={styles.reportContent}>
        <p className={styles.description}>
          Access and download your laboratory reports, test results, and medical documents.
        </p>
      </div>
      
      <Link href="/reports" className={styles.reportLink}>
        View Reports
        <FaArrowRight className={styles.linkIcon} />
      </Link>
    </div>
  );
};

export default ReportDownloadWidget;