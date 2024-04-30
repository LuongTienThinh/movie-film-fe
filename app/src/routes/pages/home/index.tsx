import Slider from 'react-slick';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { images } from 'images';
import { Header, Footer } from 'layouts';
import Icons from 'assets/icons';
import { ThemeContext } from 'contexts/themeContext';
import { useDataHook, useViewport } from 'hooks';
import { IFilm, IDataHook, SliderType, IResponseData } from 'interfaces';
import { Film, Ranking, TopFilm, Loading } from 'components';
import { FilmService } from 'services';
import './index.scss';

const HomePage = () => {
  const themeMode = useContext(ThemeContext);

  const slider = React.useRef<SliderType>(null);
  const { width: viewWidth, breakPoint } = useViewport();
  const [films, setFilms] = useState<Array<IFilm>>([]);
  const [filmActived, setFilmActived] = useState<IFilm>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const pageLoadTime = performance.timing.loadEventEnd - performance.timing.fetchStart;

  useEffect(() => {
    const getApiLatest = async () => {
      const response: IResponseData = await FilmService.getLatest();
      setFilms(response?.data?.movie);
    };

    getApiLatest();
  }, []);

  useEffect(() => {
    console.log(isLoading);
    
  }, [isLoading]);

  useEffect(() => {
    if (films) {
      setFilmActived(films[0]);
      setTimeout(() => {
        setIsLoading(false);
      }, pageLoadTime);
    }
  }, [films]);

  const latestHooks: IDataHook = {
    sideBar: {
      leftSide: {
        header: {
          title: 'Anime mới nhất',
          btnMore: true,
          titleWidth: viewWidth >= breakPoint.sm ? 9 : 8,
          btnMoreWidth: viewWidth >= breakPoint.sm ? 3 : 4,
          linkTo: '/pages/latest',
        },
        width: viewWidth >= breakPoint.lg ? 8 : 12,
        content: (
          <div className='content flex flex-wrap gap-x-[5%] gap-y-5 md:gap-5 lg:gap-x-[5%] lg:gap-y-5 xl:gap-5'>
            {films &&
              films.length > 0 &&
              films.map((film, index) => <Film key={index} {...film} className='w-[47.5%] sm:w-3/10 md:w-[calc(25%-15px)] lg:w-3/10 xl:w-[calc(25%-15px)]' />)}
          </div>
        ),
      },
      rightSide:
        viewWidth >= breakPoint.lg
          ? {
              width: 4,
              content: (
                <div className='content mt-[90px] flex flex-wrap justify-center gap-9'>
                  {films && films.length > 0 && films.slice(0, 3).map((film, index) => <TopFilm key={index} {...film} rank={index + 1} />)}
                </div>
              ),
            }
          : undefined,
    },
    data: films,
    setData: () => {},
  };

  const seriesHook: IDataHook = {
    sideBar: {
      leftSide: {
        header: {
          title: 'Anime bộ (TV - SERIES)',
          btnMore: true,
          titleWidth: viewWidth >= breakPoint.sm ? 9 : 8,
          btnMoreWidth: viewWidth >= breakPoint.sm ? 3 : 4,
          linkTo: '/pages/series',
        },
        width: viewWidth >= breakPoint.lg ? 8 : 12,
        content: (
          <div className='content flex flex-wrap gap-x-[5%] gap-y-5 md:gap-5 lg:gap-x-[5%] lg:gap-y-5 xl:gap-5'>
            {films &&
              films.length > 0 &&
              films.map((film, index) => <Film key={index} {...film} className='w-[47.5%] sm:w-3/10 md:w-[calc(25%-15px)] lg:w-3/10 xl:w-[calc(25%-15px)]' />)}
          </div>
        ),
      },
      rightSide:
        viewWidth >= breakPoint.lg
          ? {
              width: 4,
              content: (
                <div className='content flex flex-wrap justify-center gap-9'>
                  <Ranking listFilm={films}></Ranking>
                </div>
              ),
            }
          : undefined,
    },
    data: films,
    setData: () => {},
  };

  const moviesHook: IDataHook = {
    subHeader: {
      btnMore: true,
      title: 'MOVIES (OVA)',
      titleWidth: viewWidth >= breakPoint.sm ? 10 : 8,
      btnMoreWidth: viewWidth >= breakPoint.sm ? 2 : 4,
      linkTo: '/pages/movies',
    },
    sideBar: {
      leftSide:
        viewWidth >= breakPoint.lg
          ? {
              width: 4.3,
              content: (
                <div className='content h-full'>
                  <img className='h-full rounded-p2' src={films && films[0] ? films[0].poster_url : images[`./solo-leveling`]} alt='' />
                </div>
              ),
            }
          : undefined,
      rightSide: {
        width: viewWidth >= breakPoint.lg ? 7.7 : 12,
        content: (
          <div className='content flex flex-wrap gap-x-[5%] gap-y-5 md:gap-5 lg:gap-x-[5%] lg:gap-y-5 xl:gap-5'>
            {films &&
              films.length > 0 &&
              films.map((film, index) => <Film key={index} {...film} className='w-[47.5%] sm:w-3/10 md:w-[calc(25%-15px)] lg:w-3/10 xl:w-[calc(25%-15px)]' />)}
          </div>
        ),
      },
    },
    data: films,
    setData: () => {},
  };

  const ranksHook: IDataHook = {
    sideBar: {
      leftSide: {
        width: 12,
        content: (
          <div className='content flex flex-wrap justify-center gap-9'>
            <Ranking listFilm={films && films.concat(films.slice(0, 2))}></Ranking>
          </div>
        ),
      },
    },
    data: films,
    setData: () => {},
  };

  const latestFilmData = useDataHook(latestHooks);
  const seriesFilmData = useDataHook(seriesHook);
  const moviesFilmData = useDataHook(moviesHook);
  const ranksFilmData = useDataHook(ranksHook);

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <button style={{ ...style }} className={className} onClick={onClick}>
        <Icons themeMode={themeMode.theme} iconName='btn-prev' className='icon' />
      </button>
    );
  };

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <button style={{ ...style }} className={className} onClick={onClick}>
        <Icons themeMode={themeMode.theme} iconName='btn-next' className='icon' />
      </button>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    draggable: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    afterChange: (index: Number) => setFilmActived(films[Number(index)]),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerPadding: '0px',
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          centerPadding: '100px',
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '40px',
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 860,
        settings: {
          centerPadding: '140px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '80px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerPadding: '60px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          centerPadding: '20px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 360,
        settings: {
          centerPadding: '100px',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Loading isLoading={isLoading} timingRender={pageLoadTime}>
      <Header />

      {/* Banner */}
      <section className='m-auto'>
        <div className='banner relative'>
          <img className='banner-img' src={filmActived && filmActived.thumbnail_url} alt='' />
          <div className='slick-wrapper'>
            <Slider ref={slider} {...settings}>
              {films && films.length > 0
                ? films.map((item, index) => (
                    <div className='img-wrapper' key={index}>
                      <img src={item.poster_url} alt='' />
                      <Link to={`/film-detail/${item.slug}`} className='movie-detail max-sm:hidden'>
                        Xem ngay
                      </Link>
                    </div>
                  ))
                : ''}
            </Slider>
            {/* <div className='absolute left-0 top-0 h-fit w-full'>
              <div className='container'>
                <div className='flex items-center justify-end gap-p3'>
                  <PrevArrow className='slick-arrow slick-prev' onClick={() => slider?.current?.slickPrev()} />
                  <NextArrow className='slick-arrow slick-next' onClick={() => slider?.current?.slickNext()} />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* End banner */}

      <section className={`anime-latest sub-content sub-content-${themeMode.theme}`}>
        <div className='container'>{latestFilmData.renderData()}</div>
      </section>

      <section className={`anime-series sub-content sub-content-${themeMode.theme}`}>
        <div className='container'>{seriesFilmData.renderData()}</div>
      </section>

      <section className={`anime-movies sub-content sub-content-${themeMode.theme}`}>
        <div className='container'>{moviesFilmData.renderData()}</div>
      </section>

      {viewWidth < breakPoint.lg && (
        <section className={`anime-ranks sub-content sub-content-${themeMode.theme}`}>
          <div className='container'>{ranksFilmData.renderData()}</div>
        </section>
      )}

      <Footer />
    </Loading>
  );
};

export default HomePage;
