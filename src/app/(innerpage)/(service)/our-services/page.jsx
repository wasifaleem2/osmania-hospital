import PageHeading from "@/app/Components/PageHeading";
import Section from "@/app/Components/Section";
import Service from "@/app/Components/Service";
import React from "react";

const headingData = {
  title: "Services",
};

const serviceData = {
  subtitle: "OUR BEST SERVICE",
  title: "High-Quality Medical Services",
  description:
    "We provide comprehensive healthcare solutions with state-of-the-art technology and compassionate care for all your medical needs.",
  services: [
    {
      index: "01",
      title: "24 Hours Emergency",
      subtitle: "Round-the-clock emergency medical care",
      icon: "FaHospitalAlt",
      link: "/service/24-hours-emergency",
    },
    {
      index: "02",
      title: "24 Hours Laboratory",
      subtitle: "Full-time diagnostic and medical testing",
      icon: "FaVial",
      link: "/service/24-hours-laboratory",
    },
    {
      index: "03",
      title: "24 Hours X-Ray",
      subtitle: "Accurate and immediate X-ray imaging services",
      icon: "FaXRay",
      link: "/service/24-hours-x-ray",
    },
    {
      index: "04",
      title: "24 Hours Pharmacy",
      subtitle: "Access to essential medicines at any time",
      icon: "FaCapsules",
      link: "/service/24-hours-pharmacy",
    },
    {
      index: "05",
      title: "NICU",
      subtitle: "Specialized neonatal intensive care for newborns",
      icon: "FaBaby",
      link: "/service/nicu",
    },
    {
      index: "06",
      title: "Well Equipped Labor Room",
      subtitle: "Comfortable and safe maternity care",
      icon: "FaBed",
      link: "/service/well-equipped-labor-room",
    },
    {
      index: "07",
      title: "Operation Theater",
      subtitle: "Advanced surgical facilities for critical procedures",
      icon: "FaScissors",
      link: "/service/operation-theater",
    },
    {
      index: "08",
      title: "Special Care Unit",
      subtitle: "Dedicated care for high-risk patients",
      icon: "FaProcedures",
      link: "/service/special-care-unit",
    },
    {
      index: "09",
      title: "Dental Clinic",
      subtitle: "Comprehensive oral health and dentistry services",
      icon: "FaTooth",
      link: "/service/dental-clinic",
    },
    {
      index: "10",
      title: "Eye Clinic",
      subtitle: "Vision care and eye treatment services",
      icon: "FaEye",
      link: "/service/eye-clinic",
    },
    {
      index: "11",
      title: "Echocardiography",
      subtitle: "Advanced heart imaging for precise diagnosis",
      icon: "FaHeartbeat",
      link: "/service/echocardiography",
    },
    {
      index: "12",
      title: "Ultrasound",
      subtitle: "Non-invasive imaging for medical diagnosis",
      icon: "FaWaveSquare",
      link: "/service/ultrasound",
    },
    {
      index: "13",
      title: "Speech Therapy Center",
      subtitle: "Professional therapy for speech and language disorders",
      icon: "FaMicrophone",
      link: "/service/speech-therapy-center",
    },
    {
      index: "14",
      title: "Physiotherapy",
      subtitle: "Rehabilitation and movement therapy services",
      icon: "FaRunning",
      link: "/service/physiotherapy",
    },
  ],
  footerIcon: "/assets/img/icons/service_footer_icon_1.png",
  footerText:
    "Delivering tomorrow's health care for your family today. Our dedicated team is committed to your wellbeing.",
  footerLink: "/services",
  footerLinkText: "Explore All Services",
};
const Page = () => {
  return (
    <div>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        // backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <Service data={serviceData} />
      </Section>
    </div>
  );
};

export default Page;
