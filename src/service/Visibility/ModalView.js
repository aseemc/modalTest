import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  View,
  Image,
  Pressable,
  StyleSheet,
  Alert,
  Modal,
  Text,
  ScrollView,
} from 'react-native';
import {normalizeFont} from '../fontsHelper';

const ModalView = () => {
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(true);
  console.log('=>>>>>> ', insets);
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View
        style={[
          styles.centeredView,
          {marginBottom: insets.bottom || 12, marginTop: insets.top + 20},
        ]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Explore the new login flow</Text>
        </View>
        <View style={{height: 12}} />
        <Image source={require('./biometric.jpg')} />
        <View style={{height: 12}} />
        <ScrollView contentContainerStyle={{flex: 1}}>
          <Text style={styles.description}>
            We've made it easier for you to login to aatlas through biometrics
            and passwordless login. Now you can safely login without the hassle
            of remembering your password.
          </Text>
        </ScrollView>
        <View style={{height: 12}} />
        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.buttonText}>Got it</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  headerText: {
    fontSize: normalizeFont(24),
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
  description: {
    fontSize: normalizeFont(16),
    fontFamily: 'Avenir',
  },
  buttonsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
  },
  buttonText: {
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

export default ModalView;
