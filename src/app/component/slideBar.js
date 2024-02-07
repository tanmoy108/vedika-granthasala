"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../../../public/Banner1.jpg";
import Banner2 from "../../../public/Banner2.jpg";
import Banner3 from "../../../public/Banner3.jpg";
import Image from "next/image";

const SlideBar = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "ease-out",
    arrows: false,
  };
  return (
    <>
      <Slider {...settings}>
        <Image src={Banner} alt="banner1" height={406} width={1350} />
        <Image src={Banner2} alt="banner2" height={406} width={1350}/>
        <Image src={Banner3} alt="banner3" height={406} width={1350}/>
      </Slider>
    </>
  );
};

export default SlideBar;
