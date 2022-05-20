import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const gettoken = async (key) => {
  return await AsyncStorage.getItem(`@${key}`)
}
export const settoken = async (key,value) => {  
    try {
      await AsyncStorage.setItem(`@${key}`, value)
    
    } catch (e) {
        return e;
    }
  }
export const removetoken = async (key) => {
  
    try {
      await AsyncStorage.removeItem(`@${key}`)
    } catch (e) {
        return e;
    }
  }