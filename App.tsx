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
  Button,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ConfigProvider} from './src/service/useService';
import Visibility from './src/service/Visibility';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [showVis, setShowVis] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ConfigProvider>
        <SafeAreaProvider>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />

          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <Button
              onPress={() => setShowVis(vis => !vis)}
              title="Show modal"
            />
          </View>
          <Visibility visible={showVis} setVisible={setShowVis} />
        </SafeAreaProvider>
      </ConfigProvider>
    </GestureHandlerRootView>
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
