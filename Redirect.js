import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const { width } = Dimensions.get('window')
import NavigatorApp from './components/NavigatorApp';
import Home from "./components/Home"



const ToHome = (props) => {
    if (props.isAuthenticated) {
        return (
            <SafeAreaProvider>
                <View style={ {
        flex: 1,
        width: width,
    }}>
                    <Home />
                </View>
            </SafeAreaProvider>
        )
    }
    else {
        return (
            <View style={ {
                flex: 1,
                width: width,
            }}>
                <NavigatorApp />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.reducer.isAuthenticated,
});

export default connect(mapStateToProps)(ToHome);