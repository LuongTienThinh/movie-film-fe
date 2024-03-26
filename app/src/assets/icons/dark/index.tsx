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

const DropdownFirstDown = ({ ...props }) => <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M8.87256 0.5H1.12744C0.188675 0.5 -0.337583 1.40494 0.242426 2.02183L4.11499 6.14085C4.56499 6.61972 5.43376 6.61972 5.88501 6.14085L9.75757 2.02063C10.3376 1.40494 9.81132 0.5 8.87256 0.5Z" fill="#F8F9FA" />
</svg>

const DropdownFirstUp = ({ ...props }) => <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M1.12744 6L8.87256 6C9.81132 6 10.3376 5.09506 9.75757 4.47817L5.88501 0.359154C5.43501 -0.119718 4.56624 -0.119718 4.11499 0.359154L0.242426 4.47937C-0.337583 5.09506 0.188676 6 1.12744 6Z" fill="#F8F9FA" />
</svg>

const Instagram = ({ ...props }) => <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M27.65 3.3335H13.6833C7.61667 3.3335 4 6.95016 4 13.0168V26.9668C4 33.0502 7.61667 36.6668 13.6833 36.6668H27.6333C33.7 36.6668 37.3167 33.0502 37.3167 26.9835V13.0168C37.3333 6.95016 33.7167 3.3335 27.65 3.3335ZM20.6667 26.4668C17.1 26.4668 14.2 23.5668 14.2 20.0002C14.2 16.4335 17.1 13.5335 20.6667 13.5335C24.2333 13.5335 27.1333 16.4335 27.1333 20.0002C27.1333 23.5668 24.2333 26.4668 20.6667 26.4668ZM30.5333 11.4668C30.45 11.6668 30.3333 11.8502 30.1833 12.0168C30.0167 12.1668 29.8333 12.2835 29.6333 12.3668C29.4333 12.4502 29.2167 12.5002 29 12.5002C28.55 12.5002 28.1333 12.3335 27.8167 12.0168C27.6667 11.8502 27.55 11.6668 27.4667 11.4668C27.3833 11.2668 27.3333 11.0502 27.3333 10.8335C27.3333 10.6168 27.3833 10.4002 27.4667 10.2002C27.55 9.9835 27.6667 9.81683 27.8167 9.65016C28.2 9.26683 28.7833 9.0835 29.3167 9.20016C29.4333 9.21683 29.5333 9.25016 29.6333 9.30016C29.7333 9.3335 29.8333 9.3835 29.9333 9.45016C30.0167 9.50016 30.1 9.5835 30.1833 9.65016C30.3333 9.81683 30.45 9.9835 30.5333 10.2002C30.6167 10.4002 30.6667 10.6168 30.6667 10.8335C30.6667 11.0502 30.6167 11.2668 30.5333 11.4668Z" fill="#F9FAFB" />
</svg>

const Facebook = ({ ...props }) => <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M37.3333 26.9835C37.3333 33.0502 33.7167 36.6668 27.65 36.6668H25.6667C24.75 36.6668 24 35.9168 24 35.0002V25.3835C24 24.9335 24.3667 24.5502 24.8167 24.5502L27.75 24.5002C27.9833 24.4835 28.1833 24.3169 28.2333 24.0835L28.8167 20.9002C28.8667 20.6002 28.6333 20.3168 28.3167 20.3168L24.7667 20.3668C24.3 20.3668 23.9334 20.0002 23.9167 19.5502L23.85 15.4668C23.85 15.2002 24.0667 14.9668 24.35 14.9668L28.35 14.9002C28.6333 14.9002 28.85 14.6835 28.85 14.4002L28.7833 10.4001C28.7833 10.1168 28.5667 9.90017 28.2833 9.90017L23.7833 9.96685C21.0167 10.0168 18.8167 12.2835 18.8667 15.0502L18.95 19.6335C18.9667 20.1002 18.6 20.4668 18.1334 20.4835L16.1333 20.5168C15.85 20.5168 15.6334 20.7335 15.6334 21.0168L15.6834 24.1835C15.6834 24.4668 15.9 24.6835 16.1833 24.6835L18.1834 24.6502C18.65 24.6502 19.0166 25.0168 19.0333 25.4668L19.1833 34.9668C19.2 35.9002 18.45 36.6668 17.5166 36.6668H13.6833C7.61666 36.6668 4 33.0502 4 26.9668V13.0168C4 6.95016 7.61666 3.3335 13.6833 3.3335H27.65C33.7167 3.3335 37.3333 6.95016 37.3333 13.0168V26.9835Z" fill="#F9FAFB" />
</svg>

