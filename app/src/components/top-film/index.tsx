import { ITopFilm } from "interfaces";
import { images } from "images";

const TopFilm = ({ label, slug, rank }: ITopFilm) => {
  return (
    <>
      <div
        className="top-film-item w-full h-[150px] rounded-[10px] relative p-8"
        style={{
          backgroundImage: `url(${images[`./${slug}-thumbnail.jpg`]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff'
        }}>
        <div
          className="blur-bg absolute w-full h-full inset-0 rounded-[10px]"
          style={{
            backgroundImage: rank === 1 ? 'linear-gradient(to right, rgba(204, 5, 5, 0.7), rgba(206, 135, 135, 0.7))'
                              : rank === 2 ? 'linear-gradient(to right, rgba(220, 0, 239, 0.7), rgba(186, 122, 225, 0.7))'
                              : 'linear-gradient(to right, rgba(5, 13, 204, 0.7), rgba(184, 192, 204, 0.7))'
          }}>
        </div>
        <div className="sticker absolute top-0 left-0 -translate-y-1/2"><img className="w-[60px] h-[60px]" src={images[`./${slug}-sticker.png`]} alt="" /></div>
        <div className="flex items-center w-full h-full relative z-10 gap-4">
          <div className="font-extrabold text-8xl w-1/5 text-center">{rank}</div>
          <div className="h-full flex flex-col justify-between w-4/5">
            <div className="name text-lg font-extrabold uppercase">{label}</div>
            <div className="year self-end">2024</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopFilm;