import { images } from "images";
import Icons from 'assets/icons';
import { useContext } from "react";

import { ThemeContext } from "contexts/themeContext";
import './index.scss';
import { Link } from "react-router-dom";


const Footer = () => {
  const themeMode = useContext(ThemeContext);

  const handleToggleTheme = () => {
    themeMode.toggleTheme(themeMode.theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <footer className={themeMode.theme + "-footer py-[30px]"}>
      <div className="container">
        <div className="common-flex-box relative">
          <div className="footer-left common-flex-box h-[82px]">
            <Link className="logo me-10 h-full" to="#">
              <img className="h-full w-[170px] object-cover" src={images['./logo-temp.png']} alt="Logo" />
            </Link>
            <div className="btn-footer flex flex-col justify-between items-start h-full">
              <button>Yêu cầu phim</button>
              <button>Group bàn tán</button>
            </div>
          </div>
          <div className="footer-center text-center">
            <span className="title">Contact with us</span>
            <ul className="social-contact flex items-center justify-center">
              <li>
                <a href="https://www.facebook.com/" target="__blank">
                  <Icons themeMode={themeMode.theme} iconName={"facebook"} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="__blank">
                  <Icons themeMode={themeMode.theme} iconName={"instagram"} />
                </a>
              </li>
              <li>
                <a href="/" target="__blank">
                  <Icons themeMode={themeMode.theme} iconName={"direct-notification"} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="__blank">
                  <Icons themeMode={themeMode.theme} iconName={"youtube"} />
                </a>
              </li>
            </ul>
            <p className="text-base italic font-medium mt-6">Liên hệ quảng cáo: animetop@gmail.com</p>
            <p className="text-xs italic mt-[5px]">Bản quyền thuộc về đội ngũ phát triển AnimeTOP.com</p>
          </div>
          <div className="footer-end text-center w-1/4">
            <span>Đăng ký nhận thông báo anime</span>
            <div>
              <input className="w-full" type="text" placeholder="Nhập email của bạn..." />
            </div>
            <span className="by">By: Elas + KenJ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;