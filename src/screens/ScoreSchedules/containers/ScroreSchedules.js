import React, { Component } from 'react'
import { View } from 'react-native'
import { CalenderStrip, Tournaments } from '../components'
import styles from '../styles'
import ProfileHeader from '../../../components/HeaderProfile'
import { connect } from 'react-redux'
import { matchListRequest } from '../../../redux/actions/homeAction'
import moment from 'moment'
import Loader from '../../../components/Loader'
import MsgBox from '../../../components/MsgBox'
import { homeDataCoversion } from '../../../utils/func'
import { getAuthorizationRapid } from '../../../services/api_services'
import API from '../../../contants/apis'
import { RoutesName } from '../../../navigation/routes.config'

class ScroreSchedules extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date(),
            error: '',
            data: [],
            isLoading: true,
        }
    }

    onDateChange = (date) => {
        this.setState({ date, isLoading: true }, () => {
            this.onGetData()
        })
    }

    componentDidMount() {
        this.onGetData()

        this.timer = setInterval(() => {
            this.onGetData()
        }, 60000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    onGetData = async () => {
        this.setState({ error: '' })
        const { date } = this.state
        let dateM = moment(date).format('YYYY-MM-DD')
        const url = `${API.home}?date=${dateM}`

        try {
            const res = await getAuthorizationRapid(url)
            if (!res?.data?.errors?.length) {
                this.setState({
                    data: homeDataCoversion(res?.data?.response),
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

    render() {
        return (
            <View style={styles.container}>
                <ProfileHeader
                    goNotification={() =>
                        this.props.navigation.navigate(RoutesName.Notifications)
                    }
                />
                <CalenderStrip
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                />
                <Loader center isLoading={this.state.isLoading} />
                <MsgBox
                    center
                    error={this.state.error}
                    msg={this.state.error}
                />
                <Tournaments
                    tournaments={this.state.data}
                    emptyMsg={!this.state.isLoading}
                />
            </View>
        )
    }
}

// =============== REDUX CONNECT & RESPONSE ===============
const mapStateToProps = ({
    home: { matchList, matchListLoader, matchListError },
}) => {
    return {
        matchList,
        matchListError,
        matchListLoader,
    }
}
export default connect(mapStateToProps, { matchListRequest })(ScroreSchedules)
