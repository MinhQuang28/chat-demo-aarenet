import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { List, Friends } from "screens";
import Icons from '../themes/Icons';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="List"
        component={List}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => {
            return <View>
              {Icons.Icons({ name: focused ? 'chat' : 'chatGrey', width: 24, height: 24 })}
            </View>
          }
        }}
      />
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarIcon: ({ focused }) => {
            return <View>
              {Icons.Icons({ name: focused ? 'contacts' : 'contactsGrey', width: 24, height: 24 })}
            </View>
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;