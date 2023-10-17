import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabBar from './BottomTabBar'
import { Routes, RoutesName } from './routes.config'
import Layout from './Layout'
import TopTabBar from './TopTabBar'

const Stack = createStackNavigator()

export class AppStack extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={BottomTabBar}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={RoutesName.RulesAndRegulation}
                    options={Routes.RulesAndRegulation.options}
                >
                    {(props) => (
                        <Layout router={Routes.RulesAndRegulation} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.MyPrediction}
                    component={TopTabBar}
                    options={Routes.MyPrediction.options}
                />
                <Stack.Screen
                    name={RoutesName.AboutUs}
                    options={Routes.AboutUs.options}
                >
                    {(props) => <Layout router={Routes.AboutUs} {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.AddGroup}
                    options={Routes.AddGroup.options}
                >
                    {(props) => <Layout router={Routes.AddGroup} {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.GroupDetails}
                    options={Routes.GroupDetails.options}
                >
                    {(props) => (
                        <Layout router={Routes.GroupDetails} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.InviteUser}
                    options={Routes.InviteUser.options}
                >
                    {(props) => (
                        <Layout router={Routes.InviteUser} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.PrivacyPolicy}
                    options={Routes.PrivacyPolicy.options}
                >
                    {(props) => (
                        <Layout router={Routes.PrivacyPolicy} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.TermsAndConditions}
                    options={Routes.TermsAndConditions.options}
                >
                    {(props) => (
                        <Layout router={Routes.TermsAndConditions} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.Settings}
                    options={Routes.Settings.options}
                >
                    {(props) => <Layout router={Routes.Settings} {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.ContactUs}
                    options={Routes.ContactUs.options}
                >
                    {(props) => <Layout router={Routes.ContactUs} {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name={RoutesName.EditProfile}
                    options={Routes.EditProfile.options}
                >
                    {(props) => (
                        <Layout router={Routes.EditProfile} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.Transactions}
                    options={Routes.Transactions.options}
                >
                    {(props) => (
                        <Layout router={Routes.Transactions} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.ChangePassword}
                    options={Routes.ChangePassword.options}
                >
                    {(props) => (
                        <Layout router={Routes.ChangePassword} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.SelectCountry}
                    options={Routes.SelectCountry.options}
                >
                    {(props) => (
                        <Layout router={Routes.SelectCountry} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.Notifications}
                    options={Routes.Notifications.options}
                >
                    {(props) => (
                        <Layout router={Routes.Notifications} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.TournmentSerachList}
                    options={Routes.TournmentSerachList.options}
                >
                    {(props) => (
                        <Layout
                            router={Routes.TournmentSerachList}
                            {...props}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.WithdrawAmount}
                    options={Routes.WithdrawAmount.options}
                >
                    {(props) => (
                        <Layout router={Routes.WithdrawAmount} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.AddBank}
                    options={Routes.AddBank.options}
                >
                    {(props) => <Layout router={Routes.AddBank} {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.AccountVerfication}
                    options={Routes.AccountVerfication.options}
                >
                    {(props) => (
                        <Layout router={Routes.AccountVerfication} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.PointTable}
                    options={Routes.PointTable.options}
                >
                    {(props) => (
                        <Layout router={Routes.PointTable} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.PointTableActual}
                    options={Routes.PointTableActual.options}
                >
                    {(props) => (
                        <Layout router={Routes.PointTableActual} {...props} />
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        )
    }
}

export default AppStack
