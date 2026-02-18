import React from "react";
import PageHeading from "@/app/Components/PageHeading";
import Section from "@/app/Components/Section";
import DonationZakat from "@/app/Components/DonationZakat";

const headingData = {
  title: "Donations",
};

const donationData = {
  title: "DONATIONS",
  description:
    "Donation fund can be used to improve the quality of healthcare by adding new medical facilities, purchase of new equipment, upgrading of existing facilities, medical treatment of non-Muslim deserving patients and maintenance work of hospital building.",
  bankDetails: [
    {
      label: "Title of Account",
      value: "HYDERABAD RELIEF & REHABILITATION TRUST",
    },
    { label: "Account No", value: "0182-1002444098" },
    { label: "IBAN", value: "PK39ALFH0182001002444098" },
    { label: "Bank", value: "Bank Al-Falah Ltd. 0182-Jamshed Road Branch, Karachi, Pakistan" },
  ],
  contactInfo: {
    instruction:
      "Kindly inform us on following e-mail addresses to ensure proper record keeping and issuance of slip:",
    emails: [
      "shakeel.ahmed@osmaniahospital.com",
      "mukhtar.ahmed@osmaniahospital.com",
    ],
    additionalInfo:
      "Donations can be deposited at accounts department of Osmania Hospital in cash or by cheque in favour of HYDERABAD RELIEF AND REHABILITATION TRUST on any working day during business hours.",
  },
  importantNote:
    "RECEIPT MUST BE ISSUED TO EVERY DONOR IMMEDIATELY.\nDonations given to Hyderabad Relief & Rehabilitation Trust are exempted from income tax under Section 2(36)(C) of the Income Tax Ordinance, 2001.",
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
        <DonationZakat {...donationData} />
      </Section>
    </div>
  );
};

export default Page;
