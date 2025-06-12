import React from "react";
import styles from "./certification.module.scss";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Shariah Compliance Certificate For Zakat",
      images: [
        "/assets/img/certificates/Shariah Compliance Certificate For Zakat.jpg",
      ],
      description: "Certification for Zakat collection and distribution according to Islamic principles."
    },
    {
      id: 2,
      title: "FBR Tax Exemption Certificate (U/S 236-C)",
      images: [
        "/assets/img/certificates/FBR Tax Exemption Certificate.jpeg",
      ],
      description: "Federal Board of Revenue tax exemption certification for donations."
    },
    {
      id: 3,
      title: "PCP Certification",
      images: [
        "/assets/img/certificates/PCP.jpg",
        "/assets/img/certificates/PCP-2.jpg"
      ],
      description: "Primary Care Partnership certification for healthcare standards."
    },
    {
      id: 4,
      title: "FBR",
      images: [
        "/assets/img/certificates/FBR.jpeg",
        "/assets/img/certificates/FBR-2.jpg"
      ],
      description: "Official registration with the Sindh Healthcare Commission."
    },
    {
      id: 3,
      title: "PCP",
      images: [
        "/assets/img/certificates/PCP-3.jpg"
      ],
      description: "Primary Care Partnership certification for healthcare standards."
    },
    {
      id: 4,
      title: "SHCH Registration",
      images: [
        "/assets/img/certificates/SHCH Registration.png"
      ],
      description: "Official registration with the Sindh Healthcare Commission."
    },
    {
      id: 5,
      title: "FBR Tax Exemption Certificate 2024-25",
      images: [
        "/assets/img/certificates/FBR Tax Exemption Certificate 2024.jpg"
      ],
      description: "Renewed tax exemption certification for the fiscal year 2024-25."
    }
  ];

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