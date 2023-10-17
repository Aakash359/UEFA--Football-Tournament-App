import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from '../styles'
import KeyboardAvoidingView from '../../../components/KeyBoradAvoidingView'
import { FormInput } from '../../../components/Form'
import Button from '../../../components/Button'
import main from '../../../styles/main'
import { connect } from 'react-redux'
import {
    resetPassword,
    setResetPasswordError,
    setResetPasswordSuccess,
} from '../../../redux/actions/authActions'
import { getDeviceId, getFcmToken } from '../../../utils/helpers/AppHelper'
import { getDeviceType } from '../../../utils/func'
import MsgBox from '../../../components/MsgBox'
import {RoutesName } from '../../../navigation/routes.config'

class ResetPassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                values: {
                    password: '',
                    confirmPassword: '',
                },
                errors: {
                    password: '',
                    confirmPassword: '',
                },
            },
            isShow: false,
        }
    }

    onChange = ({ name, value }) => {
        const { form } = this.state
        this.setState({
            form: { ...form, values: { ...form.values, [name]: value } },
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
        } else if (value?.length < 8) {
            this.setState({
                form: {
                    ...form,
                    errors: {
                        ...form.errors,
                        [name]: 'Please enter minimum 8 characters',
                    },
                },
            })
        } else {
            this.setState({
                form: {
                    ...form,
                    errors: { ...form.errors, [name]: '' },
                },
            })
        }
    }

    showErrors = () => {
        const { form } = this.state
        const { values } = form
        let obj = {}
        Object.keys(values).map((i) => {
            if (!values[i]) {
                obj[i] = 'Field is required'
            } else if (values[i]?.length < 8) {
                obj[i] = 'Please enter minimum 8 characters'
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

    componentDidMount() {
        this.props.setResetPasswordError('')
        this.props.setResetPasswordSuccess(false)
    }

    componentDidUpdate() {
        if (this.props.resetPasswordSuccess) {
            this.props.navigation.replace(RoutesName.LOGIN)
        }
    }

    onReset = async () => {
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
                password: values?.password,
                confirm_password: values?.confirmPassword,
                device_id,
                device_type,
                fcm_token,
            }
            this.props.resetPassword(payload)
        } else {
            this.showErrors()
        }
    }

    render() {
        const {
            form: { values, errors },
        } = this.state

        const { resetPasswordLoader, resetPasswordError } = this.props

        return (
            <View style={[styles.container, main.justifyContentSpaceBetween]}>
                <View style={[main.flex1]}>
                    <KeyboardAvoidingView>
                        <Text style={styles.fgtView}>Reset Password</Text>

                        <Text style={styles.emailView}>
                            You are one step away for reset password please
                            enter your password below
                        </Text>

                        <View style={styles.formView}>
                            <FormInput
                                placeholder="New Password"
                                onChangeText={this.onChange}
                                onBlur={this.onBlur}
                                name="password"
                                value={values['password']}
                                error={errors['password']}
                                ref="password"
                                autoCorrect={false}
                                autoCapitalize="none"
                                secureTextEntry
                            />
                        </View>
                        <View style={styles.cnfText}>
                            <FormInput
                                placeholder="Confirm Password"
                                onChangeText={this.onChange}
                                onBlur={this.onBlur}
                                name="confirmPassword"
                                value={values['confirmPassword']}
                                error={errors['confirmPassword']}
                                ref="confirmPassword"
                                autoCorrect={false}
                                autoCapitalize="none"
                                secureTextEntry
                            />
                        </View>
                        <MsgBox
                            error={resetPasswordError}
                            msg={resetPasswordError}
                        />
                    </KeyboardAvoidingView>
                </View>

                <Button
                    title="Save"
                    style={[styles.saveBtn]}
                    onPress={this.onReset}
                    isLoading={resetPasswordLoader}
                />
            </View>
        )
    }
}

const mapStateToProps = ({
    auth: { resetPasswordLoader, resetPasswordError, resetPasswordSuccess },
}) => {
    return {
        resetPasswordLoader,
        resetPasswordError,
        resetPasswordSuccess,
    }
}

const mapDispatchToProps = {
    resetPassword: resetPassword,
    setResetPasswordError: setResetPasswordError,
    setResetPasswordSuccess: setResetPasswordSuccess,
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
