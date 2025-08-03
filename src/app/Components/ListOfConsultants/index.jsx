import React from "react";
import styles from "./listofconsultant.module.scss";

const Consultants = () => {
  const consultants = ["/assets/img/consultants/list-of-consultants-1.jpg", "/assets/img/consultants/list-of-consultants-2.jpg", "/assets/img/consultants/list-of-consultants-3.jpg" ];

  return (
    <div className={styles.consultantsContainer}>
      <div className={styles.consultantsContent}>
        <h1 className="main-title">Our Consultants</h1>
        
        <div className={styles.consultantsGallery}>
          {consultants.map((consultant, index) => (
            // <div key={consultant.id} className={styles.consultantCard}>
              <img 
                key={index}
                src={consultant} 
                alt={`${consultant} image`} 
                className={styles.consultantImage}
              />
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consultants;