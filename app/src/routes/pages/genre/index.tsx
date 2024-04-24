import { useContext, useEffect, useState } from 'react';

import { Film, Pagination } from 'components';
import { ThemeContext } from 'contexts/themeContext';
import { useDataHook } from 'hooks';
import { IApiResponseData, IDataHook, IFilm, IPage } from 'interfaces';
import { Footer, Header } from 'layouts';
import axios from 'axios';

const GenresPage = () => {
  const themeMode = useContext(ThemeContext);
  const [filmData, setFilmData] = useState<Array<IFilm>>([]);
  const [pageManage, setPageManage] = useState<IPage>({ page: 1, perPage: 6 });
  const [films, setFilms] = useState<Array<IFilm>>([]);

  useEffect(() => {
    const getApiLatest = async () => {
      const { data }: IApiResponseData = await axios.get('http://animetop.id.vn/api/film/latest');
      setFilms(data?.data);
    };

    getApiLatest();
  }, []);

  const paginationChange = (event: IPage) => {
    setPageManage((prev) => ({ ...prev, ...event }));
  };

  useEffect(() => {
    pageManage.page && pageManage.perPage && setFilmData(films.slice((pageManage.page - 1) * pageManage.perPage, pageManage.page * pageManage.perPage));
  }, [pageManage]);

  const genresPageHook: IDataHook = {
    title: 'Hành động',
    sideBar: {
      leftSide: {
        width: 12,
        content: (
          <div className='content flex flex-wrap sm:gap-x-[5%] sm:gap-y-3 md:gap-5 lg:gap-x-[2.5%] lg:gap-y-5 xl:gap-5'>
            {filmData &&
              filmData.length > 0 &&
              filmData.map((film, index) => <Film key={index} {...film} className='sm:w-3/10 md:w-[calc(25%-15px)] lg:w-[18%] xl:w-[calc(16.667%-16.667px)]' />)}
          </div>
        ),
      },
    },
    filters: {
      data: films,
      listFilter: [
        {
          data: films,
          options: [
            {
              label: 'Phim a',
              value: 'Phim a',
            },
            {
              label: 'Phim b',
              value: 'Phim b',
            },
            {
              label: 'Phim c',
              value: 'Phim c',
            },
            {
              label: 'Phim d',
              value: 'Phim d',
            },
          ],
          title: 'Loại phim',
        },
        {
          data: films,
          options: [
            {
              label: 'Phim a',
              value: 'Phim a',
            },
            {
              label: 'Phim b',
              value: 'Phim b',
            },
            {
              label: 'Phim c',
              value: 'Phim c',
            },
            {
              label: 'Phim d',
              value: 'Phim d',
            },
          ],
          title: 'Thể loại',
        },
        {
          data: films,
          options: [
            {
              label: 'Phim a',
              value: 'Phim a',
            },
            {
              label: 'Phim b',
              value: 'Phim b',
            },
            {
              label: 'Phim c',
              value: 'Phim c',
            },
            {
              label: 'Phim d',
              value: 'Phim d',
            },
          ],
          title: 'Quốc gia',
        },
        {
          data: films,
          options: [
            {
              label: 'Phim a',
              value: 'Phim a',
            },
            {
              label: 'Phim b',
              value: 'Phim b',
            },
            {
              label: 'Phim c',
              value: 'Phim c',
            },
            {
              label: 'Phim d',
              value: 'Phim d',
            },
          ],
          title: 'Năm',
        },
        {
          data: films,
          options: [
            {
              label: 'Phim a',
              value: 'Phim a',
            },
            {
              label: 'Phim b',
              value: 'Phim b',
            },
            {
              label: 'Phim c',
              value: 'Phim c',
            },
            {
              label: 'Phim d',
              value: 'Phim d',
            },
          ],
          title: 'Số tập',
        },
        {
          data: films,
          options: [
            {
              label: 'Phim a',
              value: 'Phim a',
            },
            {
              label: 'Phim b',
              value: 'Phim b',
            },
            {
              label: 'Phim c',
              value: 'Phim c',
            },
            {
              label: 'Phim d',
              value: 'Phim d',
            },
          ],
        },
      ],
    },
    data: films,
    setData: () => {},
    pagination: films && pageManage && (
      <Pagination onChange={(page) => paginationChange({ page: page })} totalItem={films.length} showPrev showNext {...pageManage} />
    ),
  };

  const genresPageData = useDataHook(genresPageHook);
  return (
    <>
      <Header />

      <section className={`genres-page sub-content m-auto  sub-content-${themeMode.theme}`}>
        <div className='container'>{genresPageData.renderData()}</div>
      </section>

      <Footer />
    </>
  );
};

export default GenresPage;
