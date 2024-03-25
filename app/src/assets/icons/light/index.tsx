import { IThemeIcon } from "interfaces";

const Notify = ({ ...props }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M12.02 2.90997C8.71 2.90997 6.02 5.59997 6.02 8.90997V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.90997C18.02 5.60997 15.32 2.90997 12.02 2.90997Z" stroke="#212529" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
  <path d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z" stroke="#212529" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.9 21.18C9.36 20.64 9.02 19.88 9.02 19.06" stroke="#212529" strokeWidth="1.5" strokeMiterlimit="10" />
</svg>

const ThemeMode = ({ ...props }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M21.53 15.93C21.37 15.66 20.92 15.24 19.8 15.44C19.18 15.55 18.55 15.6 17.92 15.57C15.59 15.47 13.48 14.4 12.01 12.75C10.71 11.3 9.91 9.40999 9.9 7.36999C9.9 6.22999 10.12 5.12999 10.57 4.08999C11.01 3.07999 10.7 2.54999 10.48 2.32999C10.25 2.09999 9.71 1.77999 8.65 2.21999C4.56 3.93999 2.03 8.03999 2.33 12.43C2.63 16.56 5.53 20.09 9.37 21.42C10.29 21.74 11.26 21.93 12.26 21.97C12.42 21.98 12.58 21.99 12.74 21.99C16.09 21.99 19.23 20.41 21.21 17.72C21.88 16.79 21.7 16.2 21.53 15.93Z" fill="#212529" />
</svg>

const Search = ({ ...props }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#212529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M22 22L20 20" stroke="#212529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const Account = ({ ...props }) => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M10 9.99999C12.3012 9.99999 14.1667 8.13451 14.1667 5.83332C14.1667 3.53214 12.3012 1.66666 10 1.66666C7.69882 1.66666 5.83334 3.53214 5.83334 5.83332C5.83334 8.13451 7.69882 9.99999 10 9.99999Z" stroke="#212529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M16.0083 13.1167L13.0583 16.0667C12.9416 16.1834 12.8333 16.4 12.8083 16.5584L12.65 17.6833C12.5916 18.0917 12.875 18.375 13.2833 18.3167L14.4083 18.1583C14.5666 18.1333 14.7917 18.025 14.9 17.9084L17.85 14.9584C18.3583 14.45 18.6 13.8583 17.85 13.1083C17.1083 12.3667 16.5167 12.6083 16.0083 13.1167Z" stroke="#212529" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M15.5833 13.5417C15.8333 14.4417 16.5333 15.1416 17.4333 15.3916" stroke="#212529" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M2.84164 18.3333C2.84164 15.1083 6.05 12.5 10 12.5C10.8667 12.5 11.7 12.625 12.475 12.8583" stroke="#212529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const Collection = ({ ...props }) => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M18.3333 12.5V7.49999C18.3333 3.33332 16.6667 1.66666 12.5 1.66666H7.49999C3.33332 1.66666 1.66666 3.33332 1.66666 7.49999V12.5C1.66666 16.6667 3.33332 18.3333 7.49999 18.3333H12.5C16.6667 18.3333 18.3333 16.6667 18.3333 12.5Z" stroke="#212529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M2.10001 14.2583H17.9" stroke="#212529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M2.10001 5.92499H17.9" stroke="#212529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M5.80832 14.2583V17.8833" stroke="#212529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M10 14.2583V18.3083" stroke="#212529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M14.1417 14.2583V17.9333" stroke="#212529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M5.80832 1.75833V5.38333" stroke="#212529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M10 1.75833V5.80833" stroke="#212529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M10 5.85834V15.025" stroke="#212529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M14.1417 1.75833V5.43333" stroke="#212529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const Logout = ({ ...props }) => <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M15.4863 12.1833L17.7596 10.05L15.4863 7.91666" stroke="#212529" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M8.66666 10.05H17.6974" stroke="#212529" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M10.4426 16.6667C6.51777 16.6667 3.33881 14.1667 3.33881 10C3.33881 5.83334 6.51777 3.33334 10.4426 3.33334" stroke="#212529" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const DropdownFirstDown = ({ ...props }) => <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M8.87256 0.5H1.12744C0.188675 0.5 -0.337583 1.40494 0.242426 2.02183L4.11499 6.14085C4.56499 6.61972 5.43376 6.61972 5.88501 6.14085L9.75757 2.02063C10.3376 1.40494 9.81132 0.5 8.87256 0.5Z" fill="#212529" />
</svg>

const DropdownFirstUp = ({ ...props }) => <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M1.12744 6.5L8.87256 6.5C9.81132 6.5 10.3376 5.59506 9.75757 4.97817L5.88501 0.859154C5.43501 0.380282 4.56624 0.380282 4.11499 0.859154L0.242426 4.97937C-0.337583 5.59506 0.188676 6.5 1.12744 6.5Z" fill="#212529" />
</svg>

const Instagram = ({ ...props }) => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M26.9833 3.33331H13.0166C6.94998 3.33331 3.33331 6.94998 3.33331 13.0166V26.9666C3.33331 33.05 6.94998 36.6666 13.0166 36.6666H26.9666C33.0333 36.6666 36.65 33.05 36.65 26.9833V13.0166C36.6666 6.94998 33.05 3.33331 26.9833 3.33331ZM20 26.4666C16.4333 26.4666 13.5333 23.5666 13.5333 20C13.5333 16.4333 16.4333 13.5333 20 13.5333C23.5666 13.5333 26.4666 16.4333 26.4666 20C26.4666 23.5666 23.5666 26.4666 20 26.4666ZM29.8666 11.4666C29.7833 11.6666 29.6666 11.85 29.5166 12.0166C29.35 12.1666 29.1666 12.2833 28.9666 12.3666C28.7666 12.45 28.55 12.5 28.3333 12.5C27.8833 12.5 27.4666 12.3333 27.15 12.0166C27 11.85 26.8833 11.6666 26.8 11.4666C26.7166 11.2666 26.6666 11.05 26.6666 10.8333C26.6666 10.6166 26.7166 10.4 26.8 10.2C26.8833 9.98331 27 9.81665 27.15 9.64998C27.5333 9.26665 28.1166 9.08331 28.65 9.19998C28.7666 9.21665 28.8666 9.24998 28.9666 9.29998C29.0666 9.33331 29.1666 9.38331 29.2666 9.44998C29.35 9.49998 29.4333 9.58331 29.5166 9.64998C29.6666 9.81665 29.7833 9.98331 29.8666 10.2C29.95 10.4 30 10.6166 30 10.8333C30 11.05 29.95 11.2666 29.8666 11.4666Z" fill="#0A0B0B" />
</svg>

const Facebook = ({ ...props }) => <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M37.3333 26.9833C37.3333 33.0499 33.7167 36.6666 27.65 36.6666H25.6667C24.75 36.6666 24 35.9166 24 34.9999V25.3833C24 24.9333 24.3667 24.5499 24.8167 24.5499L27.75 24.4999C27.9833 24.4833 28.1833 24.3166 28.2333 24.0833L28.8167 20.8999C28.8667 20.5999 28.6333 20.3166 28.3167 20.3166L24.7667 20.3666C24.3 20.3666 23.9334 19.9999 23.9167 19.5499L23.85 15.4666C23.85 15.1999 24.0667 14.9666 24.35 14.9666L28.35 14.8999C28.6333 14.8999 28.85 14.6833 28.85 14.3999L28.7833 10.3999C28.7833 10.1166 28.5667 9.89992 28.2833 9.89992L23.7833 9.9666C21.0167 10.0166 18.8167 12.2833 18.8667 15.0499L18.95 19.6333C18.9667 20.0999 18.6 20.4666 18.1334 20.4833L16.1333 20.5166C15.85 20.5166 15.6334 20.7332 15.6334 21.0166L15.6834 24.1833C15.6834 24.4666 15.9 24.6832 16.1833 24.6832L18.1834 24.6499C18.65 24.6499 19.0166 25.0166 19.0333 25.4666L19.1833 34.9666C19.2 35.8999 18.45 36.6666 17.5166 36.6666H13.6833C7.61666 36.6666 4 33.0499 4 26.9666V13.0166C4 6.94991 7.61666 3.33325 13.6833 3.33325H27.65C33.7167 3.33325 37.3333 6.94991 37.3333 13.0166V26.9833Z" fill="#0A0A0A" />
</svg>

const DirectNotification = ({ ...props }) => <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M32.334 13.3333C35.0954 13.3333 37.334 11.0947 37.334 8.33325C37.334 5.57183 35.0954 3.33325 32.334 3.33325C29.5726 3.33325 27.334 5.57183 27.334 8.33325C27.334 11.0947 29.5726 13.3333 32.334 13.3333Z" fill="#0A0A0A" />
  <path d="M34.5667 21.2H29.05C27.5 21.2 26.1167 22.0667 25.4167 23.4334L24.0833 26.0667C23.7667 26.7 23.1333 27.0833 22.4333 27.0833H17.25C16.7667 27.0833 16.05 26.9833 15.6 26.05L14.2833 23.4334C13.5833 22.05 12.2 21.1833 10.65 21.1833H5.1C4.5 21.2 4 21.7 4 22.3V27.45C4 33.2333 7.45 36.6667 13.2167 36.6667H26.4833C31.9167 36.6667 35.2667 33.6834 35.6667 28.4V22.3C35.6667 21.7 35.1667 21.2 34.5667 21.2Z" fill="#0A0A0A" />
  <path d="M35.6667 17.3333V18.8833C35.3167 18.7667 34.95 18.7 34.5667 18.7H29.05C26.55 18.7 24.3 20.0833 23.2 22.3167L22.0333 24.6H17.65L16.5167 22.3333C15.3833 20.0833 13.15 18.7 10.65 18.7H5.1C4.71667 18.7 4.35 18.7667 4 18.8833V14.2C4 9.11667 8.11667 5 13.2 5H23.3333C24.4 5 25.1667 5.96667 24.9667 7C24.7 8.33333 24.8167 9.78333 25.4667 11.3167C26.2167 13.05 27.6167 14.45 29.35 15.2C30.8833 15.85 32.3333 15.9667 33.6667 15.7C34.7 15.5 35.6667 16.2667 35.6667 17.3333Z" fill="#0A0A0A" />
</svg>

const Youtube = ({ ...props }) => <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M29 6.66675H12.3333C7.33333 6.66675 4 10.0001 4 15.0001V25.0001C4 30.0001 7.33333 33.3334 12.3333 33.3334H29C34 33.3334 37.3333 30.0001 37.3333 25.0001V15.0001C37.3333 10.0001 34 6.66675 29 6.66675ZM23.8167 21.7167L19.7 24.1834C18.0333 25.1834 16.6666 24.4168 16.6666 22.4668V17.5168C16.6666 15.5668 18.0333 14.8001 19.7 15.8001L23.8167 18.2667C25.4 19.2334 25.4 20.7667 23.8167 21.7167Z" fill="#0A0A0A" />
</svg>

const BtnPrev = ({ ...props }) => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M14.9999 36.6667H24.9999C33.3333 36.6667 36.6666 33.3333 36.6666 25V15C36.6666 6.66668 33.3333 3.33334 24.9999 3.33334H14.9999C6.66659 3.33334 3.33325 6.66668 3.33325 15V25C3.33325 33.3333 6.66659 36.6667 14.9999 36.6667Z" stroke="#F9FAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M22.1001 25.8833L16.2334 20L22.1001 14.1167" stroke="#F9FAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const BtnNext = ({ ...props }) => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M14.9999 36.6667H24.9999C33.3333 36.6667 36.6666 33.3333 36.6666 25V15C36.6666 6.66668 33.3333 3.33334 24.9999 3.33334H14.9999C6.66659 3.33334 3.33325 6.66668 3.33325 15V25C3.33325 33.3333 6.66659 36.6667 14.9999 36.6667Z" stroke="#F9FAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M17.8999 25.8833L23.7666 20L17.8999 14.1167" stroke="#F9FAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>




const LightIcons = ({ iconName, ...props }: IThemeIcon) => {
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

    default:
      return null;
  }
}

export default LightIcons;