import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONTS,LIGHT_THEME} from '../../constants/theme';
export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#1E1E1E'
  },
  image:{
        width: DIMENSIONS.fullWidth*0.85,
        height: DIMENSIONS.fullHeight*0.85,
  },
  nointernetHeading:{
    ...FONTS.h2,
    textAlign:"center",
    color:LIGHT_THEME.lightGray2
  },
  nointernetBody:{
    ...FONTS.h4a,
    textAlign:"center",
    color:LIGHT_THEME.lightGray4
  }
});
