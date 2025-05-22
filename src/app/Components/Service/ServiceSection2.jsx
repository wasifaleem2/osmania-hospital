import Image from "next/image";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";

const ServiceSection2 = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_left">
            <p
              className="cs_section_subtitle cs_accent_color"
              data-aos="fade-left"
            >
              <span className="cs_shape_left" />
              {data.subtitle}
            </p>
            <h2 className="cs_section_title cs_white_color">{data.title}</h2>
          </div>
          <div className="cs_section_heading_right cs_white_color">
            {data.description}
          </div>
        </div>
        <div className="cs_height_50 cs_height_lg_50" />
        <div className="row cs_gap_y_30">
          {data.services.map((service, index) => (
            <div className="col-12" key={index}>
              <div className="cs_iconbox cs_style_5 cs_radius_10 position-relative">
                <div className="cs_iconbox_icon cs_center">
                <Image src={service.iconSrc} alt="img" width={26} height={26}   />
                </div>
                <h3 className="cs_iconbox_title cs_white_color mb-0">
                  <Link href={service.link}>{service.title}</Link>
                </h3>
                <div className="cs_iconbox_line" />
                <p
                  className="cs_iconbox_subtitle cs_white_color mb-0"
                  dangerouslySetInnerHTML={{ __html: service.subtitle }}
                ></p>
                <Link href={service.link} className="cs_iconbox_btn cs_center">
                  <i>
                    <FaChevronCircleRight />
                  </i>
                </Link>
                <div className="cs_iconbox_thumbnail position-absolute">
                <Image src={service.imageSrc} alt="img" width={189} height={174}   />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceSection2;
