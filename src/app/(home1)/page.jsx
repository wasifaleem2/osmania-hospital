import React from 'react';
import HeroSection from '../Components/HeroSection';
import Section from '../Components/Section';
import About from '../Components/About';
import CounterSection from '../Components/FunSection/CounterSection';
import Service from '../Components/Service';
import TeamSection from '../Components/TeamSection';
import ProjectSection from '../Components/ProjectSection';
import MedicalTabSection from '../Components/MedicalTabSection';
import DonationBox from '../Components/DonationBoxHome';
import BoardOfTrustees from '../Components/BoardOfTrustees';
import TopVideo from '../Components/TopVideo';
import ReportDownloadWidget from '../Components/ReportDownloadWidget';
import CertificationsWidget from '../Components/CertificationsWidget';

const heroData = {
    primarySlider: [
      {
        bgImageUrl: '/assets/img/hero_slider_3.jpg',
        title: 'We Hospital Doctors Patients <span>Service.</span>',
        contactSubtitle:
          'Medical ers piciatis unde omnis iste natus this the word medical this mountains, far from the countries Vokalia and, live the docor white teeth sitting on a dental for best medical.',
        contactTitle: 'Receive Medical Service.',
        contact: 'Call Us at: (+2) 56 54 1453',
        btnText1: 'Contact Now',
        link: '/contact',
        btnText2: 'Discover More',
        link2: '/about',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
      },
      {
        bgImageUrl: '/assets/img/hero_slider_2.jpg',
        title: 'Your Center for <br>Mental <span>Health.</span>',
        contactSubtitle:
          'Medical ers piciatis unde omnis iste natus this the word medical this mountains, far from the countries Vokalia and, live the docor white teeth sitting on a dental for best medical.',
        contactTitle: 'Receive Medical Service.',
        contact: 'Call Us at: (+2) 56 54 1453',
        btnText1: 'Contact Now',
        link: '/contact',
        btnText2: 'Discover More',
        link2: '/about',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
      },
      {
        bgImageUrl: '/assets/img/hero_slider_1.jpg',
        title: 'We Hospital Doctors Patients <span>Service.</span>',
        contactSubtitle:
          'Medical ers piciatis unde omnis iste natus this the word medical this mountains, far from the countries Vokalia and, live the docor white teeth sitting on a dental for best medical.',
        contactTitle: 'Receive Medical Service.',
        contact: 'Call Us at: (+2) 56 54 1453',
        btnText1: 'Contact Now',
        link: '/contact',
        btnText2: 'Discover More',
        link2: '/about',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
      },
    ],
    secondarySlider: [
      '/assets/img/hero_slider_sm_1.png',
      '/assets/img/hero_slider_sm_2.png',
      '/assets/img/hero_slider_sm_3.png',
    ],
  };
  
  const ctaData = {
    imageUrl: '/assets/img/cta_img_1.jpg',
    title: 'Meet The Team Support Medical Service.',
    subtitle: 'For us, there are no minor aspects, because a quality',
    buttonUrl: '/appointments',
    buttonText: 'Booking Now',
  };
  
  const aboutData = {
    sectionSubtitle: 'OUR ABOUT US',
    sectionTitle: 'More Than 26+ Years About Provide Medical.',
    aboutText:
      'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
    service:
      "There are many variations of pass available this medical service the team <a href='#''>READ MORE +</a>",
    experienceYears: '26+',
    experienceTitle: 'Experience',
    videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
    videoText: 'How We Work',
    iconboxes: [
      {
        imgUrl: '/assets/img/icons/about_icon_1.png',
        title: 'Client Support',
        subtitle: 'But must explain to you medical of and pain was.',
      },
      {
        imgUrl: '/assets/img/icons/about_icon_2.png',
        title: 'Doctor Support',
        subtitle: 'But must explain to you medical of and pain was.',
      },
    ],
  
    btnUrl: '/about',
    btnText: 'About More',
    sectionImgUrl: '/assets/img/about_section_img_1.png',
    headImgUrl: '/assets/img/about_img_1.jpg',
  };
  
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

  const blogsData = {
    sectionTitle: 'OUR LARGEST BLOG',
    sectionSubtitle: 'Latest Posts &amp; Articles',
    postsData: [
      {
        title: 'Medical Of This Working Health Blog',
        subtitle:
          'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
        date: 'May 02',
        category: 'Medical',
        author: 'Admin',
        thumbnail: '/assets/img/post_1.jpeg',
        btnText: 'Read More',
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
      {
        title: 'There Is Only One Thing That Is Hospital.',
        subtitle:
          'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
        date: 'May 02',
        category: 'Medical',
        author: 'Admin',
        thumbnail: '/assets/img/post_2.jpeg',
        btnText: 'Read More',
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
      {
        title: 'This Working World and Infection Prevention.',
        subtitle:
          'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
        date: 'May 02',
        category: 'Medical',
        author: 'Admin',
        thumbnail: '/assets/img/post_3.jpeg',
        btnText: 'Read More',
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
      {
        title: 'Medical Of This Working Health Blog',
        subtitle:
          'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
        date: 'May 02',
        category: 'Medical',
        author: 'Admin',
        thumbnail: '/assets/img/post_1.jpeg',
        btnText: 'Read More',
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
    ],
  };

const page = () => {
    return (
      <div>
        {/* Start Hero Section */}
        {/* <HeroSection data={heroData} /> */}
        {/* End Hero Section */}

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

        {/* Start About Section */}
        {/* <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 position-relative"
      >
        <About data={aboutData} />
      </Section> */}
        {/* End About Section */}


        {/* Donation Box Section  */}
        <DonationBox />
        <CertificationsWidget />

      </div>
    );
};

export default page;