import React from "react";
import PageHeading from "@/app/Components/PageHeading";
import ReportsPage from "@/app/Components/ReportsPage";
import Section from "@/app/Components/Section";

const headingData = {
  backgroundImage: "/assets/img/page_heading_bg.jpg",
  title: "Reports",
};

const page = () => {
  return (
    <div>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        // backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <ReportsPage />
      </Section>
    </div>
  );
};

export default page;
