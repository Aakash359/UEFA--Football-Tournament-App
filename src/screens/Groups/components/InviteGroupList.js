import React, { Component } from 'react'
import { FlatList, Image, Text, View,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Loader from '../../../components/Loader'
import MsgBox from '../../../components/MsgBox'
import main from '../../../styles/main'
import styles from '../styles'
import { acceptGroupRequest,rejectGroupRequest,myGroupRequest } from '../../../redux/actions/rankingActions';

  class InviteGroupList extends Component {

    onAccept =  (item) => {
            let payload = {
                user_group_id:item.userGroupId
            }
            this.props.acceptGroupRequest(payload)        
    }
    onReject =  (item) => {
        let payload = {
            user_group_id:item.userGroupId
        }
        this.props.rejectGroupRequest(payload)        
}
    renderRanks = ({ item }) => {
        return (
            <View style={styles.containerList}>
                <View
                    style={styles.rowContainer}
                >
                    <View>
                        <Text style={styles.groupName}>{item.groupName}</Text>
                        <Text style={[styles.invitedByText,styles.colorText]}>{'invited By '}<Text style={styles.invitedByText}>{item.invitedBy}</Text></Text>
                        
                        <Text
                            style={styles.normalText}
                        > {item.participantsCount + ' members'} </Text>
                        
                    </View>
                    </View>
                    <View style={{alignItems:'flex-end'}}>
                         <View style={styles.buttonHeading}>
                             <TouchableOpacity onPress={() => this.onAccept(item)}>
                                    <Text 
                                     style={[styles.rejectButton,styles.marginStyle]}>
                                         Accept</Text>
                                         </TouchableOpacity>
                                         <TouchableOpacity onPress={() => this.onReject(item)}>
                                    <Text  
                                    style={styles.rejectButton}>Reject</Text>
                                    </TouchableOpacity>
                                </View>
                                </View>
            </View>
        )
    }

    renderGroupList = () => {
        const { data = [],  user = {} } = this.props
        return data?.map((item, i) => {
            return (
                <View key={`${i}`}>
                {this.renderRanks({item})}
                </View>
            )
        })
    }

    GroupList = () => {
        return (
            <View style={main.flex1}>
                {this.renderGroupList()}
            </View>
        )
    }

    render() {
         const { data = [],  user = {} } = this.props
       
        return (
            <View style={main.flex1}>
                <this.GroupList/>
            </View>
        )
    }
}

const mapStateToProps = ({
    ranking: { 
        addGroupLoader,
        acceptGroup,
        acceptGroupError,
        acceptGroupLoader,
        rejectGroup,
        rejectGroupError,
        rejectGroupLoader,},   
}) => {
    return {              
addGroupLoader,
acceptGroup,
acceptGroupError,
acceptGroupLoader,
rejectGroup,
rejectGroupError,
rejectGroupLoader,
    }
}

const mapDispatchToProps = {
     acceptGroupRequest: acceptGroupRequest,
     rejectGroupRequest:rejectGroupRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(InviteGroupList)

 