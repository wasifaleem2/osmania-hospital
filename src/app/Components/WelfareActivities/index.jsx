import React from "react";
import styles from "./welfareactivities.module.scss";

const WelfareActivities = () => {
  const activities = [
    {
      id: 1,
      title: "Distribution of Food Ration",
      description: [
        "This program was started in March 2020, when nation faced lockdowns due to COVID 19 pandemic. It badly affected the income of lower and middle class of society especially the daily wage earners were in miserable condition. The HRRT saw this as an opportunity to help the poor and needy, a project was initiated and arrangements were made to distribute food ration among the affected families. The funding for the project was provided by the Hyderabad Foundation USA. The food ration distribution project ably rescued hundreds of families from famine conditions. The project is now a permanent project of Hyderabad Relief and Rehabilitation Trust and the Hyderabad Foundation USA continues to play a major role in providing funding for the project.",
      ],
      image: "/assets/img/welfares/Distribution of Food Ration.jpg",
      stats: "Helped 5,000+ families during COVID-19 crisis",
    },
    {
      id: 2,
      title: "Distribution of Blankets and Quilts",
      description: [
        "Another welfare project of Hyderabad Relief and Rehabilitation Trust is the distribution of blankets and quilts among the poor persons during winter season. Through this project extremely poor senior citizens, women and children also remained safe from winter diseases. During last winters about 1500 quilts and blankets were distributed. Next year we are planning to increase this number up to 5000 as a large number of families require such type of support every winters.",
      ],
      image: "/assets/img/welfares/Distribution of Blankets and Quilts.jpg",
      stats: "1,500 blankets distributed last winter",
    },
    {
      id: 3,
      title: "Tohfa-e-Eid",
      description: [
        "With the support of esteemed donors and philanthropists, Hyderabad Relief and Rehabilitation Trust has since 2013 started to distribute new clothes among less privilege class of society, during the holy month of Ramzan. The project has been welcomed by all and sundry, as it enables poor and lesser privileged persons to enjoy the blessings of Eid and brings smile on their faces on the sacred occasion of eid.",
      ],
      image: "/assets/img/welfares/Tohfa-e-Eid.jpg",
      stats: "2,000+ Eid gifts distributed annually",
    },
  ];

  return (
    <div className={styles.welfareContainer}>
      <div className={styles.welfareContent}>
        <h1 className={styles.title}>Our Welfare Activities</h1>
        <p className={styles.intro}>
          Through these humanitarian initiatives, we strive to alleviate
          suffering and bring hope to vulnerable communities
        </p>

        <div className={styles.activitiesGrid}>
          {activities.map((activity) => (
            <div key={activity.id} className={styles.activityCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={activity.image}
                  alt={activity.title}
                  className={styles.activityImage}
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.statsBadge}>{activity.stats}</div>
              </div>
              <div className={styles.activityContent}>
                <h2 className={styles.activityTitle}>{activity.title}</h2>
                <div className={styles.activityDescription}>
                  {activity.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                {/* <button className={styles.ctaButton}>
                  Support This Initiative
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelfareActivities;
