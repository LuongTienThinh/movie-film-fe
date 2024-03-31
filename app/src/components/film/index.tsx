import { IFilm } from "interfaces";
import { images } from "images";
import { Link } from "react-router-dom";


const Film = ({ label, slug, ...props }: IFilm) => {

  return (
    <Link to={`film-detail/${slug}`} {...props}>
      <img className="w-full h-[238px] rounded-[10px] mb-[10px] pointer-events-none" src={images[`./${slug}.jpg`]} alt="" />
      <div className="text-lg font-extrabold leading-5 min-h-[40px] pointer-events-none">{label}</div>
    </Link>
  );
}

export default Film;