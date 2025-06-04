import React from 'react';
import styles from './factsfigures.module.scss';

const FactsFigures = () => {
  const data = [
    { year: '2013-14', amount: 'Rs.5,223,883/-' },
    { year: '2014-15', amount: 'Rs.10,364,598/-' },
    { year: '2015-16', amount: 'Rs.12,034,138/-' },
    { year: '2016-17', amount: 'Rs.14,907,200/-' },
    { year: '2017-18', amount: 'Rs.17,369,691/-' },
    { year: '2018-19', amount: 'Rs.39,422,580/-' },
    { year: '2019-20', amount: 'Rs.32,861,725/-' },
  ];

  return (
    <div className={styles.fnfContainer}>
      <div className={styles.fnfContent}>
        <h1 className={styles.fnfTitle}>Facts & Figures</h1>
        
        <div className={styles.fnfDescription}>
          <p className={styles.fnfParagraph}>
            Hyderabad Trust Osmania Hospital has a system in place for ensuring that Zakat Funds are disbursed to only patients who genuinely qualified for Zakat. Due diligence to establish eligibility of Zakat mustehqeen is conducted without damaging the self-respect, dignity and honor of deserving patients and their families.
          </p>
          <p className={styles.fnfParagraph}>
            It is our honor to help all deserving patients who approach our hospital seeking medical help, no matter what the condition of our Zakat Fund. It is our strong belief that Allah will help such needy patients and provide resources for them.
          </p>
          <p className={styles.fnfParagraph}>
            The last five years data of growing Zakat Fund spending on deserving patients is confirmation of our belief that it is only and only Allah who sends and will continue to send more Zakat every year to meet the requirements of those we strive to serve.
          </p>
        </div>

        <div className={styles.fnfTableContainer}>
          <table className={styles.fnfTable}>
            <thead>
              <tr>
                <th className={styles.fnfTableHeader}>Year</th>
                <th className={styles.fnfTableHeader}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? styles.fnfEvenRow : styles.fnfOddRow}>
                  <td className={styles.fnfTableCell}>{item.year}</td>
                  <td className={styles.fnfTableCell}>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FactsFigures;