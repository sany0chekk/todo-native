import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainWrapper: {
    margin: 20,
    marginTop: 40,
  },
  topWrapper: {
    marginBottom: 50,
    gap: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  description: {
    fontWeight: 'semibold',
    fontSize: 18,
    opacity: 30,
  },
  buttonContainer: {
    backgroundColor: '#fbdede',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
    borderRadius: 20,
    marginBottom: 40,
  },
  loginBtn: {
    alignItems: 'center',
    backgroundColor: '#fdabab',
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  registerBtn: {
    alignItems: 'center',
    padding: 10,
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: Platform.select({
      android: 0,
      ios: 14,
      default: 12,
    }),
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
  },
  input: {
    textAlignVertical: 'center',
  },
  bottomBtnContainer: {
    marginTop: 50,
    backgroundColor: '#d50000',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
  },
  bottomBtn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  errorMessage: {
    color: 'red',
  },
});
