import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles.ts';
import {HidePassIcon, ViewPassIcon} from '../../../assets/icons';
import AuthLayout from '../components/AuthLayout';
import AuthHeader from '../components/AuthHeader';
import {Formik, FormikValues} from 'formik';
import {LoginSchema} from '../utils/validation.ts';

export default function LoginPage() {
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <AuthLayout>
      <AuthHeader activeTab={'login'} />
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={LoginSchema}
        onSubmit={value => console.log('value', value)}>
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
                onChangeText={value => {
                  setFieldValue('email', value);
                }}
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
            <TouchableOpacity
              style={styles.bottomBtnContainer}
              disabled={!isValid || !values.email || !values.password}
              onPress={handleSubmit}>
              <Text style={styles.bottomBtn}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </AuthLayout>
  );
}
