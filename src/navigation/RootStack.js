import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppStack from './AppStack'
import AuthStack from './AuthStack'

export class RootStack extends Component {
    render() {
        return (
            <NavigationContainer>
                {this.props.token ? <AppStack /> : <AuthStack />}
            </NavigationContainer>
        )
    }
}

const mapStateToProps = ({ auth: { token } }) => ({
    token,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(RootStack)
