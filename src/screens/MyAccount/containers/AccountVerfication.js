import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from '../../../components/Button'
import { FormInput } from '../../../components/Form'
import KeyboardAvoidingView from '../../../components/KeyBoradAvoidingView'
import styles from '../styles'
import main from '../../../styles/main'
import { RoutesName } from '../../../navigation/routes.config'
import { getBankDetails } from '../../../utils/helpers/bankHelper'
import { connect } from 'react-redux'
import { accountVerify, addBank } from '../../../redux/actions/bankActions'
import MsgBox from '../../../components/MsgBox'

class AccountVerfication extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                values: {
                    password: '',
                },
                errors: {
                    password: '',
                },
            },
        }
    }

    onChange = ({ name, value }) => {
        const { form } = this.state
        if (['password'].includes(name)) {
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
        if (name === 'password') {
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

    componentDidMount() {}

    showErrors = () => {
        const { form } = this.state
        const { values, errors } = form
        let obj = {}
        Object.keys(values).map((i) => {
            if (!values[i]) {
                obj[i] = 'Field is required'
            } else {
                if (['password'].includes(i)) {
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
        const {
            form: { values, errors },
        } = this.state

        const valuesCheck = Object.keys(values).every((i) => values[i])
        const errorsCheck = Object.keys(errors).every((i) => !errors[i])

        if (valuesCheck && errorsCheck) {
            let bankDetails = await getBankDetails()
            let payload = { ...bankDetails, password: values['password'] }
            this.props.accountVerify(payload)
        } else {
            this.showErrors()
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.accounts?.length > prevProps.accounts?.length) {
            this.props.navigation.navigate(RoutesName.WithdrawAmount)
        }
    }

    render() {
        const {
            form: { values, errors },
        } = this.state
        const {
            navigation: { navigate },
            addBankError,
            addBankLoader,
        } = this.props
        return (
            <View style={[styles.container, main.justifyContentSpaceBetween]}>
                <View style={main.flex1}>
                    <KeyboardAvoidingView>
                        <Text style={styles.addBank}>
                            To add your bank account please enter the password
                        </Text>

                        <View style={styles.formView}>
                            <FormInput
                                placeholder="Password"
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
                        <View style={styles.saveView}></View>
                    </KeyboardAvoidingView>
                </View>
                <MsgBox error={addBankError} msg={addBankError} />

                <Button
                    title="Verify"
                    style={styles.saveBtn}
                    onPress={this.onSave}
                    isLoading={addBankLoader}
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
    accountVerify: accountVerify,
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountVerfication)
