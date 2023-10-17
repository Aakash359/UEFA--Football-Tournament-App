import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView,
    Platform,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native'
import Button from '../../../components/Button'
import { FormInput } from '../../../components/Form'
import KeyboardAvoidingView from '../../../components/KeyBoradAvoidingView'
import styles from '../styles'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import main from '../../../styles/main'
import Constants from '../../../contants'
import { RoutesName } from '../../../navigation/routes.config'
import {
    getSelectedCountry,
    setCountryCode,
    setSelectedCountry,
} from '../../../utils/helpers/AuthHelper'
import { getDeviceType, validateEmail } from '../../../utils/func'
import GenderPicker from '../../../components/popups/GenderPiker'
import { getDeviceId, getFcmToken } from '../../../utils/helpers/AppHelper'
import { connect } from 'react-redux'
import { signUp } from '../../../redux/sagas/authSaga'
import {
    setSignUpError,
    setSignUpLoader,
    setSignUpSuccess,
    signUpAction,
} from '../../../redux/actions/authActions'
import MsgBox from '../../../components/MsgBox'
import ModalDropdown from 'react-native-modal-dropdown'
import CountryPhoneCodes from '../../../contants/CountryPhoneCodes'
import API from '../../../contants/apis'
import { postAuthorization } from '../../../services/api_services'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                values: {
                    username: '',
                    fullName: '',
                    email: '',
                    mobileNumber: '',
                    password: '',
                    confirmPassword: '',
                    dob: '',
                    gender: '',
                    nationality: '',
                    countryCode: '',
                },
                errors: {
                    username: '',
                    fullName: '',
                    email: '',
                    mobileNumber: '',
                    password: '',
                    confirmPassword: '',
                    dob: '',
                    gender: '',
                    nationality: '',
                    countryCode: '',
                },
            },
            showDate: false,
            tempDateTime: new Date(),
            visible: false,
        }
    }

    onChange = ({ name, value }) => {
        const { form } = this.state
        if (['password', 'confirmPassword'].includes(name)) {
            this.setState({
                form: {
                    ...form,
                    values: { ...form.values, [name]: value?.trim() },
                },
            })
        } else {
            this.setState({
                form: {
                    ...form,
                    values: {
                        ...form.values,
                        [name]: value,
                    },
                    errors: {
                        ...form.errors,
                        [name]: '',
                    },
                },
            })
        }
    }
    onBlur = ({ name, value }) => {
        const { form } = this.state

        if (['password', 'confirmPassword'].includes(name)) {
            if (!value?.trim()) {
                this.setState({
                    form: {
                        ...form,
                        errors: {
                            ...form.errors,
                            [name]: 'Field is required',
                        },
                    },
                })
            } else if (value?.trim()?.length < 8) {
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
                        errors: {
                            ...form.errors,
                            [name]: '',
                        },
                    },
                })
            }
        } else if (['email'].includes(name)) {
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
                this.validationCheck(name, value)
            }
        } else {
            if (!value?.length) {
                this.setState({
                    form: {
                        ...form,
                        errors: {
                            ...form.errors,
                            [name]: 'Field is required',
                        },
                    },
                })
            } else {
                if (['email', 'mobileNumber', 'username'].includes(name)) {
                    this.validationCheck(name, value)
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
    }

    onChangeDate = (e, date) => {
        this.setState({
            date: date
                ? `${moment(date).format('DD / MM / YYYY')}`
                : this.state.date,
            form: {
                ...this.state.form,
                values: {
                    ...this.state.form.values,
                    dob: date
                        ? `${moment(date).format('DD / MM / YYYY')}`
                        : this.state.date,
                },
                errors: {
                    ...this.state.form.errors,
                    dob: date || this.state.date ? null : 'Field is required',
                },
            },
            tempDateTime: date || this.state.tempDateTime,
            showDate:
                Platform.OS === 'ios'
                    ? this.state.showDate
                    : !this.state.showDate,
        })
    }

    onDone = () => {
        const { form } = this.state

        this.setState({
            showDate: false,
            form: {
                ...form,
                errors: {
                    ...form.errors,
                    dob: form.values.dob ? null : 'Field is required',
                },
            },
        })
    }

    saveSelectedCountry = async (error = false) => {
        const { countryName, countryId, countryCode } =
            await getSelectedCountry()
        const { form } = this.state
        if (countryName) {
            this.setState({
                form: {
                    ...form,
                    values: {
                        ...form.values,
                        nationality: countryName,
                        countryId,
                    },
                },
            })
        } else {
            if (error) {
                this.setState({
                    form: {
                        ...form,
                        errors: {
                            ...form.errors,
                            nationality: 'Field is required',
                        },
                    },
                })
            }
        }
    }

    componentDidMount() {
        setSelectedCountry('')
        this.props.setSignUpError('')
        this.saveSelectedCountry()
        this.props.navigation.addListener('focus', () => {
            this.props.setSignUpSuccess(false)

            this.saveSelectedCountry(
                this.props.route.params?.hideError ? false : true
            )
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.signUpSuccess) {
            this.props.navigation.navigate(RoutesName.OTP)
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
                    } else {
                        obj[i] = null
                    }
                } else if (['email'].includes(i)) {
                    if (!validateEmail(values[i])) {
                        obj[i] = 'Please enter valid email'
                    } else {
                        obj[i] = null
                    }
                } else {
                    obj[i] = null
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

    validationCheck = async (name, value) => {
        const url = API.validationCheck
        let type =
            name === 'email'
                ? 'email_address'
                : name === 'mobileNumber'
                ? 'mobile_number'
                : name
        const payload = {
            type,
            value,
        }
        const { form } = this.state
        try {
            const res = await postAuthorization(url, payload)

            if (res?.data?.status) {
                this.setState({
                    form: { ...form, errors: { ...form.errors, [name]: '' } },
                })
            } else {
                this.setState({
                    form: {
                        ...form,
                        errors: { ...form.errors, [name]: res?.data?.message },
                    },
                })
            }
        } catch (error) {}
    }

    onSave = async () => {
        this.props.setSignUpError('')
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
                email_address: values['email'],
                device_type,
                username: values['username'],
                fcm_token,
                device_id,
                password: values['password'],
                confirm_password: values['confirmPassword'],
                country_code: values['countryCode'],
                mobile_number: values['mobileNumber'],
                dob: moment(this.state.tempDateTime).format('DD/MM/YYYY'),
                nationality: values['countryId'],
                full_name: values['fullName'],
                gender: values['gender'],
            }
            this.props.signUp(payload)
        } else {
            this.showErrors()
        }
    }

    render() {
        const {
            form: { values, errors },
        } = this.state
        const {
            navigation: { navigate },
        } = this.props

        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <KeyboardAvoidingView>
                        <Text style={styles.signUpTitle}>Create Account</Text>
                        <FormInput
                            placeholder="Username"
                            onChangeText={this.onChange}
                            onBlur={this.onBlur}
                            name="username"
                            value={values['username']}
                            error={errors['username']}
                            ref="username"
                            onSubmitEditing={() => {
                                this.refs.fullName.refs.input.focus()
                            }}
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                        <FormInput
                            placeholder="Full Name"
                            onChangeText={this.onChange}
                            onBlur={this.onBlur}
                            name="fullName"
                            value={values['fullName']}
                            error={errors['fullName']}
                            ref="fullName"
                            onSubmitEditing={() => {
                                this.refs.email.refs.input.focus()
                            }}
                        />
                        <FormInput
                            placeholder="Email"
                            onChangeText={this.onChange}
                            onBlur={this.onBlur}
                            name="email"
                            value={values['email']}
                            error={errors['email']}
                            ref="email"
                            onSubmitEditing={() => {
                                this.refs.mobileNumber.refs.input.focus()
                            }}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <View style={[main.row, styles.phoneCombiner]}>
                            <View style={{ position: 'relative' }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => this.code._onButtonPress()}
                                    style={styles.codeWrapper}
                                >
                                    <Text
                                        style={[
                                            styles.code,
                                            {
                                                color: values['countryCode']
                                                    ? Constants.Colors.WHITE
                                                    : Constants.Colors
                                                          .SECONDARY,
                                            },
                                        ]}
                                    >
                                        {values['countryCode'] || 'Code'}
                                    </Text>
                                </TouchableOpacity>
                                <ModalDropdown
                                    ref={(ref) => (this.code = ref)}
                                    defaultValue={values['countryCode']}
                                    options={[
                                        ...new Set(
                                            CountryPhoneCodes.map(
                                                (i) => `${i.code} | ${i?.name}`
                                            )
                                        ),
                                    ]}
                                    style={styles.modal}
                                    textStyle={
                                        values['countryCode']
                                            ? styles.modalText
                                            : styles.modalTextInActive
                                    }
                                    dropdownStyle={styles.modalDropDown}
                                    dropdownTextStyle={styles.modalDropDownText}
                                    dropdownTextHighlightStyle={
                                        styles.modalDropDownHighlightedText
                                    }
                                    onSelect={(index) => {
                                        this.onChange({
                                            name: 'countryCode',
                                            value: CountryPhoneCodes[index]
                                                ?.code,
                                        })
                                        setCountryCode(
                                            CountryPhoneCodes[index]?.code
                                        )
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    marginLeft: 10,
                                    marginVertical: -7,
                                }}
                            >
                                <FormInput
                                    placeholder="Mobile Number"
                                    onChangeText={this.onChange}
                                    onBlur={this.onBlur}
                                    name="mobileNumber"
                                    value={values['mobileNumber']}
                                    // error={errors['mobileNumber']}
                                    ref="mobileNumber"
                                    onSubmitEditing={() => {
                                        this.refs.password.refs.input.focus()
                                    }}
                                    keyboardType="numeric"
                                    maxLength={10}
                                />
                            </View>
                        </View>
                        <MsgBox error msg={errors['countryCode']} />
                        <MsgBox error msg={errors['mobileNumber']} />

                        <FormInput
                            placeholder="Password"
                            onChangeText={this.onChange}
                            onBlur={this.onBlur}
                            name="password"
                            value={values['password']}
                            error={errors['password']}
                            ref="password"
                            onSubmitEditing={() => {
                                this.refs.confirmPassword.refs.input.focus()
                            }}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                        />
                        <FormInput
                            placeholder="Confirm Password"
                            onChangeText={this.onChange}
                            onBlur={this.onBlur}
                            name="confirmPassword"
                            value={values['confirmPassword']}
                            error={errors['confirmPassword']}
                            ref="confirmPassword"
                            onSubmitEditing={() => {
                                this.setState({ showDate: true })
                            }}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                        />

                        <FormInput
                            placeholder="Date Of Birth (DD/MM/YYYY)"
                            name="dob"
                            value={values['dob']}
                            error={errors['dob']}
                            ref="dob"
                            editable={false}
                            onPress={() => this.setState({ showDate: true })}
                            children={false}
                            inputRight={() => (
                                <Image
                                    style={main.icon}
                                    source={Constants.Images.calender}
                                />
                            )}
                        />
                        <FormInput
                            placeholder="Gender"
                            onChangeText={this.onChange}
                            onBlur={this.onBlur}
                            name="gender"
                            value={values['gender']}
                            error={errors['gender']}
                            ref="gender"
                            children={false}
                            inputRight={() => (
                                <Image
                                    style={main.iconSm}
                                    source={Constants.Images.down}
                                />
                            )}
                            onPress={() => this.setState({ visible: true })}
                        />
                        <FormInput
                            placeholder="Nationality"
                            onChangeText={this.onChange}
                            onBlur={this.onBlur}
                            name="nationality"
                            value={values['nationality']}
                            error={errors['nationality']}
                            ref="nationality"
                            children={false}
                            inputRight={() => (
                                <Image
                                    style={main.iconSm}
                                    source={Constants.Images.down}
                                />
                            )}
                            onPress={() => navigate(RoutesName.SelectCountry)}
                        />
                        <MsgBox
                            error={this.props.signUpError}
                            msg={this.props.signUpError}
                        />
                        <Button
                            title="Save"
                            style={styles.saveBtn}
                            onPress={this.onSave}
                            isLoading={this.props.signUpLoading}
                        />
                    </KeyboardAvoidingView>
                </ScrollView>

                {this.state.showDate && (
                    <View>
                        {Platform.OS === 'ios' && (
                            <TouchableOpacity
                                onPress={this.onDone}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#fff',
                                        width: 80,
                                        paddingVertical: 5,
                                        textAlign: 'center',
                                        marginTop: 15,
                                    }}
                                >
                                    Done
                                </Text>
                            </TouchableOpacity>
                        )}
                        <RNDateTimePicker
                            testID="dateTimePicker"
                            value={this.state.tempDateTime}
                            mode="date"
                            is24Hour={true}
                            display="spinner"
                            onChange={this.onChangeDate}
                            textColor="#fff"
                            maximumDate={new Date()}
                            onTouchCancel={() =>
                                this.setState({
                                    showDate:
                                        Platform.OS === 'ios'
                                            ? this.state.showDate
                                            : !this.state.showDate,
                                })
                            }
                        />
                    </View>
                )}
                <GenderPicker
                    visible={this.state.visible}
                    toggleVisible={() => this.setState({ visible: false })}
                    setGender={(gender) =>
                        this.setState({
                            form: {
                                ...this.state.form,
                                values: { ...this.state.form.values, gender },
                            },
                        })
                    }
                />
            </View>
        )
    }
}

const mapStateToProps = ({
    auth: { signUpLoading, signUpError, signUpSuccess },
}) => ({
    signUpLoading,
    signUpError,
    signUpSuccess,
})

const mapDispatchToProps = {
    signUp: signUpAction,
    setSignUpLoader: setSignUpLoader,
    setSignUpError: setSignUpError,
    setSignUpSuccess: setSignUpSuccess,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
