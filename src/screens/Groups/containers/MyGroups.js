import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import main from '../../../styles/main'
import styles from '../styles'
import { RoutesName } from '../../../navigation/routes.config'
import Loader from '../../../components/Loader'
import MsgBox from '../../../components/MsgBox'
import { myGroupRequest } from '../../../redux/actions/rankingActions'
import { MyGroupList } from '../components/MyGroupList'
import InviteGroupList from '../components/InviteGroupList'
import Constants from '../../../contants'
import { ranking } from '../../../redux/actions/rankingActions'

class MyGroups extends Component {
    onSave = async () => {
        const {
            league: { league },
        } = this.props
        this.props.navigation.navigate(RoutesName.AddGroup, { league: league })
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.props.myGroupRequest()
            // this.props.ranking({ leagueId: this.props.league.league.id })
        })
    }

    render() {
        const { myGroupData, myGroupLoader, myGroupError, user, myGroups } =
            this.props

        return (
            <View style={[styles.container, main.m2]}>
                <Loader isLoading={myGroupLoader} center style={main.mt2} />
                <MsgBox error={myGroupError} msg={myGroupError} center />

                <View style={[main.flex1, { position: 'relative' }]}>
                    <ScrollView>
                        <Text style={[styles.groupName, styles.marginTopStyle]}>
                            Invite Groups
                        </Text>
                        <InviteGroupList
                            data={myGroupData?.groupInvites}
                            user={user}
                        />
                        <Text style={[styles.groupName, styles.marginTopStyle]}>
                            My Groups
                        </Text>
                        <MyGroupList
                            data={myGroupData?.myGroups}
                            user={user}
                            league={this.props?.league}
                            navigate={this.props.navigation.navigate}
                        />
                    </ScrollView>
                </View>

                <TouchableOpacity
                    onPress={this.onSave}
                    style={styles.addButtonStyle}
                >
                    <Image
                        source={Constants.Images.add_group}
                        style={main.icon}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = ({
    ranking: {
        myGroup,
        myGroupLoader,
        myGroupError,
        ranking: { myGroups },
    },
    auth: { user },
}) => {
    return {
        myGroupData: myGroup,
        myGroupLoader,
        myGroupError,
        user,
        myGroups,
    }
}

const mapDispatchToProps = {
    myGroupRequest: myGroupRequest,
    ranking,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyGroups)
