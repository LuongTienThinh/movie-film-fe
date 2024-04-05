import { useContext } from 'react';

import { IAuthHook } from 'interfaces';
import { ThemeContext } from 'contexts/themeContext';
import Button from 'components/auth/button';
import './index.scss';

const AuthHook = ({ title, content: Content, otherBtns: OtherBtns, confirmBtns }: IAuthHook) => {
  const themeMode = useContext(ThemeContext);

  const renderData = () => {
    return (
      <>
        <section className={`auth auth-${themeMode.theme} mt-[60px] py-20`}>
          <div className='container'>
            <div className='auth-area mx-auto w-[550px] rounded-[20px] px-[75px] py-5 text-center'>
              <form action=''>
                <h1 className='py-[5px] text-3xl font-bold'>{title}</h1>
                {Content && <div className='content py-[5px]'>{Content}</div>}
                {OtherBtns && (
                  <>
                    <hr className='my-5 h-[1px] border-0' />
                    <div className='btn-area py-[5px]'>{OtherBtns}</div>
                  </>
                )}
                {confirmBtns && (
                  <>
                    <div className='confirm-btns flex justify-end gap-x-2.5 py-[5px]'>
                      {confirmBtns.cancelBtn && <Button className='cancel-btn px-4 py-2' {...confirmBtns.cancelBtn} />}
                      {confirmBtns.continueBtn && <Button className='continue-btn px-4 py-2' {...confirmBtns.continueBtn} />}
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </section>
      </>
    );
  };

  return {
    renderData,
  };
};

export default AuthHook;
