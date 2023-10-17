import React, { Component } from 'react'
import { Text, View, FlatList, SafeAreaView } from 'react-native'
import styles from './styles'
import MatchList from './MatchList'
import ModalDropdown from 'react-native-modal-dropdown'
import propTypes from 'prop-types'
import main from '../../styles/main'
import { RoutesName } from '../../navigation/routes.config'

class ScorePrediction extends Component {
    renderItems = ({ item }) => {
        const {
            actual = false,
            userPrediction = [],
            questions = [],
            navigation,
        } = this.props

        return (
            <View>
                <View style={styles.matchHeader}>
                    <Text style={styles.matchHeaderTitle}>
                        {item?.leagueDate}
                    </Text>
                </View>
                <MatchList
                    data={item?.matches || []}
                    actual={actual}
                    userPrediction={userPrediction}
                    questions={questions}
                    navigation={navigation}
                />
            </View>
        )
    }

    render() {
        const { data, isLoading } = this.props

        return (
            <View style={{ height: '100%' }}>
                <View style={styles.header}>
                    <Text style={styles.title}>{data?.name}</Text>
                    <View>
                        <ModalDropdown
                            options={data?.groups}
                            defaultIndex={0}
                            defaultValue={data?.groups[0] || 'Groups'}
                            onSelect={(e) => {
                                this.props.navigate(RoutesName.PointTable, {
                                    leagueId: data?.id,
                                    leagueName: data?.name,
                                    groupId: data?.groups[e],
                                    groups: data?.groups,
                                })
                            }}
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
                <View style={main.flex1}>
                    <FlatList
                        data={data?.matchList}
                        renderItem={this.renderItems}
                        keyExtractor={(item, i) => `${i}`}
                        style={[main.flex1]}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => {
                            return !isLoading ? (
                                <View style={main.center}>
                                    <Text style={main?.title}>
                                        No matches found
                                    </Text>
                                </View>
                            ) : null
                        }}
                    />
                </View>
            </View>
        )
    }
}

ScorePrediction.propTypes = {
    data: propTypes.object.isRequired,
    actual: propTypes.bool,
}

export default ScorePrediction
