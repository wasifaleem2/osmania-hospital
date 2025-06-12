import NewsEvents from "@/app/Components/NewsEvents";
import PageHeading from "@/app/Components/PageHeading";
import Section from "@/app/Components/Section";
import WelfareActivities from "@/app/Components/WelfareActivities";
import React from "react";

const headingData = {
  backgroundImage: "/assets/img/page_heading_bg.jpg",
  title: "Welfare Activities",
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
        <WelfareActivities />
      </Section>
    </div>
  );
};

export default page;
