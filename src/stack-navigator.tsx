import { createStackNavigator } from "react-navigation";
import DrawerNavigator from './drawer-navigator';

const AppNavigator = createStackNavigator(
  {
    Drawer: DrawerNavigator,
  },
  {
    initialRouteName: "Drawer"
  }
);

export default AppNavigator;
