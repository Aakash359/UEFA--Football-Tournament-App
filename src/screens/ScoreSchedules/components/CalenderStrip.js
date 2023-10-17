import moment from 'moment'
import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import ReactNativeCalendarStrip from 'react-native-calendar-strip'
import Constants from '../../../contants'
import styles from '../styles'

class CalenderStrip extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const { date, onDateChange } = this.props
        return (
            <View>
                <ReactNativeCalendarStrip
                    scrollable
                    style={styles.calenderStyle}
                    calendarColor={Constants.Colors.ACCENT}
                    calendarHeaderStyle={styles.calenderHeaderStyle}
                    dateNumberStyle={styles.calenderDateStyle}
                    dateNameStyle={styles.calenderDateStyle}
                    iconContainer={{ flex: 0.1 }}
                    selectedDate={date}
                    onDateSelected={onDateChange}
                    iconLeft={null}
                    iconRight={null}
                    highlightDateNameStyle={styles.calenderDateStyle}
                    highlightDateNumberStyle={styles.calenderDateStyle}
                    highlightDateContainerStyle={
                        styles.calenderHighlightDateContainer
                    }
                />
            </View>
        )
    }
}

export default CalenderStrip
