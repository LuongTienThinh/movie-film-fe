import { useContext } from "react";

import { IAuthHook } from "interfaces"
import './index.scss';
import { ThemeContext } from "contexts/themeContext";
import Button from "components/auth/button";

const AuthHook = ({ title, content: Content, otherBtns: OtherBtns, confirmBtns }: IAuthHook) => {
  const themeMode = useContext(ThemeContext);

  const renderData = () => {
    return (
      <>
        <section className={`auth auth-${themeMode.theme} py-20 mt-[60px]`}>
          <div className="container">
            <div className="auth-area mx-auto rounded-[20px] w-[550px] text-center py-5 px-[75px]">
              <form action="">
                <h1 className="font-bold text-3xl py-[5px]">{title}</h1>
                {Content && <div className="content py-[5px]">{Content}</div>}
                {OtherBtns &&
                  <>
                    <hr className="border-0 my-5 h-[1px]" />
                    <div className="btn-area py-[5px]">{OtherBtns}</div>
                  </>
                }
                {confirmBtns &&
                  <>
                    <div className="confirm-btns py-[5px] flex justify-end gap-x-2.5">
                      {confirmBtns.cancelBtn && <Button className="cancel-btn py-2 px-4" {...confirmBtns.cancelBtn} />}
                      {confirmBtns.continueBtn && <Button className="continue-btn py-2 px-4" {...confirmBtns.continueBtn} />}
                    </div>
                  </>
                }
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }

  return {
    renderData,
  }
}

export default AuthHook;