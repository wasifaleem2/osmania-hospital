"use client"
import { allData, FetchData } from "@/redux/slices/allDataSlice";
import styles from "./policies.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const PoliciesImage = () => {
  const dispatch = useDispatch()
  const imageNumbers = Array.from({ length: 28 }, (_, i) => i + 1);
  const { data, loading, error } = useSelector(allData);
  
  useEffect(() => {
    let datafor = {
      categorykey: "policy",
      isPublished: true,
      populate: true,
    };
    dispatch(FetchData(datafor));
  }, []);

  useEffect(()=>{
    console.log("policy data", data)
  }, [data])

  return (
    <div className={styles.policiesContainer}>
      <div className={styles.policiesContent}>
        <h1 className="main-title">Policies Images</h1>
        {/* <div className={styles.imagesGrid}>
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
        </div> */}
        <div className={styles.imagesGrid}>
          {data.map((item) => (
            <div key={item?.id} className={styles.imageContainer}>
              <img
                src={item?.imageUrl}
                alt={`Policy image ${item?.id}`}
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