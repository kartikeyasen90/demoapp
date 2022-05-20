import React from 'react';
import { TextInput , View, StyleSheet,Text } from 'react-native';

const Input=({placeholder,value,onChangeText,console,error,secureTextEntry})=>{
return(
  <View style={style.inputcontainer}>
    <TextInput value={value} 
    onChangeText={onChangeText}
     placeholder={placeholder}
      style={style.input}
      secureTextEntry={secureTextEntry}
      />
    <Text style={{color:"red",fontSize:13,marginTop:3}}>{error}</Text>
  </View>
)

}
const style=StyleSheet.create({
 inputcontainer:{
    width:"90%" ,
    height:50,
    marginVertical:10,
    marginLeft:20
  },
  input:{
    paddingLeft:10,
    height:50,
    borderWidth:1,
    borderColor:"grey",
    borderRadius:5
  }
})

export default Input
