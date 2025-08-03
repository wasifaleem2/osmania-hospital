import React from "react";
import styles from "./sponsorequipment.module.scss";

const SponsorEquipment = () => {
  const equipmentList = [
    {
      id: 1,
      name: "C-ARM For Orthopaedic / Urologist",
      description: "C-Arm helps Orthopedic Surgeons by providing images during surgery. By using this instrument the implant is placed in the correct place and many complications are avoided. It has now become necessary in almost all orthopedic surgeries.",
      cost: "7 Million PKR",
      image: "/assets/img/c-arm.jpg"
    },
    {
      id: 2,
      name: "OPG For Dental Department",
      description: "An Orthopantomogram or OPG is a special type of X-Ray that takes images of lower face, teeth, jaw joints and maxillary sinuses. The teeth are displayed in a long flat line. This X-Ray is useful to detail the number of teeth as well as their position and growth.",
      cost: "3 Million PKR",
      image: "/assets/img/opg.jpg"
    },
    {
      id: 3,
      name: "Portable X-RAY",
      description: "Portable X-Ray is necessary for the critically ill patients in the ICU or NICU who cannot be moved to the X-Ray department.",
      cost: "2.5 Million PKR",
      image: "/assets/img/portable-xray.jpg"
    },
    {
      id: 4,
      name: "10 ICU Beds",
      description: "Ten beds and Ten patients monitor are required for ICU Expansion project.",
      cost: "Please inquire",
      image: "/assets/img/icu-beds.jpg"
    },
    {
      id: 5,
      name: "Solar System of 100 KW",
      description: "To cut down the high electric bill and diesel generator expenses, it is suggested to place 100kw solar system which would provide cheap electricity.",
      cost: "15 Million PKR",
      image: "/assets/img/solar-system.jpg"
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