import React from 'react';
import {View, Text, Image} from 'react-native';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import JobSerchScreen from './screens/JobSerchScreen';
import JobDatailScreen from './screens/JobDatail';
import JobOfferTop from './screens/JobOfferTop';
import KnowJob from './screens/KnowJob';
import KnowCompany from './screens/KnowCompany';
import JobRequirements from './screens/JobRequirements';
import Hanberger from './screens/Hamburger';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
const JobSearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="求人検索Top">
      <Stack.Screen name="求人検索Top" component={JobSerchScreen} />
      <Stack.Screen name="求人詳細" component={JobDatailTab} />
    </Stack.Navigator>
  );
};
const JobDatailTab = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="求人TOP" component={JobOfferTop} />
      <TopTab.Screen name="仕事を知る" component={KnowJob} />
      <TopTab.Screen name="会社を知る" component={KnowCompany} />
      <TopTab.Screen name="募集要項" component={JobRequirements} />
    </TopTab.Navigator>
  );
};
const Notification = () => {};
const EmploymentConsultation = () => {};
function Test() {
  console.log('前の画面に戻る');
}
export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: 'blue'},
          tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold'},
          unmountOnBlur: true,
          headerTitle: '',
          headerLeft: () => {
            return <Hanberger></Hanberger>;
          },
          headerBackground: () => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    width: 140,
                    height: 30,
                  }}
                  resizeMode="stretch"
                  source={require('./assets/logo_color.png')}
                />
              </View>
            );
          },
        }}
        initialRouteName="ホーム">
        <BottomTab.Screen name="戻る" component={Test} />
        <BottomTab.Screen name="求人検索" component={JobSearchStack} />
        <BottomTab.Screen name="就職相談" component={EmploymentConsultation} />
        <BottomTab.Screen name="お知らせ" component={Notification} />
        <BottomTab.Screen name="ホーム" component={HomeStack} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
