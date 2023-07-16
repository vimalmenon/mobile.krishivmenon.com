import { IPage, Pages } from '@types';

import { Gallery } from './Gallery';
import { Home } from './Home';
import { Login } from './Login';
import { Notes } from './Notes';

export const LoginPage: IPage = {
  name: 'Login',
  component: Login,
  icon: 'login',
  title: 'Login',
};

export const HomePage: IPage = {
  name: 'Home',
  component: Home,
  icon: 'home',
  title: 'Home',
};

export const NotesPage: IPage = {
  name: 'Notes',
  component: Notes,
  icon: 'note',
  title: 'Notes',
};

export const GalleryPage: IPage = {
  name: 'Gallery',
  component: Gallery,
  icon: 'view-gallery',
  title: 'Gallery',
};

export const PagesAuthorized = [HomePage, GalleryPage, NotesPage];

export const PagesUnauthorized = [LoginPage];

export const PageMap: Record<Pages, IPage> = {
  Login: LoginPage,
  Home: HomePage,
  Gallery: GalleryPage,
  Notes: NotesPage,
};
