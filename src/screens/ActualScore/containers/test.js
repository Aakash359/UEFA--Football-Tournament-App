import React, { Component } from 'react'
import { View } from 'react-native'
import ScorePrediction from '../../../components/ScorePrediction'
import { ActualScore as ActualScoreData } from '../../../contants/ScorePrediction'

class ActualScore extends Component {
    render() {
        return (
            <View>
                <ScorePrediction data={ActualScoreData} actual />
            </View>
        )
    }
}

export default ActualScore



// _addUserRender(){
//     return(
//       <Modal
//       transparent={true}
//       animationType={'slide'}
//       visible={this.state.addItem}
//       onRequestClose={() => {
//         this.setState({addItem: false});
//       }}>
        
             
  
//     </Modal>
//     )
//   }
