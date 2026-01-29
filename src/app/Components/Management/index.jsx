import React from "react";
import styles from "./management.module.scss";
import { MANAGEMENT } from "@/app/data/management";

const Management = () => {
  return (
    <div className={styles.managementContainer}>
      <div className={styles.managementContent}>
        <h1 className="main-title">Management Team</h1>
        <p className={styles.paragraph}>
          Our dedicated management team brings together diverse expertise to
          guide our organization&apos;s mission and operations.
        </p>

        <div className={styles.tableWrapper}>
          <table className={styles.managementTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {MANAGEMENT.map((member) => (
                <tr key={member.id}>
                  <td className={styles.nameCell}>
                    <strong>{member.name}</strong>
                  </td>
                  <td>{member.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Management;
