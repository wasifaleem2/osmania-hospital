import React from "react";
import styles from "./trustees.module.scss";
import { TRUSTEES } from "@/app/data/trustees";

const Trustees = () => {
 
  return (
    <div className={styles.trusteesContainer}>
      <div className={styles.trusteesContent}>
        <h1 className={styles.title}>Board Of Trustees</h1>
        <p className={styles.paragraph}>
          Hyderabad Relief & Rehabilitation Trust is managed by a &apos;BOARD OF
          TRUSTEES&apos; comprising retired Government Officials, Technocrats,
          Doctors and persons from trade and industry. All trustees are working
          purely on honorary basis. A short profile of all present trustees is
          given below.
        </p>
        <div className={styles.trusteesGrid}>
          {TRUSTEES.map(({ id, name, designation, bio, image }) => (
            <div key={id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={image} alt={name} className={styles.image} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.designation}>{designation}</p>
                <p className={styles.bio}>{bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trustees;
