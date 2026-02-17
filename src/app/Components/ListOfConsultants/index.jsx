"use client"
import React, { useEffect } from "react";
import styles from "./listofconsultant.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { allData, FetchData } from "@/redux/slices/allDataSlice";
import Loader from "../Loader";

const Consultants = () => {
  // const consultants = ["/assets/img/consultants/list-of-consultants-1.jpg", "/assets/img/consultants/list-of-consultants-2.jpg", "/assets/img/consultants/list-of-consultants-3.jpg" ];
  const consultants = ["/assets/img/consultants/consultants new.jpg"];
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(allData);
  
  useEffect(() => {
    let datafor = {
      categorykey: "consultant",
      order: "asc",
      isPublished: true,
    };
    dispatch(FetchData(datafor));
  }, []);

  return (
    <div className={styles.consultantsContainer}>
      <div className={styles.consultantsContent}>
        <h1 className="main-title">Our Consultants</h1>
        
        {
          loading ? <Loader /> :
          <div className={styles.consultantsGallery}>
            {data?.length > 0 && data.map((consultant, index) => (
              // <div key={consultant.id} className={styles.consultantCard}>
                <img 
                  key={index}
                  src={consultant?.imageUrl} 
                  alt={`${consultant?.title} image`} 
                  className={styles.consultantImage}
                />
              // </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Consultants;