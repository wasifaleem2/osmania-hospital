"use client"
import { FetchData } from "@/redux/slices/allDataSlice";
import styles from "./policies.module.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const PoliciesImage = () => {
  const dispatch = useDispatch()
  const imageNumbers = Array.from({ length: 28 }, (_, i) => i + 1);

  useEffect(() => {
    let datafor = {
      categorykey: "policy",
      isPublished: true,
      populate: true,
    };
    dispatch(FetchData(datafor));
  }, []);

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