import * as Yup from 'yup';

export const RegistrationSchema = () =>
  Yup.object({
    email: Yup.string().email('Invalid Email').required('Email is empty'),
    password: Yup.string()
      .matches(new RegExp(/^.{8,100}$/), {
        message: 'Password mast be mor then 8 symbols',
      })
      .required('Password is empty'),
    confirmPassword: Yup.string()
      .nullable()
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

export const LoginSchema = () =>
  Yup.object({
    email: Yup.string().email('Invalid Email').required('Email is empty'),
    password: Yup.string()
      .matches(new RegExp(/^.{8,100}$/), {
        message: 'Password mast be mor then 8 symbols',
      })
      .required('Password is empty'),
  });
