"use client"
import React, { useState } from 'react';
import styles from './certification-widget.module.scss';
import SectionHeading from '../SectionHeading';
import { CERTIFICATIONS } from '@/app/data/certifications';

const CertificationsWidget = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCertClick = (id) => {
    setSelectedCert(id);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  const handleNextImage = () => {
    const cert = CERTIFICATIONS.find(c => c.id === selectedCert);
    if (cert && currentImageIndex < cert.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  const selectedCertData = CERTIFICATIONS.find(c => c.id === selectedCert);

  return (
    <>
      <section className={styles.certificationsSection}>
        <div className={styles.container}>
            <SectionHeading
                SectionSubtitle="View Our"
                SectionTitle="Certifications"
                variant="text-center"
            />
          {/* <div className={styles.header}>
            <h2 className={styles.sectionTitle}>Our Certifications & Accreditations</h2>
            <p className={styles.sectionSubtitle}>
              Transparent and certified operations ensuring trust and compliance with regulatory standards
            </p>
            <div className={styles.divider}></div>
          </div> */}

          <div className={styles.certificationsGrid}>
            {CERTIFICATIONS.map((cert) => (
              <div 
                key={cert.id} 
                className={styles.certCard}
                onClick={() => handleCertClick(cert.id)}
              >
                {/* <div className={styles.cardIcon}>
                  📜
                </div> */}
                <div className={styles.cardContent}>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <p className={styles.certDescription}>{cert.description}</p>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.viewText}>View Certificate</span>
                  <span className={styles.arrowIcon}>→</span>
                </div>
              </div>
            ))}
          </div>

          {/* <div className={styles.trustNote}>
            <p>
              These certifications demonstrate our commitment to transparency, regulatory compliance, 
              and adherence to the highest standards in serving our community.
            </p>
          </div> */}
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && selectedCertData && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>×</button>
            
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{selectedCertData.title}</h3>
              <p className={styles.modalDescription}>{selectedCertData.description}</p>
            </div>

            <div className={styles.imageContainer}>
              <img 
                src={selectedCertData.images[currentImageIndex]} 
                alt={`${selectedCertData.title} - Page ${currentImageIndex + 1}`}
                className={styles.certImage}
              />
              
              {selectedCertData.images.length > 1 && (
                <div className={styles.imageNavigation}>
                  <button 
                    className={styles.navButton} 
                    onClick={handlePrevImage}
                    disabled={currentImageIndex === 0}
                  >
                    ←
                  </button>
                  <span className={styles.pageIndicator}>
                    {currentImageIndex + 1} / {selectedCertData.images.length}
                  </span>
                  <button 
                    className={styles.navButton} 
                    onClick={handleNextImage}
                    disabled={currentImageIndex === selectedCertData.images.length - 1}
                  >
                    →
                  </button>
                </div>
              )}
            </div>

            <div className={styles.modalFooter}>
              <p className={styles.viewHint}>Click outside the image to close</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificationsWidget;