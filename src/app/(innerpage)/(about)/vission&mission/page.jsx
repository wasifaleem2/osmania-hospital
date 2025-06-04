import React from "react";
import PageHeading from "@/app/Components/PageHeading";
import Section from "@/app/Components/Section";
import Service from "@/app/Components/Service";
import VissionMission from "@/app/Components/VissionMission";

const headingData = {
  title: "Vission & Mission",
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
        <VissionMission />
      </Section>
    </div>
  );
};

export default Page;
