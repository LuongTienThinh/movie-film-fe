import { useContext, useEffect, useState } from 'react';

import { Film, Pagination } from 'components';
import { ThemeContext } from 'contexts/themeContext';
import { DataHook } from 'hooks';
import { IDataHook, IFilm, IPage } from 'interfaces';
import { Footer, Header } from 'layouts';

const latestFilms: Array<IFilm> = [
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
];

const SeriesPage = () => {
  const themeMode = useContext(ThemeContext);
  const [filmData, setFilmData] = useState(latestFilms);
  const [pageManage, setPageManage] = useState<IPage>({ page: 1, perPage: 12 });

  const paginationChange = (event: IPage) => {
    setPageManage((prev) => ({ ...prev, ...event }));
  };

  useEffect(() => {
    pageManage.page && pageManage.perPage && setFilmData(latestFilms.slice((pageManage.page - 1) * pageManage.perPage, pageManage.page * pageManage.perPage));
  }, [pageManage]);

  const seriesPageHook: IDataHook = {
    title: 'Anime trọn bộ',
    sideBar: {
      leftSide: {
        width: 12,
        content: (
          <div className='content flex flex-wrap gap-5'>
            {filmData && filmData.length > 0 && filmData.map((film, index) => <Film key={index} {...film} style={{ width: `calc(16.667% - 16.667px)` }} />)}
          </div>
        ),
      },
    },
    filters: {
      data: latestFilms,
      listFilter: [
        {
          data: latestFilms,
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
          data: latestFilms,
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
          data: latestFilms,
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
          data: latestFilms,
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
          data: latestFilms,
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
          data: latestFilms,
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
    data: latestFilms,
    setData: () => {},
    pagination: latestFilms && pageManage && (
      <Pagination onChange={(page) => paginationChange({ page: page })} totalItem={latestFilms.length} showPrev sibling={1} showNext {...pageManage} />
    ),
  };
  const seriesPageData = DataHook(seriesPageHook);
  return (
    <>
      <Header />

      <section className={`series-page sub-content m-auto mt-[60px] sub-content-${themeMode.theme}`}>
        <div className='container'>{seriesPageData.renderData()}</div>
      </section>

      <Footer />
    </>
  );
};

export default SeriesPage;