const DirectNotification = ({ ...props }) => <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M32.334 13.3335C35.0954 13.3335 37.334 11.0949 37.334 8.3335C37.334 5.57207 35.0954 3.3335 32.334 3.3335C29.5726 3.3335 27.334 5.57207 27.334 8.3335C27.334 11.0949 29.5726 13.3335 32.334 13.3335Z" fill="#F9FAFB" />
  <path d="M34.5667 21.1998H29.05C27.5 21.1998 26.1167 22.0664 25.4167 23.4331L24.0833 26.0664C23.7667 26.6998 23.1333 27.0831 22.4333 27.0831H17.25C16.7667 27.0831 16.05 26.9831 15.6 26.0498L14.2833 23.4331C13.5833 22.0498 12.2 21.1831 10.65 21.1831H5.1C4.5 21.1998 4 21.6998 4 22.2998V27.4498C4 33.2331 7.45 36.6664 13.2167 36.6664H26.4833C31.9167 36.6664 35.2667 33.6831 35.6667 28.3998V22.2998C35.6667 21.6998 35.1667 21.1998 34.5667 21.1998Z" fill="#F9FAFB" />
  <path d="M35.6667 17.3333V18.8833C35.3167 18.7667 34.95 18.7 34.5667 18.7H29.05C26.55 18.7 24.3 20.0833 23.2 22.3167L22.0333 24.6H17.65L16.5167 22.3333C15.3833 20.0833 13.15 18.7 10.65 18.7H5.1C4.71667 18.7 4.35 18.7667 4 18.8833V14.2C4 9.11667 8.11667 5 13.2 5H23.3333C24.4 5 25.1667 5.96667 24.9667 7C24.7 8.33333 24.8167 9.78333 25.4667 11.3167C26.2167 13.05 27.6167 14.45 29.35 15.2C30.8833 15.85 32.3333 15.9667 33.6667 15.7C34.7 15.5 35.6667 16.2667 35.6667 17.3333Z" fill="#F9FAFB" />
</svg>

const Youtube = ({ ...props }) => <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M29 6.6665H12.3333C7.33333 6.6665 4 9.99984 4 14.9998V24.9998C4 29.9998 7.33333 33.3332 12.3333 33.3332H29C34 33.3332 37.3333 29.9998 37.3333 24.9998V14.9998C37.3333 9.99984 34 6.6665 29 6.6665ZM23.8167 21.7165L19.7 24.1832C18.0333 25.1832 16.6666 24.4165 16.6666 22.4665V17.5165C16.6666 15.5665 18.0333 14.7999 19.7 15.7999L23.8167 18.2665C25.4 19.2332 25.4 20.7665 23.8167 21.7165Z" fill="#F9FAFB" />
</svg>

const BtnPrev = ({ ...props }) => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M14.9999 36.6667H24.9999C33.3333 36.6667 36.6666 33.3333 36.6666 25V15C36.6666 6.66668 33.3333 3.33334 24.9999 3.33334H14.9999C6.66659 3.33334 3.33325 6.66668 3.33325 15V25C3.33325 33.3333 6.66659 36.6667 14.9999 36.6667Z" stroke="#F9FAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M22.1001 25.8833L16.2334 20L22.1001 14.1167" stroke="#F9FAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const BtnNext = ({ ...props }) => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M14.9999 36.6667H24.9999C33.3333 36.6667 36.6666 33.3333 36.6666 25V15C36.6666 6.66668 33.3333 3.33334 24.9999 3.33334H14.9999C6.66659 3.33334 3.33325 6.66668 3.33325 15V25C3.33325 33.3333 6.66659 36.6667 14.9999 36.6667Z" stroke="#F9FAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M17.8999 25.8833L23.7666 20L17.8999 14.1167" stroke="#F9FAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const NotifySeen = ({ ...props }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M12.02 2.90997C8.71003 2.90997 6.02003 5.59997 6.02003 8.90997V11.8C6.02003 12.41 5.76003 13.34 5.45003 13.86L4.30003 15.77C3.59003 16.95 4.08003 18.26 5.38003 18.7C9.69003 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.90997C18.02 5.60997 15.32 2.90997 12.02 2.90997Z" stroke="#F9FAFB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
  <path d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z" stroke="#F9FAFB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.36002 20.64 9.02002 19.88 9.02002 19.06" stroke="#F9FAFB" stroke-width="1.5" stroke-miterlimit="10" />
  <circle cx="17" cy="6" r="3" fill="#FF0000" />
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

    case 'facebook':
      return <Facebook {...props} />;

    case 'youtube':
      return <Youtube {...props} />;

    case 'direct-notification':
      return <DirectNotification {...props} />;

    case 'btn-prev':
      return <BtnPrev {...props} />;

    case 'btn-next':
      return <BtnNext {...props} />;

    case 'notify-seen':
      return <NotifySeen {...props} />;

    default:
      return null;
  }
}

export default DarkIcons;