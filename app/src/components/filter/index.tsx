import { useContext, useEffect, useState } from 'react';

import { IFilter, IListFilter } from 'interfaces';
import Icons from 'assets/icons';
import { ThemeContext } from 'contexts/themeContext';

const Filter = ({ title, options, data, ...props }: IFilter) => {
  const themeMode = useContext(ThemeContext);
  const [newData, setNewData] = useState([...data]);

  useEffect(() => {}, [newData]);

  return (
    <>
      {options && (
        <>
          {title && <div className='title'>{title}:</div>}
          <div className='filter-wrapper'>
            <select onChange={() => setNewData((prev) => prev.filter((e) => e.label === title))} {...props}>
              {options.map((filterItem, index) => (
                <option key={index} value={filterItem.value}>
                  {filterItem.label}
                </option>
              ))}
            </select>
            <Icons className='icon absolute right-p2 top-1/2 -translate-y-1/2' themeMode={themeMode.theme} iconName={'chevron-down'} />
          </div>
        </>
      )}
    </>
  );
};

const ListFilter = ({ data, listFilter, ...props }: IListFilter) => {
  return (
    <>
      {listFilter && (
        <ul className={`list-filter flex max-lg:flex-wrap items-end justify-between`} {...props}>
          {listFilter.map((filter, index) => (
            <li key={index} className='filter-item w-[47.5%] sm:w-3/10 lg:w-1/5'>
              <Filter title={filter.title} data={data} options={filter.options} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListFilter;
