import { useContext, useEffect, useState } from 'react';

import { Film, Loading, Pagination } from 'components';
import { ThemeContext } from 'contexts/themeContext';
import { useDataHook } from 'hooks';
import { IDataHook, IFilm, IPageContent, IPageManage, IResponseData } from 'interfaces';
import { Footer, Header } from 'layouts';
import { PAGE } from 'constants';
import { AuthContext } from 'contexts/authContext';

const SearchPage = () => {
  const themeMode = useContext(ThemeContext);
  const auth = useContext(AuthContext);
  const params = {
    page: 'wishlist',
  };

  const [films, setFilms] = useState<Array<IFilm>>([]);
  const [pageManage, setPageManage] = useState<IPageManage>({ page: 1, perPage: 24 });
  const [pageData, setPageData] = useState<IPageContent>({});

  useEffect(() => {
    const getDataFilms = async () => {
      if (pageData.subData) {
        pageData.subData.forEach(async sub => {
          const response: IResponseData | null = (await sub?.getData?.(pageManage, '', auth.user.id)) || null;
    
          if (response) {
            setFilms(response?.data?.movie || []);

            setPageManage((prev) => ({
              ...prev,
              page: response?.data?.pagination.currentPage,
              perPage: response?.data?.pagination.perPage,
              totalItem: response?.data?.pagination.totalItem,
              totalPage: response?.data?.pagination.totalPage,
            }));
          }
        });
      }
    };

    if (pageData && auth.user.id) {
      setFilms([]);
      getDataFilms();
    }
  }, [pageData, pageManage.page, pageManage.perPage, auth.user]);

  const paginationChange = (event: IPageManage) => {
    setFilms([]);
    setPageManage((prev) => ({ ...prev, ...event }));
  };

  useEffect(() => {
    if (params.page) {
      const getDetail = async (params: any) => {
        setPageData({
          ...PAGE[params.page],
        });
      };

      getDetail(params);
    }
  }, []);

  const wishlistHook: IDataHook = {
    title: pageData?.subData?.[0].title,
    sideBar: {
      leftSide: {
        width: 12,
        content: (
          <div className='content flex flex-wrap gap-x-[5%] gap-y-3 md:gap-5 lg:gap-x-[2.5%] lg:gap-y-5 xl:gap-5'>
            {films &&
              films.length > 0 &&
              films.map((film, index) => <Film key={index} {...film} className='w-[47.5%] sm:w-3/10 md:w-[calc(25%-15px)] lg:w-[18%] xl:w-[calc(16.667%-16.667px)]' />)}
          </div>
        ),
      },
    },
    filters: true,
    pagination: films && pageManage && (
      <Pagination onChange={(page) => paginationChange({ page: page })} totalItem={films.length} showPrev sibling={1} showNext {...pageManage} />
    ),
  };

  const viewedHook: IDataHook = {
    title: pageData?.subData?.[1].title,
    sideBar: {
      leftSide: {
        width: 12,
        content: (
          <div className='content flex flex-wrap gap-x-[5%] gap-y-3 md:gap-5 lg:gap-x-[2.5%] lg:gap-y-5 xl:gap-5'>
            {films &&
              films.length > 0 &&
              films.map((film, index) => <Film key={index} {...film} className='w-[47.5%] sm:w-3/10 md:w-[calc(25%-15px)] lg:w-[18%] xl:w-[calc(16.667%-16.667px)]' />)}
          </div>
        ),
      },
    },
    filters: true,
    pagination: films && pageManage && (
      <Pagination onChange={(page) => paginationChange({ page: page })} totalItem={films.length} showPrev sibling={1} showNext {...pageManage} />
    ),
  };

  const wishlistDataHook = useDataHook(wishlistHook);
  const viewedDataHook = useDataHook(viewedHook);
  
  return (
    <>
      <Header />

      <section className={`wishlist-page sub-content m-auto  sub-content-${themeMode.theme}`}>
        <div className='container'>{wishlistDataHook.renderData()}</div>
        <hr className='bg-red border-red' />
        <div className='container'>{viewedDataHook.renderData()}</div>
      </section>

      <Footer />
    </>
  );
};

export default SearchPage;
