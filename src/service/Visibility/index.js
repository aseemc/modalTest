import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {useConfigService} from '../useService';
import {SafeAreaView} from 'react-native-safe-area-context';
import ModalView from './ModalView';
import Carousel from 'react-native-reanimated-carousel';

const Visibility = props => {
  const {appConfig} = useConfigService();
  const width = Dimensions.get('window').width;

  // console.log('=>>>> app: ', appConfig);

  return (
    // <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
    //   <View>
    //     <Text>Hello world</Text>
    //   </View>
    // </SafeAreaView>
    <ModalView {...props} />
  );
};

export default Visibility;
