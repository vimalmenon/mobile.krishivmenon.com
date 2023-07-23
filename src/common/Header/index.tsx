import { useNavigationHelper, useDrawerHelper } from '@context';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';

import { Profile } from './Profile';

export const Header: React.FC = () => {
  const { currentPage } = useNavigationHelper();
  if (currentPage.pageType === 'Common') {
    return <CommonHeader />;
  }
  if (currentPage.pageType === 'Note') {
    return <NoteHeader />;
  }
  return null;
};

const CommonHeader: React.FC = () => {
  const { currentPage } = useNavigationHelper();
  const { onToggle } = useDrawerHelper();
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={onToggle} />
      <Appbar.Content title={currentPage.title} />
      <Profile />
    </Appbar.Header>
  );
};

const NoteHeader: React.FC = () => {
  const { currentPage } = useNavigationHelper();
  const { dispatch } = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => dispatch(StackActions.pop(1))} />

      <Appbar.Content title={currentPage.title} />
    </Appbar.Header>
  );
};
