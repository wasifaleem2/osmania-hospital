import React from "react";
import styles from "./history.module.scss";

const History = () => {
  const nizams = [
    {
      id: 1,
      name: "Nizam ul Mulk Asaf Jah I – Mir Qamaruddin Khan",
      details: "Founder and first ruler of Asaf Jahi Dynasty",
      period: "1724-1748",
      image: "/assets/img/mir-osman-ali-khan.jpg",
    },
    {
      id: 2,
      name: "Nizam ul Mulk Asaf Jah II – Nizam Ali Khan",
      period: "1762 – 1803",
      image: "/assets/img/mir-osman-ali-khan.jpg",
    },
    {
      id: 3,
      name: "Asaf Jah III – Mir Akbar Ali Khan Sikandar Jah",
      period: "1803 – 1829",
      image: "/assets/img/mir-osman-ali-khan.jpg",
    },
    {
      id: 4,
      name: "Asaf Jah IV – Mir Farkhunda Ali Khan Nasir-ud-Daula",
      period: "1829 – 1857",
      image: "/assets/img/mir-osman-ali-khan.jpg",
    },
    {
      id: 5,
      name: "Asaf Jah V – Mir Tahniat Ali Khan Afzal-ud-Daula",
      period: "1857 – 1869",
      image: "/assets/img/mir-osman-ali-khan.jpg",
    },
    {
      id: 6,
      name: "Asaf Jah VI – Mir Mahboob Ali Khan",
      period: "1869 – 1911",
      image: "/assets/img/mir-osman-ali-khan.jpg",
    },
    {
      id: 7,
      name: "Asaf Jah VII – Mir Osman Ali Khan",
      details: "Last ruler of Asaf Jahi Dynasty",
      period: ["1911 – 1948 (ruler)", "1948 – 1967 (titular nizam)"],
      image: "/assets/img/mir-osman-ali-khan.jpg",
    },
    {
      id: 8,
      name: "Asaf Jah VIII – Mir Barkat Ali Khan Mukarram Jah",
      period: "Titular nizam 1967 – present",
      image: "/assets/img/mir-osman-ali-khan.jpg",
    },
  ];

  return (
    <div className={styles.historyContainer}>
      <div className={styles.historyContent}>
        <h1 className={styles.historyTitle}>Our History</h1>

        <div className={styles.historySection}>
          <h2 className={styles.sectionTitle}>
            Hyderabad Relief and Rehabilitation Trust
          </h2>
          <div className={styles.textContent}>
            <p>
              Hyderabad Relief and Rehabilitation Trust was established in 1950,
              with a donation from Mir Osman Ali Khan, the last Nizam of
              Hyderabad for the rehabilitation of the Hyderabadis who had been
              displaced and were in trying circumstances. Over the years, the
              Trust has built several charitable and rehabilitation projects.
            </p>
          </div>
        </div>

        <div className={styles.founderSection}>
          <div className={styles.founderImageContainer}>
            <img
              src="/assets/img/mir-osman-ali-khan.jpg"
              alt="Mir Osman Ali Khan, the last Nizam of Hyderabad"
              className={styles.founderImage}
            />
            <p className={styles.founderCaption}>Mir Osman Ali Khan (Late)</p>
          </div>
          <div className={styles.founderText}>
            <p>
              Hyderabad Trust Osmania Hospital is one of the most successful
              projects of the Trust which continues to offer services at low or
              no cost.
            </p>
            <p>
              The Trust is indebted to the last Nizam (may God grant him Mercy)
              for his service to mankind through his financial contributions,
              management and sagacity that benefited tens of millions of people
              all over the world and particularly in the State of Hyderabad,
              India and Pakistan. Hyderabadis in particular are keenly aware of
              the massive contributions of this great man, even though he has
              not been recognized universally as he should have been.
            </p>
          </div>
        </div>

        <div className={styles.nizamsSection}>
          <h2 className={styles.sectionTitle}>History of Hyderabad</h2>
          <div className={styles.textContent}>
            <p>
              The state of Hyderabad came into being in 1724 after the fall of
              Mughal Emperor Aurangzeb. The rulers of Hyderabad were given the
              title of Nizam. There were 7 Nizams who ruled Hyderabad, from 1724
              to 1948, when the state of Hyderabad was occupied by India.
            </p>
            <p>
              We would like to enumerate briefly a short history of the
              magnanimous 7 nizams of Hyderabad and the State of Hyderabad as a
              monument to their memory.
            </p>
          </div>

          <div className={styles.nizamsTimeline}>
            {nizams.map((nizam) => (
              <div key={nizam.id} className={styles.timelineItem}>
                <div className={styles.nizamImageContainer}>
                  <img
                    src={nizam?.image}
                    alt={nizam?.name}
                    className={styles?.nizamImage}
                  />
                </div>
                <div className={styles.nizamInfo}>
                  <h3 className={styles.nizamName}>{nizam.name}</h3>
                  {nizam.details && (
                    <p className={styles.nizamDetails}>{nizam.details}</p>
                  )}
                  {Array.isArray(nizam.period) ? (
                    nizam.period.map((period, i) => (
                      <p key={i} className={styles.nizamPeriod}>
                        {period}
                      </p>
                    ))
                  ) : (
                    <p className={styles.nizamPeriod}>{nizam.period}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
