import React, { Component } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import main from '../../styles/main'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from '../../contants'
import API from '../../contants/apis'
import { postAuthorization } from '../../services/api_services'
import moment from 'moment'
Ionicons.loadFont()

class RenderMatches extends Component {
    constructor(props) {
        super(props)

        this.state = {
            home: this.props?.myPrediction?.homeScore || null,
            away: this.props?.myPrediction?.awayScore || null,
            extraHome: this.props?.myPrediction?.extraHomeScore || null,
            extraAway: this.props?.myPrediction?.extraAwayScore || null,
            penultyHome: this.props?.myPrediction?.penaltyHomeScore || null,
            penultyAway: this.props?.myPrediction?.penaltyAwayScore || null,
            fixtureId: parseInt(this.props?.myPrediction?.fixtureId) || null,
            pointsEarned: this.props?.myPrediction?.pointsEarned || 0,
            homeTeam: this.props?.myPrediction?.homeTeam || null,
            awayTeam: this.props?.myPrediction?.awayTeam || null,
            userAnswer: this.props?.myQues?.userAnswer || null,
            myAnswer: null,
        }
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            if (this.props?.myPrediction) {
                const { myPrediction } = this.props
                this.setState({
                    home: myPrediction?.homeScore || null,
                    away: myPrediction?.awayScore || null,
                    extraHome: myPrediction?.extraHomeScore || null,
                    extraAway: myPrediction?.extraAwayScore || null,
                    penultyHome: myPrediction?.penaltyHomeScore || null,
                    penultyAway: myPrediction?.penaltyAwayScore || null,
                    fixtureId: parseInt(myPrediction?.fixtureId) || null,
                    pointsEarned: myPrediction?.pointsEarned || 0,
                    homeTeam: myPrediction?.homeTeam || null,
                    awayTeam: myPrediction?.awayTeam || null,
                    userAnswer: myPrediction?.userAnswer || null,
                })
            }
        })
    }

    componentDidUpdate(prevProp) {
        if (
            JSON.stringify(this.props?.myPrediction) !==
                JSON.stringify(prevProp?.myPrediction) &&
            JSON.stringify(this.props?.myPrediction) !==
                JSON.stringify(this.state)
        ) {
            const { myPrediction, myQues } = this.props
            this.setState({
                home: myPrediction?.homeScore || null,
                away: myPrediction?.awayScore || null,
                extraHome: myPrediction?.extraHomeScore || null,
                extraAway: myPrediction?.extraAwayScore || null,
                penultyHome: myPrediction?.penaltyHomeScore || null,
                penultyAway: myPrediction?.penaltyAwayScore || null,
                fixtureId: parseInt(myPrediction?.fixtureId) || null,
                pointsEarned: myPrediction?.pointsEarned || 0,
                homeTeam: myPrediction?.homeTeam || null,
                awayTeam: myPrediction?.awayTeam || null,
                userAnswer: myQues?.userAnswer || null,
            })
        }
    }

    predictionChecker = () => {
        const { match } = this.props

        const { home, away, extraHome, extraAway, penultyHome, penultyAway } =
            this.state

        if (match?.group) {
            if (home && away) {
                this.makePredict()
            }
        } else {
            if (home && away && home !== away) {
                this.makePredict()
            } else if (
                home &&
                away &&
                home === away &&
                extraHome &&
                extraAway &&
                extraHome !== extraAway
            ) {
                this.makePredict()
            } else if (
                home &&
                away &&
                home === away &&
                extraHome &&
                extraAway &&
                extraHome === extraAway &&
                penultyHome &&
                penultyAway
            ) {
                this.makePredict()
            }
        }
    }

    makePredict = async () => {
        const {
            home,
            away,
            extraHome,
            extraAway,
            penultyHome,
            penultyAway,
            fixtureId,
            homeTeam,
            awayTeam,
        } = this.state
        const url = API.makePredict
        const payload = {
            fixture_id: fixtureId,
            home_score: home,
            away_score: away,
            extra_home_score: extraHome || '0',
            extra_away_score: extraAway || '0',
            penalty_home_score: penultyHome || '0',
            penalty_away_score: penultyAway || '0',
            home_team: homeTeam,
            away_team: awayTeam,
        }

        try {
            const res = await postAuthorization(url, payload)
        } catch (error) {}
    }

    submitAnswer = async () => {
        const url = API.ansQues
        const payload = {
            question_id: this.props?.myQues?.questionId,
            answer: this.state.myAnswer,
        }

        if (this.props?.myQues?.questionId && this.state.myAnswer) {
            try {
                const res = await postAuthorization(url, payload)
                if (res?.data?.status) {
                    this.setState({ userAnswer: this.state.myAnswer })
                }
            } catch (error) {}
        }
    }

    render() {
        const { match, actual } = this.props
        const {
            home,
            away,
            extraHome,
            extraAway,
            penultyHome,
            penultyAway,
            fixtureId,
            pointsEarned,
        } = this.state

        return (
            <View style={[styles.matchWrapper]}>
                <View style={styles.matchTop}>
                    <Text style={[styles.matchTopBox, { maxWidth: 160 }]}>
                        {match?.league?.round || 'No Group / Type'}
                    </Text>
                    <Text style={styles.matchTopBox}>
                        Points Earned -{' '}
                        <Text style={styles.matchPoints}>{pointsEarned}</Text>
                    </Text>
                </View>

                <View
                    style={[
                        main.flex1,
                        main.row,
                        main.mt3,
                        main.mx1,
                        match?.fixture?.short === 'NS' && actual
                            ? main.center
                            : {},
                    ]}
                >
                    <View style={[main.flex1]}>
                        <Text style={styles.teamTitle}>
                            {match?.teams?.home?.name}
                        </Text>
                    </View>
                    <View style={[main.flex]}>
                        {match?.fixture?.short !== 'NS' ? (
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
                                            {match?.fixture?.id == fixtureId
                                                ? home
                                                : '-'}
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
                                            {match?.fixture?.id == fixtureId
                                                ? away
                                                : '-'}
                                        </Text>
                                    </View>
                                </View>
                                <Text
                                    style={[styles.matchTimePeriod, main.mt2]}
                                >
                                    {match?.matchTime}
                                </Text>
                            </View>
                        ) : match?.fixture?.short === 'NS' ? (
                            <View style={styles.matchCenter}>
                                <View style={styles.scoreBoard}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={[
                                            styles.scoreContainer,
                                            {
                                                backgroundColor:
                                                    match?.fixture?.colorScore,
                                            },
                                        ]}
                                        onPress={() => this.refs.home.focus()}
                                    >
                                        <TextInput
                                            editable={
                                                !match?.fixture?.predictionEnd
                                            }
                                            value={
                                                match?.fixture?.id == fixtureId
                                                    ? home
                                                    : null
                                            }
                                            maxLength={1}
                                            ref={'home'}
                                            keyboardType="numeric"
                                            style={styles.scoreInput}
                                            placeholderTextColor={
                                                Constants.Colors.WHITE
                                            }
                                            onChangeText={(home) =>
                                                this.setState(
                                                    {
                                                        fixtureId:
                                                            match.fixture?.id,
                                                        home,
                                                        homeTeam:
                                                            match?.teams?.home
                                                                ?.name,
                                                        awayTeam:
                                                            match?.teams?.away
                                                                ?.name,
                                                    },
                                                    () =>
                                                        this.predictionChecker()
                                                )
                                            }
                                        />
                                    </TouchableOpacity>
                                    <Ionicons
                                        name="ios-remove-outline"
                                        color={Constants.Colors.WHITE}
                                        style={styles.scoreDivider}
                                    />
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={[
                                            styles.scoreContainer,
                                            {
                                                backgroundColor:
                                                    match?.fixture?.colorScore,
                                            },
                                        ]}
                                        onPress={() => this.refs.away.focus()}
                                    >
                                        <TextInput
                                            editable={
                                                !match?.fixture?.predictionEnd
                                            }
                                            value={
                                                match?.fixture?.id == fixtureId
                                                    ? away
                                                    : null
                                            }
                                            ref={'away'}
                                            maxLength={1}
                                            keyboardType="numeric"
                                            style={styles.scoreInput}
                                            placeholderTextColor={
                                                Constants.Colors.WHITE
                                            }
                                            onChangeText={(away) =>
                                                this.setState(
                                                    {
                                                        fixtureId:
                                                            match.fixture?.id,
                                                        away,
                                                        homeTeam:
                                                            match?.teams?.home
                                                                ?.name,
                                                        awayTeam:
                                                            match?.teams?.away
                                                                ?.name,
                                                    },
                                                    () =>
                                                        this.predictionChecker()
                                                )
                                            }
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Text
                                    style={[styles.matchTimePeriod, main.mt2]}
                                >
                                    {match?.matchTime}
                                </Text>
                            </View>
                        ) : null}
                    </View>
                    <View style={[main.flex1, main.flexEnd]}>
                        <Text style={styles.teamTitle}>
                            {match?.teams?.away?.name}
                        </Text>
                    </View>
                </View>
                {!match?.group && home && away && home === away ? (
                    <View style={main.center}>
                        <View>
                            {match?.fixture?.short !== 'NS' ? (
                                <View style={styles.matchCenter}>
                                    <View style={styles.scoreBoard}>
                                        <View
                                            style={[
                                                styles.scoreContainer,
                                                {
                                                    backgroundColor:
                                                        match?.fixture
                                                            ?.colorScore,
                                                },
                                            ]}
                                        >
                                            <Text style={styles.score}>
                                                {extraHome}
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
                                                        match?.fixture
                                                            ?.colorScore,
                                                },
                                            ]}
                                        >
                                            <Text style={styles.score}>
                                                {extraAway}
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
                            ) : match?.fixture?.short === 'NS' ? (
                                <View style={styles.matchCenter}>
                                    <View style={styles.scoreBoard}>
                                        <TouchableOpacity
                                            activeOpacity={1}
                                            style={[
                                                styles.scoreContainer,
                                                {
                                                    backgroundColor:
                                                        Constants.Colors
                                                            .PRIMARY2,
                                                },
                                            ]}
                                            onPress={() =>
                                                this.refs.extraHome.focus()
                                            }
                                        >
                                            <TextInput
                                                editable={
                                                    !match?.fixture
                                                        ?.predictionEnd
                                                }
                                                value={
                                                    match?.fixture?.id ==
                                                    fixtureId
                                                        ? extraHome
                                                        : null
                                                }
                                                ref={'extraHome'}
                                                maxLength={1}
                                                keyboardType="numeric"
                                                style={styles.scoreInput}
                                                placeholderTextColor={
                                                    Constants.Colors.WHITE
                                                }
                                                onChangeText={(extraHome) => {
                                                    this.setState(
                                                        {
                                                            fixtureId:
                                                                match?.fixture
                                                                    ?.id,
                                                            extraHome,
                                                            homeTeam:
                                                                match?.teams
                                                                    ?.home
                                                                    ?.name,
                                                            awayTeam:
                                                                match?.teams
                                                                    ?.away
                                                                    ?.name,
                                                        },
                                                        () =>
                                                            this.predictionChecker()
                                                    )
                                                }}
                                            />
                                        </TouchableOpacity>
                                        <Ionicons
                                            name="ios-remove-outline"
                                            color={Constants.Colors.WHITE}
                                            style={styles.scoreDivider}
                                        />
                                        <TouchableOpacity
                                            activeOpacity={1}
                                            style={[
                                                styles.scoreContainer,
                                                {
                                                    backgroundColor:
                                                        Constants.Colors
                                                            .PRIMARY2,
                                                },
                                            ]}
                                            onPress={() =>
                                                this.refs.extraAway.focus()
                                            }
                                        >
                                            <TextInput
                                                editable={
                                                    !match?.fixture
                                                        ?.predictionEnd
                                                }
                                                value={
                                                    match?.fixture?.id ==
                                                    fixtureId
                                                        ? extraAway
                                                        : null
                                                }
                                                ref={'extraAway'}
                                                maxLength={1}
                                                keyboardType="numeric"
                                                style={styles.scoreInput}
                                                placeholderTextColor={
                                                    Constants.Colors.WHITE
                                                }
                                                onChangeText={(extraAway) => {
                                                    this.setState(
                                                        {
                                                            fixtureId:
                                                                match?.fixture
                                                                    ?.id,
                                                            extraAway,
                                                            homeTeam:
                                                                match?.teams
                                                                    ?.home
                                                                    ?.name,
                                                            awayTeam:
                                                                match?.teams
                                                                    ?.away
                                                                    ?.name,
                                                        },
                                                        () =>
                                                            this.predictionChecker()
                                                    )
                                                }}
                                            />
                                        </TouchableOpacity>
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
                        <Text style={styles.extraPenulty}>ET</Text>
                    </View>
                ) : null}
                {!match?.group &&
                home &&
                away &&
                home === away &&
                extraHome &&
                extraAway &&
                extraHome === extraAway ? (
                    <View style={[main.center, main.mt3]}>
                        <View>
                            {match?.fixture?.short !== 'NS' ? (
                                <View style={styles.matchCenter}>
                                    <View style={styles.scoreBoard}>
                                        <View
                                            style={[
                                                styles.scoreContainer,
                                                {
                                                    backgroundColor:
                                                        match?.fixture
                                                            ?.colorScore,
                                                },
                                            ]}
                                        >
                                            <Text style={styles.score}>
                                                {penultyHome}
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
                                                        match?.fixture
                                                            ?.colorScore,
                                                },
                                            ]}
                                        >
                                            <Text style={styles.score}>
                                                {penultyAway}
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
                            ) : match?.fixture?.short === 'NS' ? (
                                <View style={styles.matchCenter}>
                                    <View style={styles.scoreBoard}>
                                        <TouchableOpacity
                                            activeOpacity={1}
                                            style={[
                                                styles.scoreContainer,
                                                {
                                                    backgroundColor:
                                                        Constants.Colors
                                                            .PRIMARY2,
                                                },
                                            ]}
                                            onPress={() =>
                                                this.refs.penultyHome.focus()
                                            }
                                        >
                                            <TextInput
                                                editable={
                                                    !match?.fixture
                                                        ?.predictionEnd
                                                }
                                                value={
                                                    match?.fixture?.id ==
                                                    fixtureId
                                                        ? penultyHome
                                                        : null
                                                }
                                                ref={'penultyHome'}
                                                maxLength={1}
                                                keyboardType="numeric"
                                                style={styles.scoreInput}
                                                placeholderTextColor={
                                                    Constants.Colors.WHITE
                                                }
                                                onChangeText={(penultyHome) =>
                                                    this.setState(
                                                        {
                                                            fixtureId:
                                                                match?.fixture
                                                                    ?.id,
                                                            penultyHome,
                                                            homeTeam:
                                                                match?.teams
                                                                    ?.home
                                                                    ?.name,
                                                            awayTeam:
                                                                match?.teams
                                                                    ?.away
                                                                    ?.name,
                                                        },
                                                        () =>
                                                            this.predictionChecker()
                                                    )
                                                }
                                            />
                                        </TouchableOpacity>
                                        <Ionicons
                                            name="ios-remove-outline"
                                            color={Constants.Colors.WHITE}
                                            style={styles.scoreDivider}
                                        />
                                        <TouchableOpacity
                                            activeOpacity={1}
                                            style={[
                                                styles.scoreContainer,
                                                {
                                                    backgroundColor:
                                                        Constants.Colors
                                                            .PRIMARY2,
                                                },
                                            ]}
                                            onPress={() =>
                                                this.refs.penultyAway.focus()
                                            }
                                        >
                                            <TextInput
                                                editable={
                                                    !match?.fixture
                                                        ?.predictionEnd
                                                }
                                                value={
                                                    match?.fixture?.id ==
                                                    fixtureId
                                                        ? penultyAway
                                                        : null
                                                }
                                                ref={'penultyAway'}
                                                maxLength={1}
                                                keyboardType="numeric"
                                                style={styles.scoreInput}
                                                placeholderTextColor={
                                                    Constants.Colors.WHITE
                                                }
                                                onChangeText={(penultyAway) =>
                                                    this.setState(
                                                        {
                                                            fixtureId:
                                                                match?.fixture
                                                                    ?.id,
                                                            penultyAway,
                                                            homeTeam:
                                                                match?.teams
                                                                    ?.home
                                                                    ?.name,
                                                            awayTeam:
                                                                match?.teams
                                                                    ?.away
                                                                    ?.name,
                                                        },
                                                        () =>
                                                            this.predictionChecker()
                                                    )
                                                }
                                            />
                                        </TouchableOpacity>
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
                        <Text style={styles.extraPenulty}>PEN</Text>
                    </View>
                ) : null}
                <View>
                    <Text style={styles.teamTitle}>
                        Ques: How many times have the above 2 teams won the Euro
                        collectively ?
                    </Text>
                    {this.state.userAnswer || match?.fixture?.short !== 'NS' ? (
                        <Text style={styles.teamTitle}>
                            Ans: {this.state.userAnswer || 'No answer'}
                        </Text>
                    ) : !match?.fixture?.predictionEnd ? (
                        <View
                            style={[
                                main.row,
                                main.justifyContentSpaceBetween,
                                main.mt2,
                            ]}
                        >
                            <View style={[main.row, main.flexCenter]}>
                                <Text style={styles.teamTitle}>Ans: </Text>
                                <TextInput
                                    editable={!match?.fixture?.predictionEnd}
                                    placeholder="Type your answer"
                                    keyboardType="numeric"
                                    placeholderTextColor={
                                        Constants.Colors.SECONDARY
                                    }
                                    style={{
                                        color: Constants.Colors.WHITE,
                                        height: 22,
                                        padding: 0,
                                    }}
                                    onChangeText={(myAnswer) =>
                                        this.setState({ myAnswer })
                                    }
                                />
                            </View>
                            <TouchableOpacity onPress={this.submitAnswer}>
                                <Text style={styles.teamTitle}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    ) : null}
                </View>
                {match?.fixture?.predictionEnd &&
                match?.fixture?.short === 'NS' ? (
                    <View style={[main.center, main.my4]}>
                        <Text style={styles.teamTitle}>Prediction Closed</Text>
                    </View>
                ) : null}
            </View>
        )
    }
}

export default RenderMatches
