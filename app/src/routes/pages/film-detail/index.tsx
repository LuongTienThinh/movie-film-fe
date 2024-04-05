import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { images } from 'images';
import { Footer, Header } from 'layouts';
import { IFilm } from 'interfaces';
import { ThemeContext } from 'contexts/themeContext';
import './index.scss';

const films: Array<IFilm> = [
  { label: 'Solo leveling', slug: 'solo-leveling' },
  { label: 'Fluffy paradise', slug: 'fluffy-paradise' },
  { label: 'Metallic rouge', slug: 'metallic-rouge' },
  { label: 'Magic and muscles', slug: 'magic-and-muscles' },
  { label: 'Ragna crimson', slug: 'ragna-crimson' },
  { label: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure' },
  { label: 'Tom and jerry', slug: 'tom-and-jerry' },
  { label: 'The world ends with you', slug: 'the-world-ends-with-you' },
];

const FilmDetail = () => {
  const themeMode = useContext(ThemeContext);
  const [film, setFilm] = useState<IFilm>();
  const params = useParams();

  useEffect(() => {
    setFilm(films.find((e) => e.slug === params.id));
  }, [params]);

  return (
    <>
      <Header />
      <section className='m-auto mt-[60px]'>
        {film && (
          <div className={`film-detail film-detail-${themeMode.theme} relative`}>
            <img className='h-[700px] w-full object-cover brightness-50' src={images[`./${params.id}-thumbnail.jpg`]} alt='' />
            <div className='container'>
              <div className='wrapper relative z-50 -mt-[350px]'>
                <div className='flex justify-between gap-10'>
                  <div className='h-[420px] w-[300px] overflow-hidden rounded-[10px]'>
                    <img className='h-full w-full object-cover' src={images[`./${film.slug}.jpg`]} alt='' />
                  </div>
                  <div className='description flex w-[40%] flex-col justify-between'>
                    <h1 className='title text-3xl font-bold'>{film.label}</h1>
                    <ul>
                      <li>Tên gốc:</li>
                      <li>Tình trạng:</li>
                      <li>Số tập:</li>
                      <li>Thời lượng:</li>
                      <li>Năm phát hành:</li>
                      <li>Quốc gia:</li>
                      <li>Định dạng phim:</li>
                      <li>Chất lượng:</li>
                    </ul>
                    <div className='btn'>
                      <Link to={`/film-detail/${film.slug}/1`}>Xem ngay</Link>
                      <button className='ms-5'>Theo dõi</button>
                    </div>
                  </div>
                  <div className='genres w-[30%] self-end'>
                    <ul className='genre-item flex w-full flex-wrap-reverse justify-end gap-2.5'>
                      <li>
                        <a href=''>Khoa học</a>
                      </li>
                      <li>
                        <a href=''>Viễn tưởng</a>
                      </li>
                      <li>
                        <a href=''>Hành động</a>
                      </li>
                      <li>
                        <a href=''>Hài hước</a>
                      </li>
                      <li>
                        <a href=''>Phiêu lưu</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='summary py-10'>
                <h3 className='text-[26px] font-bold'>Nội dung phim</h3>
                <hr className='my-[15px] h-[1px] border-none' />
                <p className='text-justify text-xl font-medium'>
                  Makoto Misumi chỉ là một học sinh trung học bình thường sống một cuộc sống bình thường, nhưng đột nhiên bị triệu hồi đến thế giới khác để trở thành một “anh
                  hùng”. Tuy nhiên, nữ thần của thế giới đó đã lăng mạ anh ta vì sự khác biệt và tước bỏ danh hiệu “anh hùng” của anh ta, trước khi tống cổ anh ta đến vùng
                  hoang dã ở rìa thế giới. Khi đi lang thang trong vùng hoang dã, Makoto chạm trán với rồng, nhện, Orc, người lùn và đủ loại bộ tộc không phải con người. Bởi
                  vì Makoto đến từ một thế giới khác, anh ta có thể giải phóng sức mạnh ma thuật và kỹ năng chiến đấu ngoài sức tưởng tượng. Nhưng anh ấy sẽ xử lý như thế nào
                  khi gặp nhiều loài sinh vật khác nhau và tồn tại trong một môi trường mới?
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default FilmDetail;
