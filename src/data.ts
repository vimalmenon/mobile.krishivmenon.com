import { Home, Gallery, Notes, Login } from '@pages';
import { IPage } from '@types';

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

export const Pages = [LoginPage];

export const ClientId = process.env.EXPO_PUBLIC_AWS_COGNITO_CLIENT_ID || '';
export const AuthUrl = process.env.EXPO_PUBLIC_AWS_AUTH_URL;
export const ClientSecret = process.env.EXPO_PUBLIC_AWS_COGNITO_CLIENT_SECRET || '';
