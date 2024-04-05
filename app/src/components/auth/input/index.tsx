import { IInput } from 'interfaces';

const Input = ({ id, type, name, placeholder, label, className, ...props }: IInput) => {
  switch (type) {
    case 'text':
      return <input className={`my-[5px] w-full rounded-[10px] px-5 py-2 ${className ?? ''}`} type={type} name={name} placeholder={placeholder} {...props} />;
      
    case 'checkbox':
      return (
        <div className='flex items-center'>
          <div className='relative h-[18px]'>
            <input className={`${className ?? ''}`} id={id} type={type} name={name} {...props} />
            <label className='checkbox absolute'></label>
          </div>
          {label && (
            <label className='py-1 ps-2.5 leading-none' htmlFor={name}>
              {label}
            </label>
          )}
        </div>
      );

    default:
      return <></>;
  }
};

export default Input;
