import CreateAccount from '../views/auth/CreateAccount';
import SignIn from '../views/auth/Sign_In';
import SignUp from '../views/auth/Sign_Up';
import SinUpEmail from '../views/auth/Sign_UpEmail';
import Splash from '../views/auth/Splash';
import Succes from '../views/auth/Succes';
import Veriffy from '../views/auth/Veriffy';
import Home from '../views/homescreen';
import ScreenPocket from '../views/homescreen/components/pocket';
import ScreenScan from '../views/homescreen/components/scan/Scan';
import TopUP from '../views/homescreen/components/top_up';

// const dataTab = [
//   {
//     name: 'Home',
//     component: Home,
//   },
//   {
//     name: 'Market',
//     component: Market,
//   },
//   {
//     name: 'Assets',
//     component: Asset,
//   },
//   {
//     name: 'Mine',
//     component: Mine,
//   },
// ];

export const dataStack = [
  {
    name: 'Splash',
    component: Splash,
  },
  {
    name: 'CreateAccount',
    component: CreateAccount,
  },
  {
    name: 'SignUp',
    component: SignUp,
  },
  {
    name: 'SignIn',
    component: SignIn,
  },
  {
    name: 'SinUpEmail',
    component: SinUpEmail,
  },
  {
    name: 'Succes',
    component: Succes,
  },

  {
    name: 'Veriffy',
    component: Veriffy,
  },
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'TopUP',
    component: TopUP,
  },
  {
    name: 'ScreenPocket',
    component: ScreenPocket,
  },
  {
    name: 'ScreenScan',
    component: ScreenScan,
  },
  
];
