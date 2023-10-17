import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from '../styles'
import { connect } from 'react-redux'
import NotificationList from '../../../components/NotificationsList'
import main from '../../../styles/main'
import {
    notificationRequest,
    clearNotification,
} from '../../../redux/actions/settingsActions'

export class Notifications extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loader: false,
        }
    }

    componentDidMount() {
        let payload = { slug: 'notification' }
        this.props.notificationRequest(payload)
        this.props.navigation.addListener('focus', () => {
            this.props.clearNotification()
        })
    }

    renderItems = ({ item, index }) => (
        <NotificationList heading={item.title} message={item.body} />
    )
    render() {
        const { notificationList } = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    style={[main.mt3]}
                    data={notificationList}
                    renderItem={this.renderItems}
                    keyExtractor={(item, i) => `${i}`}
                    ListHeaderComponent={this.header}
                    ListEmptyComponent={() => {
                        return (
                            <View style={[main.flexCenter, main.mt5]}>
                                <Text style={main.titleSm}>
                                    No notification found
                                </Text>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}

// =============== REDUX CONNECT & RESPONSE ===============
const mapStateToProps = ({ settings: { notificationList } }) => {
    return {
        notificationList,
    }
}
export default connect(mapStateToProps, {
    notificationRequest,
    clearNotification,
})(Notifications)
