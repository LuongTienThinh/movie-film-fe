import { useState } from 'react';

import { ListFilter, SubHeader, SideBar } from 'components';
import { IDataHook, IPagination } from 'interfaces';
import './index.scss';



export const Pagination = ({ pageIndex, perPage, totalItem, sibling = 1, showGoToFirst, showGoToLast, showNext, showPrev, onChange }: IPagination) => {
  const firstPage = 1;
  const lastPage = totalItem && perPage && Math.ceil(totalItem / perPage) || firstPage;

  const [currentPage, setCurrentPage] = useState(pageIndex || 1);

  const DotsBtn = () => {
    return (
      <li className='item'>
        <button style={{ minWidth: 28 }}>...</button>
      </li>
    )
  }

  const generatePage = (pageIndex: number | undefined) => {
    if (pageIndex) {
      const listPage = [];
      if (lastPage - (sibling * 2 + 1) <= 4) {
        for (let index = firstPage; index <= lastPage; index++) {
          listPage.push(index);
        }
      } else {
        if (pageIndex <= sibling + 3) {
          for (let index = firstPage; index <= sibling * 2 + 3; index++) {
            listPage.push(index);
          }
          listPage.push(-1, lastPage);
        }

        if (pageIndex > sibling + 3) {
          listPage.push(firstPage, -1);

          if (pageIndex < lastPage - 3) {
            for (let index = pageIndex - sibling; index <= pageIndex + sibling; index++) {
              listPage.push(index);
            }

            listPage.push(-1, lastPage);
          } else {
            for (let index = lastPage - (sibling * 2 + 3 - 1); index <= lastPage; index++) {
              listPage.push(index);
            }
          }
        }
      }

      return listPage.map(
        (page, i) => (
          <>
            {page &&
              <li className='item' key={i}>
                {page === -1
                  ? <DotsBtn />
                  : <button className={page === currentPage ? 'active' : ''} onClick={() => onChangePage(page)}>{page}</button>
                }
              </li>
            }
          </>
        )
      )
    }
  }

  const onChangePage = (page: number) => {
    setCurrentPage(page);
    onChange && onChange(page);
  }

  const showPagination = () => {
    return totalItem && perPage && lastPage > firstPage;
  }

  return (
    <>
      {showPagination() &&
        <div className='mt-[30px] text-center'>
          <ul className="pagination flex justify-center">
            {showGoToFirst && <li className='item'><button onClick={() => onChangePage(firstPage)} disabled={currentPage === 1}>Trang đầu</button></li>}

            {showPrev && <li className='item'><button onClick={() => onChangePage(currentPage - 1)} disabled={currentPage === 1}>Trang trước</button></li>}

            {currentPage && generatePage(currentPage)}

            {showNext && <li className='item'><button onClick={() => onChangePage(currentPage + 1)} disabled={currentPage === lastPage}>Trang sau</button></li>}

            {showGoToLast && <li className='item'><button onClick={() => onChangePage(lastPage)} disabled={currentPage === lastPage}>Trang cuối</button></li>}
          </ul>
        </div>
      }
    </>
  );
}

const DataHook = ({ title, subHeader, filters, sideBar, data, setData, pagination: Pagination }: IDataHook) => {
  const onChange = () => {
    setData();
  }

  const renderData = () => {
    return (
      <>
        {title && <h1 className='font-bold uppercase mb-[30px] text-2xl'>{title}</h1>}
        {subHeader && <SubHeader {...subHeader} />}
        {filters && <ListFilter data={data} listFilter={filters.listFilter} ></ListFilter>}
        {sideBar && <SideBar {...sideBar} />}
        {Pagination && Pagination}
      </>
    );
  }

  return {
    onChange,
    renderData,
  };
}

export default DataHook;

/** 
 * datahook: {
 *  title,
 *  subHeader,
 *  filters: [
 *    {
 *      label,
 *      value,
 *    }
 *  ]
 *  sideBar: {
 *    leftSide: {
 *      title,
 *      content,
 *      cols,
 *    },
 *    rightSide: {
 *      title,
 *      content,
 *      cols,
 *    },
 *  },
 *  data,
 *  setData,
 *  pagination,
 * }
 * 
 * 
 * 
 * */ 