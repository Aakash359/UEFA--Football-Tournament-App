import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from '../styles'
import KeyboardAvoidingView from '../../../components/KeyBoradAvoidingView'
import { FormInput } from '../../../components/Form'
import Button from '../../../components/Button'
import {
    changePasswordRequest,
    setChangePasswordLoader,
    setChangePasswordError,
} from '../../../redux/actions/settingsActions'
import { connect } from 'react-redux'
import MsgBox from '../../../components/MsgBox'
import main from '../../../styles/main'

class ChangePassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                values: {
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: '',
                },
                errors: {
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: '',
                },
            },
            isShow: false,
        }
    }

    onChange = ({ name, value }) => {
        const { form } = this.state
        if (['oldPassword', 'newPassword', 'confirmPassword'].includes(name)) {
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

        if (['oldPassword', 'newPassword', 'confirmPassword'].includes(name)) {
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

    async componentDidMount() {
        this.props.setChangePasswordError(false)
    }

    showErrors = () => {
        const { form } = this.state
        const { values, errors } = form
        let obj = {}

        Object.keys(values).map((i) => {
            if (!values[i]) {
                obj[i] = 'Field is required'
            } else {
                if (
                    ['oldPassword', 'newPassword', 'confirmPassword'].includes(
                        i
                    )
                ) {
                    if (values[i]?.trim()?.length < 8) {
                        obj[i] = 'Please enter minimum 8 characters'
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
        this.props.setChangePasswordError('')
        const {
            form: { values, errors },
        } = this.state

        const valuesCheck = Object.keys(values).every((i) => values[i])
        const errorsCheck = Object.keys(errors).every((i) => !errors[i])

        if (valuesCheck && errorsCheck) {
            this.props.changePasswordRequest({
                old_password: values['oldPassword'],
                new_password: values['newPassword'],
                confirm_password: values['confirmPassword'],
            })
        } else {
            this.showErrors()
        }
    }

    render() {
        const {
            form: { values, errors },
        } = this.state

        return (
            <View
                style={[styles.editContainer, main.justifyContentSpaceBetween]}
            >
                <View style={main.flex1}>
                    <KeyboardAvoidingView>
                        <View style={styles.formView}>
                            <FormInput
                                placeholder="Old Password"
                                onChangeText={this.onChange}
                                onBlur={this.onBlur}
                                name="oldPassword"
                                value={values['oldPassword']}
                                error={errors['oldPassword']}
                                ref="oldPassword"
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry
                            />
                        </View>
                        <View style={styles.cnfText}>
                            <FormInput
                                placeholder="New Password"
                                onChangeText={this.onChange}
                                onBlur={this.onBlur}
                                name="newPassword"
                                value={values['newPassword']}
                                error={errors['newPassword']}
                                ref="newPassword"
                                autoCapitalize="none"
                                autoCorrect={false}
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
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry
                            />
                            <MsgBox
                                error={this.props.changePasswordError}
                                msg={this.props.changePasswordError}
                            />
                        </View>
                    </KeyboardAvoidingView>
                </View>
                <Button
                    title="Save"
                    style={[styles.saveBtn]}
                    onPress={this.onSave}
                    isLoading={this.props.changePasswordLoder}
                />
            </View>
        )
    }
}

const mapStateToProps = ({
    settings: {
        changePasswordLoder,
        changePasswordError,
        changePasswordSuccess,
    },
}) => ({
    changePasswordLoder,
    changePasswordError,
    changePasswordSuccess,
})

const mapDispatchToProps = {
    changePasswordRequest: changePasswordRequest,
    setChangePasswordLoader: setChangePasswordLoader,
    setChangePasswordError: setChangePasswordError,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)
