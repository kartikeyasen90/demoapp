import React, { useEffect } from 'react'
import { StyleSheet,  View } from 'react-native';
import { checkAuthenticated,load_user } from './redux/action/authenaction';
import { connect } from 'react-redux';

import ToHome from './Redirect';

const AuthCheck = (props) => {

    useEffect(() => {
        const fetchData = () => {
            try {
                props.checkAuthenticated();
            } catch (err) {
            }
        }
        fetchData();
    }, []);

    return (
        <View style={{flex:1}}>
            <ToHome />
        </View>
    )
}

export default connect(null, { checkAuthenticated, load_user })(AuthCheck);