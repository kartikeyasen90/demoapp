import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../others/button';
import CarouselCards from '../others/CarouselCards';


export default function Intro({ navigation }) {

  

  

    return (
        <View style={styles.container}>
           <CarouselCards/>
          <View style={styles.buttoncontainer}>
            <View>
              <Button title='Sign in' onPress={()=>navigation.navigate('Login')} obj={{bgcolor: 'black',
              color: 'white',
              topleftradius: 10,
              bottomleftradius: 10,
              toprightradius: 0,
              bottomrightradius: 0,
              }}  />
            </View>
            <View>
              <Button title='Register' onPress={()=>navigation.navigate('Register')} obj={{bgcolor: 'grey',
              color: 'white',
              topleftradius: 0,
              bottomleftradius: 0,
              toprightradius: 10,
              bottomrightradius: 10,
            }} />
            </View>
          </View>
        </View>
      )
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    
    buttoncontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 50,
      paddingBottom:50,
      
    },
  });