import { ReactNode, ComponentType } from "react";

interface ILazyComponent {
  title: string;
  component: ComponentType<any>;
}

interface IRouterLink {
  [key: string]: string;
}

interface IComponentProps {
  children: ReactNode;
}

interface IIcon {
  themeMode: string,
  iconName: string,
  className?: string;
}

interface IThemeIcon {
  iconName: string
}

interface IThemeContext {
  theme: string,
  toggleTheme: (newTheme: string) => void,
}

export type {
  ILazyComponent,
  IRouterLink,
  IComponentProps,
  IThemeIcon,
  IIcon,
  IThemeContext,
}