import React, { Component } from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import Constants from '../contants'

class Layout extends Component {
    render() {
        const { router } = this.props
        const { props } = this

        return router?.safeArea ? (
            <SafeAreaView style={[styles.container]}>
                <StatusBar
                    animated={true}
                    backgroundColor={Constants.Colors.ACCENT}
                    barStyle="light-content"
                />
                <router.component {...props} />
            </SafeAreaView>
        ) : (
            <router.component />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.Colors.ACCENT,
    },
})

export default Layout
