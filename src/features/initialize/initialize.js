import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';
import * as mobileConfig from '../../lilayoutauthentication/authconfig';
import {
  APPLANGUAGE,
  REDIRECTURL,
  ACCESSTOKEN,
  ISAZURELOGIN,
  DEFAULT_LANGUAGE,
  ISLOGGEDIN,
} from '../../constants/localconstants';
import {IMAGES} from '../../constants/imageconstants';
import {INITIALIZE_STYLES} from './styles';
import strings from '../../constants/localized';

//Library imports
import {Actions} from 'react-native-router-flux';

//Local imports
import {checkAccessTokenIsValid, directDownloadConfig} from 'lisecmobutilities';
import * as LocalSettings from 'lisecmobutilities';

class Initalize extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // var produtionSites = await getProductionSites(
    //     null
    //   );
    //   console.log("produtionSites",produtionSites)
    LocalSettings.initializeLocalSettings(
      this.callBackAfterStorageInit.bind(this),
    );
  }

  callBackAfterStorageInit() {
    // let isAccessTokenValid = false;
    const isLoggedIn = LocalSettings.getStorageItem(ISLOGGEDIN);
    // isAccessTokenValid = checkAccessTokenIsValid(accessToken);
    let appLanguage = this.langaugeInit();

    if (isLoggedIn) {
      Actions.Home({
        loginScreen: Actions.UserAuthenticate,
        homeScreen: Actions.Home,
        redirectUrl: REDIRECTURL,
        mobileConfiguration: mobileConfig,
        appLanguage: appLanguage,
        userSettinsScreen: Actions.UserSettings,
        appIcon: IMAGES.appIcon.dark,
      });
    } else {
      LocalSettings.setStorageItem(ISAZURELOGIN, true);
      Actions.UserAuthenticate({
        loginScreen: Actions.UserAuthenticate,
        homeScreen: Actions.Home,
        redirectUrl: REDIRECTURL,
        mobileConfiguration: mobileConfig,
        appLanguage: appLanguage,
        appIcon: IMAGES.appIcon.dark,
      });
    }
  }

  langaugeInit() {
    let language;
    if (LocalSettings.getStorageItem(APPLANGUAGE) != undefined) {
      strings.setLanguage(LocalSettings.getStorageItem(APPLANGUAGE));
      language = LocalSettings.getStorageItem(APPLANGUAGE);
    } else if (LocalSettings.getStorageItem(APPLANGUAGE) === undefined) {
      strings.setLanguage(DEFAULT_LANGUAGE);
      // multitermLocalStrings.setLanguage('eng');
      LocalSettings.setStorageItem(APPLANGUAGE, DEFAULT_LANGUAGE);
      language = DEFAULT_LANGUAGE;
    }
    return language;
  }
  render() {
    const isDarkMode = this.props.isDarkMode;
    return (
      <View
        style={{
          ...INITIALIZE_STYLES.container,
          backgroundColor: 'white',
        }}>
        <ActivityIndicator color="#FFF" size="large" />
      </View>
    );
  }
}

export default Initalize;
