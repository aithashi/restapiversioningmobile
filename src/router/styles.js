import {StyleSheet} from 'react-native';
import {Platform, StatusBar} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {width, height, totalSize} from 'react-native-dimension';
import {PLATFORM} from '../constants/platformspecific';

const STATUSBAR_HEIGHT =
  Platform.OS === PLATFORM.IOS
    ? isIphoneX()
      ? 50
      : 20
    : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === PLATFORM.IOS ? 44 : 56;

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
  },
  navBarTopContainer: {
    flexDirection: 'row',
    height: height(8),
    width: '100%',
    justifyContent: 'space-between',
  },
  backarrowStyle: {
    width: height(5.5),
    height: height(5.5),
    marginHorizontal: width(1),
    marginRight: 10,
  },
  drawerIconContainer: {flexDirection: 'row', alignItems: 'center'},
  backgroundStyle: {
    backgroundColor: 'transparent',
  },
  title: {
    color: '#fff',
    fontSize: 22,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
