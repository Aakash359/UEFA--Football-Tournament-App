import React, { Component } from 'react'
import { Text, View, ScrollView, Alert } from 'react-native'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import { FormInput } from '../../../components/Form'
import KeyboardAvoidingView from '../../../components/KeyBoradAvoidingView'
import { addBank, setAddBankError } from '../../../redux/actions/bankActions'
import main from '../../../styles/main'
import styles from '../styles'
import { setBankDetails } from '../../../utils/helpers/bankHelper'
import { RoutesName } from '../../../navigation/routes.config'

class AddBank extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                values: {
                    accountHolderName: '',
                    bankName: '',
                    accountCode: '',
                    accountNumber: '',
                },
                errors: {
                    accountHolderName: '',
                    bankName: '',
                    accountCode: '',
                    accountNumber: '',
                },
            },
        }
    }

    onChange = ({ name, value }) => {
        const { form } = this.state
        if (['accountHolderName', 'bankName'].includes(name)) {
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

        if (['accountHolderName'].includes(name)) {
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

    onSave = async () => {
        const {
            form: { values, errors },
        } = this.state

        const valuesCheck = Object.keys(values).every((i) => values[i])
        const errorsCheck = Object.keys(errors).every((i) => !errors[i])

        if (valuesCheck && errorsCheck) {
            let payload = {
                bank_business_name: values['bankName'],
                account_number: values['accountNumber'],
                account_holder_name: values['accountHolderName'],
                routing_number: values['accountCode'],
            }

            await setBankDetails(payload)
            this.props.navigation.navigate(RoutesName.AccountVerfication)
        } else {
            this.showErrors()
        }
    }

    componentDidMount() {
        this.props.setAddBankError('')
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.accounts?.length > prevProps.accounts?.length) {
            this.setState(
                {
                    form: {
                        values: {
                            accountHolderName: '',
                            bankName: '',
                            accountCode: '',
                            accountNumber: '',
                        },
                        errors: {
                            accountHolderName: '',
                            bankName: '',
                            accountCode: '',
                            accountNumber: '',
                        },
                    },
                },
                () => {
                    this.props.navigation.goBack()
                }
            )
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
            <View style={[styles.container, main.m2]}>
                <View style={[main.flex1]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <KeyboardAvoidingView>
                            <FormInput
                                placeholder="Account Holder name"
                                onChangeText={this.onChange}
                                onBlur={this.onBlur}
                                name="accountHolderName"
                                value={values['accountHolderName']}
                                error={errors['accountHolderName']}
                                ref="accountHolderName"
                                onSubmitEditing={() => {
                                    this.bankName.refs.input.focus()
                                }}
                                autoCorrect={false}
                                autoCapitalize="none"
                            />
                            <FormInput
                                placeholder="Bank Name"
                                onChangeText={this.onChange}
                                onBlur={this.onBlur}
                                name="bankName"
                                value={values['bankName']}
                                error={errors['bankName']}
                                ref="bankName"
                                onSubmitEditing={() => {
                                    this.refs.accountNumber.refs.input.focus()
                                }}
                            />

                            <FormInput
                                placeholder="Account number"
                                onChangeText={this.onChange}
                                onBlur={this.onBlur}
                                name="accountNumber"
                                value={values['accountNumber']}
                                error={errors['accountNumber']}
                                ref="accountNumber"
                                onSubmitEditing={() => {
                                    this.refs.accountCode.refs.input.focus()
                                }}
                                keyboardType="numeric"
                                maxLength={16}
                            />
                            <FormInput
                                placeholder="Account Code"
                                onChangeText={this.onChange}
                                onBlur={this.onBlur}
                                name="accountCode"
                                value={values['accountCode']}
                                error={errors['accountCode']}
                                ref="accountCode"
                                onSubmitEditing={() => {
                                    this.accountCode.refs.input.focus()
                                }}
                                autoCorrect={false}
                                autoCapitalize="none"
                            />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
                <Button
                    title="Save"
                    style={styles.saveBtn}
                    onPress={this.onSave}
                />
            </View>
        )
    }
}

const mapStateToProps = ({
    bank: { addBankError, addBankLoader, accounts },
}) => {
    return {
        addBankError,
        addBankLoader,
        accounts,
    }
}

const mapDispatchToProps = {
    addBank: addBank,
    setAddBankError: setAddBankError,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBank)
