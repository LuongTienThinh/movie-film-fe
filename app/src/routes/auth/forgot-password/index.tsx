import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";

import Icons from "assets/icons";
import { ThemeContext } from "contexts/themeContext";
import AuthHook from "hooks/auth";
import { IAuthHook } from "interfaces";
import { Footer, Header } from "layouts";
import Input from "components/auth/input";

const ForgotPassword = () => {
  const themeMode = useContext(ThemeContext);
  const [params, setParams] = useSearchParams();
  const [step, setStep] = useState<string | null>(params.get('step') || '1');

  const forgotHook: IAuthHook = step === '1' ? {
    title: "Tìm lại tài khoản của bạn",
    content: (
      <>
        <div className="note text-left p-2.5 text-sm">
          <p className="font-light text-justify">Vui lòng nhập lại email hoặc số điện thoại để tìm kiếm tài khoản của bạn</p>
        </div>
        <div>
          <Input
            type="text"
            name="mail-phone"
            placeholder="Email hoặc số điện thoại"
          />
        </div>
      </>
    ),
    confirmBtns: {
      cancelBtn: {
        btnName: "Huỷ",
      },
      continueBtn: {
        btnName: "Gửi mã",
        linkTo: "/forgot-password?step=2",
        onClick: () => { setStep('2') },
      },
    }
  } : step === '2' ? {
    title: "Xác thực tài khoản",
    content: (
      <>
        <div className="note text-left p-2.5 text-sm">
          <p className="mb-2.5 font-light text-justify">Nhập mã OTP để xác thực tài khoản của bạn</p>
          <strong className="italic">Lưu ý:</strong>
          <p className="italic font-light text-justify">Không chia sẻ mã OTP cho bất kỳ ai, điều đó có thể ảnh hưởng tới tài khoản của bạn!</p>
        </div>
        <div>
          <Input
            type="text"
            name="otp"
            placeholder="Nhập mã xác thực"
          />
          <Input
            type="text"
            name="captcha"
            placeholder="Mã captcha"
          />
        </div>
      </>
    ),
    confirmBtns: {
      cancelBtn: {
        btnName: "Huỷ",
      },
      continueBtn: {
        btnName: "Xác nhận",
        linkTo: "/forgot-password?step=3",
        onClick: () => { setStep('3') },
      },
    }
  } : step === '3' ? {
    title: "Đặt lại mật khẩu",
    content: (
      <>
        <div>
          <Input
            type="text"
            name="new-password"
            placeholder="Mật khẩu mới"
          />
          <Input
            type="text"
            name="renew-password"
            placeholder="Xác nhận mật khẩu mới"
          />
          <Input
            type="text"
            name="captcha"
            placeholder="Mã captcha"
          />
        </div>
      </>
    ),
    confirmBtns: {
      cancelBtn: {
        btnName: "Huỷ",
      },
      continueBtn: {
        btnName: "Thay đổi",
        linkTo: "/forgot-password?step=4",
        onClick: () => { setStep('4') },
      },
    }
  } : {
    title: "Đặt lại mật khẩu",
    content: (
      <>
        <div className="note text-left p-2.5 text-sm">
          <p className="font-light text-justify">Thay đổi mật khẩu thành công. Nhấn xác nhận để quay lại trang đăng nhập!</p>
        </div>
      </>
    ),
    confirmBtns: {
      continueBtn: {
        btnName: "Xác nhận",
        linkTo: "/login",
      }
    }
  }

  const forgotData = AuthHook(forgotHook);

  return (
    <>
      <Header />

      {forgotData.renderData()}

      <Footer />
    </>
  );
}

export default ForgotPassword;

