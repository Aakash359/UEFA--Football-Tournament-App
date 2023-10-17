import React, { Component } from 'react'
import { View } from 'react-native'
import styles from '../styles'
import { TouchView } from '../../../components/TouchView'
import Notification from '../../../components/Notification'
import { Logout } from '../../../components/LogoutPopUp'
import { connect } from 'react-redux'
import { logout } from '../../../redux/actions/authActions'
import { notificationUpdateRequest } from '../../../redux/actions/settingsActions'

export class Settings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            logoutModal: false,
            notification: props?.user?.setting === 'A' ? true : false,
        }
    }

    onChangePass = () => {
        this.props.navigation.navigate('changePassword')
    }
    onAboutUS = () => {
        this.props.navigation.navigate('aboutUs')
    }

    onPrivacy = () => {
        this.props.navigation.navigate('privacyPolicy')
    }

    onTerms = () => {
        this.props.navigation.navigate('termsAndConditions')
    }
    onNotification = () => {
        this.setState({ notification: !this.state.notification }, () => {
            this.props.notificationUpdateRequest({
                receive_notification: this.state.notification ? 'A' : 'I',
            })
        })
    }
    onLogout = () => this.props.logOut()

    redirectToLogin = () => {}

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrap}>
                    <Notification
                        title={'Notifications'}
                        onPress={this.onNotification}
                        notification={this.state.notification}
                    />

                    <TouchView
                        title={'Change Password'}
                        onPress={this.onChangePass}
                    />

                    <TouchView
                        title={'Privacy Policy'}
                        onPress={this.onPrivacy}
                    />

                    <TouchView
                        title={'Terms & Conditions'}
                        onPress={this.onTerms}
                    />

                    <TouchView
                        title={'Logout'}
                        onPress={() => this.setState({ logoutModal: true })}
                    />
                </View>
                <Logout
                    visible={this.state.logoutModal}
                    title={'Logout'}
                    alertTitle={'Are you sure you want to logout ? '}
                    rightButtonText={'Yes'}
                    leftButtonText={'No'}
                    onPressLeftButton={() =>
                        this.setState({ logoutModal: false })
                    }
                    onPressRightButton={this.onLogout}
                />
            </View>
        )
    }
}

//peter12@yopmail.com
//123445678

const mapStateToProps = ({ auth: { user } }) => {
    return {
        user,
    }
}

const mapDispatchToProps = {
    logOut: logout,
    notificationUpdateRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
