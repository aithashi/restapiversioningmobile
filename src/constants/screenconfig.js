import {Home} from '../features/home';
import {Initalize} from '../features/initialize';
import {UserAuthenticate} from 'lisecmobutilities';
import {Account} from 'lisecmobutilities';
import {About} from 'lisecmobutilities';
import {IMAGES} from './imageconstants';
import {NoInternet} from '../features/nointernet'
export const screenConfig = [
  {
    key: 'Initalize',
    component: Initalize,
    initial: true,
    animation: 'fade',
    displayDrawer: false,
    image: null,
    label: '',
    // type: null,
  },
  {
    key: 'UserAuthenticate',
    component: UserAuthenticate,
    initial: false,
    animation: 'fade',
    displayDrawer: false,
    image: null,
    // type: null,
    label: '',
  },
  {
    key: 'Home',
    component: Home,
    initial: false,
    name: 'Home',
    animation: 'fade',
    type: 'reset',
    displayDrawer: true,
    image: IMAGES.home,
    label: 99032092,
  },

  {
    key: 'Account',
    component: Account,
    name: 'Account',
    initial: false,
    animation: 'fade',
    type: 'reset',
    displayDrawer: true,
    image: IMAGES.account,
    label: 99020290,
  },
  {
    key: 'About',
    component: About,
    name: 'About',
    initial: false,
    animation: 'fade',
    type: 'reset',
    displayDrawer: true,
    image: IMAGES.aboutus,
    label: 9001070,
  },

  // {
  //   key: 'NoInternet',
  //   component: NoInternet,
  //   name: 'NoInternet',
  //   initial: false,
  //   animation: 'fade',
  //   type: 'reset',
  //   displayDrawer: false,
  //   label: 9001070,
  // },
  
];
