import { LoadingNotesType } from '@types';

export const loadingNotesMessage = (loadingNotes: LoadingNotesType): string => {
  switch (loadingNotes) {
    case 'DeletingNote':
      return 'Deleting Note';
    case 'LoadingNotes':
      return 'Loading Notes';
    case 'SavingNote':
      return 'Saving Note';
    default:
      return '';
  }
};
