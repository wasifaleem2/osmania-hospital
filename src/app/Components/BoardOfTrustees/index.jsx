'use client';
import Slider from 'react-slick';
import SectionHeading from '../SectionHeading';
import styles from './trustees.module.scss';
import { TRUSTEES } from '@/app/data/trustees';

const BoardOfTrustees = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className={styles.trusteesSection}>
      <div className="container">
        <SectionHeading
          SectionSubtitle="Meet Our"
          SectionTitle="Board of Trustees"
          variant="text-center"
        />

        <div className={styles.sliderContainer}>
          <Slider {...settings} className={styles.trusteeSlider}>
            {TRUSTEES.map((trustee) => (
              <div key={trustee.id} className={styles.slide}>
                <div className={styles.trusteeCard}>
                  <div className={styles.imageContainer}>
                    <img
                      src={trustee.image}
                      alt={trustee.name}
                      className={styles.trusteeImage}
                    />
                    <div className={styles.imageOverlay}>
                      <div className={styles.trusteeInfo}>
                        <h3 className={styles.trusteeName}>{trustee.name}</h3>
                        <p className={styles.trusteeDesignation}>{trustee.designation}</p>
                        <div className={styles.trusteeBio}>
                          <p>{trustee.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BoardOfTrustees;