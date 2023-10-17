import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../styles'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { connect } from 'react-redux'
import {
    otpVerify,
    resendOtp,
    setForgetPasswordOtpSuccess,
    setOtpError,
    setSignUpSuccess,
} from '../../../redux/actions/authActions'
import Button from '../../../components/Button'
import MsgBox from '../../../components/MsgBox'
import { getDeviceId, getFcmToken } from '../../../utils/helpers/AppHelper'
import { getDeviceType } from '../../../utils/func'
import Loader from '../../../components/Loader'
import main from '../../../styles/main'
import { Routes, RoutesName } from '../../../navigation/routes.config'

class OTP extends Component {
    constructor() {
        super()
        this.state = {
            otp: '',
            timer: 10,
        }
    }

    onVerify = async () => {
        const {
            tempUser,
            forgetPass,
            loginCread,
            route: { params: forgetPassword },
        } = this.props
        let device_id = await getDeviceId()
        let device_type = getDeviceType()
        let fcm_token = await getFcmToken()

        let payload = {
            email_address: forgetPassword
                ? forgetPass?.emailAddress
                : tempUser?.emailAddress || loginCread?.email_address,
            otp_code: this.state.otp,
            device_id,
            device_type,
            fcm_token,
            forgetPassword: forgetPassword || false,
        }

        this.props.optVerify(payload)
    }

    onRendOTP = async () => {
        const {
            tempUser,
            forgetPass,
            route: { params: forgetPassword },
        } = this.props
        let device_id = await getDeviceId()
        let device_type = getDeviceType()
        let fcm_token = await getFcmToken()

        let payload = {
            email_address: forgetPassword
                ? forgetPass?.emailAddress
                : tempUser?.emailAddress,
            device_id,
            device_type,
            fcm_token,
            type: forgetPassword ? 'forgot' : 'register',
        }
        this.props.resendOtp(payload)
        this.setState({ timer: 10 })
    }

    startTimer = () => {
        setInterval(() => {
            if (this.state.timer > 0) {
                this.setState({ timer: this.state.timer - 1 })
            }
        }, 1000)
    }

    componentDidMount() {
        this.timer = this.startTimer()
        this.props.setOtpError('')
        this.props.navigation.addListener('focus', () => {
            this.props.setForgetPasswordOtpSuccess(false)
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.forgetOtpSuccess) {
            this.props.navigation.navigate(RoutesName.ResetPassword)
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const { otp } = this.state
        const { otpLoader, otpError, resendOtpError, resendOtpLoader } =
            this.props

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.fgtView}>OTP Verification</Text>

                    <Text style={styles.emailView} numberOfLines={2}>
                        Please enter the OTP (One Time Password) sent to your
                        registered email
                    </Text>
                    <View style={styles.formView}>
                        <OTPInputView
                            style={styles.inputView}
                            pinCount={4}
                            keyboardType="number-pad"
                            onCodeChanged={(code) => {
                                this.setState({ otp: code })
                            }}
                            autoFocusOnLoad={false}
                            codeInputFieldStyle={styles.input}
                            code={otp}
                            codeInputHighlightStyle={styles.inputHighlight}
                            onCodeFilled={(code) => {
                                this.setState({ otp: code })
                            }}
                        />
                    </View>
                    <MsgBox
                        error={otpError}
                        msg={otpError}
                        style={[main.mt2]}
                    />
                    <TouchableOpacity
                        disabled={this.state.timer}
                        style={[main.flexCenter, main.row]}
                        onPress={this.onRendOTP}
                    >
                        <View style={[main.mr3]}>
                            <Text style={styles.resendText}>
                                Resend OTP{' '}
                                {this.state.timer ? (
                                    <>
                                        in{' '}
                                        <Text style={styles.timer}>
                                            00:{this.state.timer} sec
                                        </Text>
                                    </>
                                ) : (
                                    ''
                                )}
                            </Text>
                        </View>
                        <Loader isLoading={resendOtpLoader} style={main.mt5} />
                    </TouchableOpacity>
                    <MsgBox
                        error={resendOtpError}
                        msg={resendOtpError}
                        style={[main.mt2]}
                    />
                </View>

                <Button
                    title="Verify"
                    isLoading={otpLoader}
                    onPress={this.onVerify}
                />
            </View>
        )
    }
}

const mapStateToProps = ({
    auth: {
        otpLoader,
        otpError,
        signUpSuccess,
        tempUser,
        resendOtpLoader,
        resendOtpError,
        forgetPassword,
        forgetOtpSuccess,
        loginCread,
    },
}) => ({
    otpLoader,
    otpError,
    signUpSuccess,
    tempUser,
    resendOtpError,
    resendOtpLoader,
    forgetPass: forgetPassword,
    forgetOtpSuccess,
    loginCread,
})

const mapDispatchToProps = {
    optVerify: otpVerify,
    setSignUpSuccess: setSignUpSuccess,
    resendOtp: resendOtp,
    setForgetPasswordOtpSuccess: setForgetPasswordOtpSuccess,
    setOtpError: setOtpError,
}

export default connect(mapStateToProps, mapDispatchToProps)(OTP)
