import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import styles from '../styles'
import Constants from '../../../contants'
import Button from '../../../components/Button'
import { RoutesName } from '../../../navigation/routes.config'
import { ruleRegulationRequest } from '../../../redux/actions/rankingActions'
import { connect } from 'react-redux'
import HTMLView from 'react-native-htmlview'
import typography from '../../../contants/typography'
import API from '../../../contants/apis'
import { postAuthorization } from '../../../services/api_services'
import Loader from '../../../components/Loader'
import MsgBox from '../../../components/MsgBox'
import main from '../../../styles/main'
import { WebView } from 'react-native-webview'
import { logout } from '../../../redux/actions/authActions'

class RulesAndregulation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rules: '',
            paymentStatus: null,
            isLoading: true,
            error: '',
            showPG: false,
            webView: null,
            btnLoader: false,
        }
    }
    componentDidMount() {
        this.getPaymentStatusRules()
    }

    getPaymentStatusRules = async () => {
        this.setState({ isLoading: true })
        const url = API.leagueRuleStatus

        const payload = {
            league_id:
                this.props.route?.params?.league?.league?.id ||
                this.props.league?.league?.id,
        }

        try {
            const res = await postAuthorization(url, payload)

            if (res?.data?.status) {
                this.setState(
                    {
                        paymentStatus: res?.data?.data?.ruleEntryStatus, //res?.data?.data?.paymentStatus,
                        rules: res?.data?.data?.leagueRule,
                        error: '',
                        isLoading: false,
                    },
                    () => {
                        if (
                            this.state.paymentStatus === 1 //2
                        ) {
                            let league = this.props.route?.params?.league || {}
                            this.props.navigation.navigate(
                                RoutesName.MyPrediction,
                                league
                            )
                        }
                    }
                )
            } else {
                this.setState({ isLoading: false, error: res?.data?.message })
            }
        } catch (error) {
            this.setState({ isLoading: false, error: error?.message })
        }
    }

    updateRuleEntry = async () => {
        this.setState({ btnLoader: true })
        const league = this.props?.route?.params?.league?.league

        const url = API.updateRuleEntry
        const payload = {
            league_id: league?.id,
            league_name: league?.name,
        }
        try {
            const res = await postAuthorization(url, payload)

            if (res?.data?.status) {
                this.setState({ btnLoader: false })

                this.getPaymentStatusRules()
            } else {
                if (
                    res?.data?.message ===
                    'You have already accepted rules and regulations to predict into this league'
                ) {
                    this.props.navigation.navigate(
                        RoutesName.MyPrediction,
                        this.props?.route?.params?.league
                    )
                }
            }
        } catch (error) {
            this.setState({ btnLoader: false })
        }
    }

    updatePaymentStatus = async () => {
        const league = this.props?.route?.params?.league?.league

        const url = API.updatePaymentStatus
        const payload = {
            league_id: league?.id,
            amount: 500,
            league_name: league?.name,
        }
        try {
            const res = await postAuthorization(url, payload)

            if (res?.data?.status) {
                this.getPaymentStatusRules()
            }
        } catch (error) {}
    }

    render() {
        const {
            route: { params },
        } = this.props
        const { paymentStatus, rules, error, isLoading } = this.state
        const league = params?.league || {}
        const payment = params?.payment || false

        return (
            <View style={{ flex: 1 }}>
                <View style={[styles.container]}>
                    <Loader isLoading={isLoading} center />
                    <MsgBox error={error} msg={error} />
                    <View style={styles.container}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <HTMLView
                                value={rules}
                                stylesheet={htmlStyleSheet}
                            />
                        </ScrollView>
                    </View>

                    <View
                        style={{
                            marginHorizontal: Constants.BaseStyle.scale(10),
                        }}
                    >
                        {payment ? (
                            paymentStatus === 0 ? (
                                <Button
                                    isLoading={this.state.btnLoader}
                                    title={`Accept & Continue`}
                                    style={[styles.saveBtn]}
                                    onPress={this.updateRuleEntry}

                                    // onPress={
                                    //     () =>
                                    //         this.props.navigation.navigate(
                                    //             RoutesName.MyPrediction,
                                    //             league
                                    //         )
                                    //     // this.setState({ showPG: true })
                                    // }
                                />
                            ) : paymentStatus === 1 ? (
                                <>
                                    <Button
                                        isLoading={this.state.btnLoader}
                                        title={`Accept & Continue`}
                                        style={[styles.saveBtn]}
                                        onPress={this.updateRuleEntry}
                                        // onPress={
                                        //     () =>
                                        //         this.props.navigation.navigate(
                                        //             RoutesName.MyPrediction,
                                        //             league
                                        //         )
                                        //     // this.setState({ showPG: true })
                                        // }
                                    />
                                    {/* <View style={main.center}>
                                        <Text style={main?.title}>
                                            Admin will approve your request in
                                            few mins. Please come back soon or
                                            revisit this screen!
                                        </Text>
                                    </View> */}
                                </>
                            ) : paymentStatus === 3 ? (
                                <View style={main.center}>
                                    <Text style={main?.title}>
                                        Admin canceled your request
                                    </Text>
                                </View>
                            ) : null
                        ) : null}
                    </View>
                </View>

                {this.state.showPG && (
                    <View
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <WebView
                            source={{ uri: 'https://goat.zbni.co/' }}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                            }}
                            startInLoadingState={true}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            onNavigationStateChange={(state) => {
                                this.setState({ webView: state }, () => {
                                    if (
                                        this.state.webView &&
                                        this.state.webView?.url.includes(
                                            'success'
                                        )
                                    ) {
                                        this.setState({ showPG: false })
                                        this.updatePaymentStatus()
                                    }
                                })
                            }}
                        />
                    </View>
                )}
            </View>
        )
    }
}
const htmlStyleSheet = StyleSheet.create({
    span: {
        fontSize: Constants.BaseStyle.scale(18),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        color: Constants.Colors.WHITE,
    },
    p: {
        fontSize: Constants.BaseStyle.scale(18),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        color: Constants.Colors.WHITE,
    },
    ol: {
        fontSize: Constants.BaseStyle.scale(18),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        color: Constants.Colors.WHITE,
    },
    ul: {
        fontSize: Constants.BaseStyle.scale(18),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        color: Constants.Colors.WHITE,
    },
})
// ===================== REDUX CONNECT & RESPONSE ===============
const mapStateToProps = (res) => {
    return {
        ruleRegulation: res.ranking?.ruleRegulation,
    }
}
export default connect(mapStateToProps, { ruleRegulationRequest, logout })(
    RulesAndregulation
)
