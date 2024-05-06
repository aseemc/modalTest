/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  Pressable,
  Alert,
  Image,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ModalView = () => {
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={[styles.closeContainer, {marginTop: insets.top}]}>
          <Image
            style={{backgroundColor: 'green'}}
            source={require('./close.jpg')}
          />
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '100%',
            paddingLeft: 20,
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              fontFamily: 'Avenir',
            }}>
            Explore the new login flow
          </Text>
        </View>
        <View style={{height: 12}} />
        <View style={{height: 1, width: '100%', backgroundColor: '#F0F2F6'}} />
        <View style={{height: 12}} />
        <Image
          style={{backgroundColor: 'green'}}
          source={require('./biometric.jpg')}
        />
        <View style={{height: 24}} />
        <View style={{paddingHorizontal: 12}}>
          <Text style={{fontSize: 18, lineHeight: 24, fontFamily: 'Avenir'}}>
            We've made it easier for you to login to aatlas through biometrics
            and passwordless login. Now you can safely login without the hassle
            of remembering your password
          </Text>
        </View>
        <View style={{height: 30}} />
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.textStyle}>Got it</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ModalView />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  modalView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  closeContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'black',
    padding: 18,
    paddingHorizontal: 50,
    borderRadius: 40,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Avenir',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;
