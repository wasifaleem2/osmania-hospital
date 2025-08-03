import React from "react";
import styles from "./management.module.scss";

const Management = () => {
  const managementTeam = [
    {
      id: 1,
      name: "Mr. Shakeel Ahmed Mushtaq",
      designation: "Chief Operating Officer",
      bio: "Oversees the operational strategy and execution of the organization, ensuring efficiency and effectiveness across all departments.",
      image: "/assets/img/member-dummy.jpg",
    },
    {
      id: 2,
      name: "Mr. Mukhtar Ahmed",
      designation: "Chief Accountant",
      bio: "Responsible for financial reporting, budgeting, and maintaining the organization's financial health.",
      image: "/assets/img/member-dummy.jpg",
    },
    {
      id: 3,
      name: "Mr. Muhammad Ismail Khan",
      designation: "Manager Admin",
      bio: "Manages administrative operations, ensuring smooth coordination across various functions.",
      image: "/assets/img/member-dummy.jpg",
    },
    {
      id: 4,
      name: "Mr. Waseem Abro",
      designation: "Manager Supply Chain",
      bio: "Leads procurement and logistics operations to maintain an efficient supply chain.",
      image: "/assets/img/member-dummy.jpg",
    },
    {
      id: 5,
      name: "Dr. Ume-Rabab Mahar",
      designation: "Senior RMO",
      bio: "Experienced medical officer overseeing patient care and hospital operations.",
      image: "/assets/img/member-dummy.jpg",
    },
    {
      id: 6,
      name: "Mr. Muhammad Arshad",
      designation: "OT Incharge",
      bio: "Supervises operating theater activities, ensuring medical procedures run seamlessly.",
      image: "/assets/img/member-dummy.jpg",
    },
    {
      id: 7,
      name: "Mr. Masood Ahmed",
      designation: "Manager Reception",
      bio: "Handles front desk operations and ensures a welcoming experience for patients and visitors.",
      image: "/assets/img/member-dummy.jpg",
    },
    {
      id: 8,
      name: "Mr. Ghulam Qadir",
      designation: "Nursing Incharge (Night)",
      bio: "Manages the nursing staff during night shifts, ensuring quality patient care.",
      image: "/assets/img/member-dummy.jpg",
    },
    {
      id: 9,
      name: "Mr. Shafqat Mehmood",
      designation: "Nursing Incharge (Day)",
      bio: "Oversees daytime nursing operations, maintaining hospital standards in patient treatment.",
      image: "/assets/img/member-dummy.jpg",
    },
  ];

  return (
    <div className={styles.trusteesContainer}>
      <div className={styles.trusteesContent}>
        <h1 className={styles.title}>Management</h1>
        {/* <p className={styles.paragraph}>
          Hyderabad Relief & Rehabilitation Trust is managed by a &apos;BOARD OF
          TRUSTEES&apos; comprising retired Government Officials, Technocrats,
          Doctors and persons from trade and industry. All trustees are working
          purely on honorary basis. A short profile of all present trustees is
          given below.
        </p> */}
        <div className={styles.trusteesGrid}>
          {managementTeam.map(({ id, name, designation, bio, image }) => (
            <div key={id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={image} alt={name} className={styles.image} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.designation}>{designation}</p>
                {/* <p className={styles.bio}>{bio}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;
