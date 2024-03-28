import React from "react";
import { routerLink } from "utils";

export const pages = [
  {
    path: routerLink('Home'),
    component: React.lazy(() => import('./home')),
    title: 'Home page',
  },
  {
    path: routerLink('Movies'),
    component: React.lazy(() => import('./anime-series')),
    title: 'Movie page',
  }
]