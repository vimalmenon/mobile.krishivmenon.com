import { useAppContext, useDrawerHelper } from '@context';
import { PageMap } from '@pages';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';

import { Profile } from './Profile';

export const Header: React.FC = () => {
  const { currentPage } = useAppContext();
  const { onToggle } = useDrawerHelper();
  const { dispatch } = useNavigation();
  const selectedPage = PageMap[currentPage];
  if (selectedPage.showHeader) {
    return (
      <Appbar.Header>
        {selectedPage.headerLeftIcon === 'Menu' && <Appbar.Action icon="menu" onPress={onToggle} />}
        {selectedPage.headerLeftIcon === 'Back' && (
          <Appbar.BackAction onPress={() => dispatch(StackActions.pop(1))} />
        )}
        <Appbar.Content title={selectedPage.title} />
        <Profile />
      </Appbar.Header>
    );
  }
  return null;
};
