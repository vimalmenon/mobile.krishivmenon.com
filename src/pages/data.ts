import { IPage, Pages as PageType } from '@types';

import { Gallery } from './Gallery';
import { Home } from './Home';
import { Login } from './Login';
import { NoteDetail } from './NoteDetail';
import { Notes } from './Notes';

export const LoginPage: IPage = {
  name: 'Login',
  component: Login,
  icon: 'login',
  title: 'Login',
  showHeader: false,
  showDrawer: false,
  showInDrawer: false,
  headerLeftIcon: undefined,
};

export const HomePage: IPage = {
  name: 'Home',
  component: Home,
  icon: 'home',
  title: 'Home',
  showHeader: true,
  showDrawer: true,
  showInDrawer: true,
  headerLeftIcon: 'Menu',
};

export const GalleryPage: IPage = {
  name: 'Gallery',
  component: Gallery,
  icon: 'view-gallery',
  title: 'Gallery',
  showHeader: true,
  showDrawer: true,
  showInDrawer: true,
  headerLeftIcon: 'Menu',
};

export const NotesPage: IPage = {
  name: 'Notes',
  component: Notes,
  icon: 'note',
  title: 'Notes',
  showHeader: true,
  showDrawer: true,
  showInDrawer: true,
  headerLeftIcon: 'Menu',
};

export const NoteDetailPage: IPage = {
  name: 'NoteDetail',
  component: NoteDetail,
  icon: 'note',
  title: 'Note',
  showHeader: true,
  showDrawer: false,
  showInDrawer: false,
  headerLeftIcon: 'Back',
};

export const Pages = [LoginPage, HomePage, GalleryPage, NotesPage, NoteDetailPage];

export const PageMap: Record<PageType, IPage> = {
  Login: LoginPage,
  Home: HomePage,
  Gallery: GalleryPage,
  Notes: NotesPage,
  NoteDetail: NoteDetailPage,
};
