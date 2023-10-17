import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import Constants from '../../../contants'
import main from '../../../styles/main'
import styles from '../styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RoutesName } from '../../../navigation/routes.config'

export class MyGroupList extends Component {
    onInviteUser(group) {
        const { league } = this.props

        this.props.navigate(RoutesName.InviteUser, {
            league: league,
            oldUsers: group?.participantsArray,
            userGroupId: group?.userGroupId,
            addUser: true,
        })
    }

    renderRanks = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() =>
                    this.props.navigate(RoutesName.GroupDetails, {
                        ...item,
                        league: this.props.league,
                    })
                }
                style={styles.containerList}
            >
                <View
                    style={[
                        styles.rowContainer,
                        main.justifyContentSpaceBetween,
                    ]}
                >
                    <View style={{ maxWidth: 250 }}>
                        <Text style={styles.groupName}>{item.groupName}</Text>
                        <Text style={styles.normalText}>
                            {item.participantsCount + ' members'}
                        </Text>
                    </View>
                    <View style={[main.justifyContentCenter]}>
                        <TouchableOpacity
                            onPress={() => this.onInviteUser(item)}
                            style={[
                                main.center,
                                {
                                    backgroundColor: Constants.Colors.ACCENT,
                                    padding: 5,
                                    borderRadius: 20,
                                },
                            ]}
                        >
                            <Ionicons
                                name="add"
                                color={Constants.Colors.WHITE}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    renderGroupList = () => {
        const { data = [], user = {} } = this.props
        return data?.map((item, i) => {
            return <View key={`${i}`}>{this.renderRanks({ item })}</View>
        })
    }

    GroupList = () => {
        return <View style={main.flex1}>{this.renderGroupList()}</View>
    }

    render() {
        const { data = [], user = {} } = this.props

        return (
            <View style={[main.flex1, main.pb10, main.mb5]}>
                <this.GroupList />
            </View>
        )
    }
}

export default MyGroupList
