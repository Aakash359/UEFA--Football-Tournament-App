import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import main from '../../../styles/main'
import styles from '../styles'
import { MatchList } from './index'

class Tournaments extends Component {
    renderItem = ({ item }) => {
        return (
            <View style={styles.tourWrapper}>
                <View style={styles.tourHeader}>
                    <Text style={styles.tourHeaderText}>
                        {item?.leagueName}
                    </Text>
                </View>
                <MatchList matches={item?.matchData} />
            </View>
        )
    }

    render() {
        const { tournaments = [], emptyMsg } = this.props
        return (
            <View style={main.flex1}>
                <FlatList
                    data={tournaments}
                    keyExtractor={(item, i) => i.toString()}
                    renderItem={this.renderItem}
                    style={[main.flex1]}
                    ListEmptyComponent={() => {
                        return emptyMsg ? (
                            <View style={main.center}>
                                <Text style={[main.titleSm]}>
                                    No matches found
                                </Text>
                            </View>
                        ) : null
                    }}
                />
            </View>
        )
    }
}

export default Tournaments
