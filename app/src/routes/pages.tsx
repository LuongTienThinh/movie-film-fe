import React from "react";
import { routerLink } from "utils";

export const pages = [
  {
    path: routerLink('HomePage'),
    component: React.lazy(() => import('./home')),
    title: 'Home page',
  },
  {
    path: routerLink('SeriesPage'),
    component: React.lazy(() => import('./anime-series')),
    title: 'Series page',
  },
  {
    path: routerLink('GenresPage'),
    component: React.lazy(() => import('./genre')),
    title: 'Genres page',
  },
]