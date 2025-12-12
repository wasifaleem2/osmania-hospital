import React from "react";
import styles from "./certification.module.scss";
import { CERTIFICATIONS } from "@/app/data/certifications";

const Certifications = () => {
  const certifications = CERTIFICATIONS;

  return (
    <div className={styles.certificationsContainer}>
      <div className={styles.certificationsContent}>
        <h1 className={styles.title}>Our Certifications</h1>
        
        <div className={styles.certificationsGrid}>
          {certifications.map(cert => (
            <div key={cert.id} className={styles.certificationCard}>
              <h2 className={styles.certificationTitle}>{cert.title}</h2>
              <p className={styles.certificationDescription}>{cert.description}</p>
              
              <div className={styles.certificationImages}>
                {cert.images.map((img, index) => (
                  <div key={index} className={styles.imageContainer}>
                    <img 
                      src={img} 
                      alt={`${cert.title} - Page ${index + 1}`} 
                      className={styles.certificationImage}
                    />
                    {cert.images.length > 1 && (
                      <span className={styles.pageNumber}>Page {index + 1}</span>
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