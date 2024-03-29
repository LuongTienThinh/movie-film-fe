import { IFilm } from "interfaces";
import { images } from "images";


const Film = ({ label, slug, ...props }: IFilm) => {
  return (
    <div {...props}>
      <img className="w-full h-[238px] rounded-[10px] mb-[10px]" src={images[`./${slug}.jpg`]} alt="" />
      <div className="text-lg font-extrabold leading-5 min-h-[40px]">{label}</div>
    </div>
  );
}

export default Film;