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
  pageType: undefined,
  showInDrawer: false,
  showDrawer: false,
};

export const HomePage: IPage = {
  name: 'Home',
  component: Home,
  icon: 'home',
  title: 'Home',
  pageType: 'Common',
  showInDrawer: true,
  showDrawer: true,
};

export const GalleryPage: IPage = {
  name: 'Gallery',
  component: Gallery,
  icon: 'view-gallery',
  title: 'Gallery',
  pageType: 'Common',
  showInDrawer: true,
  showDrawer: true,
};

export const NotesPage: IPage = {
  name: 'Notes',
  component: Notes,
  icon: 'note',
  title: 'Notes',
  pageType: 'Common',
  showInDrawer: true,
  showDrawer: true,
};

export const NoteDetailPage: IPage = {
  name: 'NoteDetail',
  component: NoteDetail,
  icon: 'note',
  title: 'Note',
  pageType: 'Note',
  showInDrawer: false,
  showDrawer: false,
};

export const Pages = [LoginPage, HomePage, GalleryPage, NotesPage, NoteDetailPage];

export const PageMap: Record<PageType, IPage> = {
  Login: LoginPage,
  Home: HomePage,
  Gallery: GalleryPage,
  Notes: NotesPage,
  NoteDetail: NoteDetailPage,
};
