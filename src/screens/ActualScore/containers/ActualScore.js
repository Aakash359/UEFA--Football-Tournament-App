import moment from 'moment'
import React, { Component } from 'react'
import { View } from 'react-native'
import Loader from '../../../components/Loader'
import MsgBox from '../../../components/MsgBox'
import ScorePredictionActual from '../../../components/ScorePredictionActual'
import API from '../../../contants/apis'
import { getAuthorizationRapid } from '../../../services/api_services'
import {
    getGrouspConversion,
    predictionDataCoversion,
    removeLastIndex,
} from '../../../utils/func'

class ActualScore extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: '',
            data: [],
            isLoading: true,
            groups: [],
            isLoadingGroup: true,
            errorGroup: '',
        }
    }

    componentDidMount() {
        this.onGetGroups()
        this.onGetData()

        this.timer = setInterval(() => {
            this.onGetData()
        }, 30000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    onGetData = async () => {
        this.setState({ error: '' })
        const { league } = this.props
        const payload = {
            league_id: league?.league?.id,
        }
        const year = parseInt(moment().format('YYYY'))

        const url = `${API.myPredictionRapid}?league=${
            league?.league?.id
        }&season=${
            league?.league?.name === 'Euro Championship' ? year - 1 : year
        }`

        try {
            const res = await getAuthorizationRapid(url, payload)

            if (!res?.data?.errors?.length) {
                this.setState({
                    data: predictionDataCoversion(res?.data?.response),
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

    onGetGroups = async () => {
        this.setState({
            isLoadingGroup: true,
        })
        const { league } = this.props
        const year = parseInt(moment().format('YYYY'))

        const url = `${API.getGroupsRapid}?league=${
            league?.league?.id
        }&season=${
            league?.league?.name === 'Euro Championship' ? year - 1 : year - 1
        }`

        try {
            const res = await getAuthorizationRapid(url)

            if (!res?.data?.errors?.length) {
                this.setState({
                    groups: getGrouspConversion(res?.data?.response),
                    isLoadingGroup: false,
                })
            } else {
                this.setState({
                    errorGroup: 'Somthing went wrong',
                    isLoadingGroup: false,
                })
            }
        } catch (error) {
            this.setState({ errorGroup: error.message, isLoadingGroup: false })
        }
    }

    render() {
        const {
            league: { league },
        } = this.props
        const data = {
            name: league?.name,
            id: league?.id,
            groups: [],
            ...this.state.data,
            groups: this.state.groups,
        }

        return (
            <View>
                <Loader
                    center
                    isLoading={
                        this.state.isLoading || this.state.isLoadingGroup
                    }
                />
                <MsgBox
                    center
                    error={this.state.error}
                    msg={this.state.error}
                />
                <ScorePredictionActual
                    data={data}
                    isLoading={
                        this.state.isLoading || this.state.isLoadingGroup
                    }
                    navigate={this.props.navigation.navigate}
                />
            </View>
        )
    }
}

export default ActualScore
