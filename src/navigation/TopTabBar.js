import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Routes, RoutesName } from './routes.config'
import Layout from './Layout'
import Constants from '../contants'
import { camelToPascal } from '../utils/func'
import typography from '../contants/typography'

const Tab = createMaterialTopTabNavigator()

class TopTabBar extends Component {
    render() {
        const {
            route: { params },
        } = this.props

        return (
            <Tab.Navigator
                screenOptions={({ route }) => {
                    let tabBarLabel = Routes[camelToPascal(route.name)]?.title
                    return {
                        tabBarLabel: tabBarLabel,
                    }
                }}
                swipeEnabled
                tabBarOptions={{
                    style: {
                        backgroundColor: Constants.Colors.PRIMARY,
                        overflow: 'scroll',
                    },
                    activeTintColor: Constants.Colors.WHITE,
                    inactiveTintColor: Constants.Colors.GRAY,
                    labelStyle: {
                        textTransform: 'capitalize',
                        fontFamily: typography.FONT_FAMILY_REGULAR,
                        fontSize: Constants.BaseStyle.scale(14),
                    },
                    scrollEnabled: true,
                    allowFontScaling: true,
                }}
            >
                <Tab.Screen name={RoutesName.MyPrediction}>
                    {(props) => (
                        <Layout
                            router={Routes.MyPrediction}
                            {...props}
                            league={params}
                        />
                    )}
                </Tab.Screen>
                <Tab.Screen name={RoutesName.ActualScore}>
                    {(props) => (
                        <Layout
                            router={Routes.ActualScore}
                            {...props}
                            league={params}
                        />
                    )}
                </Tab.Screen>

                <Tab.Screen name={RoutesName.MyGroups}>
                    {(props) => (
                        <Layout
                            router={Routes.MyGroups}
                            {...props}
                            league={params}
                        />
                    )}
                </Tab.Screen>
                <Tab.Screen name={RoutesName.PlayerRanking}>
                    {(props) => (
                        <Layout
                            router={Routes.PlayerRanking}
                            {...props}
                            league={params}
                        />
                    )}
                </Tab.Screen>
                <Tab.Screen name={RoutesName.RulesAndRegulation}>
                    {(props) => (
                        <Layout
                            router={Routes.RulesAndRegulation}
                            {...props}
                            league={params}
                        />
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        )
    }
}

export default TopTabBar
