const SubHeader = ({ title = '', btnMore = true, titleWidth = 10, btnMoreWidth = 2 }) => {
  return (
    <>
      <div className='header sub-header common-flex-box overflow-hidden'>
        {title && (
          <div className='title' style={{ width: `${(titleWidth / (titleWidth + btnMoreWidth)) * 100}%` }}>
            <div className='bg' style={{ width: `${titleWidth < btnMoreWidth && (btnMoreWidth / titleWidth) * 100}%` }}></div>
            <h2>{title}</h2>
          </div>
        )}
        {btnMore && (
          <div className='btn-more' style={{ width: `${(btnMoreWidth / (titleWidth + btnMoreWidth)) * 100}%` }}>
            <div className='bg' style={{ width: `${titleWidth >= btnMoreWidth && (titleWidth / btnMoreWidth) * 100}%` }}></div>
            <button>Xem thêm</button>
          </div>
        )}
      </div>
    </>
  );
};

export default SubHeader;
