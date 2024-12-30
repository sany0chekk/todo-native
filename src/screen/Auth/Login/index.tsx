import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles.ts';

interface IInputValues {
  email: string;
  password: string;
  errorEmail: string | null;
  errorPassword: string | null;
}

export default function LoginPage() {
  const [inputValues, setInputValues] = useState<IInputValues>({
    email: '',
    password: '',
    errorEmail: null,
    errorPassword: null,
  });

  const handleChangeInput = ({
    key,
    value,
  }: {
    key: 'email' | 'password' | 'errorEmail' | 'errorPassword';
    value: string | null;
  }) => {
    setInputValues(prevInput => ({...prevInput, [key]: value}));
  };

  const handleCheckEmail = () => {
    const emailValidator = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    if (!emailValidator.test(inputValues.email)) {
      handleChangeInput({key: 'errorEmail', value: 'Not valid email!'});
    } else {
      handleChangeInput({key: 'errorEmail', value: null});
    }
  };

  const handleCheckPassword = () => {
    if (inputValues.password.length < 8) {
      handleChangeInput({
        key: 'errorPassword',
        value: 'Password must be at least 8 characters',
      });
    } else {
      handleChangeInput({key: 'errorPassword', value: null});
    }
  };

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.topWrapper}>
        <Text style={styles.title}>Welcome to ToDo React Native</Text>
        <Text style={styles.description}>
          This is a test app for learning React Native
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerBtn}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={'Email'}
            style={styles.input}
            placeholderTextColor={'#838383'}
            onBlur={() => handleCheckEmail()}
            value={inputValues.email}
            onChangeText={text =>
              handleChangeInput({key: 'email', value: text})
            }
          />
        </View>
        {inputValues.errorEmail && (
          <Text style={styles.errorMessage}>{inputValues.errorEmail}</Text>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={'Password'}
            style={styles.input}
            placeholderTextColor={'#838383'}
            onBlur={() => handleCheckPassword()}
            value={inputValues.password}
            onChangeText={text =>
              handleChangeInput({key: 'password', value: text})
            }
            secureTextEntry={true}
          />
        </View>
        {inputValues.errorPassword && (
          <Text style={styles.errorMessage}>{inputValues.errorPassword}</Text>
        )}
        <TouchableOpacity style={styles.bottomBtnContainer}>
          <Text style={styles.bottomBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
