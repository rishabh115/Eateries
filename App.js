
import React, {Component} from 'react';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation'
import Home from './src/screens/Home'
import Splash from './src/screens/Splash'
export default class extends Component
{
  render()
  {
    return (<Rootstack/>);
  }
}
const Rootstack=createSwitchNavigator(
{
  Home:Home,
  Splash:Splash
},
{
  initialRouteName:"Splash",
  headerMode:"none"
});

