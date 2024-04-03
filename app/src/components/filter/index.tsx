import { useContext, useState } from "react";

import { IFilm, IFilter, IListFilter } from "interfaces";
import Icons from "assets/icons";
import { ThemeContext } from "contexts/themeContext";

const Filter = ({ title, options, data, ...props }: IFilter) => {
  const themeMode = useContext(ThemeContext);
  const [newData, setNewData] = useState([...data]);

  return (
    <>
      {options &&
        <>

          {title && <div className="title">{title}:</div>}
          <div className="filter-wrapper">
            <select onChange={() => setNewData(prev => prev.filter(e => e.label === title))} {...props}>
              {options.map((filterItem, index) => (
                <option key={index} value={filterItem.value}>{filterItem.label}</option>
              ))}
            </select>
            <Icons className="absolute right-[10px] top-1/2 -translate-y-1/2" themeMode={themeMode.theme} iconName={"chevron-down"} />
          </div>
        </>
      }

    </>
  );
}

const ListFilter = ({ data, listFilter, ...props }: IListFilter) => {

  return (
    <>
      {listFilter &&
        <ul className={`list-filter flex items-end justify-center`} {...props}>
          {listFilter.map((filter, index) => (
            <li key={index} className="filter-item w-1/5">
              <Filter title={filter.title} data={data} options={filter.options} />
            </li>
          ))}
        </ul>
      }
    </>
  );
}

export default ListFilter;