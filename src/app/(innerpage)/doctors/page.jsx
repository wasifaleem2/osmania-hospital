import AppointmentSection from '@/app/Components/AppointmentSection';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React from 'react';

const headingData = {
    title: 'Our Doctors',
  };
  
  const appointmentSectionData = {
    subtitle: 'OUR TEAM MEMBER',
    title: 'Meet Our Specialist This<br> Doctor Meeting',
    doctorsData: [
      {
        name: 'Dr. Norma Pedric',
        specialty: 'Neurologist',
        imageUrl: '/assets/img/team_1.jpg',
        profileLink: '/doctors/doctor-details',
        iconUrl: 'https://www.facebook.com/',
        iconUrl2: 'https://www.pinterest.com/',
        iconUrl3: 'https://www.twitter.com/',
      },
      {
        name: 'Dr. Norma Pedric',
        specialty: 'Neurologist',
        imageUrl: '/assets/img/team_8.jpg',
        profileLink: '/doctors/doctor-details',
        iconUrl: 'https://www.facebook.com/',
        iconUrl2: 'https://www.pinterest.com/',
        iconUrl3: 'https://www.twitter.com/',
      },
      {
        name: 'Dr. Norma Pedric',
        specialty: 'Neurologist',
        imageUrl: '/assets/img/team_3.jpg',
        profileLink: '/doctors/doctor-details',
        iconUrl: 'https://www.facebook.com/',
        iconUrl2: 'https://www.pinterest.com/',
        iconUrl3: 'https://www.twitter.com/',
      },
      {
        name: 'Dr. Norma Pedric',
        specialty: 'Neurologist',
        imageUrl: '/assets/img/team_4.jpg',
        profileLink: '/doctors/doctor-details',
        iconUrl: 'https://www.facebook.com/',
        iconUrl2: 'https://www.pinterest.com/',
        iconUrl3: 'https://www.twitter.com/',
      },
      {
        name: 'Dr. Norma Pedric',
        specialty: 'Neurologist',
        imageUrl: '/assets/img/team_5.jpg',
        profileLink: '/doctors/doctor-details',
        iconUrl: 'https://www.facebook.com/',
        iconUrl2: 'https://www.pinterest.com/',
        iconUrl3: 'https://www.twitter.com/',
      },
      {
        name: 'Dr. Norma Pedric',
        specialty: 'Neurologist',
        imageUrl: '/assets/img/team_6.jpg',
        profileLink: '/doctors/doctor-details',
        iconUrl: 'https://www.facebook.com/',
        iconUrl2: 'https://www.pinterest.com/',
        iconUrl3: 'https://www.twitter.com/',
      },
      {
        name: 'Dr. Norma Pedric',
        specialty: 'Neurologist',
        imageUrl: '/assets/img/team_7.jpg',
        profileLink: '/doctors/doctor-details',
        iconUrl: 'https://www.facebook.com/',
        iconUrl2: 'https://www.pinterest.com/',
        iconUrl3: 'https://www.twitter.com/',
      },
      {
        name: 'Dr. Norma Pedric',
        specialty: 'Neurologist',
        imageUrl: '/assets/img/team_8.jpg',
        profileLink: '/doctors/doctor-details',
        iconUrl: 'https://www.facebook.com/',
        iconUrl2: 'https://www.pinterest.com/',
        iconUrl3: 'https://www.twitter.com/',
      },
    ],
  };

const page = () => {
    return (
        <div>

       <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>           

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <AppointmentSection data={appointmentSectionData} />
      </Section>

        </div>
    );
};

export default page;