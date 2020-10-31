import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createAPI } from './src/api';
import Gallery from './src/components/Gallery';
import { reducer } from './src/reducer/reducer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FullPhotoScreen from './src/components/FullPhotoScreen';

const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(createAPI())),
);

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Gallery"
        screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Photo" component={FullPhotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
