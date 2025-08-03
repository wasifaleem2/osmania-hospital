import React from "react";
import PageHeading from "@/app/Components/PageHeading";
import Section from "@/app/Components/Section";
import DonationZakat from "@/app/Components/DonationZakat";

const headingData = {
  title: "Zakat",
};

const zakatData = {
  title: "ZAKAT",
  description:
    "Hyderabad Relief & Rehabilitation Trust receives Zakat for Medical Treatment of deserving Muslim patients. We take all possible measures to ensure that the Zakat received by us must be used only on medical treatment of deserving patients.",
  bankDetails: [
    {
      label: "Title of Account",
      value: "HYDERABAD RELIEF AND REHABILITATION TRUST",
    },
    { label: "Account No", value: "1001-0081-047180-02-7" },
    { label: "IBAN", value: "PK76 BAHL 1001 0081 0471 8002" },
    {
      label: "Bank",
      value: "Bank Al-Habib Ltd, Main Branch, I.I.Chundrigar Road, Karachi",
    },
  ],
  contactInfo: {
    instruction:
      "Kindly inform us on following e-mail addresses to ensure proper record keeping and issuance of slip:",
    emails: [
      "shakeel.ahmed@osmaniahospital.com",
      "mukhtar.ahmed@osmaniahospital.com",
    ],
    additionalInfo:
      "Zakat can be deposited at accounts department of Osmania Hospital in cash or by cheque in favour of HYDERABAD RELIEF AND REHABILITATION TRUST on any working day during business hours.",
  },
  importantNote:
    "RECEIPT MUST BE ISSUED TO EVERY DONOR IMMEDIATELY.\nZakat / Donations given to Hyderabad Relief & Rehabilitation Trust are exempted from income tax under Section 2(36)(C) of the Income Tax Ordinance, 2001.",
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
        <DonationZakat {...zakatData} />
      </Section>
    </div>
  );
};

export default Page;
