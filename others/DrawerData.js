import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Drawer,Text} from 'react-native-paper';
import {  DrawerItem} from '@react-navigation/drawer';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Ionicons } from '@expo/vector-icons';

const colored = '#ffffff';
const s1 = 20;
const s2 = 18;


export function DrawerData(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.drawerContainer}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="align-vertical-distribute"
                color={colored}
                size={s1}
              />
              
            )}
            onPress={() => {props.navigation.closeDrawer()}}
            label={() => (<></>)}
            
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MatIcon
                name="category"
                color={colored}
                size={s1}
              />
            )}
            onPress={() => {props.navigation.navigate("Category") }}
            label={() => (<Text style={{ color: colored, fontSize: s2 }}>Category</Text>)}
            
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="account"
                color={colored}
                size={s1}
              />
            )}
            onPress={() => {props.navigation.navigate("About") }}
            label={() => (<Text style={{ color: colored, fontSize: s2 }}>About</Text>)}
            
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="android-messages"
                color={colored}
                size={s1}
              />
            )}
            onPress={() => {props.navigation.navigate("Messages")  }}
            label={() => (<Text style={{ color: colored, fontSize: s2 }}>Messages</Text>)}
            
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MatIcon
                name="settings"
                color={colored}
                size={s1}
              />
            )}
            onPress={() => { props.navigation.navigate("Settings") }}
            label={() => (<Text style={{ color: colored, fontSize: s2 }}>Settings</Text>)}
            
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="arrow-right-circle"
                color={colored}
                size={s1}
              />
            )}
            onPress={() => { props.navigation.navigate("Roles") }}
            label={() => (<Text style={{ color: colored, fontSize: s2 }}>Roles</Text>)}  
          />
        </Drawer.Section>
        </View>

      <Drawer.Section style={styles.bottomDrawer}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="help"
              color={colored}
              size={s1}
            />
          )}
          onPress={() => { props.navigation.navigate("Help") }}
          label={() => (<Text style={{ color: colored, fontSize: s2 }}>Help</Text>)} 
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 45,
    paddingBottom: 35,
    borderBottomColor: colored,

    borderBottomWidth: 1
  },
  bottomDrawer: {
    flex: 0.6,

  },
});