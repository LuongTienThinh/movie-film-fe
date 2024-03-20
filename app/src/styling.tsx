import React, { ReactNode } from "react";
import('./assets/styles/index.less');

interface ComponentProps {
  children: ReactNode;
}

const Component: React.FC<ComponentProps> = ({ children }) => <>{ children }</>

export default Component;