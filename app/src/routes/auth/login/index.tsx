import { useContext } from "react";
import { Link } from "react-router-dom";

import { Footer, Header } from "layouts";
import { AuthHook } from "hooks";
import { IAuthHook } from "interfaces";
import Icons from "assets/icons";
import { ThemeContext } from "contexts/themeContext";
import Input from "components/auth/input";
import Button from "components/auth/button";

const Login = () => {
  const themeMode = useContext(ThemeContext);

  const loginHook: IAuthHook = {
    title: "ĐĂNG NHẬP",
    content: (
      <>
        <div>
          <Button
            leftIcon={<Icons themeMode={"dark"} iconName={"facebook"} />}
            btnName={"Đăng nhập bằng tài khoản Facebook"}
            className="bg-[#3B5998] w-full"
          />
          <Button
            leftIcon={<Icons themeMode={themeMode.theme} iconName={"google"} />}
            btnName={"Đăng nhập bằng tài khoản Gmail"}
            className="bg-[#EB4034] w-full"
          />
        </div>
        <div className="py-5 font-bold text-xl uppercase">Hoặc</div>
        <div>
          <Input
            type="text"
            name="email"
            placeholder="Email hoặc số điện thoại"
          />
          <Input
            type="text"
            name="password"
            placeholder="Mật khẩu"
          />
          <Button
            btnName={"Đăng nhập"}
            className="bg-[#FE2828] py-3 w-full"
          />
          <div className="common-flex-box text-base mt-2.5">
            <div className="save">
              <Input type="checkbox" id="save-password" name="save-password" label="Ghi nhớ mật khẩu" />
            </div>
            <Link to={'/forgot-password?step=1'} className="forgot text-[#0029FF]">Quên mật khẩu?</Link>
          </div>
        </div>
      </>
    ),
    otherBtns: (
      <Button
        btnName={"Đăng ký"}
        className="bg-[#04C700] py-3 w-1/2 mx-auto"
        linkTo="/sign-up"
      />
    ),
  }

  const loginData = AuthHook(loginHook);

  return (
    <>
      <Header />

      {loginData.renderData()}

      <Footer />
    </>
  );
}

export default Login;