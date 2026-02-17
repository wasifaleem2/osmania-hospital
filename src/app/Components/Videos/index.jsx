"use client";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./videos.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { allData, FetchData } from "@/redux/slices/allDataSlice";
import Loader from "../Loader";
import GenericVideoPlayer from "./genericVideoPlayer";
import { FaVideo } from "react-icons/fa";

const Videos = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(allData);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const datafor = {
      categorykey: "videos",
      isPublished: true,
      populate: true,
    };
    dispatch(FetchData(datafor));
  }, []);

  const groupedData = useMemo(() => {
    if (!data || data.length === 0) return {};
    const groups = {};
    data.forEach((item) => {
      const groupKey = item.seoTitle || item.title || "Educational Videos";
      if (!groups[groupKey]) {
        groups[groupKey] = {
          title: groupKey,
          items: [],
        };
      }
      groups[groupKey].items.push(item);
    });
    return groups;
  }, [data]);

  const uniqueGroups = useMemo(() => {
    return Object.keys(groupedData);
  }, [groupedData]);

  const getVideoUrl = (item) => {
    return item.imageUrl || null;
  };

  if (loading) {
    return (
      <div className={styles.videosContainer}>
        <div className={styles.videosContent}>
          <h1 className="main-title">Videos</h1>
          <Loader />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.videosContainer}>
        <div className={styles.videosContent}>
          <h1 className="main-title">Videos</h1>
          <div className={styles.error}>
            Error loading videos. Please try again later.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.videosContainer}>
      <div className={styles.videosContent}>
        <h1 className="main-title">Videos</h1>

        {uniqueGroups.length === 0 ? (
          <div className={styles.noData}>
            <FaVideo className={styles.noDataIcon} />
            <p>No videos available at the moment.</p>
          </div>
        ) : (
          <div className={styles.apiDataSection}>
            {uniqueGroups.map((groupKey) => {
              const group = groupedData[groupKey];
              
              const validItem = group?.items?.find(
                item =>
                  item?.seoDescription &&
                  item?.seoDescription?.trim() &&
                  item?.seoDescription !== "Detail View of blogs."
              );

              const description = validItem
                ? validItem?.seoDescription?.length > 200
                  ? `${validItem?.seoDescription?.substring(0, 200)}...`
                  : validItem?.seoDescription
                : "";

              return (
                <div key={groupKey} className={styles.videoSection}>
                  <h2 className={styles.sectionTitle}>{group.title}</h2>
                  {/* {description && (
                    <p className={styles.sectionDescription}>{description}</p>
                  )} */}

                  <div className={styles.videoGrid}>
                    {group.items.map((item, itemIndex) => {
                      const videoUrl = getVideoUrl(item);
                      
                      return (
                        <div
                          key={item.id || itemIndex}
                          className={styles.videoCard}
                        >
                          <GenericVideoPlayer
                            videoUrl={videoUrl}
                            title={item.title}
                            autoPlay={false}
                          />
                          
                          <div className={styles.itemContent}>
                            <h3>{item.title || `Video ${itemIndex + 1}`}</h3>
                            {item.content && 
                             item.content.trim() && 
                             item.content !== "Detail View of blogs." && (
                              <div className={styles.description}>
                                {item.content.length > 120
                                  ? `${item.content.substring(0, 120)}...`
                                  : item.content}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;