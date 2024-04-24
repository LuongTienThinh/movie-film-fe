import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Footer, Header } from 'layouts';
import { IApiResponseData, IFilm } from 'interfaces';
import { ThemeContext } from 'contexts/themeContext';
import './index.scss';
import axios from 'axios';

interface IEpisodeBtn {
  ep: string | undefined;
  slug: string | undefined;
  filmSlug: string | undefined;
}

const EpisodeBtn = ({ ep, filmSlug, slug }: IEpisodeBtn) => {
  return (
    <li className='w-[23%] sm:w-[13%] md:w-[9%] text-center'>
      <Link to={`/film-detail/${filmSlug}/${slug}`} className='block rounded-p2 bg-[#03AE00] py-1.5 font-medium !leading-none text-[#ffffff] max-lg:text-xs lg:text-sm xl:text-base'>
        {ep && ep}
      </Link>
    </li>
  );
};

const Episode = () => {
  const themeMode = useContext(ThemeContext);
  const [film, setFilm] = useState<IFilm>();
  const [films, setFilms] = useState<Array<IFilm>>([]);
  const params = useParams();

  useEffect(() => {
    const getApiLatest = async () => {
      const { data }: IApiResponseData = await axios.get('http://animetop.id.vn/api/film/latest');
      setFilms(data?.data);
    };

    getApiLatest();
  }, []);

  useEffect(() => {
    console.log(film, params);
    
    setFilm(films.find((e) => e.slug === params.id));
  }, [params, films]);
  return (
    <>
      <Header />
      <section className={`episodes m-auto  episodes-${themeMode.theme}`}>
        {film && (
          <>
            <div className='film-watching relative'>
              <iframe src={film.episodes.find(e => e.slug == params.ep)?.link} allowFullScreen />
            </div>
            <div className='list-episodes py-10'>
              <div className='container'>
                <div className='title mb-2.5 font-bold capitalize text-2xl xl:text-3xl'>{film.name}</div>
                <div className='mb-[30px] font-semibold text-sm xl:text-base'>Số tập: {film.episode_current}/{film.episode_total}</div>
                <ul className='flex flex-wrap gap-x-[2%] sm:gap-x-[1%] gap-y-2.5'>
                  {film.episodes && film.episodes.length > 0 && film.episodes.map((episode, index) => (
                    <EpisodeBtn key={index} ep={episode.name} slug={episode.slug} filmSlug={film.slug} />
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Episode;
