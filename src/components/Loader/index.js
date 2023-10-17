import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'
import Constants from '../../contants'
import main from '../../styles/main'

class Loader extends Component {
    render() {
        const {
            color = Constants.Colors.WHITE,
            size = undefined,
            isLoading = false,
            center = false,
            style = {},
        } = this.props
        return (
            <View style={[center ? main.center : {}, style]}>
                {isLoading ? (
                    <ActivityIndicator color={color} size={size} />
                ) : null}
            </View>
        )
    }
}

export default Loader
