import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../styles'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { connect } from 'react-redux'
import {
    otpVerify,
    mobileOtpVerify,
    setMobileNumberOtpSuccess,
    setMobileOtpError,
    MobileNumberRequest,
    setMobileNumberError,
    setMobileNumberSuccess,
    loginSuccess,
} from '../../../redux/actions/authActions'
import Button from '../../../components/Button'
import MsgBox from '../../../components/MsgBox'
import { getDeviceId, getFcmToken } from '../../../utils/helpers/AppHelper'
import { getDeviceType } from '../../../utils/func'
import Loader from '../../../components/Loader'
import main from '../../../styles/main'
import { Routes, RoutesName } from '../../../navigation/routes.config'

class MobileOtp extends Component {
    constructor() {
        super()
        this.state = {
            otp: '',
            timer: 10,
        }
    }

    onVerify = async () => {
        const { mobileNumber } = this.props
        let device_id = await getDeviceId()
        let device_type = getDeviceType()
        let fcm_token = await getFcmToken()

        let payload = {
            mobile_number: mobileNumber?.mobileNumber,
            otp_code: this.state.otp,
            device_id,
            device_type,
            fcm_token,
        }

        this.props.mobileOtpVerify(payload)
    }

    onRendOTP = async () => {
        const { mobileNumber } = this.props
        let device_id = await getDeviceId()
        let device_type = getDeviceType()
        let fcm_token = await getFcmToken()
        let payload = {
            mobile_number: mobileNumber?.mobileNumber,
            device_id,
            device_type,
            fcm_token,
            country_code: mobileNumber?.countryCode,
        }
        this.props.MobileNumberRequest(payload)
        this.props.MobileNumberRequest(payload)
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
        this.props.setMobileNumberOtpSuccess(false)
        this.props.setMobileOtpError('')
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.otpVerifySuccess) {
            this.props.navigation.navigate(RoutesName.LOGIN)
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const { otp } = this.state
        const {
            mobileOtpLoader,
            mobileOtpError,
            mobileNumberLoader,
            mobileNumberError,
        } = this.props

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.fgtView}>OTP Verification</Text>

                    <Text style={styles.emailView} numberOfLines={2}>
                        Please enter the OTP (One Time Password) sent to your
                        registered mobile number
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
                        error={mobileOtpError}
                        msg={mobileOtpError}
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
                        <Loader
                            isLoading={mobileNumberLoader}
                            style={main.mt5}
                        />
                    </TouchableOpacity>
                    <MsgBox
                        error={mobileNumberError}
                        msg={mobileNumberError}
                        style={[main.mt2]}
                    />
                </View>

                <Button
                    title="Verify"
                    isLoading={mobileOtpLoader}
                    onPress={this.onVerify}
                />
            </View>
        )
    }
}

const mapStateToProps = ({
    auth: {
        user,
        mobileNumber,
        mobileNumberSuccess,
        mobileOtpError,
        mobileOtpLoader,
        mobileNumberLoader,
        mobileNumberError,
    },
}) => ({
    mobileOtpLoader,
    mobileOtpError,
    user,
    mobileNumber: mobileNumber,
    mobileNumberSuccess,
    mobileNumberLoader,
    mobileNumberError,
})

const mapDispatchToProps = {
    loginSuccess: loginSuccess,
    setMobileNumberOtpSuccess: setMobileNumberOtpSuccess,
    setMobileOtpError: setMobileOtpError,
    mobileOtpVerify: mobileOtpVerify,
    MobileNumberRequest: MobileNumberRequest,
    setMobileNumberSuccess: setMobileNumberSuccess,
    setMobileNumberError: setMobileNumberError,
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileOtp)
