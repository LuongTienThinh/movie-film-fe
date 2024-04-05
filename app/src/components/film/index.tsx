import { Link } from 'react-router-dom';

import { IFilm } from 'interfaces';
import { images } from 'images';

const Film = ({ label, slug, ...props }: IFilm) => {
  return (
    <Link to={`/film-detail/${slug}`} {...props}>
      <img className='pointer-events-none mb-[10px] h-[238px] w-full rounded-[10px]' src={images[`./${slug}.jpg`]} alt='' />
      <div className='pointer-events-none min-h-[40px] text-lg font-extrabold leading-5'>{label}</div>
    </Link>
  );
};

export default Film;
