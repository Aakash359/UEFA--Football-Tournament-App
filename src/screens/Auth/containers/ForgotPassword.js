import React, { Component } from 'react'
import { Text, View,} from 'react-native'
import styles from '../styles'
import { FormInput } from '../../../components/Form'
import { RoutesName } from '../../../navigation/routes.config'
import { getDeviceType, validateEmail } from '../../../utils/func'
import Loader from '../../../components/Loader'
import { connect } from 'react-redux'
import {
    forgetPassword,
    login,
    setForgetPasswordError,
    setForgetPasswordSuccess,
    showLoader,
} from '../../../redux/actions/authActions'
import KeyboardAvoidingView from '../../../components/KeyBoradAvoidingView'
import Button from '../../../components/Button'
import main from '../../../styles/main'
import MsgBox from '../../../components/MsgBox'
import { getDeviceId, getFcmToken } from '../../../utils/helpers/AppHelper'


class ForgotPassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                values: {
                    email: '',
                },
                errors: {
                    email: '',
                },
            },
        }
    }

    onChange = ({ name, value }) => {
        const { form } = this.state
        this.setState({
            form: { ...form, values: { ...form.values, [name]: value } },
        })
    }

    showErrors = () => {
        const { form } = this.state
        const { values, errors } = form
        let obj = {}
        Object.keys(values).map((i) => {
            if (!values[i]) {
                obj[i] = 'Field is required'
            } else {
                if (['email'].includes(i)) {
                    if (!validateEmail(values[i])) {
                        obj[i] = 'Please enter valid email'
                    }
                }
            }
        })

        this.setState({
            form: {
                ...form,
                errors: {
                    ...form.errors,
                    ...obj,
                },
            },
        })
    }

    onBlur = ({ name, value }) => {
        const { form } = this.state
        if (!value?.length) {
            this.setState({
                form: {
                    ...form,
                    errors: { ...form.errors, [name]: 'Field is required' },
                },
            })
        } else if (!validateEmail(value)) {
            this.setState({
                form: {
                    ...form,
                    errors: {
                        ...form.errors,
                        [name]: 'Please enter valid email',
                    },
                },
            })
        } else {
            this.setState({
                form: {
                    ...form,
                    errors: { ...form.errors, [name]: null },
                },
            })
        }
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.props.setForgetPasswordSuccess(null)
        })
        this.props.setForgetPasswordError('')
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.forgetPass?.otpCode) {
            this.props.navigation.navigate(RoutesName.OTP, {
                forgetPassword: true,
            })
        }
    }

    onContinue = async () => {
        const {
            form: { values, errors },
        } = this.state

        const valuesCheck = Object.keys(values).every((i) => values[i])
        const errorsCheck = Object.keys(errors).every((i) => !errors[i])

        if (valuesCheck && errorsCheck) {
            let device_id = await getDeviceId()
            let device_type = getDeviceType()
            let fcm_token = await getFcmToken()
            let payload = {
                email_address: values?.email,
                device_id,
                device_type,
                fcm_token,
            }
            this.props.forgetPassword(payload)
        } else {
            this.showErrors()
        }
    }

    render() {
        const {
            form: { values, errors },
        } = this.state

        const { forgetPasswordLoader, forgetPasswordError } = this.props

        return (
            <View style={[styles.container, main.justifyContentSpaceBetween]}>
                <View style={main.flex1}>
                    <KeyboardAvoidingView>
                        <Text style={styles.fgtView}>Forgot Password</Text>

                        <Text style={styles.emailView}>
                            Please enter your registered email to reset the
                            password
                        </Text>
                        <View style={styles.formView}>
                            <FormInput
                                placeholder="Email"
                                onChangeText={this.onChange}
                                onBlur={this.onBlur}
                                name="email"
                                value={values['email']}
                                error={errors['email']}
                                ref="email"
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="email-address"
                            />
                            <MsgBox
                                error={forgetPasswordError}
                                msg={forgetPasswordError}
                            />
                        </View>
                    </KeyboardAvoidingView>
                </View>
                <Button
                    title="Continue"
                    style={[styles.saveBtn]}
                    onPress={this.onContinue}
                    isLoading={forgetPasswordLoader}
                />
            </View>
        )
    }
}

const mapStateToProps = ({
    auth: { forgetPassword, forgetPasswordLoader, forgetPasswordError },
}) => ({
    forgetPass: forgetPassword,
    forgetPasswordLoader,
    forgetPasswordError,
})

const mapDispatchToProps = {
    forgetPassword: forgetPassword,
    setForgetPasswordSuccess: setForgetPasswordSuccess,
    setForgetPasswordError: setForgetPasswordError,
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
