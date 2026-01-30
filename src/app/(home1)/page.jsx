import React from 'react';
import HeroSection from '../Components/HeroSection';
import Section from '../Components/Section';
import About from '../Components/About';
import CounterSection from '../Components/FunSection/CounterSection';
import Service from '../Components/Service';
import ProjectSection from '../Components/ProjectSection';
import MedicalTabSection from '../Components/MedicalTabSection';
import DonationBox from '../Components/DonationBoxHome';
import BoardOfTrustees from '../Components/BoardOfTrustees';
import TopVideo from '../Components/TopVideo';
import ReportDownloadWidget from '../Components/ReportDownloadWidget';
import CertificationsWidget from '../Components/CertificationsWidget';

  const BoardTrusteesData = {
    subtitle: 'MEMBERS',
    title: 'Board Of Trustees',
    sliderData: [
      {
        name: 'Dr. Norma Pedric',
        profession: 'Neurologist',
        imageUrl: '/assets/img/member-dummy.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. James Lewis',
        profession: 'Neurologist',
        imageUrl: '/assets/img/member-dummy.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Sophia Anderson',
        profession: 'Neurologist',
        imageUrl: '/assets/img/member-dummy.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Michael Thompson',
        profession: 'Neurologist',
        imageUrl: '/assets/img/member-dummy.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Michael Thompson',
        profession: 'Neurologist',
        imageUrl: '/assets/img/member-dummy.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
    ],
  };

  // const BoardTrusteesData = {
  //   sectionTitle: 'Members',
  //   sectionSubtitle: 'Board Of Trustees',
  //   postsData: [
  //     {
  //       memberImage: "/assets/img/member-dummy.jpg"
  //     },
  //     {
  //       memberImage: "/assets/img/member-dummy.jpg"
  //     },
  //     {
  //       memberImage: "/assets/img/member-dummy.jpg"
  //     },
  //     {
  //       memberImage: "/assets/img/member-dummy.jpg"
  //     },
  //   ],
  // };

const page = () => {
    return (
      <div>

        <Section
          topSpaceLg="0"
          topSpaceMd="0"
          bottomSpaceLg="0"
          bottomSpaceMd="0"
        >
          <TopVideo />
        </Section>

        <ReportDownloadWidget />
        
        {/* Start Board of Trustees Section */}
        <Section
          topSpaceLg="0"
          topSpaceMd="0"
          bottomSpaceLg="0"
          bottomSpaceMd="0"
        >
          <BoardOfTrustees
            data={BoardTrusteesData}
            hr={true}
            variant={"cs_pagination cs_style_2"}
          />
        </Section>


       

        
        {/* <Section
        className={
          'cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden'
        }
      >
        <DonationBox />
      </Section> */}

        {/* End CTA Section */}


        {/* Donation Box Section  */}
        <DonationBox />
        <CertificationsWidget />

      </div>
    );
};

export default page;