import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import styles from '../styles'
import API from '../../../contants/apis'
import { getAuthorizationRapid } from '../../../services/api_services'
import Loader from '../../../components/Loader'
import MsgBox from '../../../components/MsgBox'
import moment from 'moment'
import ModalDropdown from 'react-native-modal-dropdown'

class PointTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date(),
            error: '',
            data: [],
            isLoading: true,
            selectedGroup: null,
        }
    }

    componentDidMount() {
        this.onGetData()
    }

    onGetData = async () => {
        const { selectedGroup } = this.state
        const {
            route: {
                params: { leagueId, groupId, groups },
            },
        } = this.props
        const payload = {
            league_id: leagueId,
            group_id: selectedGroup ? groups[selectedGroup] : groupId,
        }
        const year = parseInt(moment().format('YYYY'))
        const url = `https://api-football-v1.p.rapidapi.com/v3/standings?season=${
            year - 1
        }&league=${leagueId}`

        try {
            const res = await getAuthorizationRapid(url, payload)

            if (!res?.data?.errors?.length) {
                this.setState({
                    data: res?.data?.response[0].league.standings,
                    isLoading: false,
                })
            } else {
                this.setState({
                    error: 'Somthing went wrong',
                    isLoading: false,
                })
            }
        } catch (error) {
            this.setState({ error: error.message, isLoading: false })
        }
    }

    renderItems = ({ item, index }) => (
        <View style={styles.container}>
            <Loader center isLoading={this.state.isLoading} />
            <MsgBox center error={this.state.error} msg={this.state.error} />
            <View style={styles.l1}>
                <Text style={styles.tx1} numberOfLines={1}>
                    {item.team.name}
                </Text>
                <View style={styles.lv2}>
                    <Text style={styles.lt1}>{item.all.played}</Text>
                    <Text style={styles.lt2}>{item.all.win}</Text>
                    <Text style={styles.lt3}>{item.all.draw}</Text>
                    <Text style={styles.lt4}>{item.all.lose}</Text>
                    <Text style={styles.lt5}>{item.all.goals.for}</Text>
                    <Text style={styles.lt6}>{item.all.goals.against}</Text>
                    <Text style={styles.lt7}>{item.goalsDiff}</Text>
                    <Text style={styles.lt8}>{item.points}</Text>
                </View>
            </View>
        </View>
    )

    render() {
        const {
            route: { params },
        } = this.props

        let group_array = []
        let groups = params?.data?.response[0]?.standings[0]
        if (params?.groups) {
            for (var i = 0; i < params?.groups.length; i++) {
                if (params?.groups[i]) {
                    let group = {}
                }
            }
        }

        return (
            <>
                <View style={styles.header}>
                    <Text style={styles.title}>{params?.leagueName}</Text>
                    <View>
                        <ModalDropdown
                            options={params?.groups}
                            defaultIndex={params?.groups?.indexOf(
                                params?.groupId
                            )}
                            defaultValue={params?.groupId}
                            onSelect={(e) => {
                                this.setState({ selectedGroup: e }, () => {
                                    this.onGetData()
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
                <View style={styles.container}>
                    <Loader center isLoading={this.state.isLoading} />
                    <MsgBox
                        center
                        error={this.state.error}
                        msg={this.state.error}
                    />
                    <ScrollView
                        style={[styles.v2, { maxHeight: 250 }]}
                        horizontal={true}
                    >
                        <FlatList
                            data={
                                this.state.data[
                                    this.state.selectedGroup ||
                                        params?.groups?.indexOf(params?.groupId)
                                ]
                            }
                            renderItem={this.renderItems}
                            keyExtractor={(item, i) => `${i}`}
                            showsVerticalScrollIndicator={false}
                            ListHeaderComponent={() => {
                                return (
                                    <View style={[styles.View1]}>
                                        <Text
                                            style={styles.text}
                                            numberOfLines={1}
                                        >
                                            {
                                                params?.groups[
                                                    this.state.selectedGroup ||
                                                    this.state.selectedGroup ===
                                                        0
                                                        ? this.state
                                                              .selectedGroup
                                                        : params?.groups?.indexOf(
                                                              params?.groupId
                                                          )
                                                ]
                                            }
                                        </Text>

                                        <View style={styles.v1}>
                                            <Text style={styles.text1}>
                                                Played
                                            </Text>
                                            <Text style={styles.text2}>
                                                Won
                                            </Text>
                                            <Text style={styles.text3}>
                                                Draw
                                            </Text>
                                            <Text style={styles.text4}>
                                                Lost
                                            </Text>
                                            <Text style={styles.text5}>
                                                For
                                            </Text>
                                            <Text
                                                style={styles.text6}
                                                numberOfLines={1}
                                            >
                                                Against
                                            </Text>
                                            <Text
                                                style={styles.text7}
                                                numberOfLines={1}
                                            >
                                                Goal Difference
                                            </Text>
                                            <Text style={styles.text8}>
                                                Points
                                            </Text>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </ScrollView>
                </View>
            </>
        )
    }
}

export default PointTable
