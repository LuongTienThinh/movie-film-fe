import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Footer, Header } from 'layouts';
import { IFilm } from 'interfaces';
import { ThemeContext } from 'contexts/themeContext';
import './index.scss';

const films: Array<IFilm> = [
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
];

interface IEpisodeBtn {
  ep: number | undefined;
  slug: string | undefined;
}

const EpisodeBtn = ({ ep, slug }: IEpisodeBtn) => {
  return (
    <li className='w-[90px] text-center'>
      <Link to={`/film-detail/${slug}/${ep}`} className='block rounded-[10px] bg-[#03AE00] py-1.5 text-base font-medium leading-none text-[#ffffff]'>
        Tập {ep && ep}
      </Link>
    </li>
  );
};

const Episode = () => {
  const themeMode = useContext(ThemeContext);
  const [film, setFilm] = useState<IFilm>();
  const params = useParams();

  useEffect(() => {
    setFilm(films.find((e) => e.slug === params.id));
  }, [params]);

  return (
    <>
      <Header />
      <section className={`episodes m-auto mt-[60px] episodes-${themeMode.theme}`}>
        {film && (
          <>
            <div className='film-watching relative'>
              <iframe className='h-[700px] w-full' src='https://player.phimapi.com/player/?url=https://s2.phim1280.tv/20240301/PIzVaEnr/index.m3u8' allowFullScreen />
            </div>
            <div className='list-episodes py-10'>
              <div className='container'>
                <div className='title mb-2.5 text-3xl font-bold capitalize'>{film.label}</div>
                <div className='mb-[30px] font-semibold'>Số tập: 24</div>
                <ul className='flex flex-wrap gap-x-5 gap-y-2.5'>
                  {new Array(24)
                    .fill(0)
                    .map((_, index) => index + 1)
                    .map((e, i) => (
                      <EpisodeBtn key={i} ep={e} slug={film.slug} />
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
