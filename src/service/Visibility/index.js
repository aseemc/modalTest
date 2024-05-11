import React from 'react';
import {Text, View} from 'react-native';
import {useConfigService} from '../useService';
import {SafeAreaView} from 'react-native-safe-area-context';
import ModalView from './ModalView';

const Visibility = () => {
  const {appConfig} = useConfigService();

  console.log('=>>>> app: ', appConfig);

  return (
    // <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
    //   <View>
    //     <Text>Hello world</Text>
    //   </View>
    // </SafeAreaView>
    <ModalView />
  );
};

export default Visibility;
