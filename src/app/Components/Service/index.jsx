"use client";

import {
  FaHospitalAlt,
  FaVial,
  FaXRay,
  FaCapsules,
  FaBaby,
  FaBed,
  FaProcedures,
  FaTooth,
  FaEye,
  FaHeartbeat,
  FaWaveSquare,
  FaMicrophone,
  FaRunning,
  FaAngleDoubleRight,
  FaLungs,
  FaStethoscope,
  FaBrain,
  FaMicroscope,
  FaUsers,
  FaSyringe,
  FaVials,
  FaBone,
  FaFlask,
  FaNutritionix,
} from "react-icons/fa";
import { FaScissors, FaUserDoctor } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import styles from "../../sass/module/service.module.scss";

const Service = ({ data }) => {
  // const data = {
  //   subtitle: 'OUR BEST SERVICE',
  //   title: 'High-Quality Medical Services',
  //   description: 'We provide comprehensive healthcare solutions with state-of-the-art technology and compassionate care for all your medical needs.',
  //   services: [
  //     { index: '01', title: '24 Hours Emergency', subtitle: 'Round-the-clock emergency medical care', icon: 'FaHospitalAlt', link: '/service/24-hours-emergency' },
  //     { index: '02', title: '24 Hours Laboratory', subtitle: 'Full-time diagnostic and medical testing', icon: 'FaVial', link: '/service/24-hours-laboratory' },
  //     { index: '03', title: '24 Hours X-Ray', subtitle: 'Accurate and immediate X-ray imaging services', icon: 'FaXRay', link: '/service/24-hours-x-ray' },
  //     { index: '04', title: '24 Hours Pharmacy', subtitle: 'Access to essential medicines at any time', icon: 'FaCapsules', link: '/service/24-hours-pharmacy' },
  //     { index: '05', title: 'NICU', subtitle: 'Specialized neonatal intensive care for newborns', icon: 'FaBaby', link: '/service/nicu' },
  //     { index: '06', title: 'Well Equipped Labor Room', subtitle: 'Comfortable and safe maternity care', icon: 'FaBed', link: '/service/well-equipped-labor-room' },
  //     { index: '07', title: 'Operation Theater', subtitle: 'Advanced surgical facilities for critical procedures', icon: 'FaScissors', link: '/service/operation-theater' },
  //     { index: '08', title: 'Special Care Unit', subtitle: 'Dedicated care for high-risk patients', icon: 'FaProcedures', link: '/service/special-care-unit' },
  //     { index: '09', title: 'Dental Clinic', subtitle: 'Comprehensive oral health and dentistry services', icon: 'FaTooth', link: '/service/dental-clinic' },
  //     { index: '10', title: 'Eye Clinic', subtitle: 'Vision care and eye treatment services', icon: 'FaEye', link: '/service/eye-clinic' },
  //     { index: '11', title: 'Echocardiography', subtitle: 'Advanced heart imaging for precise diagnosis', icon: 'FaHeartbeat', link: '/service/echocardiography' },
  //     { index: '12', title: 'Ultrasound', subtitle: 'Non-invasive imaging for medical diagnosis', icon: 'FaWaveSquare', link: '/service/ultrasound' },
  //     { index: '13', title: 'Speech Therapy Center', subtitle: 'Professional therapy for speech and language disorders', icon: 'FaMicrophone', link: '/service/speech-therapy-center' },
  //     { index: '14', title: 'Physiotherapy', subtitle: 'Rehabilitation and movement therapy services', icon: 'FaRunning', link: '/service/physiotherapy' },
  //   ],
  //   footerIcon: '/assets/img/icons/service_footer_icon_1.png',
  //   footerText: 'Delivering tomorrow\'s health care for your family today. Our dedicated team is committed to your wellbeing.',
  //   footerLink: '/services',
  //   footerLinkText: 'Explore All Services',
  // };

  const IconComponent = ({ iconName }) => {
    const icons = {
      FaHospitalAlt: FaHospitalAlt,
      FaVial: FaVial,
      FaXRay: FaXRay,
      FaCapsules: FaCapsules,
      FaBaby: FaBaby,
      FaBed: FaBed,
      FaScissors: FaScissors,
      FaProcedures: FaProcedures,
      FaTooth: FaTooth,
      FaEye: FaEye,
      FaHeartbeat: FaHeartbeat,
      FaWaveSquare: FaWaveSquare,
      FaMicrophone: FaMicrophone,
      FaRunning: FaRunning,

      FaUserDoctor: FaUserDoctor,
      FaNutritionix: FaNutritionix,
      FaBrain: FaBrain,
      FaLungs: FaLungs,
      FaStethoscope: FaStethoscope,
      FaSyringe: FaSyringe,
      FaUsers: FaUsers,
      FaFlask: FaFlask,
      FaBone: FaBone,
      FaMicroscope: FaMicroscope,
    };

    const Icon = icons[iconName];
    return Icon ? <Icon /> : null;
  };

  return (
    <div className={styles.serviceContainer}>
      <div className={styles.sectionHeader}>
        {/* <p className={styles.subtitle}>{data.subtitle}</p> */}
        <h2 className="main-title">{data.title}</h2>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>

      <div className={styles.servicesGrid}>
        {data.services.map((service) => (
          <div key={service.index} className={styles.serviceCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <IconComponent iconName={service.icon} />
              </div>
              <span className={styles.cardIndex}>{service.index}</span>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                <Link href={service.link}>{service.title}</Link>
              </h3>
              <p className={styles.cardSubtitle}>{service.subtitle}</p>

              <Link href={service.link} className={styles.readMore}>
                Read More
                <span className={styles.arrow}>
                  <FaAngleDoubleRight />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* <div className={styles.serviceFooter}>
        <div className={styles.serviceFooterIcon}>
          <Image
            src={data.footerIcon}
            alt="Healthcare Services"
            width={40}
            height={40}
          />
        </div>
        <p
          className={styles.serviceFooterText}
          dangerouslySetInnerHTML={{ __html: data.footerText }}
        />
        <Link href={data.footerLink} className={styles.serviceFooterLink}>
          {data.footerLinkText}
          <span><FaAngleDoubleRight /></span>
        </Link>
      </div> */}
    </div>
  );
};

export default Service;
