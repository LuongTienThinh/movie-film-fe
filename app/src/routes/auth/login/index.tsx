import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Footer, Header } from 'layouts';
import { AuthHook } from 'hooks';
import { IAuthHook } from 'interfaces';
import Icons from 'assets/icons';
import { ThemeContext } from 'contexts/themeContext';
import Input from 'components/auth/input';
import Button from 'components/auth/button';
import { AuthContext } from 'contexts/authContext';

const Login = () => {
  const themeMode = useContext(ThemeContext);
  const auth = useContext(AuthContext);

  const loginHook: IAuthHook = {
    title: 'ĐĂNG NHẬP',
    content: (
      <>
        <div>
          <Button className='w-full bg-[#3B5998]' leftIcon={<Icons themeMode={'dark'} iconName={'facebook'} />} btnName={'Đăng nhập bằng tài khoản Facebook'} />
          <Button className='w-full bg-[#EB4034]' leftIcon={<Icons themeMode={themeMode.theme} iconName={'google'} />} btnName={'Đăng nhập bằng tài khoản Gmail'} />
        </div>
        <div className='py-5 text-xl font-bold uppercase'>Hoặc</div>
        <div>
          <Input type='text' name='email' placeholder='Email hoặc số điện thoại' />
          <Input type='text' name='password' placeholder='Mật khẩu' />
          <Button className='w-full bg-[#FE2828] py-3' linkTo='/' btnName={'Đăng nhập'} onClick={() => auth.setIsAuth(true)} />
          <div className='common-flex-box mt-2.5 text-base'>
            <div className='save'>
              <Input type='checkbox' id='save-password' name='save-password' label='Ghi nhớ mật khẩu' />
            </div>
            <Link to={'/forgot-password?step=1'} className='forgot text-[#0029FF]'>
              Quên mật khẩu?
            </Link>
          </div>
        </div>
      </>
    ),
    otherBtns: <Button className='mx-auto w-1/2 bg-[#04C700] py-3' linkTo='/sign-up' btnName={'Đăng ký'} />,
  };

  const loginData = AuthHook(loginHook);

  return (
    <>
      <Header />

      {loginData.renderData()}

      <Footer />
    </>
  );
};

export default Login;
