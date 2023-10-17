import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Routes, RoutesName } from './routes.config'
import Layout from './Layout'
import Constants from '../contants'
import { camelToPascal } from '../utils/func'
import main from '../styles/main'
import PredictWinStack from './PredictWinStack'

const Tab = createMaterialBottomTabNavigator()

class BottomTabBar extends Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => {
                    let tabBarTitle = Routes[camelToPascal(route.name)]?.title
                    return {
                        tabBarIcon: ({ focused, color, size }) => {
                            if (route.name === RoutesName.ScoreSchedules) {
                                if(focused)
                                {
                                  return (
                                        <Image
                                            source={Constants.Images.fixcture}
                                            style={main.iconMd}
                                        />
                                    )
                                }else
                                {
                                    return (
                                        <Image
                                            source={Constants.Images.inactive_tab}
                                            style={main.iconMd}
                                        />
                                    )
                                }
                               
                            } else if (route.name === RoutesName.PredictWin) {
                                if(focused)
                                {
                                return (
                                    <Image
                                        source={Constants.Images.predictWin}
                                        style={main.iconMd}
                                    />
                                )
                                }
                                else
                                {
                                    return (
                                        <Image
                                            source={Constants.Images.intophy}
                                            style={main.iconMd}
                                        />
                                    )
                                }
                            }
                            else if (route.name === RoutesName.MyAccount) {
                                if(focused)
                                {
                                return (
                                    <Image
                                        source={Constants.Images.user}
                                        style={main.iconMd}
                                    />
                                )
                                }
                                else
                                {
                                    return (
                                        <Image
                                            source={Constants.Images.inuser}
                                            style={main.iconMd}
                                        />
                                    )
                                }
                            }
                        },
                        tabBarLabel: tabBarTitle,
                    }
                }}
                barStyle={{ backgroundColor: Constants.Colors.ACCENT }}
                activeColor={Constants.Colors.PRIMARY}
            >
                <Tab.Screen
                    name={RoutesName.ScoreSchedules}
                    options={Routes.ScoreSchedules.options}
                >
                    {(props) => (
                        <Layout router={Routes.ScoreSchedules} {...props} />
                    )}
                </Tab.Screen>
                <Tab.Screen
                    name={RoutesName.PredictWin}
                    options={Routes.PredictWin.options}
                    component={PredictWinStack}
                />
                <Tab.Screen
                    name={RoutesName.MyAccount}
                    options={Routes.MyAccount.options}
                >
                    {(props) => (
                        <Layout router={Routes.MyAccount} {...props} />
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        )
    }
}

export default BottomTabBar
