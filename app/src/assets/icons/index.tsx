import DarkIcons from './dark';
import LightIcons from './light';
import { IIcon } from 'interfaces';

const Icons = ({ themeMode, iconName, ...props }: IIcon) => {
  switch (themeMode) {
    case 'dark':
      return <DarkIcons iconName={iconName} {...props} />;
  
    default:
      return <LightIcons iconName={iconName} {...props} />;
  }
}

export default Icons;