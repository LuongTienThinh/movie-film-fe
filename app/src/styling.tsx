import React from "react";
import { IComponentProps } from "interfaces";

import('./assets/styles/index.less');


const Component: React.FC<IComponentProps> = ({ children }) => <>{ children }</>

export default Component;