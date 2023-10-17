import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import { FormInput } from '../../../components/Form'
import { TextArea } from '../../../components/TextArea'
import KeyboardAvoidingView from '../../../components/KeyBoradAvoidingView'
import {
    setContactUsError,
    setContactUsLoader,
    contactUs,
} from '../../../redux/actions/settingsActions'
import MsgBox from '../../../components/MsgBox'
import styles from '../styles'
import main from '../../../styles/main'

class ContactUs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                values: {
                    subject: '',
                    description: '',
                },
                errors: {
                    subject: '',
                    description: '',
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
            },
        })
    }
    onBlur = ({ name, value }) => {
        const { form } = this.state

        if (!value && !value?.length) {
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
        this.props.setContactUsError('')
        const {
            form: { values, errors },
        } = this.state

        const valuesCheck = Object.keys(values).every((i) => values[i])
        const errorsCheck = Object.keys(errors).every((i) => !errors[i])

        if (valuesCheck && errorsCheck) {
            this.props.contactUs({
                subject: values['subject'],
                message: values['description'],
            })
            setTimeout(() => {
                this.props.navigation.navigate('myAccount')
            }, 1000)
        } else {
            this.showErrors()
        }
    }

    componentDidMount() {
        this.props.setContactUsError('')
    }

    render() {
        const {
            form: { values, errors },
        } = this.state
        const {
            navigation: { navigate },
        } = this.props
        return (
            <View
                style={[styles.Concontainer, main.justifyContentSpaceBetween]}
            >
                <View style={main.flex1}>
                    <KeyboardAvoidingView>
                        <View style={styles.ctnView}>
                            <FormInput
                                placeholder="Subject"
                                onChangeText={this.onChange}
                                onBlur={this.onBlur}
                                name="subject"
                                value={values['subject']}
                                error={errors['subject']}
                                ref="subject"
                                autoCorrect={false}
                                autoCapitalize="none"
                            />
                        </View>
                        <View style={styles.areaView}>
                            <FormInput
                                containerStyle={styles.textArea}
                                onBlur={this.onBlur}
                                name="description"
                                onChangeText={this.onChange}
                                value={values['description']}
                                error={errors['description']}
                                multiline={true}
                                placeholder="Description"
                                ref="description"
                            />
                            <MsgBox
                                error={this.props.contactUsError}
                                msg={this.props.contactUsError}
                            />
                        </View>
                    </KeyboardAvoidingView>
                </View>

                <Button
                    title="Submit"
                    style={[styles.saveBtn]}
                    onPress={this.onSave}
                    isLoading={this.props.contactUsLoading}
                />
            </View>
        )
    }
}

const mapStateToProps = ({
    settings: { contactUsLoading, contactUsError, contactUsSuccess },
}) => ({
    contactUsLoading,
    contactUsError,
    contactUsSuccess,
})

const mapDispatchToProps = {
    contactUs: contactUs,
    setContactUsLoader: setContactUsLoader,
    setContactUsError: setContactUsError,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs)
