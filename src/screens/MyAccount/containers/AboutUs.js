import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import styles from '../styles'
import { aboutUsRequest } from '../../../redux/actions/settingsActions'
import { connect } from 'react-redux'
import HTMLView from 'react-native-htmlview'
import Constants from '../../../contants'
import typography from '../../../contants/typography'

class AboutUs extends Component {
    constructor() {
        super()
        this.state = {
            loader: false,
            text: '',
            arText: '',
            languageCode: '1001',
        }
    }

    componentDidMount() {
        let payload = { slug: 'about' }
        this.props.aboutUsRequest(payload)
    }
    render() {
        const { settings ={} } = this.props
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {settings && (
                        <HTMLView
                            value={settings}
                            stylesheet={htmlStyleSheet}
                        />
                    )}
                </ScrollView>
            </View>
        )
    }
}
const htmlStyleSheet = StyleSheet.create({
    p: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(16),
        marginTop: Constants.BaseStyle.scale(20),
        marginHorizontal: Constants.BaseStyle.scale(20),
        fontFamily: typography.FONT_FAMILY_REGULAR,
    },
    h2: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(16),
        marginHorizontal: Constants.BaseStyle.scale(20),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
    },
    strong: {
        color: Constants.Colors.WHITE,
    },
    span: {
        fontSize: Constants.BaseStyle.scale(16),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        color: Constants.Colors.WHITE,
    },
    p: {
        fontSize: Constants.BaseStyle.scale(16),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        color: Constants.Colors.WHITE,
    },
    ol: {
        fontSize: Constants.BaseStyle.scale(16),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        color: Constants.Colors.WHITE,
    },
    ul: {
        fontSize: Constants.BaseStyle.scale(16),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        color: Constants.Colors.WHITE,
    },
})

// =============== REDUX CONNECT & RESPONSE ===============
const mapStateToProps = (res) => {
    return {
        settings: res.settings?.aboutUs?.content,
    }
}
export default connect(mapStateToProps, { aboutUsRequest })(AboutUs)
