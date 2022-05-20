import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Intro from './components/Intro';
import Login from './components/Login';
import NavigatorApp from './components/NavigatorApp';
import Register from './components/Register'
import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import store from './redux/store';
import AuthCheck from "./Authentication"

export default function App() {
  return (
    <Provider  store={store}>
    <View style={styles.container}>
      <AuthCheck/>
      {/* <StatusBar style="auto" /> */}
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
