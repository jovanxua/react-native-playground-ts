import { createDrawerNavigator } from "react-navigation";
import AnimatedBackgroundScreen from './screens/animated-background';

const DrawerNavigator = createDrawerNavigator({
  AnimatedBackground: AnimatedBackgroundScreen,
});

export default DrawerNavigator;
