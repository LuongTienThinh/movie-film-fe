import { Link } from "react-router-dom";

import { IButton } from "interfaces";

const Button = ({ leftIcon: LeftIcon, btnName, rightIcon: RightIcon, linkTo = '', onClick, className, ...props }: IButton) => {
  return (
    <Link
      to={linkTo}
      onClick={onClick}
      className={`auth-btn flex justify-center items-center rounded-[10px] my-[5px] py-[5px] text-lg font-semibold ${className ?? ''}`}
      {...props}
    >
      {LeftIcon && LeftIcon}
      <div className={`name ${LeftIcon || RightIcon ? 'w-4/5' : ''}`}>{btnName}</div>
      {RightIcon && RightIcon}
    </Link>
  )
}

export default Button;