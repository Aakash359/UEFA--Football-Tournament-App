import React, { Component } from 'react'
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    FlatList,
    TextInput,
} from 'react-native'
import Constants from '../../../contants'
import styles from '../groupDetailStyles'
import main from '../../../styles/main'
import Loader from '../../../components/Loader'
import { RoutesName } from '../../../navigation/routes.config'
import API from '../../../contants/apis'
import { postAuthorization } from '../../../services/api_services'
import { connect } from 'react-redux'
import { myGroupRequest } from '../../../redux/actions/rankingActions'
import MsgBox from '../../../components/MsgBox'

class GroupDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false,
            groupName: this.props.route.params?.groupName || '',
            participantsCount: this.props.route.params?.participantsCount,
            participantsArray: this.props.route.params?.participantsArray,
            changeNameLoader: false,
            error: '',
            userErrorLoader: { id: null, msg: '', isLoading: false },
            leaveGroupLoader: false,
        }
    }

    changeGroupName = async () => {
        this.setState({ changeNameLoader: true, error: '' })
        const url = API.changeGroupName
        const { userGroupId } = this.props.route.params
        const payload = {
            user_group_id: userGroupId,
            group_name: this.state.groupName,
        }

        try {
            const res = await postAuthorization(url, payload)
            if (res?.data?.status) {
                this.setState({ edit: false, changeNameLoader: false })
                this.props.myGroupRequest()
            } else {
                this.setState({
                    error: res?.data?.message,
                    changeNameLoader: false,
                })
            }
        } catch (e) {
            this.setState({ error: e?.message, changeNameLoader: false })
        }
    }

    removeUser = async (userId) => {
        this.setState({
            userErrorLoader: { id: userId, msg: '', isLoading: true },
        })
        const url = API.removeGroupUser
        const { userGroupId } = this.props.route.params
        const payload = {
            user_group_id: userGroupId,
            participant_id: userId,
        }

        const { participantsArray } = this.state

        try {
            const res = await postAuthorization(url, payload)

            if (res?.data?.status) {
                this.props.myGroupRequest()
                let users = [...participantsArray]
                let user = users?.find((i) => i?.participantId === userId)
                let index = users?.indexOf(user)
                users.splice(index, 1)
                this.setState({
                    participantsArray: users,
                    participantsCount: this.state.participantsCount - 1,
                })
            } else {
                this.setState({
                    userErrorLoader: {
                        id: userId,
                        msg: res?.data?.message,
                        isLoading: false,
                    },
                })
            }
        } catch (e) {
            this.setState({
                userErrorLoader: {
                    id: userId,
                    msg: e?.message,
                    isLoading: false,
                },
            })
        }
    }

    renderItems = ({ item, index }) => {
        return (
            <View>
                <View style={[styles.header, main.flexCenter]}>
                    <View style={[main.row, main.flexCenter]}>
                        <Text style={styles.rank}>#{++index}</Text>

                        <View
                            style={[main.row, main.flexCenter, styles.rowCard]}
                        >
                            <View
                                style={[
                                    main.row,
                                    main.flexCenter,
                                    { flex: 0.8 },
                                ]}
                            >
                                <Image
                                    source={{ uri: item?.imageUrl }}
                                    style={main.profilePic}
                                />
                                <Text
                                    ellipsizeMode="tail"
                                    style={styles.username}
                                    numberOfLines={1}
                                >
                                    {item?.username}
                                </Text>
                                <Text style={styles.points}>
                                    {item?.points}
                                </Text>
                            </View>
                            {this.isAdmin() &&
                            item?.participantId !== this.props?.userId ? (
                                <TouchableOpacity
                                    disabled={
                                        this.state?.userErrorLoader?.id ===
                                            item?.participantId &&
                                        this.state?.userErrorLoader?.isLoading
                                    }
                                    style={styles.removeBtn}
                                    onPress={() =>
                                        this.removeUser(item?.participantId)
                                    }
                                >
                                    {this.state?.userErrorLoader?.id ===
                                        item?.participantId &&
                                    this.state?.userErrorLoader?.isLoading ? (
                                        <Loader isLoading={true} size="small" />
                                    ) : (
                                        <Text style={styles.removeBtnText}>
                                            Remove
                                        </Text>
                                    )}
                                </TouchableOpacity>
                            ) : null}
                        </View>
                    </View>
                </View>
                <MsgBox
                    error
                    msg={
                        this.state?.userErrorLoader?.id === item?.participantId
                            ? this.state?.userErrorLoader?.msg
                            : null
                    }
                />
            </View>
        )
    }

    footer = () => {
        return (
            <View style={main.my3}>
                <View style={[main.seprator, main.my3]} />
                {this.isParticipant() && (
                    <TouchableOpacity
                        disabled={this.state.leaveGroupLoader}
                        onPress={this.leaveGroup}
                        style={styles.leaveGroupBtn}
                    >
                        <Text style={styles.leaveGroupText}>Leave group</Text>
                        {this.state.leaveGroupLoader ? (
                            <Loader
                                isLoading={this.state.leaveGroupLoader}
                                size="small"
                            />
                        ) : (
                            <Image
                                source={Constants.Images.rightBack}
                                style={main.icon}
                            />
                        )}
                    </TouchableOpacity>
                )}
            </View>
        )
    }

    isParticipant = (id = null) => {
        const { participantsArray } = this.props.route.params
        const { userId } = this.props

        if (id) {
            return participantsArray.filter((i) => i?.participantId === id)
                ?.length
                ? true
                : false
        }

        return participantsArray.filter((i) => i?.participantId === userId)
            ?.length
            ? true
            : false
    }

    isAdmin = (id = null) => {
        const { userId } = this.props.route?.params
        const myUserId = this.props.userId
        if (id) {
            return id === userId
        } else return myUserId === userId
    }

    onInviteUser = () => {
        const { league, userGroupId, participantsArray } =
            this.props.route.params

        this.props.navigation.navigate(RoutesName.InviteUser, {
            league: league,
            oldUsers: participantsArray,
            userGroupId: userGroupId,
            addUser: true,
        })
    }

    leaveGroup = async () => {
        this.setState({ leaveGroupLoader: true, error: '' })
        const url = API.leaveGroup
        const { userGroupId } = this.props.route.params
        const payload = {
            user_group_id: userGroupId,
        }

        try {
            const res = await postAuthorization(url, payload)
            if (res?.data?.status) {
                this.setState({ leaveGroupLoader: false, error: '' })
                this.props.myGroupRequest()
                this.props.navigation.goBack()
            } else {
                this.setState({
                    error: res?.data?.message,
                    leaveGroupLoader: false,
                })
            }
        } catch (e) {
            this.setState({ error: e?.message, leaveGroupLoader: false })
        }
    }

    render() {
        const { edit, groupName, changeNameLoader } = this.state
        const { participantsCount, participantsArray } = this.state

        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.header}>
                        {edit ? (
                            <TextInput
                                style={styles.groupName}
                                value={groupName}
                                ref="groupName"
                                onChangeText={(groupName) =>
                                    this.setState({ groupName })
                                }
                                autoCorrect={false}
                            />
                        ) : (
                            <View style={styles.editWrapper}>
                                <Text style={styles.groupName}>
                                    {groupName}
                                </Text>
                                {this.isAdmin() && (
                                    <TouchableOpacity
                                        style={styles.editIcon}
                                        onPress={() =>
                                            this.setState({ edit: true }, () =>
                                                this.refs.groupName.focus()
                                            )
                                        }
                                    >
                                        <Image
                                            source={Constants.Images.editIocn}
                                            style={main.icon}
                                        />
                                    </TouchableOpacity>
                                )}
                            </View>
                        )}
                        {edit &&
                            (changeNameLoader ? (
                                <Loader
                                    size="small"
                                    color={Constants.Colors.PRIMARY}
                                    isLoading={changeNameLoader}
                                />
                            ) : (
                                <TouchableOpacity
                                    onPress={this.changeGroupName}
                                >
                                    <Image
                                        source={Constants.Images.check}
                                        style={main.icon}
                                    />
                                </TouchableOpacity>
                            ))}
                    </View>
                    <MsgBox error msg={this.state.error} />
                </View>
                <View style={styles.header}>
                    <Text style={styles.memberCountText}>
                        {participantsCount}{' '}
                        {participantsCount > 1 ? 'members' : 'member'}
                    </Text>
                    <TouchableOpacity onPress={this.onInviteUser}>
                        <Text style={styles.addMemberText}>+ Add Member</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={main.mt3}
                    data={participantsArray}
                    keyExtractor={(item, i) => `${i}`}
                    renderItem={this.renderItems}
                    ListFooterComponent={this.footer}
                />
            </View>
        )
    }
}

const mapStateToProps = ({
    auth: {
        user: { userId },
    },
}) => ({ userId })

const mapDispatchToProps = {
    myGroupRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetails)
