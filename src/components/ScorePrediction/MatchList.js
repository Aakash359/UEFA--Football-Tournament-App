import React, { Component } from 'react'
import { View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RenderMatches from './RenderMatches'
Ionicons.loadFont()

export class MatchList extends Component {
    renderMatches = (data) => {
        const {
            actual = false,
            userPrediction,
            questions,
            navigation,
        } = this.props

        return data?.map((match, i) => {
            let myPrediction = userPrediction?.find(
                (o) => o?.fixtureId == match?.fixture?.id
            )
            let myQues = questions?.find(
                (o) => o?.fixtureId == match?.fixture?.id
            )

            return (
                <RenderMatches
                    match={match}
                    key={`${i}`}
                    actual={actual}
                    myPrediction={myPrediction}
                    myQues={myQues}
                    navigation={navigation}
                />
            )
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

export default MatchList
