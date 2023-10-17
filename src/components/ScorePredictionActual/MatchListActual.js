import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'
import main from '../../styles/main'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from '../../contants'
import moment from 'moment'
import RenderMatchesActual from './RenderMatchesActual'
Ionicons.loadFont()

export class MatchListActual extends Component {
    renderMatches = (data) => {
        return data?.map((match, i) => {
            return <RenderMatchesActual match={match} key={`${i}`} />
        })
    }

    Matches = () => {
        const { data } = this.props

        return <View>{this.renderMatches(data)}</View>
    }

    render() {
        return (
            <View>
                <this.Matches />
            </View>
        )
    }
}

export default MatchListActual
