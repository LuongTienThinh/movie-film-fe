import { ListFilter, SubHeader, SideBar } from 'components';
import { IDataHook } from 'interfaces';
import './index.scss';

const useDataHook = ({ title, subHeader, filters, sideBar, data, setData, pagination: Pagination }: IDataHook) => {
  const onChange = () => {
    setData();
  };

  const renderData = () => {
    return (
      <>
        {title && <h1 className='mb-[30px] text-2xl font-bold uppercase'>{title}</h1>}
        {subHeader && <SubHeader {...subHeader} />}
        {filters && <ListFilter data={data} listFilter={filters.listFilter}></ListFilter>}
        {sideBar && <SideBar {...sideBar} />}
        {Pagination && Pagination}
      </>
    );
  };

  return {
    onChange,
    renderData,
  };
};

export default useDataHook;
