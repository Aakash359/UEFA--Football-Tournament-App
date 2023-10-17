import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import styles from '../styles'
import { TouchView } from '../../../components/TouchView'
import Constants from '../../../contants'
import { RoutesName } from '../../../navigation/routes.config'
import { connect } from 'react-redux'
import { getBanks,withDrawAmountRequest, withDrawAmountSuccess, setWithDrawAmountLoader, withDrawAmountError  } from '../../../redux/actions/bankActions'
import main from '../../../styles/main'
import Loader from '../../../components/Loader'
import MsgBox from '../../../components/MsgBox'
import Button from '../../../components/Button'

export class WithdrawAmount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            logoutModal: false,
            list: [],
            user_bank_details_id: '',
        }
    }
    onSelectItem = (item) => {
        this.setState({ user_bank_details_id: item.userBankDetailsId });
    };
    renderItem = ({ item, }) => {
        
        return (
            <View style={styles.v1}>
                <View style={styles.v2}>
                    <View style={styles.v3}>
                        <Text style={styles.tx1}>{item?.bankBusinessName}</Text>

                        <Text style={styles.tx2}>{item?.accountNumber}</Text>
                    </View>
                    <TouchableOpacity style={styles.touch1}
                        onPress={() => this.onSelectItem(item)}>
                        <Image
                            source={this.state.user_bank_details_id == item.userBankDetailsId ? Constants.Images.roundBlueTick : Constants.Images.roundTick}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    renderwithDrawAmountList = () => {
        const { accounts = [],  user = {} } = this.props
        return accounts?.map((item, i) => {
           return (
               <View key={`${i}`}>
               {this.renderItem({item})}
               </View>
           )
        }) 
    }
    
    withDrawAmountList = () => {
       return (
        <View  style={styles.flat} >
        {this.renderwithDrawAmountList()}
       </View>
       )
    }
    
    componentDidMount() {
        this.subscribe = this.props.navigation.addListener('focus', () => {
            this.props.getBanks()
        })
        this.props.withDrawAmountSuccess(false)       
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.withDrawAmountResponse) {
            this.props.navigation.navigate(RoutesName.MyAccount)
        }
   }
    onSave = async () => {
        let payload = {
            user_bank_details_id: this.state.user_bank_details_id,
        }
        this.props.withDrawAmountRequest(payload)
       
    }
    render() {
        const {
            navigation: { navigate },
            getBankError,
            getBankLoder,
            withDrawAmountError
        } = this.props

        return (
            <View style={styles.container}>
                <Text style={[styles.text, main.mx2]}>
                    Please select a payment method to withdraw amount
                </Text>

                <Loader center isLoading={getBankLoder} />
                <ScrollView style={{ flex: 1, width: '100%' }}>
                <this.withDrawAmountList/>
                   
                    <MsgBox error={getBankError} msg={getBankError} />
                    <View style={styles.addBankBtn}>
                        <TouchView
                            title={'Add bank account'}
                            onPress={() => navigate(RoutesName.AddBank)}
                        />
                    </View>
                </ScrollView>
                
                <View
                    style={styles.saveBtn}>
                         <MsgBox error={withDrawAmountError} msg={withDrawAmountError} />
               
                    <Button
                    title="Withdraw"
                    style={[styles.saveBtn]}
                    onPress={this.onSave}
                    isLoading={this.props.contactUsLoading}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({
    bank: { accounts, getBankLoder, getBankError,withDrawAmountResponse, withDrawAmountError,withDrawAmountLoader},
}) => {
    return {
        accounts,
        getBankError,
        getBankLoder,
        withDrawAmountLoader,
        withDrawAmountError,
        withDrawAmountResponse
    }
}

const mapDispatchToProps = {
    getBanks: getBanks,
    withDrawAmountRequest: withDrawAmountRequest,
    setWithDrawAmountLoader: setWithDrawAmountLoader,
    withDrawAmountSuccess: withDrawAmountSuccess,   

}

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawAmount)
