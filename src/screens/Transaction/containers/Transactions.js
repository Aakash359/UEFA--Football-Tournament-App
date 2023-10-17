import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import styles from '../styles'
import AmountBox from '../../../components/AmountBox'
import { connect } from 'react-redux'
import TransactionsList from '../../../components/TransactionsList'
import main from '../../../styles/main'
import { transactionListRequest } from '../../../redux/actions/settingsActions'
import Loader from '../../../components/Loader'
import moment from 'moment'
import currency from 'currency.js'

export class Transactions extends Component {
    constructor(props) {
        super(props)

        this.state = {
            logoutModal: false,
        }
    }

    componentDidMount() {
        let payload = { slug: 'transaction' }
        this.props.transactionListRequest(payload)
    }

    renderItems = ({ item, index }) => (
        <TransactionsList
            transaction={'Transaction ID :'}
            type={item.type}
            transactionId={item.transactionId}
            currency={'AED'}
            sign1={'+'}
            sign2={'-'}
            amount={currency(item.amount, {
                separator: ',',
                symbol: '',
            }).format()}
            leagueName={item.leagueName}
            date={moment
                .unix(parseInt(item.createdTimestamp))
                .format('MM/DD/YYYY')}
            trans={item}
        />
    )

    header = () => {
        return <Text style={styles.flatListHeader}>All Transactions</Text>
    }

    render() {
        const {
            navigation: { navigate },
            trans,
            amount,
            transLoader,
        } = this.props

        return (
            <View style={styles.container}>
                {amount > 0 ? (
                    <AmountBox amount={amount} navigate={navigate} />
                ) : null}
                <Loader isLoading={transLoader} />
                <FlatList
                    style={[main.mt3]}
                    data={trans}
                    renderItem={this.renderItems}
                    keyExtractor={(item, i) => `${i}`}
                    ListHeaderComponent={this.header}
                    ListEmptyComponent={() => {
                        return (
                            <View style={[main.flexCenter, main.mt5]}>
                                <Text style={[main.titleSm]}>
                                    No records found
                                </Text>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}

//=============== REDUX CONNECT & RESPONSE ===============

const mapStateToProps = ({
    settings: {
        transactionListResponse: {
            transactionList,
            winningAmount,
            transactionListLoader,
        },
    },
}) => {
    return {
        trans: transactionList,
        amount: winningAmount,
        transLoader: transactionListLoader,
    }
}
export default connect(mapStateToProps, { transactionListRequest })(
    Transactions
)
