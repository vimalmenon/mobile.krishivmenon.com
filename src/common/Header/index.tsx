import { useNavigationHelper, useDrawerHelper } from '@context';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';

import { Profile } from './Profile';

export const Header: React.FC = () => {
  const { currentPage } = useNavigationHelper();
  const { onToggle } = useDrawerHelper();
  const { dispatch } = useNavigation();
  if (currentPage.showHeader) {
    return (
      <Appbar.Header>
        {currentPage.headerLeftIcon === 'Menu' && <Appbar.Action icon="menu" onPress={onToggle} />}
        {currentPage.headerLeftIcon === 'Back' && (
          <Appbar.BackAction onPress={() => dispatch(StackActions.pop(1))} />
        )}
        <Appbar.Content title={currentPage.title} />
        <Profile />
      </Appbar.Header>
    );
  }
  return null;
};
