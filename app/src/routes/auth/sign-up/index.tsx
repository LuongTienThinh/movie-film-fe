import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Icons from 'assets/icons';
import { ThemeContext } from 'contexts/themeContext';
import AuthHook from 'hooks/auth';
import { IAuthHook } from 'interfaces';
import { Footer, Header } from 'layouts';
import Input from 'components/auth/input';
import Button from 'components/auth/button';

const SignUp = () => {
  const themeMode = useContext(ThemeContext);

  const signUpHook: IAuthHook = {
    title: 'ĐĂNG KÝ',
    content: (
      <>
        <div>
          <Input type='text' name='email' placeholder='Email hoặc số điện thoại' />
          <Input type='text' name='password' placeholder='Mật khẩu' />
          <Input type='text' name='re-password' placeholder='Nhập lại mật khẩu' />
          <Button className='w-full bg-[#04C700] py-3' btnName={'Tạo tài khoản'} />
        </div>
      </>
    ),
    otherBtns: <Button className='mx-auto w-full bg-[#FE2828] py-3' linkTo='/login' btnName={'Đăng nhập'} />,
  };

  const signUpData = AuthHook(signUpHook);

  return (
    <>
      <Header />

      {signUpData.renderData()}

      <Footer />
    </>
  );
};

export default SignUp;
