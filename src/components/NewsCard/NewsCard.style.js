import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4, // This retrieves the width and height of the device screen
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  description: {
    marginTop: 3,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  inner_container: {
    padding: 5,
  },
});
