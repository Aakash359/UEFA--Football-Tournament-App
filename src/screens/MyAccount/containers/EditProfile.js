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

import { dateTwister, getDeviceType } from '../../../utils/func'
import { getDeviceId, getFcmToken } from '../../../utils/helpers/AppHelper'
import { validateEmail } from '../../../utils/func'
import GenderPicker from '../../../components/popups/GenderPiker'
import {
    editProfileRequest,
    showLoader,
    setEditProfileError,
    editProfileSuccess,
} from '../../../redux/actions/profileAction'
import { connect } from 'react-redux'
import CountryPhoneCodes from '../../../contants/CountryPhoneCodes'
import MsgBox from '../../../components/MsgBox'
import ModalDropdown from 'react-native-modal-dropdown'

class EditProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                values: {
                    username: this.props.auth.username,
                    fullName: this.props.auth.fullName,
                    email: this.props.auth.emailAddress,
                    mobileNumber: this.props.auth.mobileNumber,
                    dob: this.props.auth.dob,
                    gender: this.props.auth.gender,
                    nationality: this.props?.route?.params?.nationality || '',
                    countryCode: this.props?.auth?.countryCode || '',
                },
                errors: {
                    username: '',
                    fullName: '',
                    email: '',
                    mobileNumber: '',
                    dob: '',
                    gender: '',
                    nationality: '',
                    countryCode: '',
                },
            },
            showDate: false,
            tempDateTime: new Date(dateTwister(this.props.auth.dob)),
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
                this.setState({
                    form: {
                        ...form,
                        errors: { ...form.errors, [name]: null },
                    },
                })
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
                        : this.state.form.values['dob'],
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
        this.props.editProfileSuccess(false)
        this.saveSelectedCountry()

        this.props.navigation.addListener('focus', () => {
            this.saveSelectedCountry(true)
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.editProfile) {
            this.props.navigation.navigate(RoutesName.MyAccount)
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

    onSave = async () => {
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
                username: values['username'],
                fcm_token,
                device_id,
                device_type,
                country_code: values['countryCode'],
                mobile_number: values['mobileNumber'],
                dob: `${moment(this.state.tempDateTime).format('DD/MM/YYYY')}`,
                nationality: values['countryId'],
                full_name: values['fullName'],
                gender: values['gender'],
            }

            this.props.editProfileRequest(payload)
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
        const { profile } = this.props

        return (
            <View style={styles.editContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <KeyboardAvoidingView>
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
                                    <Text style={styles.code}>
                                        {values['countryCode'] || 'Code'}
                                    </Text>
                                </TouchableOpacity>
                                <ModalDropdown
                                    ref={(ref) => (this.code = ref)}
                                    defaultValue={
                                        `${
                                            CountryPhoneCodes.find(
                                                (i) =>
                                                    i.code ===
                                                    values['countryCode']
                                            ).code
                                        } ` || 'Code'
                                    }
                                    defaultIndex={CountryPhoneCodes.indexOf(
                                        CountryPhoneCodes.find(
                                            (i) =>
                                                i.code === values['countryCode']
                                        )
                                    )}
                                    options={[
                                        ...new Set(
                                            CountryPhoneCodes.map(
                                                (i) => `${i.code} | ${i.name}`
                                            )
                                        ),
                                    ]}
                                    style={[styles.modal]}
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
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    marginLeft: 10,
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
                                        this.setState({ showDate: true })
                                    }}
                                    keyboardType="numeric"
                                    maxLength={10}
                                />
                            </View>
                        </View>
                        <MsgBox error msg={errors['countryCode']} />
                        <MsgBox error msg={errors['mobileNumber']} />

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
                        <View style={styles.editbtn}>
                            <Button
                                title="Save"
                                style={styles.saveBtn}
                                onPress={this.onSave}
                                isLoading={this.props.isLoading}
                            />
                        </View>
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
                    defaultGender={this.state.form.values['gender']}
                />
            </View>
        )
    }
}

// =============== REDUX CONNECT & RESPONSE ===============
const mapStateToProps = (res) => {
    return {
        profile: res.profile?.getProfile,
        isLoading: res.profile?.isLoading,
        editProfile: res.profile.editProfile,
        auth: res.auth?.user,
        countries: res?.auth?.countryList,
    }
}
const mapDispatchToProps = {
    editProfileRequest: editProfileRequest,
    showLoader: showLoader,
    setEditProfileError: setEditProfileError,
    editProfileSuccess: editProfileSuccess,
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
