import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from 'contexts/themeContext';
import { images } from 'images';
import Icons from 'assets/icons';
import './index.scss';

const Footer = () => {
  const themeMode = useContext(ThemeContext);

  return (
    <footer className={themeMode.theme + '-footer py-[30px]'}>
      <div className='container'>
        <div className='common-flex-box relative'>
          <div className='footer-left common-flex-box h-[82px]'>
            <Link className='logo me-10 h-full' to='#'>
              <img className='h-full object-cover' src={images[`./logo-${themeMode.theme}.png`]} alt='Logo' />
            </Link>
            <div className='btn-footer flex h-full flex-col items-center justify-between'>
              <button>Yêu cầu phim</button>
              <button>Group bàn tán</button>
            </div>
          </div>
          <div className='footer-center text-center'>
            <span className='title'>Contact with us</span>
            <ul className='social-contact flex items-center justify-center'>
              <li>
                <a href='https://www.facebook.com/' target='__blank'>
                  <Icons themeMode={themeMode.theme} iconName={'facebook'} />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/' target='__blank'>
                  <Icons themeMode={themeMode.theme} iconName={'instagram'} />
                </a>
              </li>
              <li>
                <a href='/' target='__blank'>
                  <Icons themeMode={themeMode.theme} iconName={'direct-notification'} />
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/' target='__blank'>
                  <Icons themeMode={themeMode.theme} iconName={'youtube'} />
                </a>
              </li>
            </ul>
            <p className='mt-6 text-base font-medium italic'>Liên hệ quảng cáo: animetop@gmail.com</p>
            <p className='mt-[5px] text-xs italic'>Bản quyền thuộc về đội ngũ phát triển AnimeTOP.com</p>
          </div>
          <div className='footer-end w-1/4 text-center'>
            <span>Đăng ký nhận thông báo anime</span>
            <div>
              <input className='w-full' type='text' placeholder='Nhập email của bạn...' />
            </div>
            <span className='by'>By: Elas + KenJ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
