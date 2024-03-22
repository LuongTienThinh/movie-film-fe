import { IThemeIcon } from "interfaces";

const Notify = ({ ...props }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M12.02 2.91C8.71003 2.91 6.02003 5.6 6.02003 8.91V11.8C6.02003 12.41 5.76003 13.34 5.45003 13.86L4.30003 15.77C3.59003 16.95 4.08003 18.26 5.38003 18.7C9.69003 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z" stroke="#F8F9FA" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
  <path d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z" stroke="#F8F9FA" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.36002 20.64 9.02002 19.88 9.02002 19.06" stroke="#F8F9FA" strokeWidth="1.5" strokeMiterlimit="10" />
</svg>

const ThemeMode = ({ ...props }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z" fill="#F8F9FA" />
  <path d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z" fill="#F8F9FA" />
</svg>

const Search = ({ ...props }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M22 22L20 20" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const Account = ({ ...props }) => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M10 10C12.3012 10 14.1667 8.13452 14.1667 5.83333C14.1667 3.53214 12.3012 1.66666 10 1.66666C7.69885 1.66666 5.83337 3.53214 5.83337 5.83333C5.83337 8.13452 7.69885 10 10 10Z" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M16.0083 13.1167L13.0583 16.0667C12.9416 16.1834 12.8333 16.4 12.8083 16.5584L12.6499 17.6833C12.5916 18.0917 12.875 18.375 13.2833 18.3167L14.4083 18.1583C14.5666 18.1333 14.7916 18.025 14.9 17.9084L17.8499 14.9584C18.3583 14.45 18.5999 13.8583 17.8499 13.1083C17.1083 12.3667 16.5166 12.6083 16.0083 13.1167Z" stroke="#F8F9FA" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M15.5833 13.5417C15.8333 14.4417 16.5333 15.1416 17.4333 15.3916" stroke="#F8F9FA" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M2.84167 18.3333C2.84167 15.1083 6.05003 12.5 10 12.5C10.8667 12.5 11.7 12.625 12.475 12.8583" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const Collection = ({ ...props }) => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M18.3333 12.5V7.5C18.3333 3.33333 16.6666 1.66666 12.5 1.66666H7.49996C3.33329 1.66666 1.66663 3.33333 1.66663 7.5V12.5C1.66663 16.6667 3.33329 18.3333 7.49996 18.3333H12.5C16.6666 18.3333 18.3333 16.6667 18.3333 12.5Z" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M2.09998 14.2583H17.9" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M2.09998 5.925H17.9" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M5.80835 14.2583V17.8833" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M10 14.2583V18.3083" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M14.1417 14.2583V17.9333" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M5.80835 1.75833V5.38333" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M10 1.75833V5.80833" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M10 5.85834V15.025" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M14.1417 1.75833V5.43333" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const Logout = ({ ...props }) => <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M15.4863 12.1833L17.7596 10.05L15.4863 7.91667" stroke="#F8F9FA" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M8.66669 10.05H17.6974" stroke="#F8F9FA" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M10.4426 16.6667C6.51771 16.6667 3.33875 14.1667 3.33875 10C3.33875 5.83333 6.51771 3.33333 10.4426 3.33333" stroke="#F8F9FA" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const Instagram = ({ ...props }) => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M26.9833 3.33331H13.0166C6.94998 3.33331 3.33331 6.94998 3.33331 13.0166V26.9666C3.33331 33.05 6.94998 36.6666 13.0166 36.6666H26.9666C33.0333 36.6666 36.65 33.05 36.65 26.9833V13.0166C36.6666 6.94998 33.05 3.33331 26.9833 3.33331ZM20 26.4666C16.4333 26.4666 13.5333 23.5666 13.5333 20C13.5333 16.4333 16.4333 13.5333 20 13.5333C23.5666 13.5333 26.4666 16.4333 26.4666 20C26.4666 23.5666 23.5666 26.4666 20 26.4666ZM29.8666 11.4666C29.7833 11.6666 29.6666 11.85 29.5166 12.0166C29.35 12.1666 29.1666 12.2833 28.9666 12.3666C28.7666 12.45 28.55 12.5 28.3333 12.5C27.8833 12.5 27.4666 12.3333 27.15 12.0166C27 11.85 26.8833 11.6666 26.8 11.4666C26.7166 11.2666 26.6666 11.05 26.6666 10.8333C26.6666 10.6166 26.7166 10.4 26.8 10.2C26.8833 9.98331 27 9.81665 27.15 9.64998C27.5333 9.26665 28.1166 9.08331 28.65 9.19998C28.7666 9.21665 28.8666 9.24998 28.9666 9.29998C29.0666 9.33331 29.1666 9.38331 29.2666 9.44998C29.35 9.49998 29.4333 9.58331 29.5166 9.64998C29.6666 9.81665 29.7833 9.98331 29.8666 10.2C29.95 10.4 30 10.6166 30 10.8333C30 11.05 29.95 11.2666 29.8666 11.4666Z" fill="#ADB5BD" />
</svg>

const DropdownFirstDown = ({ ...props }) => <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M8.87256 0.5H1.12744C0.188675 0.5 -0.337583 1.40494 0.242426 2.02183L4.11499 6.14085C4.56499 6.61972 5.43376 6.61972 5.88501 6.14085L9.75757 2.02063C10.3376 1.40494 9.81132 0.5 8.87256 0.5Z" fill="#F8F9FA" />
</svg>

const DropdownFirstUp = ({ ...props }) => <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M1.12744 6L8.87256 6C9.81132 6 10.3376 5.09506 9.75757 4.47817L5.88501 0.359154C5.43501 -0.119718 4.56624 -0.119718 4.11499 0.359154L0.242426 4.47937C-0.337583 5.09506 0.188676 6 1.12744 6Z" fill="#F8F9FA" />
</svg>


const DarkIcons = ({ iconName, ...props }: IThemeIcon) => {
  switch (iconName) {
    case 'account':
      return <Account {...props} />;

    case 'collection':
      return <Collection {...props} />;

    case 'dropdownfirst-down':
      return <DropdownFirstDown {...props} />;

    case 'dropdownfirst-up':
      return <DropdownFirstUp {...props} />;

    case 'instagram':
      return <Instagram {...props} />;

    case 'logout':
      return <Logout {...props} />;

    case 'notify':
      return <Notify {...props} />;

    case 'search':
      return <Search {...props} />;

    case 'thememode':
      return <ThemeMode {...props} />;

    default:
      return null;
  }
}

export default DarkIcons;