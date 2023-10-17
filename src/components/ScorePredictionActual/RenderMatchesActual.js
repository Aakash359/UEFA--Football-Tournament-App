import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'
import main from '../../styles/main'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from '../../contants'
import moment from 'moment'
import API from '../../contants/apis'
import { postAuthorization } from '../../services/api_services'
Ionicons.loadFont()

class RenderMatchesActual extends React.PureComponent {
    render() {
        const { match } = this.props

        return (
            <View style={[styles.matchWrapper]}>
                <View
                    style={[
                        main.flex1,
                        main.row,
                        main.mt3,
                        main.mx1,
                        match?.fixture?.short === 'NS' ? main.center : {},
                    ]}
                >
                    <View style={[main.flex1]}>
                        <Text style={styles.teamTitle}>
                            {match?.teams?.home?.name}
                        </Text>
                    </View>
                    <View style={[main.flex]}>
                        {['FT', 'HT', '1H', '2H', 'PEN', 'AET'].includes(
                            match?.fixture?.short
                        ) ? (
                            <View style={styles.matchCenter}>
                                <View style={styles.scoreBoard}>
                                    <View
                                        style={[
                                            styles.scoreContainer,
                                            {
                                                backgroundColor:
                                                    match?.fixture?.colorScore,
                                            },
                                        ]}
                                    >
                                        <Text style={styles.score}>
                                            {
                                                // match?.score?.fulltime?.home ||
                                                //     match?.score?.halftime?.home ||
                                                match?.goals?.home
                                            }
                                        </Text>
                                    </View>
                                    <Ionicons
                                        name="ios-remove-outline"
                                        color={Constants.Colors.WHITE}
                                        style={styles.scoreDivider}
                                    />
                                    <View
                                        style={[
                                            styles.scoreContainer,
                                            {
                                                backgroundColor:
                                                    match?.fixture?.colorScore,
                                            },
                                        ]}
                                    >
                                        <Text style={styles.score}>
                                            {
                                                // match?.score?.fulltime?.away ||
                                                //     match?.score?.halftime?.away ||
                                                match?.goals?.away
                                            }
                                        </Text>
                                    </View>
                                </View>
                                <Text
                                    style={[styles.matchTimePeriod, main.mt2]}
                                >
                                    {match?.matchTime}
                                </Text>
                            </View>
                        ) : (
                            <Text style={styles.matchTime}>
                                {moment(`${match?.fixture?.date}`).format('LT')}
                            </Text>
                        )}
                    </View>
                    <View style={[main.flex1, main.flexEnd]}>
                        <Text style={styles.teamTitle}>
                            {match?.teams?.away?.name}
                        </Text>
                    </View>
                </View>
                {/* {!match?.group &&
                (match?.goals?.home === match?.goals?.away ||
                    match?.score?.fulltime?.home ===
                        match?.score?.fulltime?.away) &&
                match?.score?.extratime?.home &&
                match?.score?.extratime?.away &&
                match?.fixture?.short !== 'NS' ? (
                    <View style={main.center}>
                        <View>
                            <View style={styles.matchCenter}>
                                <View style={styles.scoreBoard}>
                                    <View
                                        style={[
                                            styles.scoreContainer,
                                            {
                                                backgroundColor:
                                                    match?.fixture?.colorScore,
                                            },
                                        ]}
                                    >
                                        <Text style={styles.score}>
                                            {match?.score?.extratime?.home}
                                        </Text>
                                    </View>
                                    <Ionicons
                                        name="ios-remove-outline"
                                        color={Constants.Colors.WHITE}
                                        style={styles.scoreDivider}
                                    />
                                    <View
                                        style={[
                                            styles.scoreContainer,
                                            {
                                                backgroundColor:
                                                    match?.fixture?.colorScore,
                                            },
                                        ]}
                                    >
                                        <Text style={styles.score}>
                                            {match?.score?.extratime?.away}
                                        </Text>
                                    </View>
                                </View>
                                <Text
                                    style={[styles.matchTimePeriod, main.mt2]}
                                >
                                    {match?.matchTime}
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.extraPenulty}>ET</Text>
                    </View>
                ) : null} */}
                {!match?.group &&
                (match?.goals?.home === match?.goals?.away ||
                    match?.score?.fulltime?.home ===
                        match?.score?.fulltime?.away) &&
                match?.score?.extratime?.home &&
                match?.score?.extratime?.away &&
                match?.score?.penalty?.home &&
                match?.score?.penalty?.away &&
                match?.score?.extratime?.home ===
                    match?.score?.extratime?.away &&
                match?.fixture?.short !== 'NS' ? (
                    <View style={[main.center, main.mt3]}>
                        <View>
                            <View style={styles.matchCenter}>
                                <View style={styles.scoreBoard}>
                                    <View
                                        style={[
                                            styles.scoreContainer,
                                            {
                                                backgroundColor:
                                                    match?.fixture?.colorScore,
                                            },
                                        ]}
                                    >
                                        <Text style={styles.score}>
                                            {match?.score?.penalty?.home}
                                        </Text>
                                    </View>
                                    <Ionicons
                                        name="ios-remove-outline"
                                        color={Constants.Colors.WHITE}
                                        style={styles.scoreDivider}
                                    />
                                    <View
                                        style={[
                                            styles.scoreContainer,
                                            {
                                                backgroundColor:
                                                    match?.fixture?.colorScore,
                                            },
                                        ]}
                                    >
                                        <Text style={styles.score}>
                                            {match?.score?.penalty?.away}
                                        </Text>
                                    </View>
                                </View>
                                <Text
                                    style={[styles.matchTimePeriod, main.mt2]}
                                >
                                    {match?.matchTime}
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.extraPenulty}>PEN</Text>
                    </View>
                ) : null}

                <View style={[main.center, main.mt2]}>
                    <Text style={styles.modalText}>
                        {match?.fixture?.short === 'NS'
                            ? ''
                            : match?.fixture?.short === 'FT'
                            ? match?.fixture?.short
                            : `${match?.fixture?.elapsed || 0} min`}
                    </Text>
                </View>
            </View>
        )
    }
}

export default RenderMatchesActual
