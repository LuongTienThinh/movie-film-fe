import { ReactNode, ComponentType, ReactElement } from 'react';
import Slider from 'react-slick';

export interface ILazyComponent {
  title?: string;
  component: ComponentType<any>;
}

export interface IRouterLink {
  [key: string]: string;
}

export interface IComponentProps {
  children: ReactNode;
}

export interface IAssetImage {
  [key: string]: string;
}

export interface IContent {
  left?: ReactElement<any, any> | undefined;
  right?: ReactElement<any, any> | undefined;
  leftWidth?: Number | undefined;
  rightWidth?: Number | undefined;
  submitBtn?: IButton;
}

export interface ITabSetting {
  iconName?: string | undefined;
  title?: string | '';
  content?: IContent;
  onClick?: () => void;
}

export interface IIcon {
  themeMode: string;
  iconName: string;
  className?: string;
}

export interface IThemeIcon {
  iconName: string;
}

export interface IThemeContext {
  theme: string;
  toggleTheme: (newTheme: string) => void;
}

export interface IAuthContext {
  user: Object;
  isAuth: boolean;
  setIsAuth: (newState: boolean) => void;
}

export type SliderType = typeof Slider;

export interface IFilm {
  label: string;
  [key: string]: any;
}

export interface IRanking {
  listFilm?: Array<IFilm>;
}

export interface ITopFilm extends IFilm {
  rank: number | undefined;
}

export interface IListFilter {
  data: Array<IFilm>;
  listFilter: Array<IFilter>;
}

export interface IFilter {
  data: Array<IFilm>;
  options: Array<IFilterItem>;
  title?: string;
  [key: string]: any;
}

export interface IFilterItem {
  label: string;
  value: string;
}

export interface ISideBar {
  leftSide?: ISideBarItem | undefined;
  rightSide?: ISideBarItem | undefined;
}

export interface ISideBarItem {
  header?: IHeader | undefined;
  width?: number | undefined;
  content?: ReactElement<any, any> | undefined;
}

export interface IHeader {
  title?: string | undefined;
  btnMore?: boolean | undefined;
  titleWidth?: number | undefined;
  btnMoreWidth?: number | undefined;
}

export interface IPage {
  page: number | 1;
  perPage?: number | 0;
}

export interface IPagination {
  perPage?: number | undefined;
  pageIndex?: number | undefined;
  showGoToFirst?: boolean | undefined;
  showGoToLast?: boolean | undefined;
  showPrev?: boolean | undefined;
  showNext?: boolean | undefined;
  totalItem?: number | undefined;
  sibling?: number | undefined;
  onChange?: (page: number) => void;
}

export interface IDataHook {
  title?: string | undefined;
  subHeader?: IHeader | undefined;
  filters?: IListFilter | undefined;
  sideBar?: ISideBar | undefined;
  data: Array<IFilm>;
  setData: () => void | undefined;
  pagination?: ReactElement<any, any> | undefined;
}

export interface IButton {
  leftIcon?: ReactElement<any, any> | undefined;
  btnName?: string | undefined;
  linkTo?: string | undefined;
  rightIcon?: ReactElement<any, any> | undefined;
  className?: string | undefined;
  onClick?: () => void;
  [key: string]: any;
}

export interface IInput {
  placeholder?: string | 'Nhập giá trị';
  className?: string | undefined;
  type: string | undefined;
  label?: string | undefined;
  name: string | undefined;
  [key: string]: any;
}

export interface IConfirmBtns {
  cancelBtn?: IButton;
  continueBtn?: IButton;
}

export interface IAuthHook {
  title?: string | undefined;
  content?: ReactElement<any, any> | undefined;
  otherBtns?: ReactElement<any, any> | undefined;
  confirmBtns?: IConfirmBtns | undefined;
}
