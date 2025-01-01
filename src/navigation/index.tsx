import {NavigationContainer} from '@react-navigation/native';
import LoginPage from '../screen/Auth/Login';
import RegistrationPage from '../screen/Auth/Registration';
import {ScreenNames} from '../constants/screenNames.ts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackNavigation} from './types';

const Stack = createNativeStackNavigator<RootStackNavigation>();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames.LOGIN_PAGE}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreenNames.LOGIN_PAGE} component={LoginPage} />
        <Stack.Screen
          name={ScreenNames.REGISTRATION_PAGE}
          component={RegistrationPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
