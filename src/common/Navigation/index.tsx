import { View } from 'react-native';
import { useAppContext } from "../../context";
import { useNavigation } from '@react-navigation/native';
import { NavigationProps, Pages } from "../../types";
import { PaperProvider, Button } from 'react-native-paper';

export const Navigation: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const { setCurrentPage } = useAppContext();
  const onNavigate = (value: Pages) => {
    setCurrentPage(value)
    navigation.navigate(value);
  }
  return (
    <View>
      <Button mode="contained" onPress={() => onNavigate("Home")}>
        Home
      </Button>
      <Button mode="contained" onPress={() => onNavigate("Gallery")}>
        Gallery
      </Button>
    </View>
  )
}
