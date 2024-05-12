import React, {useRef, useState} from 'react';
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
  Dimensions,
} from 'react-native';
import {normalizeFont} from '../fontsHelper';
import Carousel from 'react-native-reanimated-carousel';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';

const Visibility = ({visible, setVisible}) => {
  const insets = useSafeAreaInsets();
  const carouselRef = useRef();
  const width = Dimensions.get('window').width;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const data = [
    {
      title: '1Explore the new login flow',
      image: '',
      body: "We've made it easier for you to login to aatlas through biometrics and passwordless login. Now you can safely login without the hassle of remembering your password.",
    },
    {
      title: '2Explore the new login flow',
      image: '',
      body: "We've made it easier for you to login to aatlas through biometrics and passwordless login. Now you can safely login without the hassle of remembering your password.",
    },
    {
      title: '3Explore the new login flow',
      image: '',
      body: "We've made it easier for you to login to aatlas through biometrics and passwordless login. Now you can safely login without the hassle of remembering your password.",
    },
    {
      title: '4Explore the new login flow',
      image: '',
      body: "We've made it easier for you to login to aatlas through biometrics and passwordless login. Now you can safely login without the hassle of remembering your password.",
    },
  ];

  console.log('=>>>sfasdfasdfas: ', selectedIndex);

  const renderItem = ({item: {title, image, body}}) => (
    <View style={[styles.centeredView]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={{height: 12}} />
      <Image source={require('./biometric.jpg')} />
      <View style={{height: 12}} />
      <ScrollView contentContainerStyle={{flex: 1}}>
        <Text style={styles.description}>{body}</Text>
      </ScrollView>
      <View style={{height: 12}} />
    </View>
  );

  const buttonTitle = () => {
    if (data.length === 1 || selectedIndex === data.length - 1) {
      return 'Done';
    }
    return 'Continue';
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setVisible(!visible);
      }}>
      <View
        style={[
          styles.centeredView,
          {
            marginBottom: insets.bottom || 12,
            marginTop: insets.top + 20,
          },
        ]}>
        <Carousel
          ref={carouselRef}
          loop={false}
          width={width}
          data={data}
          onSnapToItem={setSelectedIndex}
          renderItem={renderItem}
        />
        <View
          style={{
            height: 12,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AnimatedDotsCarousel
            length={data.length}
            currentIndex={selectedIndex}
            maxIndicators={6}
            interpolateOpacityAndColor={true}
            activeIndicatorConfig={{
              color: 'black',
              margin: 3,
              opacity: 1,
              size: 8,
            }}
            inactiveIndicatorConfig={{
              color: 'grey',
              margin: 3,
              opacity: 0.5,
              size: 8,
            }}
            decreasingDots={[
              {
                config: {color: 'grey', margin: 3, opacity: 0.5, size: 6},
                quantity: 1,
              },
              {
                config: {color: 'grey', margin: 3, opacity: 0.5, size: 4},
                quantity: 1,
              },
            ]}
          />
        </View>
        <View style={{height: 8}} />
        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.button}
            onPress={() => {
              if (selectedIndex === data.length - 1) {
                setSelectedIndex(0);
                setVisible(!visible);
              } else {
                carouselRef?.current?.next?.();
              }
            }}>
            <Text style={styles.buttonText}>
              {carouselRef.current?.getCurrentIndex?.() === data.length - 1
                ? 'Done'
                : 'Continue'}
            </Text>
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
    flexWrap: 'wrap',
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

export default Visibility;
