import HomeScreen from "../screens/Home";
import AboutScreen from "../screens/Home";
import BottomTabNavigator from "./Bottom";
import ContactScreen from "../screens/Contact";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bottom" component={BottomTabNavigator} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
