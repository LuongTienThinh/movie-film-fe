import { ReactNode, ComponentType, ReactElement } from "react";
import { JsxElement } from "typescript";

interface ILazyComponent {
  title?: string;
  component: ComponentType<any>;
}

interface IRouterLink {
  [key: string]: string;
}

interface IComponentProps {
  children: ReactNode;
}

interface IIcon {
  themeMode: string;
  iconName: string;
  className?: string;
}

interface IThemeIcon {
  iconName: string;
}

interface IThemeContext {
  theme: string;
  toggleTheme: (newTheme: string) => void;
}

interface IFilm {
  label: string;
  [key: string]: any;
}

interface ITopFilm extends IFilm {
  rank: number | undefined,
}

interface IListFilter {
  data: Array<IFilm>;
  listFilter: Array<IFilter>;
}

interface IFilter {
  data: Array<IFilm>;
  options: Array<IFilterItem>;
  title: string;
  [key: string]: any;
}

interface IFilterItem {
  label: string;
  value: string;
}

interface ISideBar {
  leftSide: ISideBarItem | undefined;
  rightSide: ISideBarItem | undefined;
}

interface ISideBarItem {
  header?: IHeader | undefined;
  width?: number | undefined,
  content?: ReactElement<any, any> | undefined
}

interface IHeader {
  title?: string | undefined,
  btnMore?: boolean | undefined,
  titleWidth?: number | undefined,
  btnMoreWidth?: number | undefined,
}

interface IDataHook {
  title?: string | undefined;
  subHeader?: IHeader | undefined;
  filters?: IListFilter | undefined;
  sideBar?: ISideBar | undefined;
  data: Array<IFilm>;
  setData: () => void | undefined;
  pagination?: () => void | undefined;
}

export type {
  ILazyComponent,
  IRouterLink,
  IComponentProps,
  IThemeIcon,
  IIcon,
  IThemeContext,
  IFilm,
  ITopFilm,
  IFilter,
  ISideBar,
  ISideBarItem,
  IDataHook,
  IFilterItem,
  IListFilter,
}