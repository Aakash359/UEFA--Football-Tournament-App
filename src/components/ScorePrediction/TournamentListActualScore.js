import React, { Component } from 'react'
import { Text, View, Image, FlatList, SafeAreaView } from 'react-native'
import styles from './styles'
import moment from 'moment'
import MatchList from './MatchListActualScore'
import ModalDropdown from 'react-native-modal-dropdown'
import propTypes from 'prop-types'

class TournamentListActualScore extends Component {
    renderItems = ({ item }) => {
        const { actual = false } = this.props

        return (
            <View>
                <View style={styles.matchHeader}>
                    <Text style={[styles.matchHeaderTitle,styles.matchPadding]}>
                        {moment(item?.title).format('ddd, D MMM YYYY')}
                    </Text>
                </View>
                <MatchList data={item?.matchData || []} actual={actual} />
            </View>
        )
    }

    render() {
        const { data } = this.props
const { tournaments = [] } = this.props
const {leagueName} = this.props
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>{leagueName}</Text>
                    <View>
                        <ModalDropdown
                            options={data?.groups}
                            defaultIndex={0}
                            defaultValue={data?.groups[0] || 'Groups'}
                            style={styles.modal}
                            textStyle={styles.modalText}
                            dropdownStyle={styles.modalDropDown}
                            dropdownTextStyle={styles.modalDropDownText}
                            dropdownTextHighlightStyle={
                                styles.modalDropDownHighlightedText
                            }
                        ></ModalDropdown>
                    </View>
                </View>
                <View style={styles.flatView}> 

                
                <FlatList
                    data={tournaments}
                    renderItem={this.renderItems}
                    keyExtractor={(item, i) => `${i}`}
                    style={styles.flatListStyle}
                    showsVerticalScrollIndicator={false}
                />
                </View>
            </View>
        )
    }
}

TournamentListActualScore.propTypes = {
    data: propTypes.object.isRequired,
    actual: propTypes.bool,
}

export default TournamentListActualScore
