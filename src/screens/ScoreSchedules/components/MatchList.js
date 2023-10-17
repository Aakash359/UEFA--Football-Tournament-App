import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from '../styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from '../../../contants'
import main from '../../../styles/main'
import moment from 'moment'
import { jsCoreDateCreator } from '../../../utils/func'

Ionicons.loadFont()

class MatchList extends Component {
    renderMatches = (data) => {
        return data?.map((item, i) => {
            return (
                <View
                    style={[
                        styles.matchContainer,
                        !['FT', 'HT', '1H', '2H', 'AET', 'PEN'].includes(
                            item?.fixture?.short
                        )
                            ? styles.matchCenter
                            : {},
                    ]}
                    key={`${i}`}
                >
                    <View style={[main.flex1]}>
                        <Text
                            style={styles.teamTitle}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {item?.teams?.home?.name}
                        </Text>
                    </View>
                    <View style={[main.flex]}>
                        {['FT', 'HT', '1H', '2H', 'AET', 'PEN'].includes(
                            item?.fixture?.short
                        ) ? (
                            <View style={styles.matchCenter}>
                                <View style={styles.scoreBoard}>
                                    <View
                                        style={[
                                            styles.scoreContainer,
                                            {
                                                backgroundColor:
                                                    item.fixture.colorScore,
                                            },
                                        ]}
                                    >
                                        <Text style={styles.score}>
                                            {item?.goals?.home || 0}
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
                                                    item.fixture.colorScore,
                                            },
                                        ]}
                                    >
                                        <Text style={styles.score}>
                                            {item?.goals?.away || 0}
                                        </Text>
                                    </View>
                                </View>
                                {!item?.group &&
                                item?.score?.penalty?.home &&
                                item?.score?.penalty?.away ? (
                                    <>
                                        <View
                                            style={[
                                                styles.scoreBoard,
                                                main.mt4,
                                            ]}
                                        >
                                            <View
                                                style={[
                                                    styles.scoreContainer,
                                                    {
                                                        backgroundColor:
                                                            item.fixture
                                                                .colorScore,
                                                    },
                                                ]}
                                            >
                                                <Text style={styles.score}>
                                                    {item?.score?.penalty
                                                        ?.home || 0}
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
                                                            item.fixture
                                                                .colorScore,
                                                    },
                                                ]}
                                            >
                                                <Text style={styles.score}>
                                                    {item?.score?.penalty
                                                        ?.away || 0}
                                                </Text>
                                            </View>
                                        </View>
                                        <Text
                                            style={[
                                                styles.extraPenulty,
                                                main.mt2,
                                            ]}
                                        >
                                            PEN
                                        </Text>
                                    </>
                                ) : null}
                                <View style={[main.center, main.mt3]}>
                                    <Text style={styles.teamTitle}>
                                        {item?.fixture?.short !== 'FT'
                                            ? `${
                                                  item?.fixture.elapsed || 0
                                              } min`
                                            : item?.fixture?.startTime
                                            ? moment(
                                                  item?.fixture?.startTime
                                              ).format('LT')
                                            : item?.fixture?.short}
                                    </Text>
                                </View>
                            </View>
                        ) : ['TBD'].includes(item?.fixture.short) ? (
                            <Text style={styles.matchTime}>
                                {item?.fixture?.long}
                            </Text>
                        ) : (
                            <Text style={styles.matchTime}>
                                {item?.fixture?.startTime
                                    ? moment(item?.fixture?.date).format('LT')
                                    : item?.fixture?.long}
                            </Text>
                        )}
                    </View>
                    <View style={[main.flex1, main.flexEnd]}>
                        <Text
                            style={styles.teamTitle}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {item?.teams?.away?.name}
                        </Text>
                    </View>
                </View>
            )
        })
    }

    Matches = () => <View>{this.renderMatches(this.props.matches)}</View>

    render() {
        return (
            <View style={styles.matchWrapper}>
                <this.Matches />
            </View>
        )
    }
}

export default MatchList
