import { images } from "images";
import Icons from 'assets/icons';
import { useEffect, useState, Fragment, useRef, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";

import { ThemeContext } from "contexts/themeContext";
import './index.scss';


const Header = () => {
  const themeMode = useContext(ThemeContext);

  const handleToggleTheme = () => {
    themeMode.toggleTheme(themeMode.theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <header className={themeMode.theme + "-header py-[5px]"}>
      <div className="container">
        <div className="common-flex-box">
          <img className="h-[50px]" src={images['./logo-temp.png']} alt="Logo" />
          <div>
            <ul className="header-nav-mid common-flex-box">
              <li>
                <button className="common-flex-box">
                  <span>Anime bộ</span>
                </button>
              </li>
              <li>
                <button className="common-flex-box">
                  <span>Movie (OVA)</span>
                </button>
              </li>
              <Menu as="li" className="relative">
                <Menu.Button className="common-flex-box">
                  {({ open }) => (
                    <>
                      <span className="me-1">Thể loại</span>
                      <Icons
                        themeMode={themeMode.theme}
                        iconName={open ? 'dropdownfirst-up' : 'dropdownfirst-down'}
                        className="h-[6px]" />
                    </>
                  )}

                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"

                >
                  <Menu.Items className="header-nav-dropdown dropdown-genre absolute left-1/2 translate-x-[-50%]">
                    <ul className="common-flex-box flex-wrap w-full p-3 py-1 overflow-hidden">
                      <Menu.Item as="li">
                        {({ active }) => (
                          <a href="#" className={active ? '' : ''}>Hành động</a>
                        )}
                      </Menu.Item>
                      <Menu.Item as="li">
                        {({ active }) => (
                          <a href="#" className={active ? '' : ''}>Thể thao</a>
                        )}
                      </Menu.Item>
                      <Menu.Item as="li">
                        {({ active }) => (
                          <a href="#" className={active ? '' : ''}>Thần thoại</a>
                        )}
                      </Menu.Item>
                      <Menu.Item as="li">
                        {({ active }) => (
                          <a href="#" className={active ? '' : ''}>Tình cảm</a>
                        )}
                      </Menu.Item>
                      <Menu.Item as="li">
                        {({ active }) => (
                          <a href="#" className={active ? '' : ''}>Võ thuật</a>
                        )}
                      </Menu.Item>
                      <Menu.Item as="li">
                        {({ active }) => (
                          <a href="#" className={active ? '' : ''}>Tài liệu</a>
                        )}
                      </Menu.Item>
                    </ul>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Menu as="li" className="relative">
                <Menu.Button className="common-flex-box">
                  {({ open }) => (
                    <>
                      <span className="me-1">Quốc gia</span>
                      <Icons
                        themeMode={themeMode.theme}
                        iconName={open ? 'dropdownfirst-up' : 'dropdownfirst-down'}
                        className="h-[6px]" />
                    </>
                  )}

                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"

                >
                  <Menu.Items className="header-nav-dropdown dropdown-country absolute left-1/2 translate-x-[-50%]">
                    <ul className="common-flex-box flex-wrap w-full p-3 py-1 overflow-hidden">
                      <Menu.Item as="li">
                        {({ active }) => (
                          <a href="#" className={active ? '' : ''}>Việt nam</a>
                        )}
                      </Menu.Item>
                      <Menu.Item as="li">
                        {({ active }) => (
                          <a href="#" className={active ? '' : ''}>Nhật bản</a>
                        )}
                      </Menu.Item>
                      <Menu.Item as="li">
                        {({ active }) => (
                          <a href="#" className={active ? '' : ''}>Hàn quốc</a>
                        )}
                      </Menu.Item>
                      <Menu.Item as="li">
                        {({ active }) => (
                          <a href="#" className={active ? '' : ''}>Trung quốc</a>
                        )}
                      </Menu.Item>
                    </ul>
                  </Menu.Items>
                </Transition>
              </Menu>
            </ul>
          </div>
          <div>
            <div className="header-nav-end common-flex-box">
              <div className="nav-search common-flex-box rounded-2xl overflow-hidden px-1">
                <button>
                  <Icons themeMode={themeMode.theme} iconName="search" className="header-icon" />
                </button>
                <input className="w-[226px] p-1" type="text" />
              </div>
              <button onClick={handleToggleTheme}>
                <Icons themeMode={themeMode.theme} iconName="thememode" className="header-icon" />
              </button>
              <button>
                <Icons themeMode={themeMode.theme} iconName="notify" className="header-icon" />
              </button>
              <button>
                <Menu as="div" className="relative">
                  <Menu.Button className="common-flex-box">
                    {({ open }) => (
                      <>
                        <img className="w-9" src={images['./avatar.png']} alt="" />
                      </>
                    )}

                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"

                  >
                    <Menu.Items className="header-nav-dropdown dropdown-user absolute right-0">
                      <ul className="w-full py-[5px] overflow-hidden">
                        <Menu.Item as="li">
                          {({ active }) => (
                            <a href="#" className="common-flex-box">
                              <Icons themeMode={themeMode.theme} iconName="account" className="header-icon" />
                              <span>Tài khoản</span>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item as="li">
                          {({ active }) => (
                            <a href="#" className="common-flex-box">
                              <Icons themeMode={themeMode.theme} iconName="collection" className="header-icon" />
                              <span>Bộ sưu tập</span>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item as="li">
                          {({ active }) => (
                            <a href="#" className="common-flex-box">
                              <Icons themeMode={themeMode.theme} iconName="logout" className="header-icon" />
                              <span>Đăng xuất</span>
                            </a>
                          )}
                        </Menu.Item>
                      </ul>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;