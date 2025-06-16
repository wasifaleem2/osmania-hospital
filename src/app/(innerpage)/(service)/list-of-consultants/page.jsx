import Consultants from "@/app/Components/ListOfConsultants";
import PageHeading from "@/app/Components/PageHeading";
import Section from "@/app/Components/Section";
import React from "react";
const headingData = {
  title: "List of Consultants & Timings",
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
        <Consultants />
      </Section>
    </div>
  );
};

export default Page;
