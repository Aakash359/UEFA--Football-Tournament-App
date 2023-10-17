import React, { Component } from 'react'
import { Text, View } from 'react-native'
import main from '../../styles/main'

class MsgBox extends Component {
    render() {
        const {
            center = false,
            msg = null,
            error = false,
            style = {},
        } = this.props
        return (
            <View style={center ? main.center : {}}>
                {msg ? (
                    <Text style={[error ? main.error : main.success, style]}>
                        {' '}
                        {`${error ? '*' : ''} ${msg}`}{' '}
                    </Text>
                ) : null}
            </View>
        )
    }
}

export default MsgBox
