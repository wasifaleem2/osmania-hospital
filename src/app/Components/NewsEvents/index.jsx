import React from "react";
import styles from "./newsevents.module.scss";

const NewsEvents = () => {
  const ceremony = ["/assets/img/events/Event Ceremony 1.jpeg", "/assets/img/events/Event Ceremony 2.jpeg", "/assets/img/events/Event Ceremony 3.jpg", "/assets/img/events/Event Ceremony 4.jpg", "/assets/img/events/Event Ceremony 5.jpg"]
  const events = [
    {
      id: 1,
      title: "Projects Completed - March 2023",
      description: "To celebrate the completion of said projects, a ceremony was arranged by Management of Hospital on March 19, 2023 in which some awards were also distributed among doctors and staff.",
      items: [
        {
          id: 1,
          name: "Renovation of Basement",
          // image: "/assets/img/suegery_overlay.jpg",
          description: "Complete renovation of hospital basement area to create additional storage and workspace.",
        },
        {
          id: 2,
          name: "Expansion of ICU",
          // image: "/assets/img/suegery_overlay.jpg",
          description: "Significant expansion of Intensive Care Unit to accommodate more critical patients.",
        },
        {
          id: 3,
          name: "Expansion of NICU",
          // image: "/assets/img/suegery_overlay.jpg",
          description: "Newborn Intensive Care Unit expansion to enhance neonatal care services.",
        },
      ],
    },
    {
      id: 2,
      title: "Long Association Award",
      description: "Given to those consultant doctors who have been working with Osmania Hospital since last fifteen years.",
      items: [
        { name: "Dr. Rozina Yasir (Gynecologist)", image: "/assets/img/events/Dr. Rozina Yasir.jpeg" },
        { name: "Dr. Mumtaz Manzoor (General Surgeon)", image: "/assets/img/events/Dr. Mumtaz Manzoor.jpeg" },
        { name: "Dr. Rashida Rahim (Gynecologist)", image: "/assets/img/events/Dr. Rashida Rahim.jpeg" },
      ],
    },
    {
      id: 3,
      title: "Special Achievement Award",
      description: "Given to doctors who started their career with Osmania Hospital and continued higher studies to obtain FCPS/MCPS degrees.",
      items: [
        { name: "Dr. Nisha Tabassum (FCPS in Gynecology)", image: "/assets/img/events/Dr. Nisha Tabassum.jpeg" },
        { name: "Dr. Noor Jahan (MCPS in Gynecology)", image: "/assets/img/events/Dr. Noor Jahan.jpeg" },
      ],
    },
    {
      id: 4,
      title: "Best Nursing Services Award",
      description: "Awarded to outstanding nursing staff of Osmania Hospital.",
      items: [
        { name: "Mr. Imran", image: "/assets/img/events/Mr. Imran.jpeg" },
        { name: "Mr. Muhammad Sheraz", image: "/assets/img/events/Mr. Muhammad Sheraz.jpeg" },
        { name: "Mr. Munwaar Rasool", image: "/assets/img/events/Mr. Munwaar Rasool.jpeg" },
        { name: "Mr. Muhammad Danish Khan", image: "/assets/img/events/Mr. Muhammad Danish Khan.jpeg" },
        { name: "Mr. Yasir Ahmed", image: "/assets/img/events/Mr. Yasir Ahmed.jpeg" },
      ],
      image: "/assets/img/suegery_overlay.jpg",
    },
    {
      id: 5,
      title: "Best Services Award",
      description: "Recognizing exceptional service across various departments.",
      items: [
        { name: "Dr. Erum Faisal (Sonologist)", image: "/assets/img/events/Dr. Erum Faisal.jpeg" },
        { name: "Ms. Sadia Ashas Shah (Receptionist)", image: "/assets/img/events/Ms. Sadia Ashas Shah.jpeg" },
        { name: "Mr. Muhammad Muzammil (Receptionist)", image: "/assets/img/events/Mr. Muhammad Muzammil.jpeg" },
      ],
      image: "/assets/img/suegery_overlay.jpg",
    },
  ];

  return (
    <div className={styles.newsEventsContainer}>
      <div className={styles.newsEventsContent}>
        <h1 className="main-title">News & Events</h1>
        <div className={styles.ceremonyGrid} style={{marginBottom: "50px"}}>
          {ceremony.map((item, index) => (
            <div key={index} className={styles.ceremonyCard}>
              <div className={styles.itemImage}>
                <img src={item} alt={`Ceremony ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>

        {events.map((event) => (
          <div key={event.id} className={styles.eventSection}>
            <h2 className="main-sub-title">{event.title}</h2>
            <p className={styles.sectionDescription}>{event.description}</p>

            <div className={event.id === 1 ? styles.projectsGrid : styles.awardsGrid}>
              {event.items.map((item, index) => (
                <div key={index} className={event.id === 1 ? styles.projectCard : styles.awardCard}>
                  {item?.image && (
                    <div className={styles.itemImage}>
                      <img src={item?.image} alt={item?.name} />
                    </div>
                  )}
                  <div className={styles.itemContent}>
                    <h3>{item?.name}</h3>
                    {item?.description && <p>{item?.description}</p>}
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