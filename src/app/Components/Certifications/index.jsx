"use client";
import React from "react";
import styles from "./certification.module.scss";
import { CERTIFICATIONS, REPORTSPDF } from "@/app/data/certifications";

const Certifications = () => {
  const certifications = CERTIFICATIONS;
  const reports = REPORTSPDF;

  const handlePdfClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.certificationsContainer}>
      <div className={styles.certificationsContent}>
        <h1 className={styles.title}>Annual Reports</h1>

        <div className={styles.certificationsGrid}>
          {/* Reports section - PDFs with thumbnails and clickable cards */}
          {reports.map((report) => (
            <div
              key={report.id}
              className={`${styles.certificationCard} ${styles.pdfCard}`}
              onClick={() => handlePdfClick(report.url)}
              role="button"
              tabIndex={0}
              // onKeyDown={(e) => {
              //   if (e.key === 'Enter' || e.key === ' ') {
              //     handlePdfClick(report.url);
              //   }
              // }}
            >
              <h2 className={styles.certificationTitle}>{report.title}</h2>
              {report.description && (
                <p className={styles.certificationDescription}>
                  {report.description}
                </p>
              )}

              <div className={styles.pdfThumbnail}>
                <div className={styles.pdfIcon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 10H4V8H20V10Z" fill="currentColor" />
                    <path d="M20 14H4V12H20V14Z" fill="currentColor" />
                    <path d="M20 18H4V16H20V18Z" fill="currentColor" />
                    <path d="M20 6H4V4H20V6Z" fill="currentColor" />
                    <path d="M12 22H4V20H12V22Z" fill="currentColor" />
                    <path d="M20 22H16V20H20V22Z" fill="currentColor" />
                  </svg>
                </div>
                <span className={styles.pdfThumbnailText}>
                  Click to open PDF
                </span>
              </div>
            </div>
          ))}
        </div>

        <h1 className={styles.title}>Certifications</h1>

        <div className={styles.certificationsGrid}>
          {/* Certifications section - remains as images */}
          {certifications.map((cert) => (
            <div key={cert.id} className={styles.certificationCard}>
              <h2 className={styles.certificationTitle}>{cert.title}</h2>
              <p className={styles.certificationDescription}>
                {cert.description}
              </p>

              <div className={styles.certificationImages}>
                {cert.images.map((img, index) => (
                  <div key={index} className={styles.imageContainer}>
                    <img
                      src={img}
                      alt={`${cert.title} - Page ${index + 1}`}
                      className={styles.certificationImage}
                    />
                    {cert.images.length > 1 && (
                      <span className={styles.pageNumber}>
                        Page {index + 1}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
