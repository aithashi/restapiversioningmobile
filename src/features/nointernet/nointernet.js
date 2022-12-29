import {View, Text, Image} from 'react-native';
import React from 'react';
import {STYLES} from './styles';
import {IMAGES} from '../../constants/imageconstants';
import {LiButton} from 'limobcomponents';

const NoInternet = () => {
  return (
    <View style={STYLES.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image
          style={STYLES.image}
          source={IMAGES.nointernet.dark}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{justifyContent: 'space-between'}}>
          <View style={{marginVertical:10}}>
            <Text style={STYLES.nointernetHeading}>No Connection</Text>
            <Text style={STYLES.nointernetBody}>
              No internet connection found, check your internet connection or try again.
            </Text>
          </View>
          <LiButton
            style={{alignSelf: 'center'}}
            buttonId="TryAgain"
            liButtonPress={() =>
              this.setState({isPickupScanModal: false, marked: true})
            }
            label="Try again"
          />
        </View>
        <View style={{flex: 1 / 2}}/>
      </View>
    </View>
  );
};

export default NoInternet;
