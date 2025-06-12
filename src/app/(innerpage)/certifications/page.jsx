import Certifications from "@/app/Components/Certifications";
import NewsEvents from "@/app/Components/NewsEvents";
import PageHeading from "@/app/Components/PageHeading";
import Section from "@/app/Components/Section";
import React from "react";

const headingData = {
  title: "Certifications",
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
        <Certifications />
      </Section>
    </div>
  );
};

export default page;
