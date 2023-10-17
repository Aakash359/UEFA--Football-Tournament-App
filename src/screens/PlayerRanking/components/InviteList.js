import React, { Component } from 'react'
import { FlatList, Image, Text, View ,TouchableOpacity} from 'react-native'
import Constants from '../../../contants'
import main from '../../../styles/main'
import styles from '../styles'
import Button from '../../../components/Button'
export class RankingList extends Component {
    constructor(props) {

        super(props);
        this.state = {
            selectedarrayList: [],
           }
    }
   
    onSelectItem = (item, index) => {
        let data = [...this.state.selectedarrayList];
        if (data.includes(item.userId)) {
             let data1 = data.indexOf(item.userId)

            data.splice(data1, 1);
          
            this.setState({
                selectedarrayList: data,
               })
        } else {
            data.push(item.userId)
            this.setState({
                selectedarrayList: data,
               })
        }
       
    }
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
                    
                    <TouchableOpacity style={styles.touch1}
                        onPress={() => this.onSelectItem(item)}>
                   <Image
                            source={this.state.selectedarrayList.includes(item.userId) ? Constants.Images.roundBlueTick : Constants.Images.roundTick}
                            style={styles.icon}
                        />
                        </TouchableOpacity>
                  </View>
            </View>
        )
    }
    onSave = async () => {

             this.props.navigation.navigate(RoutesName.AddGroup,{selectedarray :this.state.selectedarrayList})
        
    }
    render() {
        const { data = [], userId = 0, user = {} } = this.props
        
        const me = data.find((i) => i.userId == userId)
        const rank = data.indexOf(me) + 1

        return (
            <View style={main.flex1}>
                <FlatList
                    data={data}
                    renderItem={this.renderRanks}
                    keyExtractor={(item, i) => `${i}`}
                    showsVerticalScrollIndicator={false}
                    style={main.flex1}
                />
                
                <View style={styles.myRankWrapper}>
                
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
                                {me?.point || 0}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer}><Button
                    title="Add Group"
                    style={styles.saveBtn}
                    onPress={this.onSave}
                /></View>
            </View>
        )
    }
}

export default RankingList
