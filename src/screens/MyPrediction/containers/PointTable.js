import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import styles from '../styles'
import API from '../../../contants/apis'
import {
    getAuthorizationRapid,
    postAuthorization,
} from '../../../services/api_services'
import Loader from '../../../components/Loader'
import MsgBox from '../../../components/MsgBox'
import ModalDropdown from 'react-native-modal-dropdown'
import { log } from 'react-native-reanimated'

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
        const url = `https://quytech.net/predictwin/mobileapi/my_prediction_group_wise`
        const {
            route: {
                params: { leagueId, groupId, groups },
            },
        } = this.props
        const { selectedGroup } = this.state
        const payload = {
            league_id: leagueId,
            group_id: selectedGroup ? groups[selectedGroup] : groupId,
        }

        try {
            const res = await postAuthorization(url, payload)

            if (res?.data?.status) {
                this.setState({
                    data: res?.data?.data,
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
                    {item.teamName}
                </Text>

                <View style={styles.lv2}>
                    <Text style={styles.text1}>{item?.win}</Text>
                    <Text style={styles.text1}>{item?.draw}</Text>
                    <Text style={styles.text1}>{item?.lose}</Text>
                    <Text style={styles.text1}>{item?.gf}</Text>
                    <Text style={styles.text1}>{item?.ga}</Text>
                    <Text style={styles.text1}>{item?.gd}</Text>
                    <Text style={styles.text1}>{item?.points}</Text>
                </View>
            </View>
        </View>
    )

    render() {
        const {
            route: { params },
        } = this.props

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
                    <ScrollView horizontal style={styles.v2}>
                        <View style={{ paddingRight: 10 }}>
                            <View style={styles.View1}>
                                <Text style={styles.text} numberOfLines={1}>
                                    {
                                        params?.groups[
                                            this.state.selectedGroup ||
                                            this.state.selectedGroup === 0
                                                ? this.state.selectedGroup
                                                : params?.groups?.indexOf(
                                                      params?.groupId
                                                  )
                                        ]
                                    }
                                </Text>

                                <View style={styles.v1}>
                                    <Text style={styles.text1}>Won</Text>
                                    <Text style={styles.text1}>Draw</Text>
                                    <Text style={styles.text1}>Lost</Text>
                                    <Text style={styles.text1}>For</Text>
                                    <Text style={styles.text1}>Against</Text>
                                    <Text style={styles.text1}>Difference</Text>
                                    <Text style={styles.text1}>Points</Text>
                                </View>
                            </View>

                            <MsgBox
                                center
                                error={this.state.error}
                                msg={this.state.error}
                            />

                            <FlatList
                                data={this.state.data}
                                renderItem={this.renderItems}
                                keyExtractor={(item, i) => `${i}`}
                            />
                        </View>
                    </ScrollView>
                </View>
            </>
        )
    }
}

export default PointTable
