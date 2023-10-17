import { createStackNavigator } from '@react-navigation/stack'
import React, { Component } from 'react'
import Layout from './Layout'
import { Routes, RoutesName } from './routes.config'

const Stack = createStackNavigator()

class AuthStack extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name={RoutesName.LOGIN}
                    options={Routes.LOGIN.options}
                >
                    {(props) => <Layout router={Routes.LOGIN} {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.ForgotPassword}
                    options={Routes.ForgotPassword.options}
                >
                    {(props) => (
                        <Layout router={Routes.ForgotPassword} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.Mobile}
                    options={Routes.Mobile.options}
                >
                    {(props) => (
                        <Layout router={Routes.Mobile} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.MobileOtp}
                    options={Routes.MobileOtp.options}
                >
                    {(props) => (
                        <Layout router={Routes.MobileOtp} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.OTP}
                    options={Routes.OTP.options}
                >
                    {(props) => <Layout router={Routes.OTP} {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.ResetPassword}
                    options={Routes.ResetPassword.options}
                >
                    {(props) => (
                        <Layout router={Routes.ResetPassword} {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.SIGNUP}
                    options={Routes.SIGNUP.options}
                >
                    {(props) => <Layout router={Routes.SIGNUP} {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name={RoutesName.SelectCountry}
                    options={Routes.SelectCountry.options}
                >
                    {(props) => (
                        <Layout router={Routes.SelectCountry} {...props} />
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        )
    }
}

export default AuthStack
