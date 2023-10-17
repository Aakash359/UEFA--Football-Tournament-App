import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native'
import { connect } from 'react-redux'
import { RoutesName } from '../../../navigation/routes.config'
import {
    login,
    setLoginError,
    showLoader,
} from '../../../redux/actions/authActions'
import styles from '../styles'
import { FormInput } from '../../../components/Form'
import typography from '../../../contants/typography'
import Constants from '../../../contants'
import { getDeviceType, validateEmail } from '../../../utils/func'
import Loader from '../../../components/Loader'
import KeyboardAvoidingView from '../../../components/KeyBoradAvoidingView'
import Button from '../../../components/Button'
import main from '../../../styles/main'
import { getDeviceId, getFcmToken } from '../../../utils/helpers/AppHelper'
import MsgBox from '../../../components/MsgBox'

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                values: {
                    email: '',
                    password: '',
                },
                errors: {
                    email: '',
                    password: '',
                },
            },
        }
    }

    showErrors = () => {
        const { form } = this.state
        const { values, errors } = form
        let obj = {}
        Object.keys(values).map((i) => {
            if (!values[i]) {
                obj[i] = 'Field is required'
            } else {
                if (['password', 'confirmPassword'].includes(i)) {
                    if (values[i]?.trim()?.length < 8) {
                        obj[i] = 'Please enter minimum 8 characters'
                    }
                }
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

    onLogin = async () => {
        this.props.setLoginError('')
        const {
            form: { values, errors },
        } = this.state

        const valuesCheck = Object.keys(values).every((i) => values[i])
        const errorsCheck = Object.keys(errors).every((i) => !errors[i])

        if (valuesCheck && errorsCheck) {
            let device_id = await getDeviceId()
            let device_type = getDeviceType()
            let fcm_token = await getFcmToken()
            this.props.login({
                email_address: values['email'],
                password: values['password'],
                device_id,
                device_type,
                fcm_token,
            })
        } else {
            this.showErrors()
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
        if (name === 'email') {
            if (!value) {
                this.setState({
                    form: {
                        ...form,
                        errors: {
                            ...form.errors,
                            [name]: 'Field is required',
                        },
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
                        errors: {
                            ...form.errors,
                            [name]: '',
                        },
                    },
                })
            }
        } else {
            if (!value) {
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
                        errors: { ...form.errors, [name]: null },
                    },
                })
            }
        }
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            if (!this.props?.loginError.includes('session')) {
                this.props.setLoginError('')
            }
        })
    }
    componentDidUpdate() {
        if (this.props.loginError === 'Please verify OTP first!') {
            this.props.navigation.navigate(RoutesName.OTP)
        }
    }

    render() {
        const {
            form: { values, errors },
        } = this.state
        const { loginError } = this.props
        const socialIcons = [
            {
                icon: Constants.Images.mobile,
                name: 'mobile',
                onPress: () => {
                    this.props.navigation.navigate(RoutesName.Mobile)
                },
            },
        ]

        return (
            <View style={[styles.container, { marginTop: 50 }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <KeyboardAvoidingView>
                        <Text
                            style={{
                                color: Constants.Colors.WHITE,
                                fontFamily: typography.FONT_FAMILY_BOLD,
                                fontWeight: 'bold',
                                fontSize: 35,
                            }}
                        >
                            Welcome
                        </Text>
                        <View style={{ marginTop: 20 }}>
                            <FormInput
                                placeholder="Email"
                                onChangeText={this.onChange}
                                onBlur={this.onBlur}
                                name="email"
                                value={values['email']}
                                error={errors['email']}
                                ref="email"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>

                        <FormInput
                            placeholder="Password"
                            onChangeText={this.onChange}
                            onBlur={this.onBlur}
                            name="password"
                            secureTextEntry={true}
                            value={values['password']}
                            error={errors['password']}
                            ref="password"
                        />
                        <MsgBox error={loginError} msg={loginError} />
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate(
                                    RoutesName.ForgotPassword
                                )
                            }
                            style={{ marginTop: 10 }}
                        >
                            <Text
                                style={{
                                    color: Constants.Colors.WHITE,
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                }}
                            >
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>

                        <Button
                            onPress={this.onLogin}
                            isLoading={this.props.isLoading}
                            disabled={this.props.isLoading}
                            title="Login"
                            style={main.mt10}
                        />

                        <View style={styles.orContainer}>
                            <Image
                                style={{
                                    width: Constants.BaseStyle.scale(20),
                                }}
                                source={Constants.Images.line}
                            />
                            <Text style={styles.loginText}>or login using</Text>

                            <Image
                                style={{
                                    width: Constants.BaseStyle.scale(20),
                                }}
                                source={Constants.Images.line}
                            />
                        </View>

                        <View style={styles.socialIconsWrapper}>
                            {socialIcons.map((social, i) => (
                                <TouchableOpacity
                                    key={`${i}`}
                                    onPress={social.onPress}
                                    style={{ marginTop: 10 }}
                                >
                                    <Image
                                        source={social.icon}
                                        resizeMode="contain"
                                        style={styles.socialIcon}
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>

                        <View
                            style={{
                                alignItems: 'center',

                                flexDirection: 'row',
                                marginTop: Constants.BaseStyle.scale(55),
                                justifyContent: 'center',
                                marginBottom: Constants.BaseStyle.scale(10),
                                width: '100%',
                            }}
                        >
                            <Text
                                style={{
                                    color: Constants.Colors.WHITE,
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                }}
                            >
                                Don't have an account
                            </Text>
                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        RoutesName.SIGNUP,
                                        {
                                            hideError: true,
                                        }
                                    )
                                }
                            >
                                <Text
                                    style={{
                                        fontSize: 15,
                                        color: Constants.Colors.PRIMARY,
                                        marginLeft: 5,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Create Account
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = ({ auth: { isLoading, loginError } }) => ({
    isLoading,
    loginError,
})

const mapDispatchToProps = {
    login: login,
    showLoader: showLoader,
    setLoginError: setLoginError,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
