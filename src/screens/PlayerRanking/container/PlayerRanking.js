import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { ranking } from '../../../redux/actions/rankingActions'
import { RankingList } from '../components/index'
import Loader from '../../../components/Loader'
import MsgBox from '../../../components/MsgBox'
import main from '../../../styles/main'
import styles from '../styles'
import ModalDropdown from 'react-native-modal-dropdown'
class PlayerRanking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedGroup: 0,
        }
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            if (this.state.selectedGroup === 0) {
                this.props.ranking({
                    leagueId: this.props?.league?.league?.id,
                })
            } else {
                this.props.ranking({
                    leagueId: this.props?.league?.league?.id,
                    user_group_id:
                        this.props?.rankingData?.myGroups[
                            this.state.selectedGroup
                        ]?.userGroupId,
                })
            }
        })
    }

    render() {
        const { rankingData, isLoading, rankingError, user } = this.props
        const groups = [
            'None',
            ...new Set(
                rankingData?.myGroups?.map(
                    (item) =>
                        item?.groupName ||
                        `No group name found: ${item?.userGroupId}`
                )
            ),
        ]

        return (
            <View style={styles.container}>
                <Loader isLoading={isLoading} center style={main.mt2} />
                <MsgBox error={rankingError} msg={rankingError} center />
                <View style={[styles.header]}>
                    <Text style={styles.title}>Select By Group</Text>
                    <View>
                        <ModalDropdown
                            options={groups}
                            defaultIndex={0}
                            defaultValue={'None'}
                            onSelect={(e) => {
                                this.setState({ selectedGroup: e }, () => {
                                    if (e === 0) {
                                        this.props.ranking({
                                            leagueId:
                                                this.props?.league?.league?.id,
                                        })
                                    } else {
                                        this.props.ranking({
                                            leagueId:
                                                this.props?.league?.league?.id,
                                            user_group_id: parseInt(
                                                rankingData?.myGroups[e - 1]
                                                    ?.userGroupId
                                            ),
                                        })
                                    }
                                })
                            }}
                            style={styles.modal}
                            textStyle={styles.modalText}
                            dropdownStyle={styles.modalDropDown}
                            dropdownTextStyle={styles.modalDropDownText}
                            dropdownTextHighlightStyle={
                                styles.modalDropDownHighlightedText
                            }
                        ></ModalDropdown>
                    </View>
                </View>
                <RankingList
                    data={rankingData?.playerRankingLeaguewise}
                    userId={user?.userId}
                    user={user}
                    myGroups={rankingData?.myGroups}
                />
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
