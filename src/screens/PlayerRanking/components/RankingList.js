import React, { Component } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import Button from '../../../components/Button'
import Constants from '../../../contants'
import main from '../../../styles/main'
import styles from '../styles'

export class RankingList extends Component {
    renderRanks = ({ item, index }) => {
        const me = item?.userId === this.props.userId
        return (
            <View style={[main.row, styles.rankWrapper]}>
                <Text style={styles.rankUsername}># {++index}</Text>
                <View
                    style={[
                        main.row,
                        main.flex1,
                        me ? styles.myRankContainer : styles.rankContainer,
                    ]}
                >
                    <View
                        style={[main.row, main.flex1, styles.rankUserContainer]}
                    >
                        <Image
                            source={{ uri: item?.imageUrl }}
                            style={styles.rankUserImg}
                        />
                        <Text style={styles.rankUsername}>
                            {item?.username}
                        </Text>
                    </View>
                    <Text style={styles.rankUsername}>{item?.points || 0}</Text>
                </View>
            </View>
        )
    }

    render() {
        const { data = [], userId = 0, user = {} } = this.props

        const me = data?.find((i) => i?.userId == userId) || {}
        const rank = data?.indexOf(me) + 1 || 0

        return (
            <View style={main.flex1}>
                <FlatList
                    data={data}
                    renderItem={this.renderRanks}
                    keyExtractor={(item, i) => `${i}`}
                    showsVerticalScrollIndicator={false}
                    style={[main.flex1]}
                />
                <View style={[styles.myRankWrapper]}>
                    <View style={[main.row, styles.rankWrapper]}>
                        <Text style={styles.rankUsername}># {rank}</Text>
                        <View
                            style={[
                                main.row,
                                main.flex1,
                                styles.rankContainer,
                                { backgroundColor: Constants.Colors.PRIMARY },
                            ]}
                        >
                            <View
                                style={[
                                    main.row,
                                    main.flex1,
                                    styles.rankUserContainer,
                                ]}
                            >
                                <Image
                                    source={{ uri: user?.imageUrl }}
                                    style={styles.rankUserImg}
                                />
                                <Text style={styles.rankUsername}>
                                    {user?.username}
                                </Text>
                            </View>
                            <Text style={styles.rankUsername}>
                                {me?.points || 0}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default RankingList
