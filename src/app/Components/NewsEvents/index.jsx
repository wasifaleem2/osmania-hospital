"use client"
import React, { useEffect, useMemo } from "react";
import styles from "./newsevents.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { allData, FetchData } from "@/redux/slices/allDataSlice";
import Loader from "../Loader";

const NewsEvents = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(allData);

  useEffect(() => {
    const datafor = {
      categorykey: "newsevents",
      isPublished: true,
      populate: true,
    };
    dispatch(FetchData(datafor));
  }, []);

  // Group data by seoTitle
  const groupedData = useMemo(() => {
    if (!data || data.length === 0) return {};
    
    const groups = {};
    
    data.forEach(item => {
      // Use seoTitle for grouping, fallback to title if seoTitle is not available
      const groupKey = item.seoTitle || item.title || "Other News & Events";
      
      if (!groups[groupKey]) {
        groups[groupKey] = {
          title: groupKey,
          items: []
        };
      }
      
      groups[groupKey].items.push(item);
    });
    
    return groups;
  }, [data]);

  // Get unique groups
  const uniqueGroups = useMemo(() => {
    return Object.keys(groupedData);
  }, [groupedData]);

  // Debug logging
  useEffect(() => {
    console.log("API Data:", data);
    console.log("Grouped Data:", groupedData);
    console.log("Unique Groups:", uniqueGroups);
  }, [data, groupedData, uniqueGroups]);

  if (loading) {
    return (
      <div className={styles.newsEventsContainer}>
        <div className={styles.newsEventsContent}>
          <h1 className="main-title">News & Events</h1>
          <Loader />
          {/* <div className={styles.loading}>Loading news and events...</div> */}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.newsEventsContainer}>
        <div className={styles.newsEventsContent}>
          <h1 className="main-title">News & Events</h1>
          <div className={styles.error}>Error loading news and events. Please try again later.</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.newsEventsContainer}>
      <div className={styles.newsEventsContent}>
        <h1 className="main-title">News & Events</h1>
        
        {/* Show message if no data */}
        {uniqueGroups.length === 0 && !loading ? (
          <div>
            {/* <p>No news and events available at the moment.</p> */}
          </div>
        ) : (
          // Display grouped API data
          <div className={styles.apiDataSection}>
            {uniqueGroups.map((groupKey, index) => {
              const group = groupedData[groupKey];
              const isFirstGroup = index === 0;
              
              // Get description from first item's content if available
              const description = group.items[0]?.content && 
                                group.items[0].content.trim() && 
                                group.items[0].content !== "Detail View of blogs."
                                ? (group.items[0].content.length > 200 
                                    ? `${group.items[0].content.substring(0, 200)}...` 
                                    : group.items[0].content
                                  )
                                : "";
              
              return (
                <div key={groupKey} className={styles.eventSection}>
                  <h2 className={styles.sectionTitle}>
                    {group.title}
                  </h2>
                  
                  {/* Group description */}
                  <p className={styles.sectionDescription}>
                    {description}
                  </p>
                  
                  {/* Grid for group items */}
                  <div className={isFirstGroup ? styles.projectsGrid : styles.awardsGrid}>
                    {group.items.map((item, itemIndex) => (
                      <div key={item.id || itemIndex} className={isFirstGroup ? styles.projectCard : styles.awardCard}>
                        {item.imageUrl && (
                          <div className={styles.itemImage}>
                            <img 
                              src={item.imageUrl} 
                              alt={item.title || `Event ${itemIndex + 1}`}
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.src = "/assets/img/placeholder.jpg";
                                e.currentTarget.alt = "Image not available";
                              }}
                            />
                          </div>
                        )}
                        <div className={styles.itemContent}>
                          <h3>{item.title || `Event ${itemIndex + 1}`}</h3>
                          
                          {/* Show content if it's not the default placeholder text */}
                          {item.content && 
                           item.content.trim() && 
                           item.content !== "Detail View of blogs." && (
                            <div className={styles.description}>
                              {item.content.length > 150 
                                ? `${item.content.substring(0, 150)}...` 
                                : item.content
                              }
                            </div>
                          )}
                          
                          {/* {item.createdAt && (
                            <div className={styles.date}>
                              <span className={styles.dateIcon}>📅</span>
                              {new Date(item.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </div>
                          )} */}
                          
                        </div>
                      </div>
                    ))}
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

export default NewsEvents;