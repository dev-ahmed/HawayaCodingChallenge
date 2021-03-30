import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants';
import {OnBoarding, Profile} from '../components/';
import {OTP} from '../components/pages/OTP';

type RootStackParamList = {
  OnBoarding: undefined;
  OTP: undefined;
  Profile: undefined;
};

const RootStackNav = createStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  return (
    <RootStackNav.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTES.OnBoarding}>
      <RootStackNav.Screen name={ROUTES.OnBoarding} component={OnBoarding} />
      <RootStackNav.Screen name={ROUTES.OTP} component={OTP} />
      <RootStackNav.Screen name={ROUTES.Profile} component={Profile} />
    </RootStackNav.Navigator>
  );
};
