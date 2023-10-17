import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import styles from '../styles'
import { FormInput } from '../../../components/Form'
import { getDeviceType, validateEmail } from '../../../utils/func'
import KeyboardAvoidingView from '../../../components/KeyBoradAvoidingView'
import Button from '../../../components/Button'
import main from '../../../styles/main'
import {
    MobileNumberRequest,
    setMobileNumberError,
    setMobileNumberSuccess,
} from '../../../redux/actions/authActions'
import {
    getSelectedCountry,
    setCountryCode,
    setSelectedCountry,
} from '../../../utils/helpers/AuthHelper'

import Constants from '../../../contants'
import { connect } from 'react-redux'
import MsgBox from '../../../components/MsgBox'
import { getDeviceId, getFcmToken } from '../../../utils/helpers/AppHelper'
import { RoutesName } from '../../../navigation/routes.config'
import ModalDropdown from 'react-native-modal-dropdown'
import CountryPhoneCodes from '../../../contants/CountryPhoneCodes'

class Mobile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                values: {
                    mobile: '',
                    countryCode: '',
                },
                errors: {
                    mobile: '',
                    countryCode: '',
                },
            },
        }
    }

    onChange = ({ name, value }) => {
        const { form } = this.state
        this.setState({
            form: {
                ...form,
                values: { ...form.values, [name]: value },
                errors: { ...form.errors, [name]: null },
            },
        })
    }

    showErrors = () => {
        const { form } = this.state
        const { values, errors } = form
        let obj = {}
        Object.keys(values).map((i) => {
            if (!values[i]) {
                obj[i] = 'Field is required'
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
        setSelectedCountry('')
        this.props.setMobileNumberError('')
        this.props.navigation.addListener('focus', () => {
            this.props.setMobileNumberSuccess(null)
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.mobileNumber) {
            const {
                form: { values, errors },
            } = this.state

            this.props.navigation.navigate(RoutesName.MobileOtp)
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
                mobile_number: values?.mobile,
                device_id,
                device_type,
                fcm_token,
                country_code: values['countryCode'],
            }
            this.props.MobileNumberRequest(payload)
        } else {
            this.showErrors()
        }
    }

    render() {
        const {
            form: { values, errors },
        } = this.state

        const { mobileNumberLoader, mobileNumberError } = this.props
        const {
            navigation: { navigate },
        } = this.props
        return (
            <View style={[styles.container, main.justifyContentSpaceBetween]}>
                <View style={main.flex1}>
                    <KeyboardAvoidingView>
                        <Text style={styles.emailView}>
                            Please select country code and enter your mobile
                            number
                        </Text>
                        <View style={styles.formView}>
                            <View style={[main.row, styles.phoneCombiner]}>
                                <View style={{ position: 'relative' }}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() =>
                                            this.code._onButtonPress()
                                        }
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
                                                    (i) =>
                                                        `${i.code} | ${i?.name}`
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
                                        dropdownTextStyle={
                                            styles.modalDropDownText
                                        }
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
                                        name="mobile"
                                        value={values['mobile']}
                                        ref="mobile"
                                        value={values['mobileNumber']}
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
                            <MsgBox error msg={errors['mobile']} />
                            <MsgBox
                                error={mobileNumberError}
                                msg={mobileNumberError}
                            />
                        </View>
                    </KeyboardAvoidingView>
                </View>
                <Button
                    title="Continue"
                    style={[styles.saveBtn]}
                    onPress={this.onContinue}
                    isLoading={mobileNumberLoader}
                />
            </View>
        )
    }
}

const mapStateToProps = ({
    auth: { mobileNumber, mobileNumberLoader, mobileNumberError },
}) => ({
    mobileNumber: mobileNumber,
    mobileNumberLoader,
    mobileNumberError,
})

const mapDispatchToProps = {
    MobileNumberRequest: MobileNumberRequest,
    setMobileNumberSuccess: setMobileNumberSuccess,
    setMobileNumberError: setMobileNumberError,
}

export default connect(mapStateToProps, mapDispatchToProps)(Mobile)
