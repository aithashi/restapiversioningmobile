import {
    View,
    Image,
    StatusBar,
    TouchableWithoutFeedback,
    SafeAreaView,
    Text,
    Keyboard,
  } from 'react-native';
  import React, {Component} from 'react';
  import {darkModeHook} from '../utils/darkmodehook';
  import strings from '../constants/localized';
  import * as mobileConfig from '../lilayoutauthentication/authconfig';
  import {
    REDIRECTURL,
    APPNAME,
    USER_SETTINGS,
    HOME,
    ACCOUNT,
    ABOUT,
    USERAUTH,
  } from '../constants/localconstants';
  
  //Library imports
  import {Actions, Router, Scene} from 'react-native-router-flux';
  import LinearGradient from 'react-native-linear-gradient';
  import {IMAGES} from '../constants/imageconstants';
  import {DARK_THEME} from '../constants/theme';
  import {STYLES} from './styles';
  
  const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[STYLES.statusBar, {backgroundColor}]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
  
  class NavBar extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    drawerOpen() {
      Actions.drawerOpen({
        loginScreen: Actions.UserAuthenticate,
        homeScreen: Actions.Home,
        redirectUrl: REDIRECTURL,
        mobileConfiguration: mobileConfig,
      });
    }
  
    render() {
      const {routeName} = this.props;
      return (
        <View style={STYLES.backgroundStyle}>
          <MyStatusBar backgroundColor="#660032" barStyle="light-content" />
          <SafeAreaView>
            <LinearGradient colors={[DARK_THEME.primary, '#a0185c']} style={{}}>
              <View style={STYLES.navBarTopContainer}>
                <View style={STYLES.drawerIconContainer}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      Keyboard.dismiss();
                      this.drawerOpen();
                    }}>
                    <Image
                      source={IMAGES.drawerIcon.dark}
                      style={STYLES.backarrowStyle}
                    />
                  </TouchableWithoutFeedback>
                  <Text style={STYLES.title}>
                    {routeName == USER_SETTINGS
                      ? strings[6002001]
                      : routeName == HOME
                      ? APPNAME
                      : routeName == ACCOUNT
                      ? strings[99020290]
                      : routeName == ABOUT
                      ? strings[9001070]
                      : routeName === USERAUTH
                      ? APPNAME
                      : APPNAME}
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </SafeAreaView>
        </View>
      );
    }
  }
  
  export default darkModeHook(NavBar);
  