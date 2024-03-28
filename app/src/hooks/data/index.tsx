import { ListFilter, SubHeader, Film } from 'components';
import { IDataHook, ISideBar } from 'interfaces';

import './index.scss';

const SideBar = ({ leftSide, rightSide }: ISideBar) => {
  return (
    <>
      <div className="side-bar flex justify-between w-full gap-5">
        {leftSide &&
          <div className="left-side" style={{ width: `${leftSide.width && leftSide.width / 12 * 100}%` }}>
            {leftSide.header && <SubHeader {...leftSide.header} />}
            {leftSide.content && leftSide.content}
          </div>
        }
        {rightSide &&
          <div className="right-side" style={{ width: `${rightSide.width && rightSide.width / 12 * 100}%` }}>
            {rightSide.header && <SubHeader {...rightSide.header} />}
            {rightSide.content && rightSide.content}
          </div>
        }
      </div>
    </>
  );
}


const DataHook = ({ title, subHeader, filters, sideBar, data, setData, pagination }: IDataHook) => {
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