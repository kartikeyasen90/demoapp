import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Button ({ onPress, title, obj }) {
    return (
    <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer,
    {
      backgroundColor:obj.bgcolor,
        borderBottomRightRadius: obj.bottomrightradius,
        borderTopRightRadius: obj.toprightradius,
        borderBottomLeftRadius: obj.bottomleftradius,
        borderTopLeftRadius: obj.topleftradius,
        width: obj.width,
        marginVertical:obj.marginVertical
      }]}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
    }

  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "black",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,

    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });