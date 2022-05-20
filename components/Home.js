import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';


import {Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme} from 'react-native-paper';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme,DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { DrawerData } from '../others/DrawerData';




const Drawer = createDrawerNavigator();

function Category({ navigation }) {
  return (
    <View style={styles.items}>
      <Text>Category</Text>
    </View>
  );
}

function About({ navigation }) {
  return (
    <View style={styles.items}>
      <Text>About</Text>
    </View>
  );
}

function Messages({ navigation }) {
  return (
    <View style={styles.items}>
      <Text>Messages</Text>
    </View>
  );
}

function Settings({ navigation }) {
  return (
    <View style={styles.items}>
      <Text>Settings</Text>
    </View>
  );
}
function Roles({ navigation }) {
  return (
    <View style={styles.items}>
      <Text>Roles</Text>
    </View>
  );
}

function Help({ navigation }) {
  return (
    <View style={styles.items}>
      <Text>Help</Text>
    </View>
  );
}

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const initialLoginState = {
    userName: null,
    userToken: null,
    isLoading: true,
    
  };
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#8A2BE2',
      text: '#ffffff'
    }
  }

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

   const theme = isDarkTheme ? null : CustomDefaultTheme;


  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Drawer.Navigator useLegacyImplementation={true}
          drawerContent={props => <DrawerData {...props} />}
          screenOptions={{
            drawerStyle: {
             backgroundColor: 'lightblue',},
          }}
          initialRouteName="About"
        >
          <Drawer.Screen name="Category" component={Category} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Messages" component={Messages} />
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="Roles" component={Roles} />
          <Drawer.Screen name="Help" component={Help} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

const styles = StyleSheet.create({
    items: {
         flex: 1, 
         alignItems: 'center',
          justifyContent: 'center'
    },})