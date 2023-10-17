import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import Constants from '../../contants'
import styles from './styles'
import PropTypes from 'prop-types'
import Button from '../Button'
import main from '../../styles/main'

class TransactionsList extends Component {
    static propTypes = {
        title: PropTypes.string,
    }

    render() {
        const {
            title = 'title',
            onPress = null,
            transactionId = 'transactionId',
            transaction = 'transaction',
            amount = 'amount',
            leagueName = 'leaugeName',
            type = 'type',
            date = 'date',
            currency = 'currency',
            creditDebit = '',
            sign1 = 'sign1',
            sign2 = 'sign2',
        } = this.props

        const { trans } = this.props

        return (
            <View style={styles.V1}>
                <View
                    activeOpacity={1}
                    onPress={onPress}
                    style={styles.inputFieldWrapper}
                >
                    <View style={styles.textWrapper}>
                        <Text style={styles.tx1}>{type}</Text>

                        <View style={styles.currencyWrapper}>
                            <Text
                                style={[
                                    styles.currency,
                                    {
                                        color:
                                            trans?.creditDebit === '0'
                                                ? Constants.Colors.SUCCESS
                                                : Constants.Colors.WARNING,
                                    },
                                ]}
                            >
                                {currency}
                            </Text>
                            {trans?.creditDebit === '0' ? (
                                <Text style={styles.sign}>{sign1}</Text>
                            ) : (
                                <Text
                                    style={[
                                        styles.sign,
                                        { color: Constants?.Colors.WARNING },
                                    ]}
                                >
                                    {sign2}
                                </Text>
                            )}

                            <Text
                                style={
                                    trans?.creditDebit === '0'
                                        ? [styles.amount1]
                                        : [styles.amount2]
                                }
                            >
                                {amount}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.border}></View>
                    <View style={styles.coloum}>
                        <View
                            style={[
                                styles.textWrapper2,

                                !['Winning', 'Entry Fee'].includes(type) &&
                                    main.justifyContentFlexEnd,
                                !['Winning', 'Entry Fee'].includes(type) &&
                                    main.mr2,
                            ]}
                        >
                            {type == ('Winning' || 'Entry Fee') ? (
                                <Text style={styles.text}>{leagueName}</Text>
                            ) : null}

                            {date != 'Invalid date' && (
                                <Text
                                    style={
                                        type == ('Winning' || 'Entry Fee')
                                            ? [styles.Cnt]
                                            : [styles.tx2]
                                    }
                                >
                                    {date}
                                </Text>
                            )}
                        </View>
                        <View style={styles.tansWrap}>
                            <Text style={styles.tx3}>{transaction}</Text>
                            <Text style={styles.tx4}>{transactionId}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default TransactionsList
