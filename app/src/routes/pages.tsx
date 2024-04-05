import React from 'react';
import { routerLink } from 'utils';

export const pages = [
  {
    path: routerLink('HomePage'),
    component: React.lazy(() => import('./pages/home')),
    title: 'Home page',
  },
  {
    path: routerLink('SeriesPage'),
    component: React.lazy(() => import('./pages/anime-series')),
    title: 'Series page',
  },
  {
    path: routerLink('GenresPage'),
    component: React.lazy(() => import('./pages/genre')),
    title: 'Genres page',
  },
  {
    path: routerLink('FilmDetail'),
    component: React.lazy(() => import('./pages/film-detail')),
    title: 'Detail page',
  },
  {
    path: routerLink('Episode'),
    component: React.lazy(() => import('./pages/episode')),
    title: 'Episode page',
  },
  {
    path: routerLink('Login'),
    component: React.lazy(() => import('./auth/login')),
    title: 'Login page',
  },
  {
    path: routerLink('SignUp'),
    component: React.lazy(() => import('./auth/sign-up')),
    title: 'Sign up page',
  },
  {
    path: routerLink('ForgotPassword'),
    component: React.lazy(() => import('./auth/forgot-password')),
    title: 'Forgot password page',
  },
  {
    path: routerLink('Profile'),
    component: React.lazy(() => import('./pages/profile')),
    title: 'Profile page',
  },
];
