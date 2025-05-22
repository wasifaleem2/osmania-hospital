"use client"
import { useState } from "react";
import SectionHeading from "../SectionHeading";
import Button from "../Buttons";
import { FaAnglesRight } from "react-icons/fa6";
import VideoModal from "../VideoSection/Modal";
import Image from "next/image";

const CtaSection1 = ({ data }) => {
  const [toggle, setToggle] = useState(false);

  const [iframeSrc, setIframeSrc] = useState("about:blank");

  const handelClick = () => {
    setIframeSrc(`${data.videoLink}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };
  return (
    <>
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_cta_btn_wrapper" data-aos="fade">
              <a className="cs_video_open" onClick={handelClick}>
                <span className="cs_player_btn cs_center">
                  <span />
                </span>
                <span className="cs_play_btn_text">{data.videoButtonText}</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_cta_text">
              <SectionHeading
                textColor={"cs_white_color"}
                SectionSubtitle={data.subtitle}
                SectionTitle={data.title}
                SectionDescription={data.description}
              />
              <div className="cs_height_44 cs_height_lg_20" />
              <Button
                btnText={data.buttonText}
                variant={"cs_btn cs_style_1 cs_color_3"}
                btnUrl="{data.buttonLink}"
                btnIcons={<FaAnglesRight />}
              />
            </div>
          </div>
        </div>
        <div className="cs_cta_shape position-absolute">
        <Image src={data.brandImage} className="cs_spinner_img" alt="img" width={140} height={164}   />
        </div>
      </div>

      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </>
  );
};

export default CtaSection1;
