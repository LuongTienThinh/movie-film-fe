import { useContext, useEffect, useRef, useState } from "react";

import { Film } from "components";
import { ThemeContext } from "contexts/themeContext";
import { DataHook } from "hooks";
import { images } from "images";
import { IDataHook, IFilm, IPage, ITopFilm } from "interfaces";
import { Footer, Header } from "layouts";
import { Pagination } from "hooks/data";


const latestFilms: Array<IFilm> = [
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
]

const topFilms: Array<ITopFilm> = [
  { label: 'Magic and muscles', slug: 'magic-and-muscles', rank: 1 },
  { label: 'Ragna crimson', slug: 'ragna-crimson', rank: 2 },
  { label: 'Solo leveling', slug: 'solo-leveling', rank: 3 },
]

const GenresPage = () => {
  const themeMode = useContext(ThemeContext);
  const [filmData, setFilmData] = useState(latestFilms);
  const [pageManage, setPageManage] = useState<IPage>({ page: 1, perPage: 6 });

  const paginationChange = (event: IPage) => {
    setPageManage(prev => ({ ...prev, ...event }));
  }

  useEffect(() => {
    pageManage.page && pageManage.perPage &&
      setFilmData(
        latestFilms.slice(
          (pageManage.page - 1) * pageManage.perPage,
          pageManage.page * pageManage.perPage
        )
      )
  }, [pageManage]);

  const genresPageHook: IDataHook = {
    title: 'Hành động',
    sideBar: {
      leftSide: {
        width: 12,
        content: (
          <div className="content flex flex-wrap gap-5">
            {filmData && filmData.length > 0 && filmData.map((film, index) => (
              <Film key={index} {...film} style={{ width: `calc(16.667% - 16.667px)` }} />
            ))}
          </div>
        )
      },
    },
    filters: {
      data: latestFilms,
      listFilter: [
        {
          data: latestFilms,
          options: [
            {
              label: "Phim a",
              value: "Phim a"
            },
            {
              label: "Phim b",
              value: "Phim b"
            },
            {
              label: "Phim c",
              value: "Phim c"
            },
            {
              label: "Phim d",
              value: "Phim d"
            },
          ],
          title: 'Loại phim'
        },
        {
          data: latestFilms,
          options: [
            {
              label: "Phim a",
              value: "Phim a"
            },
            {
              label: "Phim b",
              value: "Phim b"
            },
            {
              label: "Phim c",
              value: "Phim c"
            },
            {
              label: "Phim d",
              value: "Phim d"
            },
          ],
          title: 'Thể loại'
        },
        {
          data: latestFilms,
          options: [
            {
              label: "Phim a",
              value: "Phim a"
            },
            {
              label: "Phim b",
              value: "Phim b"
            },
            {
              label: "Phim c",
              value: "Phim c"
            },
            {
              label: "Phim d",
              value: "Phim d"
            },
          ],
          title: 'Quốc gia'
        },
        {
          data: latestFilms,
          options: [
            {
              label: "Phim a",
              value: "Phim a"
            },
            {
              label: "Phim b",
              value: "Phim b"
            },
            {
              label: "Phim c",
              value: "Phim c"
            },
            {
              label: "Phim d",
              value: "Phim d"
            },
          ],
          title: 'Năm'
        },
        {
          data: latestFilms,
          options: [
            {
              label: "Phim a",
              value: "Phim a"
            },
            {
              label: "Phim b",
              value: "Phim b"
            },
            {
              label: "Phim c",
              value: "Phim c"
            },
            {
              label: "Phim d",
              value: "Phim d"
            },
          ],
          title: 'Số tập'
        },
        {
          data: latestFilms,
          options: [
            {
              label: "Phim a",
              value: "Phim a"
            },
            {
              label: "Phim b",
              value: "Phim b"
            },
            {
              label: "Phim c",
              value: "Phim c"
            },
            {
              label: "Phim d",
              value: "Phim d"
            },
          ],
        },
      ]
    },
    data: latestFilms,
    setData: () => { },
    pagination: (latestFilms && pageManage &&
      <Pagination
        onChange={(page) => paginationChange({ page: page })}
        totalItem={latestFilms.length}
        showPrev
        showNext
        {...pageManage}
      />
    )
  };;

  const genresPageData = DataHook(genresPageHook);
  return (
    <>
      <Header />

      <section className={`mt-[60px] genres-page m-auto sub-content sub-content-${themeMode.theme}`}>
        <div className="container">
          {genresPageData.renderData()}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default GenresPage;