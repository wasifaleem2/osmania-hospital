import React from "react";
import styles from "./aboutintroduction.module.scss";

const AboutIntroduction = () => {
  return (
    <div className={styles.introductionContainer}>
      <div className={styles.introductionContent}>
        <h1 className={styles.title}>Introduction</h1>
        <div className={styles.textSection}>
          <p className={styles.paragraph}>
            The Hyderabad Relief and Rehabilitation Trust is one of the oldest
            trusts registered at Karachi in September 1950. The Trust is managed
            by a Board of Trustees comprising retired government officials,
            technocrats, doctors and persons from trade and industry. All
            trustees are working purely on honorary basis.
          </p>

          <p className={styles.paragraph}>
            The Hyderabad Relief and Rehabilitation Trust started Hyderabad
            Trust Osmania Hospital in 1950. The aim behind it, is to provide
            quality health care at affordable cost to middle or lower middle
            class of society. The services of hospital are being free /
            partially free to Zakat deserving patients. Thousands of persons
            take the advantage of this facility every year. We have a team of
            highly qualified doctors and paramedical staff which help us to
            provide quality health care to society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutIntroduction;
