import {Platform, StyleSheet} from 'react-native';
import {fonts} from '../../constants/fonts';

export default StyleSheet.create({
  mainWrapper: {
    margin: 20,
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
  },
  topWrapper: {
    marginBottom: 50,
    gap: 10,
  },
  title: {
    fontFamily: fonts.Inter,
    fontWeight: 'bold',
    fontSize: 24,
  },
  description: {
    fontFamily: fonts.Inter,
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
  activeTab: {
    alignItems: 'center',
    backgroundColor: '#fdabab',
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  disabledTab: {
    alignItems: 'center',
    padding: 10,
    flex: 1,
  },
  inputContainer: {
    height: 50,
    paddingHorizontal: Platform.select({
      android: 21,
      ios: 30,
      default: 20,
    }),
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    fontFamily: fonts.Inter,
    fontWeight: 'semibold',
    textAlignVertical: 'center',
    overflow: 'hidden',
    flex: 1,
  },
  bottomBtnContainer: {
    marginTop: 50,
    backgroundColor: '#d50000',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
  },
  bottomBtn: {
    fontFamily: fonts.Inter,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  errorMessage: {
    fontFamily: fonts.Inter,
    fontWeight: 'bold',
    color: 'red',
  },
});
