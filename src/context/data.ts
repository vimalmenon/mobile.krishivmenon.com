import { IApi, IGenericReturn, INotes } from '@types';

export const ClientId = process.env.EXPO_PUBLIC_AWS_COGNITO_CLIENT_ID || '';
export const ClientSecret = process.env.EXPO_PUBLIC_AWS_COGNITO_CLIENT_SECRET || '';
export const ApiUrl = process.env.EXPO_PUBLIC_API_URL || '';
export const ApiVersion = process.env.EXPO_PUBLIC_API_VERSION || '';
import { IApis } from './types';

export const getBaseUrl: IGenericReturn<string> = () => {
  return `${ApiUrl}${ApiVersion}`;
};
export const Apis = {
  S3Drive: 'drive/{folder}',
  S3FileConvert: 'convert',
  S3DriveFile: 'drive/{folder}/{fileName}',
  S3DriveUpload: '{folder}',
  S3MoveFiles: '/drive/directory/{folder}',
  Notes: 'notes',
  Note: 'notes/{id}',
  Folders: 'folders',
  Folder: 'folders/{id}',
  FolderParent: 'folders/parent/{id}',
  FolderData: 'folders/folder_data/{id}',
  Me: '/me',
};

export const apis: IApis = {
  getNotes: function (): IApi {
    const url = Apis.Notes;
    return {
      baseURL: getBaseUrl(),
      url,
      method: 'GET',
    };
  },
  getProfile: function (): IApi {
    const url = Apis.Me;
    return {
      baseURL: getBaseUrl(),
      url,
      method: 'GET',
    };
  },
  addNote: function (data: INotes): IApi<INotes> {
    const url = Apis.Notes;
    return {
      baseURL: getBaseUrl(),
      url,
      method: 'POST',
      data,
    };
  },
  updateNote: function (data: INotes): IApi<INotes> {
    const url = Apis.Note.replace('{id}', data.id || '');
    return {
      baseURL: getBaseUrl(),
      url,
      method: 'PUT',
      data,
    };
  },
  deleteNote: function (id: string): IApi {
    const url = Apis.Note.replace('{id}', id);
    return {
      baseURL: getBaseUrl(),
      url,
      method: 'DELETE',
      params: {
        code: '3',
      },
    };
  },
};
