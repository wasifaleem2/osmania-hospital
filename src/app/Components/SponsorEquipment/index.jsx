import React from "react";
import styles from "./sponsorequipment.module.scss";

const SponsorEquipment = () => {
  const equipmentList = [
    {
      id: 1,
      name: "Leign Phaco System",
      description: "",
      cost: "12.30 Million PKR",
      image: ""
    },
    {
      id: 2,
      name: "Slit Lamp",
      description: "",
      cost: "5 Million PKR",
      image: ""
    },
    {
      id: 3,
      name: "Microscope for Eye Surgeries",
      description: "",
      cost: "2 Million PKR",
      image: ""
    },
    {
      id: 4,
      name: "Ventilators for Adults 2 Nos",
      description: "",
      cost: "15 Million PKR",
      image: ""
    },
    {
      id: 5,
      name: "Patient Beds 50 Nos",
      description: "",
      cost: "11.25 Million PKR",
      image: ""
    }
  ];

  return (
    <div className={styles.introductionContainer}>
      <div className={styles.introductionContent}>
        <h1 className={styles.title}>Sponsor Medical Equipment</h1>
        <div className={styles.textSection}>
          {/* <p className={styles.paragraph}>
            Your generous sponsorship can help us acquire vital medical equipment that will enhance 
            our ability to provide quality healthcare to all patients. Below are the currently needed 
            equipment with their estimated costs.
          </p> */}

          <div className={styles.equipmentGrid}>
            {equipmentList.map(item => (
              <div key={item.id} className={styles.equipmentCard}>
                {/* <div className={styles.equipmentImage}>
                  <img src={item.image} alt={item.name} />
                </div> */}
                <div className={styles.equipmentDetails}>
                  <h3 className={styles.equipmentName}>{item.name}</h3>
                  <p className={styles.equipmentDescription}>{item.description}</p>
                  <div className={styles.costBadge}>
                    Estimated Cost: <span>{item.cost}</span>
                  </div>
                  {/* <button className={styles.sponsorButton}>Sponsor This Equipment</button> */}
                </div>
              </div>
            ))}
          </div>

          {/* <div className={styles.contactNote}>
            <h3 className={styles.sectionTitle}>How to Sponsor</h3>
            <p className={styles.paragraph}>
              For more information about sponsoring equipment, please contact our fundraising team:
            </p>
            <ul className={styles.contactList}>
              <li>Email: donations@osmaniahospital.com</li>
              <li>Phone: +92 21 1234567</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SponsorEquipment;