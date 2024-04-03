import Slider from 'react-slick';
import React, { useContext, useState } from 'react';

import './index.scss';
import { images } from "images";
import { Header, Footer } from "layouts";
import Icons from 'assets/icons';
import { ThemeContext } from 'contexts/themeContext';
import { DataHook } from 'hooks';
import { IFilm, IDataHook, ITopFilm } from 'interfaces';
import { Film, Ranking, TopFilm } from 'components';
import { Link } from 'react-router-dom';

type SliderType = typeof Slider

const latestFilms: Array<IFilm> = [
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
]

const topFilms: Array<ITopFilm> = [
  { label: 'Magic and muscles', slug: 'magic-and-muscles', rank: 1 },
  { label: 'Ragna crimson', slug: 'ragna-crimson', rank: 2 },
  { label: 'Solo leveling', slug: 'solo-leveling', rank: 3 },
]

const HomePage = () => {
  const slider = React.useRef<SliderType>(null);
  const themeMode = useContext(ThemeContext);
  const [filmActived, setFilmActived] = useState(latestFilms[0]);
  
  const latestHooks: IDataHook = {
    sideBar: {
      leftSide: {
        header: {
          title: 'Anime mới nhất',
          btnMore: true,
          titleWidth: 3,
          btnMoreWidth: 1,
        },
        width: 8,
        content: (
          <div className="content flex flex-wrap gap-5">
            {latestFilms && latestFilms.length > 0 && latestFilms.map((film, index) => (
              <Film key={index} {...film} style={{ width: 'calc(25% - 15px)' }} />
            ))}
          </div>
        )
      },
      rightSide: {
        width: 4,
        content: (
          <div className="content flex flex-wrap justify-center gap-9 mt-[90px]">
            {topFilms && topFilms.length > 0 && topFilms.map((film, index) => (
              <TopFilm key={index} {...film} />
            ))}
          </div>
        )
      },
    },
    data: latestFilms,
    setData: () => { },
    
  };

  const seriesHook: IDataHook = {
    sideBar: {
      leftSide: {
        header: {
          title: 'Anime bộ (TV - SERIES)',
          btnMore: true,
          titleWidth: 3,
          btnMoreWidth: 1,
        },
        width: 8,
        content: (
          <div className="content flex flex-wrap gap-5">
            {latestFilms && latestFilms.length > 0 && latestFilms.map((film, index) => (
              <Film key={index} {...film} style={{ width: 'calc(25% - 15px)' }} />
            ))}
          </div>
        )
      },
      rightSide: {
        width: 4,
        content: (
          <div className="content flex flex-wrap justify-center gap-9">
            <Ranking listFilm={latestFilms.concat(latestFilms.slice(0, 2))}></Ranking>
          </div>
        )
      },
    },
    data: latestFilms,
    setData: () => { },
    
  };

  const moviesHook: IDataHook = {
    subHeader: {
      btnMore: true,
      title: 'MOVIES (OVA)',
      titleWidth: 10,
      btnMoreWidth: 2,
    },
    sideBar: {
      leftSide: {
        width: 4,
        content: (
          <div className="content h-full">
            <img className='rounded-[10px] h-full' src={images[`./${latestFilms[0].slug}.jpg`]} alt="" />
          </div>
        )
      },
      rightSide: {
        width: 8,
        content: (
          <div className="content flex flex-wrap gap-5">
            {latestFilms && latestFilms.length > 0 && latestFilms.map((film, index) => (
              <Film key={index} {...film} style={{ width: 'calc(25% - 15px)' }} />
            ))}
          </div>
        )
      },
    },
    data: latestFilms,
    setData: () => { },
    
  };

  const latestFilmData = DataHook(latestHooks);
  const seriesFilmData = DataHook(seriesHook);
  const moviesFilmData = DataHook(moviesHook);

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <button style={{ ...style }} className={className} onClick={onClick}>
        <Icons themeMode={themeMode.theme} iconName='btn-prev' />
      </button>
    );
  }

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <button style={{ ...style }} className={className} onClick={onClick}>
        <Icons themeMode={themeMode.theme} iconName='btn-next' />
      </button>
    );
  }

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
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    afterChange: (index: Number) => setFilmActived(latestFilms[Number(index)])
  };

  return (
    <>
      <Header />

      {/* Banner */}
      <section className='mt-[60px] m-auto'>
        <div className="banner relative">
          <img className='w-full h-[800px] object-cover' src={images[`./${filmActived.slug}-thumbnail.jpg`]} alt="" />
          <div className="slick-wrapper">
            <Slider ref={slider} {...settings}>
              {latestFilms.length > 0
                ? latestFilms.map((item, index) => (
                  <div className="img-wrapper" key={index}>
                    <img src={images[`./${item.slug}.jpg`]} alt="" />
                    <Link to={`/film-detail/${item.slug}`} className="movie-detail">Xem ngay</Link>
                  </div>
                ))
                : ''
              }
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
      </section>
      {/* End banner */}

      <section className={`anime-latest sub-content sub-content-${themeMode.theme}`}>
        <div className="container">
          {latestFilmData.renderData()}
        </div>
      </section>

      <section className={`anime-series sub-content sub-content-${themeMode.theme}`}>
        <div className="container">
          {seriesFilmData.renderData()}
        </div>
      </section>

      <section className={`anime-movies sub-content sub-content-${themeMode.theme}`}>
        <div className="container">
          {moviesFilmData.renderData()}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;