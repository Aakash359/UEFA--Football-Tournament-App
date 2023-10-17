import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import { FormInput } from '../../../components/Form'
import KeyboardAvoidingView from '../../../components/KeyBoradAvoidingView'
import MsgBox from '../../../components/MsgBox'
import {
    addGroupRequest,
    setAddGroupError,
    addGroupSuccess,
    addGroupShowLoader,
} from '../../../redux/actions/rankingActions'
import main from '../../../styles/main'
import styles from '../styles'
import { RoutesName } from '../../../navigation/routes.config'
import Constants from '../../../contants'

class AddGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                values: {
                    groupName: '',
                },
                errors: {
                    groupName: '',
                },
            },
        }
    }

    onChange = ({ name, value }) => {
        const { form } = this.state
        if (['groupName'].includes(name)) {
            this.setState({
                form: {
                    ...form,
                    values: { ...form.values, [name]: value },
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

        if (['groupName'].includes(name)) {
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
        const league = this.props.route.params.league
        const valuesCheck = Object.keys(values).every((i) => values[i])
        const errorsCheck = Object.keys(errors).every((i) => !errors[i])
        const selectedarray = this.props.route.params.selectedarray
        const arrayList = selectedarray == undefined ? [] : selectedarray

        if (valuesCheck && errorsCheck) {
            let payload = {
                group_name: values['groupName'],
                participants_array: arrayList,
            }
            this.props.addGroupRequest(payload)
        } else {
            this.showErrors()
        }
    }
    onInviteUser(users) {
        const league = this.props.route.params.league

        this.props.navigation.navigate(RoutesName.InviteUser, {
            league: league,
            users: users,
        })
    }
    componentDidMount() {
        this.props.addGroupSuccess(false)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.addGroupData) {
            this.props.navigation.navigate(RoutesName.MyGroups)
        }
    }

    render() {
        const {
            form: { values, errors },
        } = this.state
        const selectedarray = this.props.route.params.selectedarray
        const arrayList = selectedarray == undefined ? [] : selectedarray
        return (
            <View style={[styles.container, main.m2]}>
                <View style={[main.flex1]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <KeyboardAvoidingView>
                            <FormInput
                                placeholder="Group Name"
                                onChangeText={this.onChange}
                                onBlur={this.onBlur}
                                name="groupName"
                                value={values['groupName']}
                                error={errors['groupName']}
                                ref="groupName"
                                onSubmitEditing={() => {
                                    this.groupName.refs.input.focus()
                                }}
                            />
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => this.onInviteUser(arrayList)}
                            >
                                <Text
                                    style={
                                        (styles.buttonText,
                                        {
                                            color: arrayList?.length
                                                ? Constants.Colors.WHITE
                                                : Constants.Colors.SECONDARY,
                                        })
                                    }
                                >
                                    {arrayList?.length
                                        ? `${arrayList?.length} members selected`
                                        : 'Invite User'}
                                </Text>
                            </TouchableOpacity>
                            <MsgBox
                                error={this.props.addGroupError}
                                msg={this.props.addGroupError}
                            />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
                <Button
                    title="Save"
                    style={styles.saveBtn}
                    onPress={this.onSave}
                    isLoading={this.props.addGroupLoader}
                />
            </View>
        )
    }
}

const mapStateToProps = ({
    ranking: { addGroup, addGroupLoader, addGroupError },
}) => {
    return {
        addGroupData: addGroup,
        addGroupLoader,
        addGroupError,
    }
}
const mapDispatchToProps = {
    addGroupRequest: addGroupRequest,
    addGroupShowLoader: addGroupShowLoader,
    setAddGroupError: setAddGroupError,
    addGroupSuccess: addGroupSuccess,
}
export default connect(mapStateToProps, mapDispatchToProps)(AddGroup)
