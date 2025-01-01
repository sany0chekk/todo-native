import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles.ts';
import {HidePassIcon, ViewPassIcon} from '../../../assets/icons';
import AuthLayout from '../components/AuthLayout';
import AuthHeader from '../components/AuthHeader';
import {Formik, FormikValues} from 'formik';
import {RegistrationSchema} from '../utils/validation.ts';

export default function RegistrationPage() {
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);

  return (
    <AuthLayout>
      <AuthHeader activeTab={'registration'} />
      <Formik
        initialValues={{email: '', password: '', confirmPassword: ''}}
        validationSchema={RegistrationSchema}
        onSubmit={values => console.log('values', values)}>
        {({
          values,
          setFieldValue,
          handleSubmit,
          isValid,
          errors,
        }: FormikValues) => (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                onFocus={() =>
                  setTouched(prevState => ({...prevState, email: true}))
                }
                placeholder={'Email'}
                style={styles.input}
                placeholderTextColor={'#838383'}
                value={values.email}
                onChangeText={value => setFieldValue('email', value)}
              />
            </View>
            {touched.email && errors.email && (
              <Text style={styles.errorMessage}>{errors.email}</Text>
            )}
            <View style={styles.inputContainer}>
              <TextInput
                onFocus={() =>
                  setTouched(prevState => ({...prevState, password: true}))
                }
                placeholder={'Password'}
                style={styles.input}
                placeholderTextColor={'#838383'}
                value={values.password}
                onChangeText={value => setFieldValue('password', value)}
                secureTextEntry={isPasswordVisible}
              />
              <TouchableOpacity
                style={{width: 20, height: 20}}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                hitSlop={{
                  top: 15,
                  bottom: 15,
                  left: 15,
                  right: 15,
                }}>
                {isPasswordVisible ? <ViewPassIcon /> : <HidePassIcon />}
              </TouchableOpacity>
            </View>
            {touched.password && errors.password && (
              <Text style={styles.errorMessage}>{errors.password}</Text>
            )}
            <View style={styles.inputContainer}>
              <TextInput
                onFocus={() =>
                  setTouched(prevState => ({
                    ...prevState,
                    confirmPassword: true,
                  }))
                }
                placeholder={'Repeat password'}
                style={styles.input}
                placeholderTextColor={'#838383'}
                value={values.confirmPassword}
                onChangeText={value => setFieldValue('confirmPassword', value)}
                secureTextEntry={isPasswordVisible}
              />
              <TouchableOpacity
                style={{width: 20, height: 20}}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                hitSlop={{
                  top: 15,
                  bottom: 15,
                  left: 15,
                  right: 15,
                }}>
                {isPasswordVisible ? <ViewPassIcon /> : <HidePassIcon />}
              </TouchableOpacity>
            </View>
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.errorMessage}>{errors.confirmPassword}</Text>
            )}
            <TouchableOpacity
              style={styles.bottomBtnContainer}
              disabled={
                !isValid ||
                !values.email ||
                !values.password ||
                !values.confirmPassword
              }>
              <Text style={styles.bottomBtn}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </AuthLayout>
  );
}
