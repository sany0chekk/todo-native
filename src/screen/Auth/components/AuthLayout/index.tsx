import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from '../../styles.ts';
import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export default function AuthLayout({children}: IProps) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.mainWrapper}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.select({android: 20, ios: 100})}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          {children}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
