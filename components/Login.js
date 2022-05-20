import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ErrorMessage, Formik } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup'
import Input from '../others/TextInput';
import Buttons from '../others/Buttons';
import { SocialIcon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { LOGIN_SUCCESS } from '../redux/action/actiontype';
import Toast from 'react-native-simple-toast';



const loginSchema=yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Email is a required field"),
   password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
})
 function Login(props) {
  
  const handleSubmit=(values)=>{
    console.log(values,'printinig')
  }
  const navigation = useNavigation();
  
  const submitform = async ({
    email,
    password,
  }) => {
    
    const config = {
      headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
      }
  };
  
  const body = JSON.stringify({email,password});
console.log(body);
  try {
    const res=await axios.post('https://thenightmarketer-hiring.herokuapp.com/user/login', body, config)
    props.loginsuccess(res.data);
    Toast.show("Succesfull Login")
  } catch (error) {
  
    Toast.show("invalid email or password")
  }
  }


  return (
    <View style={{flex:1,padding:10,}}>
    <Formik
     validationSchema={loginSchema}
     initialValues={{ email: '',password:'' }}
     onSubmit={submitform}
     style={{backgroundColor:"black"}}
   >
     {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
    <View style={styles.container}>

        <Text style={styles.title}>
              Welcome Back!
        </Text>

        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.


        </Text>
        <Input placeholder="Email,phone or username" 
          values={values.email}
          autoCapitalize="none"
            autoCorrect={false}
          onChangeText={handleChange('email')}
          error={touched.email && errors.email}
        />
        <Input placeholder="Password" error={touched.password && errors.password }
          values={values.password}
          autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          onChangeText={handleChange('password')}
        />

         <View style={styles.logincon}>
            <View style={styles.loginbutton}>
              <TouchableOpacity

                onPress={()=>{navigation.navigate("Register")}}
              >
                <Text style={styles.logintext}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
         </View>

        <Buttons  title='Sign in' onPress={handleSubmit} obj={{
  bgcolor: 'black',
  color: 'white',
  topleftradius: 10,
  bottomleftradius: 10,
  toprightradius: 10,
  bottomrightradius: 10,
  width: "90%",
  marginVertical:20
        }
} />
        </View>
        )}
        
     </Formik>
     {/* </View> */}

        <View style={styles.line}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
              <View>
                <Text style={{ width: 50, textAlign: 'center' }}>OR</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            </View>
        </View>

        <View
            style={{
              flexDirection: 'column',
              // justifyContent: 'center',
              alignItems:"center",
            }}>
            <View style={{  flexDirection: 'row' }}>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="google"
                  onPress={() => {
                    alert('google');
                  }}
                /> 
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="facebook"
                  onPress={() => {
                    alert('facebook');
                  }}
                /> 
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="twitter"
                  onPress={() => {
                    alert('apple');
                  }}
                /> 
              </View>
            </View>
        </View>

        <View style={{  flexDirection: 'row', justifyContent:"space-evenly", }}>  
              <View >
                <Text style={styles.Regcon}>Don't have an account ?</Text>
                </View>
                <View >
                <TouchableOpacity
                onPress={()=>{navigation.navigate("Register")}}
                >
                <Text style={styles.Regtext}>Register now</Text>
                </TouchableOpacity>
                </View>
              
            
          </View>

         </View>

         
         
         
     
    
  );
}

const styles = StyleSheet.create({
  container: {
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 70,
  },
  description: {
    textAlign: 'center',
    fontSize: 12,
    color: 'grey',
    marginBottom: 20,

    marginTop: 10,
  },
  logintext: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  loginbutton: {
    alignItems:"flex-end"
  },
  logincon: {
    marginRight:15
  },
  textcon: {
    fontSize: 15,
    color: 'grey',
    
  },
  logintext: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  signupcon: {
    marginBottom:250
  },
  Regtext: {
    fontWeight: 'bold',
    fontSize: 15,
    // marginLeft:80,
    
  },
  Regbutton:{

  }
})

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})

const mapDispatchToProps = (dispatch) => {
  return {

    loginsuccess: (res) => dispatch({  type: LOGIN_SUCCESS,
      payload: res.data }),
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);