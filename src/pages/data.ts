import { IPage } from '@types';

import { Gallery } from './Gallery';
import { Home } from './Home';
import { Login } from './Login';
import { Notes } from './Notes';

export const LoginPage: IPage = {
  name: 'Login',
  component: Login,
  icon: 'login',
};

export const HomePage: IPage = {
  name: 'Home',
  component: Home,
  icon: 'home',
};

export const NotesPage: IPage = {
  name: 'Notes',
  component: Notes,
  icon: 'note',
};

export const GalleryPage: IPage = {
  name: 'Gallery',
  component: Gallery,
  icon: 'view-gallery',
};

export const PagesAuthorized = [HomePage, GalleryPage, NotesPage];

export const PagesUnauthorized = [LoginPage];
