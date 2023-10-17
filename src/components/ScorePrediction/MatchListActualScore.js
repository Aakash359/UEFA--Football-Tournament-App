import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'
import main from '../../styles/main'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from '../../contants'
import moment from 'moment'
Ionicons.loadFont()

export class MatchListActualScore extends Component {
    renderMatches = (data) => {
        const { actual = true } = this.props

        return data?.map((match, i) => {
            return (
                <View
                    style={[
                        styles.matchWrapper,
                        i + 1 === data?.length ? styles.matchNoBBWrapper : {},
                    ]}
                    key={`${i}`}
                >
                    <View
                        style={[
                            main.flex1,
                            main.row,
                            main.mt3,
                            main.mx1,
                            !['FT', 'HT', '1H', '2H'].includes(
                                match?.fixture?.status?.short
                            )
                                ? main.center
                                : {},
                        ]}
                    >
                        <View style={[main.flex1]}>
                            <Text style={styles.teamTitle}>
                                {match?.teams?.away?.name}
                            </Text>
                        </View>
                        <View style={[main.flex]}>
                            {match?.fixture.status.short == 'FT' ? (
                                <View style={styles.matchCenter}>
                                    <View style={styles.scoreBoard}>
                                        <View
                                            style={[
                                                styles.scoreContainer,
                                                match?.fixture.status.short !==
                                                    'FT' && {
                                                    backgroundColor:
                                                        Constants.Colors
                                                            .WARNING,
                                                },
                                            ]}
                                        >
                                            <Text style={styles.score}>
                                                {match?.goals.away}
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
                                                !['FT'].includes(
                                                    match?.fixture?.status
                                                        ?.short
                                                )
                                                    ? {
                                                          backgroundColor:
                                                              Constants.Colors
                                                                  .WARNING,
                                                      }
                                                    : null,
                                            ]}
                                        >
                                            <Text style={styles.score}>
                                                {match?.goals.home}
                                            </Text>
                                        </View>
                                    </View>
                                    <Text
                                        style={[
                                            styles.matchTimePeriod,
                                            main.mt2,
                                        ]}
                                    >
                                        {match?.fixture.data}
                                    </Text>
                                </View>
                            ) : !['FT', 'HT', '1H', '2H'].includes(
                                  match?.fixture?.status?.short
                              ) ? (
                                <View style={styles.matchCenter}>
                                    <View style={styles.scoreBoard}>
                                        <View
                                            style={[
                                                styles.scoreContainer,
                                                {
                                                    backgroundColor:
                                                        Constants.Colors
                                                            .PRIMARY2,
                                                },
                                            ]}
                                        >
                                            <TextInput
                                                value={match?.goals?.away}
                                                placeholder="0"
                                                maxLength={1}
                                                keyboardType="numeric"
                                                style={styles.scoreInput}
                                                placeholderTextColor={
                                                    Constants.Colors.WHITE
                                                }
                                            />
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
                                                        Constants.Colors
                                                            .PRIMARY2,
                                                },
                                            ]}
                                        >
                                            <TextInput
                                                value={match?.goals?.home}
                                                placeholder="0"
                                                maxLength={1}
                                                keyboardType="numeric"
                                                style={styles.scoreInput}
                                                placeholderTextColor={
                                                    Constants.Colors.WHITE
                                                }
                                            />
                                        </View>
                                    </View>
                                    <Text
                                        style={[
                                            styles.matchTimePeriod,
                                            main.mt2,
                                        ]}
                                    >
                                        {match?.matchTime}
                                    </Text>
                                </View>
                            ) : (
                                <Text style={styles.matchTime}>
                                    {moment(match?.fixture?.date).format('LT')}
                                </Text>
                            )}
                        </View>
                        <View style={[main.flex1, main.flexEnd]}>
                            <Text style={styles.teamTitle}>
                                {match?.teams?.home?.name}
                            </Text>
                        </View>
                    </View>
                    {!['FT', 'HT', '1H', '2H'].includes(
                        match?.fixture?.status?.short
                    ) ? (
                        <View style={main.center}>
                            <View>
                                {match?.fixture?.status?.short !==
                                'not-started' ? (
                                    <View style={styles.matchCenter}>
                                        <View style={styles.scoreBoard}>
                                            <View
                                                style={[
                                                    styles.scoreContainer,
                                                    match?.fixture?.status
                                                        ?.short ===
                                                        'started' && {
                                                        backgroundColor:
                                                            Constants.Colors
                                                                .WARNING,
                                                    },
                                                ]}
                                            >
                                                <Text style={styles.score}>
                                                    {match?.teamAScore}
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
                                                    match?.fixture?.status
                                                        ?.short ===
                                                        'started' && {
                                                        backgroundColor:
                                                            Constants.Colors
                                                                .WARNING,
                                                    },
                                                ]}
                                            >
                                                <Text style={styles.score}>
                                                    {match?.teamBScore}
                                                </Text>
                                            </View>
                                        </View>
                                        <Text
                                            style={[
                                                styles.matchTimePeriod,
                                                main.mt2,
                                            ]}
                                        >
                                            {match?.matchTime}
                                        </Text>
                                    </View>
                                ) : match?.fixture?.status?.short ===
                                  'not-started' ? (
                                    <View style={styles.matchCenter}>
                                        <View style={styles.scoreBoard}>
                                            <View
                                                style={[
                                                    styles.scoreContainer,
                                                    {
                                                        backgroundColor:
                                                            Constants.Colors
                                                                .PRIMARY2,
                                                    },
                                                ]}
                                            >
                                                <TextInput
                                                    // value={match?.teamAScore}
                                                    placeholder="0"
                                                    maxLength={1}
                                                    keyboardType="numeric"
                                                    style={styles.scoreInput}
                                                    placeholderTextColor={
                                                        Constants.Colors.WHITE
                                                    }
                                                />
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
                                                            Constants.Colors
                                                                .PRIMARY2,
                                                    },
                                                ]}
                                            >
                                                <TextInput
                                                    // value={match?.teamBScore}
                                                    placeholder="0"
                                                    maxLength={1}
                                                    keyboardType="numeric"
                                                    style={styles.scoreInput}
                                                    placeholderTextColor={
                                                        Constants.Colors.WHITE
                                                    }
                                                />
                                            </View>
                                        </View>
                                        <Text
                                            style={[
                                                styles.matchTimePeriod,
                                                main.mt2,
                                            ]}
                                        >
                                            {match?.matchTime}
                                        </Text>
                                    </View>
                                ) : null}
                            </View>
                            <Text style={styles.extraPenulty}>
                                Extra Time/ Penulties
                            </Text>
                        </View>
                    ) : null}
                    {['FT', 'HT', '1H', '2H'].includes(
                        match?.fixture?.status?.short
                    ) && (
                        <View style={main.center}>
                            <Text style={styles.modalText}>
                                {!['FT'].includes(match?.fixture?.status?.short)
                                    ? 'Half Time'
                                    : !['TBD'].includes(
                                          match?.fixture?.status?.short
                                      )
                                    ? 'Full Time'
                                    : ''}
                            </Text>
                        </View>
                    )}
                </View>
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

export default MatchListActualScore
