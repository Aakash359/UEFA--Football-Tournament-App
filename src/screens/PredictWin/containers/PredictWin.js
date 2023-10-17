import React, { Component } from 'react'
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
} from 'react-native'
import { connect } from 'react-redux'
import { RoutesName } from '../../../navigation/routes.config'
import styles from '../styles'
import HeaderProfile from '../../../components/HeaderProfile'
import { leagueListRequest } from '../../../redux/actions/homeAction'
import moment from 'moment'
import API from '../../../contants/apis'
import { getAuthorizationRapid } from '../../../services/api_services'
import Loader from '../../../components/Loader'
import MsgBox from '../../../components/MsgBox'
import Constants from '../../../contants'
import main from '../../../styles/main'
import { leagueDataConversion } from '../../../utils/func'

class PredictWin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            error: '',
            isLoading: true,
        }
    }

    getLeagurList = async () => {
        this.setState({ isLoading: true, error: '' })
        const url = `${API.leagueList}`
        try {
            const res = await getAuthorizationRapid(url)

            if (!res?.data?.errors?.length) {
                this.setState({
                    data: [
                        ...leagueDataConversion(res?.data?.response),
                        { example: true },
                    ],
                    isLoading: false,
                })
            } else {
                this.setState({
                    error: 'Somthing went wrong',
                    isLoading: false,
                })
            }
        } catch (error) {
            this.setState({
                error: error.message,
                isLoading: false,
            })
        }
    }

    componentDidMount() {
        this.getLeagurList()
    }

    onEditProfile = () => {
        this.props.navigation.navigate(RoutesName.TournmentSerachList, {
            hideError: true,
        })
    }

    onNotifications = () => {
        this.props.navigation.navigate('notifications')
    }

    renderItems = ({ item, index }) => {
        const even = index % 2 === 0

        return (
            <View style={styles.v1}>
                <TouchableOpacity
                    onPress={() => {
                        if (!item?.example) {
                            this.props.navigation.navigate(
                                RoutesName.RulesAndRegulation,
                                { league: item, payment: true }
                            )
                        }
                    }}
                >
                    <ImageBackground
                        source={item?.image}
                        style={[
                            styles.pic,
                            {
                                backgroundColor: Constants.Colors.PRIMARY2,
                            },
                        ]}
                        resizeMode="cover"
                    >
                        <View style={styles.v2}>
                            <View style={styles.v3}>
                                <Text
                                    style={[
                                        styles.tx1,
                                        main?.mb1,
                                        !item?.season?.current && {
                                            backgroundColor:
                                                Constants.Colors.WARNING,
                                        },
                                    ]}
                                >
                                    {item?.league?.id === 4
                                        ? 'Join'
                                        : item?.season?.current
                                        ? 'Major tournaments are comming soon'
                                        : 'Major tournaments are comming soon'}
                                </Text>
                                <Text style={styles.tx2}>
                                    {item?.league?.name}
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }

    renderLeagueList = (data) => {
        let count = 0
        return data?.map((item, i) => {
            if (count > Constants.Images.football?.length - 1) {
                count = 0
            }
            let image = Constants.Images.football[count++]
            return (
                <View key={`${i}`}>
                    {this.renderItems({ item: { ...item, image }, index: i })}
                </View>
            )
        })
    }

    LeagueList = ({ data }) => {
        return <>{this.renderLeagueList(data)}</>
    }

    render() {
        return (
            <View style={[styles.container]}>
                <HeaderProfile goNotification={this.onNotifications} />
                <Loader isLoading={this.state.isLoading} center />
                <MsgBox error={this.state.error} msg={this.state.error} />

                <ScrollView>
                    <this.LeagueList data={this.state.data} />
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (res) => {
    return {
        home: res.home?.leagueListResponse,
    }
}
export default connect(mapStateToProps, { leagueListRequest })(PredictWin)
