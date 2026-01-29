import React from "react";
import PageHeading from "@/app/Components/PageHeading";
import Section from "@/app/Components/Section";
import AboutIntroduction from "@/app/Components/AboutIntroduction";
import FactsFigures from "@/app/Components/FactsFigures";
import ContactUs from "@/app/Components/ContactUs";
import Trustees from "@/app/Components/BoardOfTrusteesPage";

const headingData = {
  title: "Board Of Trustees",
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
        <Trustees />
      </Section>
    </div>
  );
};

export default Page;
