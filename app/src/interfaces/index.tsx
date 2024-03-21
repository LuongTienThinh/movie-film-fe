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

export type {
  ILazyComponent,
  IRouterLink,
  IComponentProps
}