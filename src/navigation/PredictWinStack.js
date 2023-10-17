import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Layout from './Layout'
import { Routes, RoutesName } from './routes.config'

const Stack = createStackNavigator()

export class PredictWinStack extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name={RoutesName.PredictWin}
                    options={Routes.PredictWin.options}
                >
                    {(props) => (
                        <Layout router={Routes.PredictWin} {...props} />
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        )
    }
}

export default PredictWinStack
