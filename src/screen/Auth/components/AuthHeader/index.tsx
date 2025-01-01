import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from '../../styles.ts';
import {useNavigation} from '@react-navigation/core';
import {ScreenNames} from '../../../../constants/screenNames.ts';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigation} from '../../../../navigation/types';

interface IProps {
  activeTab: 'login' | 'registration';
}

export default function AuthHeader({activeTab}: IProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigation>>();

  const navigateToLogin = () => {
    navigation.navigate(ScreenNames.LOGIN_PAGE);
  };
  const navigateToRegistration = () => {
    navigation.navigate(ScreenNames.REGISTRATION_PAGE);
  };

  return (
    <>
      <View style={styles.topWrapper}>
        <Text style={styles.title}>Welcome to ToDo React Native</Text>
        <Text style={styles.description}>
          This is a test app for learning React Native
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={navigateToLogin}
          style={activeTab === 'login' ? styles.activeTab : styles.disabledTab}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateToRegistration}
          style={
            activeTab === 'registration' ? styles.activeTab : styles.disabledTab
          }>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
