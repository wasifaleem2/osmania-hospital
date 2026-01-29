import React from "react";
import styles from "./visionmission.module.scss";

const VissionMission = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.visionSection}>
          <h2 className={styles.sectionTitle}>OUR VISION</h2>
          <p className={styles.sectionText}>
            The Osmania Hospital shall be recognized as quality healthcare
            institution in Pakistan, catering to the less Privileged class of
            society.
          </p>
        </div>

        <div className={styles.missionSection}>
          <h2 className={styles.sectionTitle}>OUR MISSION</h2>
          <ul className={styles.missionList}>
            <li className={styles.missionItem}>
              To provide medical facilities at affordable cost or free /
              partially free to deserving patients of society without any
              distinction of religion and caste through Zakat or donation.
            </li>
            <li className={styles.missionItem}>
              To provide a work environment that fosters motivation and
              commitment in our staff.
            </li>
            <li className={styles.missionItem}>
              To expand healthcare facilities by developing new services in
              response to public needs and expectation while ensuring an
              economically viable and sustainable financial status.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VissionMission;
