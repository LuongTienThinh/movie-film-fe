import { Tab } from '@headlessui/react';
import { ReactElement, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Icons from 'assets/icons';
import { ThemeContext } from 'contexts/themeContext';
import { Footer, Header } from 'layouts';
import { images } from 'images';
import Input from 'components/auth/input';
import { ITabSetting } from 'interfaces';
import Button from 'components/auth/button';
import { AuthContext } from 'contexts/authContext';
import './index.scss';

const TabSettingPanel = ({ title, content }: ITabSetting) => {
  return (
    <>
      <Tab.Panel className={'panel'}>
        <div className='title border-b-2 border-gray-400 p-5 px-10 text-lg font-semibold leading-none'>{title}</div>
        <div className='px-10 py-5'>
          {content && (
            <>
              <div className='flex items-stretch justify-between gap-5'>
                <div style={{ width: content.leftWidth ? `${(Number(content.leftWidth) / 12) * 100}%` : '100%' }}>
                  {content.left}
                  {content.submitBtn && <Button {...content.submitBtn} />}
                </div>
                <div className='self-center' style={{ width: content.rightWidth ? `${(Number(content.rightWidth) / 12) * 100}%` : '40%' }}>
                  {content.right}
                </div>
              </div>
            </>
          )}
        </div>
      </Tab.Panel>
    </>
  );
};

const Profile = () => {
  const themeMode = useContext(ThemeContext);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const menuSettings: ITabSetting[] = [
    {
      iconName: 'profile',
      title: 'Thông tin tài khoản',
      content: {
        left: (
          <ul className='detail w-full'>
            <li>
              <span>Ảnh đại diện</span>
              <div>
                <div className='relative h-[60px] w-[60px] overflow-hidden rounded-full'>
                  <img className='h-full w-full' src={images['./avatar.png']} alt='' />
                  <div className='edit-avatar absolute bottom-0 left-1/2 w-full -translate-x-1/2 cursor-pointer py-0.5 text-center opacity-50'>
                    <Icons className='mx-auto' iconName='camera' themeMode={themeMode.theme} />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <span>Biệt danh</span>
              <div>Sung Jin Woo</div>
              <div className='action'>
                <button>Thay đổi</button>
              </div>
            </li>
            <li>
              <span>Ngày sinh</span>
              <div>28/11/2000</div>
              <div className='action'>
                <button>Thay đổi</button>
              </div>
            </li>
            <li>
              <span>Giới tính</span>
              <div>Nam</div>
              <div className='action'>
                <button>Thay đổi</button>
              </div>
            </li>
            <li>
              <span>Số điện thoại</span>
              <div>0123456789</div>
            </li>
            <li>
              <span>Email liên kết</span>
              <div>animetop@gmail.com</div>
            </li>
          </ul>
        ),
        right: (
          <div className='avatar h-full py-[25px]'>
            <img className='h-full w-full rounded-[10px] object-cover object-center' src={images['./avatar.png']} alt='' />
          </div>
        ),
        leftWidth: 8,
        rightWidth: 4,
      },
    },
    {
      iconName: 'lock',
      title: 'Thay đổi mật khẩu',
      content: {
        left: (
          <>
            <Input type='text' name='current-password' placeholder='Mật khẩu hiện tại' />
            <Input type='text' name='new-password' placeholder='Mật khẩu mới' />
            <Input type='text' name='renew-password' placeholder='Xác nhận mật khẩu mới' />
            <Input type='text' name='captcha' placeholder='Mã captcha' />
          </>
        ),
        right: (
          <>
            <p>
              <span className='font-bold'>Gợi ý:</span> Dùng ít nhất 8 ký tự.
            </p>
            <p>Kết hợp các ký tự A-z, 0-9 và một số ký tự đặc biệt.</p>
            <p>Không nên sử dụng những chuỗi dễ đoán như ngày sinh trong mật khẩu.</p>
          </>
        ),
        leftWidth: 7,
        rightWidth: 4,
        submitBtn: {
          btnName: 'Thay đổi',
          className: 'submit-btn',
        },
      },
    },
    {
      iconName: 'password',
      title: 'Thay đổi số điện thoại',
      content: {
        left: (
          <>
            <p className='!mb-[30px]'>Vui lòng điền số điện thoại di động. Chúng tôi sẽ gửi bạn một mã xác minh thông qua tin nhắn SMS</p>
            <Input type='text' name='phone' placeholder='Số điện thoại' />
          </>
        ),
        leftWidth: 7,
        submitBtn: {
          btnName: 'Gửi mã',
          className: 'submit-btn',
        },
      },
    },
    {
      iconName: 'sms',
      title: 'Thay đổi email',
      content: {
        left: (
          <>
            <Input type='text' name='new-email' placeholder='Địa chỉ email mới' />
            <Input type='text' name='renew-email' placeholder='Xác nhận địa chỉ email mới' />
            <Input type='text' name='password' placeholder='Mật khẩu hiện tại' />
            <Input type='text' name='captcha' placeholder='Mã captcha' />
          </>
        ),
        leftWidth: 7,
        submitBtn: {
          btnName: 'Thay đổi',
          className: 'submit-btn',
        },
      },
    },
    {
      iconName: 'logout',
      title: 'Đăng xuất',
      onClick: () => {
        auth.setIsAuth(false);
        navigate('/login');
      },
    },
  ];

  return (
    <>
      <Header />
      <section className={`profile mt-[60px] profile-${themeMode.theme}`}>
        <div className='container'>
          <div className='mx-auto flex min-h-[435px] w-full flex-row gap-5 py-10 sm:px-0'>
            <Tab.Group>
              <Tab.List className='tab-list w-[30%] rounded-[10px] p-5'>
                {menuSettings.map((menu) => (
                  <Tab key={menu.title} className={'tab common-flex-box mb-2.5 h-10 w-full text-left outline-none'} onClick={menu.onClick}>
                    {({ selected }) => (
                      <>
                        <Icons iconName={menu.iconName || ''} themeMode={themeMode.theme} className={`w-[10%]`} />
                        <span className={`title w-[85%] p-2 ${selected ? 'border-l-2 ps-1.5 font-semibold' : ''}`}>{menu.title}</span>
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className='tab-panel w-[70%] rounded-[10px]'>
                {menuSettings.map((menu) => (
                  <TabSettingPanel key={menu.title} content={menu.content || undefined} title={menu.title} />
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
