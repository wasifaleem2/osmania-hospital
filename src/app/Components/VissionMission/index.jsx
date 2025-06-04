import React from "react";
import styles from "./visionmission.module.scss";

const VissionMission = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.visionSection}>
          <h2 className={styles.sectionTitle}>OUR VISION</h2>
          <p className={styles.sectionText}>
            The Hyderabad Trust Osmania Hospital shall be recognized as one of
            the quality health care institution in Pakistan, meeting catering to
            the less Privileged class of the Country.
          </p>
        </div>

        <div className={styles.missionSection}>
          <h2 className={styles.sectionTitle}>OUR MISSION</h2>
          <ul className={styles.missionList}>
            <li className={styles.missionItem}>
              To provide medical facilities at affordable cost or even free /
              partially free to deserving persons of society without any
              distinction of religion and caste, through Zakat or Donation.
            </li>
            <li className={styles.missionItem}>
              To provide a work environment that fosters motivation and
              commitment in our staff.
            </li>
            <li className={styles.missionItem}>
              To develop new services in response to public expectation as
              resources permit on economically viable and sustainable basis.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VissionMission;
