import React from "react";
import styles from "./newsevents.module.scss";

const NewsEvents = () => {
  const events = [
    {
      id: 1,
      title: "Projects Completed - March 2023",
      description: "To celebrate the completion of said projects, a ceremony was arranged by Management of Hospital on March 19, 2023 in which some awards were also distributed among doctors and staff.",
      items: [
        {
          id: 1,
          name: "Renovation of Basement",
          image: "/assets/img/suegery_overlay.jpg",
          description: "Complete renovation of hospital basement area to create additional storage and workspace.",
        },
        {
          id: 2,
          name: "Expansion of ICU",
          image: "/assets/img/suegery_overlay.jpg",
          description: "Significant expansion of Intensive Care Unit to accommodate more critical patients.",
        },
        {
          id: 3,
          name: "Expansion of NICU",
          image: "/assets/img/suegery_overlay.jpg",
          description: "Newborn Intensive Care Unit expansion to enhance neonatal care services.",
        },
      ],
    },
    {
      id: 2,
      title: "Long Association Award",
      description: "Given to those consultant doctors who have been working with Osmania Hospital since last fifteen years.",
      items: [
        { name: "Dr. Rozina Yasir (Gynecologist)", image: "/assets/img/suegery_overlay.jpg" },
        { name: "Dr. Mumtaz Manzoor (General Surgeon)", image: "/assets/img/suegery_overlay.jpg" },
        { name: "Dr. Rashida Rahim (Gynecologist)", image: "/assets/img/suegery_overlay.jpg" },
      ],
    },
    {
      id: 3,
      title: "Special Achievement Award",
      description: "Given to doctors who started their career with Osmania Hospital and continued higher studies to obtain FCPS/MCPS degrees.",
      items: [
        { name: "Dr. Nisha Tabassum (FCPS in Gynecology)", image: "/assets/img/suegery_overlay.jpg" },
        { name: "Dr. Noor Jahan (MCPS in Gynecology)", image: "/assets/img/suegery_overlay.jpg" },
      ],
    },
    {
      id: 4,
      title: "Best Nursing Services Award",
      description: "Awarded to outstanding nursing staff of Osmania Hospital.",
      items: [
        { name: "Mr. Imran", image: "/assets/img/suegery_overlay.jpg" },
        { name: "Mr. Muhammad Sheraz", image: "/assets/img/suegery_overlay.jpg" },
        { name: "Mr. Munwaar Rasool", image: "/assets/img/suegery_overlay.jpg" },
        { name: "Mr. Muhammad Danish Khan", image: "/assets/img/suegery_overlay.jpg" },
        { name: "Mr. Yasir Ahmed", image: "/assets/img/suegery_overlay.jpg" },
      ],
      image: "/assets/img/suegery_overlay.jpg",
    },
    {
      id: 5,
      title: "Best Services Award",
      description: "Recognizing exceptional service across various departments.",
      items: [
        { name: "Dr. Erum Faisal (Sonologist)", image: "/assets/img/suegery_overlay.jpg" },
        { name: "Ms. Sadia Ashas Shah (Receptionist)", image: "/assets/img/suegery_overlay.jpg" },
        { name: "Mr. Muhammad Muzammil (Receptionist)", image: "/assets/img/suegery_overlay.jpg" },
      ],
      image: "/assets/img/suegery_overlay.jpg",
    },
  ];

  return (
    <div className={styles.newsEventsContainer}>
      <div className={styles.newsEventsContent}>
        <h1 className="main-title">News & Events</h1>
        
        {events.map((event) => (
          <div key={event.id} className={styles.eventSection}>
            <h2 className="main-sub-title">{event.title}</h2>
            <p className={styles.sectionDescription}>{event.description}</p>
            
            <div className={event.id === 1 ? styles.projectsGrid : styles.awardsGrid}>
              {event.items.map((item, index) => (
                <div key={index} className={event.id === 1 ? styles.projectCard : styles.awardCard}>
                  <div className={styles.itemImage}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={styles.itemContent}>
                    <h3>{item.name}</h3>
                    {item.description && <p>{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsEvents;