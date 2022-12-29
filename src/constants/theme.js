import { Dimensions, PixelRatio } from 'react-native';

export const LIGHT_THEME = {
  // base colors
  primary: '#881b4c', // purple
  secondary: '#E7E7E7', // gray
  accent: '#D1D1D1',
  ternary: '#E2E2E2',
  silver: '#6B6C6C',
  lightCream: '#EEF0F0',
  white_smoke: '#F4F4F4',
  status_bar_color: '#660033',
  light_black_variant: '#757575',
  blackish_gray_variant: '#2f363c',

  // colors
  white: '#FFFFFF',
  black: '#000000',

  lightGray: '#252525',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  lighatGray_variant: '#e8e8e8',
  transparent: 'transparent',
  darkgray: '#555',
  statusbar: '#660033',
};

export const DARK_THEME = {
  // base colors
  primary: '#881b4c', // purple
  secondary: '#282C30', // gray
  accent: '#4B5053',
  ternary: '#E2E2E2',
  silver: '#6B6C6C',
  lightCream: '#EEF0F0',
  white_smoke: '#F4F4F4',
  status_bar_color: '#660033',
  light_black_variant: '#757575',
  blackish_gray_variant: '#2f363c',

  // colors
  white: '#FFFFFF',
  black: '#000000',

  lightGray: '#252525',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  transparent: 'transparent',
  darkgray: '#555',
  statusbar: '#660033',
};
export const SIZES = {
    // global sizes
    base: PixelRatio.get() <= 2 ? 6 : 8,
    font: PixelRatio.get() <= 2 ? 12 : 14,
    radius: 20,
    textInputBorderRadius: 25,
    padding: 10,
    padding2: 15,

    // font sizes
    largeTitle: 50,
    h1: PixelRatio.get() <= 2 ? 28 : 30,
    h2: PixelRatio.get() <= 2 ? 26 : 28,
    h3: PixelRatio.get() <= 2 ? 16 : 18,
    h4: PixelRatio.get() <= 2 ? 15 : 17,
    h4a: PixelRatio.get() <= 2 ? 14 : 16,
    h5: PixelRatio.get() <= 2 ? 10 : 12,
    h5a: PixelRatio.get() <= 2 ? 9 : 11,
    body1: PixelRatio.get() <= 2 ? 28 : 30,
    body2: PixelRatio.get() <= 2 ? 18 : 20,
    body3: PixelRatio.get() <= 2 ? 13 : 15,
    body4: PixelRatio.get() <= 2 ? 12 : 14,
    body5: PixelRatio.get() <= 2 ? 10 : 12,

    // app dimensions
    // width,
    // height,
};

//Setting different fonts
export const FONTS = {
    largeTitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: SIZES.largeTitle,
        lineHeight: 54,
    },
    h1: {
        fontFamily: 'Roboto-Regular',
        fontSize: SIZES.h1,
        lineHeight: 44,
    },
    h2: { fontFamily: 'Roboto-Regular', fontSize: SIZES.h2, lineHeight: 32 },
    h3: { fontFamily: 'Roboto-Medium', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'Roboto-Regular', fontSize: SIZES.h4, lineHeight: 26 },
    h4a: {
        fontFamily: 'Roboto-Medium',
        fontSize: SIZES.h4a,
        lineHeight: 26,
    },
    h5: {
        fontFamily: 'Roboto-Medium',
        fontSize: SIZES.h5,
        lineHeight: 18,
    },
    h5a: {
        fontFamily: 'Roboto-Regular',
        fontSize: SIZES.h5a,
        lineHeight: 18,
    },
    body1: {
        fontFamily: 'Roboto-Regular',
        fontSize: SIZES.body1,
        lineHeight: 36,
    },
    body2: {
        fontFamily: 'Roboto-Regular',
        fontSize: SIZES.body4,
        lineHeight: 24,
    },
    body3: {
        fontFamily: 'Roboto-Regular',
        fontSize: SIZES.body3,
        lineHeight: 22,
    },
    body4: {
        fontFamily: 'Roboto-Regular',
        fontSize: SIZES.body4,
        lineHeight: 22,
    },
    body5: {
        fontFamily: 'Roboto-Regular',
        fontSize: SIZES.body5,
        lineHeight: 16,
    },
};

export const DIMENSIONS = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width,
};

// const appTheme = { COLORS, DIMENSIONS };

// export default appTheme;
