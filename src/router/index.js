import React, {Component} from 'react';
import NavBar from './navbar';
import {View, Alert, BackHandler, ActivityIndicator} from 'react-native';
import {darkModeHook} from '../utils/darkmodehook';
import strings from '../constants/localized';
import {screenConfig} from '../constants/screenconfig';
import * as mobileConfig from '../lilayoutauthentication/authconfig';
import {DARK_THEME, LIGHT_THEME} from '../constants/theme';
import {IMAGES} from '../constants/imageconstants';
import {
  USERACCOUNTLIST,
  REDIRECTURL,
  APPLANGUAGE,
  APPNAME,
} from '../constants/localconstants';
import {STYLES} from './styles';

//Library imports
import DeviceInfo from 'react-native-device-info';
import {Actions} from 'react-native-router-flux';

//Local imports
import * as LocalSettings from 'lisecmobutilities';
import {MobDrawerComp} from 'lisecmobutilities';

class Root extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      intializingDone: true,
    };
  }

  componentDidMount() {
    // SplashScreen.hide()
    if (
      this.props.useraccountlist !== undefined &&
      LocalSettings.getStorageItem(USERACCOUNTLIST) == undefined
    ) {
      LocalSettings.setStorageItem(
        USERACCOUNTLIST,
        JSON.parse(this.props.useraccountlist),
      );
    }
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.hardwareBackPress.bind(this),
    );
  }

  hardwareBackPress() {
    const scene = Actions.currentScene;
    if (scene == 'LiSettings') {
      Actions.Home();
      return true;
    } else if (scene == 'Home') {
      Alert.alert(APPNAME, strings[99004183], [
        {text: strings[99001613], onPress: () => BackHandler.exitApp()},
        {text: strings[99000054], onPress: () => console.log('EXIT NO')},
      ]);
    } else if (scene == 'Validation') {
      Actions.Home();
    } else Actions.Initalize();
  }

  render() {
    const isDarkMode = this.props.isDarkMode;
    if (this.state.intializingDone)
      return (
        <MobDrawerComp
          key="Drawer"
          screenConfig={screenConfig}
          // reducerCreate={reducerCreate}
          mobileConfiguration={mobileConfig}
          homeScreen={Actions.Home}
          userSettinsScreen={Actions.UserSettings}
          redirectUrl={REDIRECTURL}
          newsScreen={false}
          navBar={NavBar}
          languageStorageKey={APPLANGUAGE}
          appIcon={IMAGES.appIcon.dark}
          appTransparentIcon={IMAGES.transparentAppIcon.dark}
          appName={APPNAME}
          appVersion={DeviceInfo.getVersion()}></MobDrawerComp>
      );
    else if (!this.state.intializingDone)
      return (
        <View
          style={{
            ...STYLES.container,
            backgroundColor: isDarkMode
              ? DARK_THEME.blackish_gray_variant
              : LIGHT_THEME.lighatGray_variant,
          }}>
          <ActivityIndicator
            style={STYLES.activityIndicator}
            color={DARK_THEME.primary}
            size="large"
          />
        </View>
      );
  }
}

export default darkModeHook(Root);
