import Slider from 'react-slick';
import React, { useEffect } from 'react';
import $ from "jquery";

import './index.scss';
import { images } from "images";
import { Header, Footer } from "layouts";
import Icons from 'assets/icons';

type SliderType = typeof Slider

const HomePage = () => {
  const slider = React.useRef<SliderType>(null);

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <button style={{ ...style }} className={className} onClick={onClick}>
        <Icons themeMode={'light'} iconName='btn-prev' />
      </button>
    );
  }

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <button style={{ ...style }} className={className} onClick={onClick}>
        <Icons themeMode={'light'} iconName='btn-next' />
      </button>
    );
  }

  // useEffect(() => {
  //   $('.slick-slider').on('click', '.slick-slide', function (e) {
  //     e.stopPropagation();
  //     const index = $(this).data("index");
  //     const currentSlide = $('.slick-current');

  //     if (currentSlide.data("index") !== index) {
  //       slider.current.slickGoTo(index);
  //     }
  //   });
  // }, []);

  const settings = {
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    draggable: false,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  return (
    <>
      <Header />
      <section>
        <div className="banner relative">
          <img src={images['./magic-and-muscles-thumbnail.jpg']} alt="" />
          <div className="slick-wrapper">
            <Slider ref={slider} {...settings}>
              <div className="img-wrapper">
                <img src={images['./fluffy-paradise.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./magic-and-muscles.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./metallic-rouge.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./ragna-crimson.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./solo-leveling.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./the-unwanted-undead-adventure.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./the-weakest-tamer-began-a-journey-to-pick-up-trash.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./the-world-ends-with-you.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./tom-and-jerry.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./fluffy-paradise.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./magic-and-muscles.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./metallic-rouge.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./ragna-crimson.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./solo-leveling.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./the-unwanted-undead-adventure.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./the-weakest-tamer-began-a-journey-to-pick-up-trash.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./the-world-ends-with-you.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
              <div className="img-wrapper">
                <img src={images['./tom-and-jerry.jpg']} alt="" />
                <button className="movie-detail">Xem ngay</button>
              </div>
            </Slider>
            <div className="absolute top-0 left-0 w-full h-fit">
              <div className="container">
                <div className="flex justify-end items-center gap-[15px]">
                  <PrevArrow
                    className="slick-arrow slick-prev"
                    onClick={() => slider?.current?.slickPrev()}
                  />
                  <NextArrow
                    className="slick-arrow slick-next"
                    onClick={() => slider?.current?.slickNext()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">

        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;