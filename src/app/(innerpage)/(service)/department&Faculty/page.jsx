import PageHeading from "@/app/Components/PageHeading";
import Section from "@/app/Components/Section";
import Service from "@/app/Components/Service";
import React from "react";
const headingData = {
  title: "Clinical Departments & Faculty",
};

const departmentsData = {
  subtitle: "DEPARTMENTS & FACULTY",
  title: "High-Quality Medical Departments",
  description:
    "Our hospital provides specialized medical care across various departments, ensuring patients receive expert treatment from experienced professionals.",
  services: [
    {
      index: "01",
      title: "Anaesthesiology",
      subtitle: "Expert pain management and surgical anesthesia care",
      icon: "FaBrain",
      link: "/departments/anaesthesiology",
    },
    {
      index: "02",
      title: "Cardiology",
      subtitle: "Advanced heart care and cardiovascular treatment",
      icon: "FaHeartbeat",
      link: "/departments/cardiology",
    },
    {
      index: "03",
      title: "Diabetes & Endocrinology",
      subtitle: "Comprehensive hormonal and metabolic disorder care",
      icon: "FaFlask",
      link: "/departments/diabetes-endocrinology",
    },
    {
      index: "04",
      title: "ENT",
      subtitle: "Ear, Nose, and Throat treatment & surgeries",
      icon: "FaUserDoctor",
      link: "/departments/ent",
    },
    {
      index: "05",
      title: "Eye – Ophthalmology",
      subtitle: "Vision care, eye surgery, and treatment for disorders",
      icon: "FaEye",
      link: "/departments/ophthalmology",
    },
    {
      index: "06",
      title: "Family Medicine",
      subtitle: "Holistic healthcare for individuals and families",
      icon: "FaUsers",
      link: "/departments/family-medicine",
    },
    {
      index: "07",
      title: "General Surgery",
      subtitle: "Expert surgical care for a wide range of conditions",
      icon: "FaProcedures",
      link: "/departments/general-surgery",
    },
    {
      index: "08",
      title: "Infectious Diseases",
      subtitle: "Treatment of viral, bacterial & fungal infections",
      icon: "FaSyringe",
      link: "/departments/infectious-diseases",
    },
    {
      index: "09",
      title: "Internal Medicine",
      subtitle: "Comprehensive care for chronic diseases and internal health",
      icon: "FaStethoscope",
      link: "/departments/internal-medicine",
    },
    {
      index: "10",
      title: "Nutrition",
      subtitle: "Personalized diet plans and nutritional counseling",
      icon: "FaNutritionix",
      link: "/departments/nutrition",
    },
    {
      index: "11",
      title: "Nephrology",
      subtitle: "Kidney care and dialysis treatment",
      icon: "FaLungs",
      link: "/departments/nephrology",
    },
    {
      index: "12",
      title: "Orthopedics",
      subtitle: "Bone and joint health, including surgeries",
      icon: "FaBone",
      link: "/departments/orthopedics",
    },
    {
      index: "13",
      title: "Paediatrics & Neonatology",
      subtitle: "Healthcare for infants, children, and newborns",
      icon: "FaBaby",
      link: "/departments/paediatrics-neonatology",
    },
    {
      index: "14",
      title: "Pathology",
      subtitle: "Laboratory testing and disease diagnosis",
      icon: "FaMicroscope",
      link: "/departments/pathology",
    },
    {
      index: "15",
      title: "Radiology",
      subtitle: "Diagnostic imaging including X-rays and MRI",
      icon: "FaXRay",
      link: "/departments/radiology",
    },
    {
      index: "16",
      title: "Urology",
      subtitle: "Treatment for urinary tract and reproductive health",
      icon: "FaProcedures",
      link: "/departments/urology",
    },
  ],
  footerIcon: "/assets/img/icons/departments_footer_icon.png",
  footerText:
    "Providing exceptional medical care across all specialties. Explore our expert departments today.",
  footerLink: "/departments",
  footerLinkText: "Explore All Departments",
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
        <Service data={departmentsData} />
      </Section>
    </div>
  );
};

export default Page;
