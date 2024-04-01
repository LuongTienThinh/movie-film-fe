import { IInput } from "interfaces";

const Input = ({ id, type, name, placeholder, label, className, ...props }: IInput) => {
  switch (type) {
    case "text":
      return <input className={`w-full py-2 px-5 rounded-[10px] my-[5px] ${className ?? ''}`} type={type} name={name} placeholder={placeholder} {...props} />

    case "checkbox":
      return (
        <div className="flex items-center">
          <div className="relative h-[18px]">
            <input className={`${className ?? ''}`} id={id} type={type} name={name} {...props} />
            <label className="checkbox absolute"></label>
          </div>
          {label && <label className="leading-none py-1 ps-2.5" htmlFor={name}>{label}</label>}
        </div>
      )

    default:
      return <></>;
  }
}

export default Input;