import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup'
import Input from '../others/TextInput';
import Buttons from '../others/Buttons';
import { SocialIcon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import axios from "axios"
import { signup } from '../redux/action/authenaction'




const RegSchema=yup.object().shape({
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
    name: yup.string().required().label("name"),
    business_name: yup.string().required().label("business name"),
    phone: yup.string().required().min(10).max(10).label("Phone no."),
})
 function Register({signup}) {

  
  const navigation = useNavigation();
  
  const handleSubmit=(values)=>{
    console.log(values,'printinig')
  }
  
  const submitform = async ({
    phone,
    name,
    business_name,
    email,
    password,
  }) => {
    

    const config = {
      headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
      }
  }

  const body = JSON.stringify({
      name,
      business_name,
       email,
      password,
      phone
  }); 

 console.log(body);
  try {
    const res=await axios.post(`https://thenightmarketer-hiring.herokuapp.com/user/register`, body, config);
    
    navigation.navigate('Login');
  } catch (error) {
    
    navigation.navigate("Login")
  }     

  

  }

  return (
    <Formik
     validationSchema={RegSchema}
     initialValues={{ phone: "",
            name: "",
            business_name: "",
            email: "",
            password: "" }}
     onSubmit={submitform}
   >
     {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
    <View style={styles.container}>

        <Text style={styles.title}>
              Sign Up!
        </Text>

        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.


        </Text>
        <Input placeholder="Name" 
          values={values.name}
          autoCapitalize="none"
            autoCorrect={false}
          onChangeText={handleChange('name')}
          error={touched.name && errors.name}
        />
        <Input placeholder="Business name" 
          values={values.business_name}
          autoCapitalize="none"
            autoCorrect={false}
          onChangeText={handleChange('business_name')}
          error={touched.business_name && errors.business_name}
        />
        <Input placeholder="Phone" 
          values={values.phone}
          keyboardType="numeric"
          onChangeText={handleChange('phone')}
          error={touched.phone && errors.phone}
        />
        <Input placeholder="Email" 
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
            secureTextEntry
          onChangeText={handleChange('password')}
        />

        <Buttons  title='Register' onPress={handleSubmit} obj={ {
  bgcolor: 'black',
  color: 'white',
  topleftradius: 10,
  bottomleftradius: 10,
  toprightradius: 10,
  bottomrightradius: 10,
  width: "90%",
  marginVertical:20
}} />

         <View style={{  flexDirection: 'row', justifyContent:"space-around",marginBottom:234 ,}}>
         
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.Regcon}>Already have an account? </Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('Login')}
                >
                <Text style={styles.Regtext}>Login</Text>
                </TouchableOpacity>
              </View>
        </View> 

         </View>

         
         
         
     )}
     </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,

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
    color: 'black',
    marginBottom: 20,

    marginTop: 10,
  },
  logintext: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  loginbutton: {
    marginLeft: 200,
  },
  logincon: {
    flexDirection: 'row',
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
  Regcon:{
    color:"grey"
  }
})

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps, { signup })(Register);