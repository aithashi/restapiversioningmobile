import React, {Component} from 'react';
import {THEMESTORE} from '../constants/localconstants';
import {useDarkMode} from 'react-native-dynamic';
import AsyncStorage from '@react-native-community/async-storage';

export function darkModeHook(Component) {
  return function WrappedComponent(props) {
    const isDarkMode = useDarkMode();
    storeinLocal(isDarkMode);
    return <Component {...props} isDarkMode={isDarkMode} />;
  };
}

const storeinLocal = (isDarkMode) => {
  AsyncStorage.setItem(THEMESTORE, JSON.stringify(isDarkMode));
};
