import { Appbar } from 'react-native-paper';
import { View } from 'react-native';
import { useAppContext } from '../../context';

export const Header: React.FC = () => {
  const onClick = () => {
    console.log("this is called")
  }
  const { currentPage } = useAppContext();
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={onClick} />
        <Appbar.Content title={currentPage} />
        <Appbar.Action icon="magnify" onPress={onClick} />
        <Appbar.Action icon="dots-vertical" onPress={onClick} />
      </Appbar.Header>
    </View>
  );
}