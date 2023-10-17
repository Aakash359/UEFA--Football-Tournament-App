import React, { Component } from 'react'
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native'
import Constants from '../../../contants'
import Button from '../../../components/Button'
import { connect } from 'react-redux'
import { ranking } from '../../../redux/actions/rankingActions'
import Loader from '../../../components/Loader'
import MsgBox from '../../../components/MsgBox'
import main from '../../../styles/main'
import styles from '../styles'
import { RoutesName } from '../../../navigation/routes.config'
import ModalDropdown from 'react-native-modal-dropdown'
import API from '../../../contants/apis'
import {
    getAuthorization,
    postAuthorization,
} from '../../../services/api_services'
class PlayerRanking extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedarrayList: this.props.route?.params?.users || [],
            userList: [],
            isLoading: true,
            error: '',
            addUserLoader: false,
            addUserError: '',
            oldUsers: this.props.route?.params?.oldUsers || [],
        }
    }

    getUserList = async () => {
        this.setState({ isLoading: true, error: '' })
        const url = API.userList
        try {
            const res = await getAuthorization(url)

            if (res?.data?.status) {
                this.setState({ isLoading: false, userList: res?.data?.data })
            } else {
                this.setState({ isLoading: false, error: res?.data?.message })
            }
        } catch (error) {
            this.setState({ isLoading: false, error: error?.message })
        }
    }

    onSelectItem = (item, index) => {
        let data = [...this.state.selectedarrayList]
        if (data.includes(item.userId)) {
            let data1 = data.indexOf(item.userId)

            data.splice(data1, 1)

            this.setState({
                selectedarrayList: data,
            })
        } else {
            data.push(item.userId)
            this.setState({
                selectedarrayList: data,
            })
        }
    }
    renderRanks = ({ item, index }) => {
        const me = item?.userId === this.props.userId
        return (
            <View style={[main.row, styles.rankWrapper]}>
                <Text style={styles.rankUsername}># {++index}</Text>
                <View
                    style={[
                        main.row,
                        main.flex1,
                        me ? styles.myRankContainer : styles.rankContainer,
                    ]}
                >
                    <View
                        style={[main.row, main.flex1, styles.rankUserContainer]}
                    >
                        <Image
                            source={{ uri: item?.imageUrl }}
                            style={styles.rankUserImg}
                        />
                        <Text style={styles.rankUsername}>
                            {item?.username}
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.touch1}
                        onPress={() => this.onSelectItem(item)}
                    >
                        <Image
                            source={
                                this.state.selectedarrayList.includes(
                                    item.userId
                                )
                                    ? Constants.Images.roundBlueTick
                                    : Constants.Images.roundTick
                            }
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    onSave = async () => {
        this.props.navigation.navigate(RoutesName.AddGroup, {
            selectedarray: this.state.selectedarrayList,
        })
    }

    componentDidMount() {
        const league = this.props.route.params.league.id
        this.props.navigation.addListener('focus', () => {
            this.getUserList()

            this.props.ranking({
                leagueId: league,
            })
        })
    }

    inviteGroup = async () => {
        this.setState({ addUserError: '', addUserLoader: true })
        const { userGroupId } = this.props.route.params
        const { selectedarrayList } = this.state

        const payload = {
            user_group_id: userGroupId,
            participants_array: selectedarrayList,
        }

        try {
            const res = await postAuthorization(API.inviteUserGroup, payload)

            if (res?.data?.status) {
                this.props.navigation.goBack()
            } else {
                this.setState({
                    addUserError: res?.data?.message,
                    addUserLoader: false,
                })
            }
        } catch (error) {
            this.setState({
                addUserError: error?.message,
                addUserLoader: false,
            })
        }
    }

    render() {
        const { userId = 0 } = this.props.user?.userId
        const { data = [] } = this.props.rankingData
        const me = data.find((i) => i.userId == userId)

        const { addUser = false, oldUsers } = this.props.route.params

        const usersId = [...new Set(oldUsers?.map((i) => i?.participantId))]

        return (
            <View style={styles.container}>
                <Loader
                    isLoading={this.state.isLoading}
                    center
                    style={main.mt2}
                />
                <MsgBox
                    error={this.state.error}
                    msg={this.state.error}
                    center
                />

                <FlatList
                    data={
                        addUser
                            ? this.state.userList?.filter(
                                  (i) => !usersId?.includes(i?.userId)
                              )
                            : this.state.userList
                    }
                    renderItem={this.renderRanks}
                    keyExtractor={(item, i) => `${i}`}
                    showsVerticalScrollIndicator={false}
                    style={main.flex1}
                />
                <View style={styles.buttonContainer}>
                    <MsgBox
                        error={this.state.addUserError}
                        msg={this.state.addUserError}
                    />
                    <Button
                        title="Invite User"
                        style={styles.saveBtn}
                        onPress={() =>
                            addUser ? this.inviteGroup() : this.onSave()
                        }
                        isLoading={this.state.addUserLoader}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({
    ranking: { ranking, isLoading, rankingError },
    auth: { user },
}) => {
    return {
        rankingData: ranking,
        isLoading,
        rankingError,
        user,
    }
}

const mapDispatchToProps = {
    ranking: ranking,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerRanking)
