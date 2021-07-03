import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, } from 'react-native';
import { Icon, } from '@ui-kitten/components';
import { Container, TopBar, } from './styles';
import { Colors } from '../colors';
import { useNavigation } from '@react-navigation/native';

interface TittleTopBarProps {
  name: string;
}

function TittleTopBar({ name, }: TittleTopBarProps) {

  const navigation = useNavigation();

  //INSTALATIONS --   "@ui-kitten/components": "^5.0.0",
  //INSTALATIONS --   "@react-navigation/bottom-tabs": "^5.1.1",
  //INSTALATIONS --   "@react-navigation/native": "^5.0.9",
  //INSTALATIONS --   "@react-navigation/stack": "^5.1.1",
  //INSTALATIONS --   "typescript": "^3.6.3"
  //INSTALATIONS --   "styled-components": "^5.3.0"



  //  USE 1 - TO USE THE COMPONENT FIRST YOU IMPORT 
  //  USE 2 - import TittleTopBar from '../../components/TittleTopBar'
  //  USE 3 - import <TittleTopBar name="Criar nova morada" />


  return (
    <Container>

      <TopBar>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()

          }}>
          <Icon style={styles.iconClose} fill={Colors.DARKGRAY} name='close' />

        </TouchableOpacity>

        <View style={styles.widthTopIcon}  >
          <Icon style={styles.iconClose} fill={Colors.DARKGRAY} name='home-outline' />

          <Text style={styles.textTopBar}  >{name}</Text>
        </View>

        <View></View>

      </TopBar>
    </Container>
  );
};


const styles = StyleSheet.create({

  iconClose: {
    height: 30,
    width: 30,
  },
  textTopBar: {
    fontSize: 22,
    color: Colors.DARKGRAY,
    textAlign: 'center',
    marginLeft: 6
  },
  widthTopIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default TittleTopBar;
