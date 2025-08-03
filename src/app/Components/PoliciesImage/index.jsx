import styles from "./policies.module.scss";

const PoliciesImage = () => {
  const imageNumbers = Array.from({ length: 28 }, (_, i) => i + 1);

  return (
    <div className={styles.policiesContainer}>
      <div className={styles.policiesContent}>
        <h1 className="main-title">Policies Images</h1>
        <div className={styles.imagesGrid}>
          {imageNumbers.map((number) => (
            <div key={number} className={styles.imageContainer}>
              <img
                src={`/assets/img/policies/${number}.jpg`}
                alt={`Policy image ${number}`}
                className={styles.policyImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PoliciesImage;