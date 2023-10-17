import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import Constants from '../../contants'
import styles from './styles'
import PropTypes from 'prop-types'
import Button from '../Button'
import main from '../../styles/main'
import { RoutesName } from '../../navigation/routes.config'
class AmountBox extends Component {
    static propTypes = {
        title: PropTypes.string,
    }

    render() {
        const {
            title = 'title',
            onPress = null,
            route = null,
            navigate,
            amount = 'amount',
        } = this.props

        return (
            <View style={styles.V1}>
                <View
                    activeOpacity={1}
                    onPress={onPress}
                    style={styles.inputFieldWrapper}
                >
                        <TouchableOpacity style={styles.amountStyle}
                        onPress={() =>
                            amount > 0
                                ? navigate(RoutesName.WithdrawAmount)
                                : null
                        }>
                            <Text style={styles.amount}>{"Congratulations you have won awards"}</Text>
                        </TouchableOpacity>
                    
                    <View style={styles.btnView}>
                         
                    </View>
                </View>
            </View>
        )
    }
}

export default AmountBox
