import React from "react";
import styles from "./trustees.module.scss";

const Trustees = () => {
  const trustees = [
    {
      id: 1,
      name: "Mr. Muhammad Ateequllah",
      designation: "Chairman",
      bio: "An Engineer by profession with about 60 years of Management & Engineering experience. He has been Managing Director of Metropolitan Steel Corporation of Pakistan and Hashoo Steel Industries / Gel Caps belonging to Hashoo Group for about 17 years. He served as the Executive Director for about 20 years with International Industries Limited & International Steels Limited, leading steel pipe manufacturer and Cold Rolled / Galvanized Steel Coils. He held the position of Vice Chairman and is now Chairman of Hyderabad Relief & Rehabilitation Trust.",
      image: "/assets/img/member-dummy.jpg",
    },
    {
      id: 2,
      name: "Dr. Raza Baig",
      designation: "Vice-Chairman",
      bio: "BDS from Liaquat Medical College, Jamshoro in 1972 with postgraduate trainings from Singapore and Malaysia. Served in Liaquat National Hospital for four years, worked as a consultant dental surgeon in Saudi Arabia for twelve years. Joined Hyderabad Relief & Rehabilitation Trust in 1992, became Vice Chairman in 2012. Also President of Child Health Foundation, running five children clinics in Karachi.",
      image: "/assets/img/member-dummy.jpg",
    },
    {
      id: 3,
      name: "Dr. Kazi Taqiuddin Adil",
      designation: "Trustee",
      bio: "Graduated from Dow Medical College, Karachi in 1976, with post-graduation from USA and UK. Worked in UAE as a Consultant Physician & Cardiologist before returning to Pakistan in 1989. Joined Hyderabad Relief and Rehabilitation Trust (HRRT) as Trustee in 1999, actively involved in developing Osmania Hospital into a Multi-disciplinary General Hospital.",
      image: "/assets/img/member-dummy.jpg",
    },
    {
      id: 4,
      name: "Dr. Shahzad Alam",
      designation: "Trustee",
      bio: "Graduated from DOW Medical College and did M.Sc from City University London. Executive Director Darul Sehat Hospital and LCMD, also a course director and visiting faculty at DOW University of Health Sciences. Joined Hyderabad Relief & Rehabilitation Trust as Trustee in 2008.",
      image: "/assets/img/member-dummy.jpg",
    },
    {
      id: 5,
      name: "Mr. Asghar Jamil Rizvi",
      designation: "Trustee",
      bio: "Engineer by profession. Passed BE from NED University Karachi in 1978. Served in Metropolitan Steel Corporation Ltd. as Managing Director, currently working with Amreli Steel as Consultant. Joined the board of Hyderabad Relief & Rehabilitation Trust as Trustee in 2008.",
      image: "/assets/img/member-dummy.jpg",
    },
    {
      id: 6,
      name: "Mr. Ahmed Moinuddin",
      designation: "Trustee",
      bio: "Marketing Manager Middle East for Seal For Life Industries BVBA, Dubai. Previously worked in Pakistan, USA, Mideast, Africa, and Far East in various engineering and sales roles. Holds degrees from University of London, MIT, and Stanford University. Joined the Board of Trustees in 2014.",
      image: "/assets/img/member-dummy.jpg",
    },
    {
      id: 7,
      name: "Capt(R). Ahmed Zaheer",
      designation: "Trustee",
      bio: "Retired Pakistan Navy officer, war veteran, and education management expert. Served as Registrar at the Institute of Business Administration, Karachi, and currently Director of Pakistan Navy History & Archive, Centre in the Maritime Museum. Joined Hyderabad Relief & Rehabilitation Trust as Trustee in 2021.",
      image: "/assets/img/member-dummy.jpg",
    },
  ];

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
          {trustees.map(({ id, name, designation, bio, image }) => (
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
