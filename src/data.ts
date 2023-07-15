import { IApi, IGenericReturn } from '@types';

export const ClientId = process.env.EXPO_PUBLIC_AWS_COGNITO_CLIENT_ID || '';
export const AuthUrl = process.env.EXPO_PUBLIC_AWS_AUTH_URL;
export const ClientSecret = process.env.EXPO_PUBLIC_AWS_COGNITO_CLIENT_SECRET || '';
export const ApiUrl = process.env.EXPO_PUBLIC_API_URL || '';
export const ApiVersion = process.env.EXPO_PUBLIC_API_VERSION || '';

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

export const apis = {
  getNotes: function (): IApi {
    const url = Apis.Notes;
    return {
      baseURL: getBaseUrl(),
      url,
      method: 'GET',
    };
  },
};
