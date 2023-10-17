import React, { Component } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import Constants from '../../contants'
import main from '../../styles/main'
import styles from './styles'

class EditProfileHeader extends Component {
    render() {
        const { onPress = null, goBack } = this.props
        return (
            <View style={styles.headerWrapper}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Image
                            source={Constants.Images.backIcon}
                            style={main.headerback}
                        />
                    </TouchableOpacity>
                    <Text style={styles.userName}>My Account</Text>
                </View>
                <View style={styles.headerRight}>
                    <TouchableOpacity activeOpacity={1} onPress={onPress}>
                        <Image
                            source={Constants.Images.editIocn}
                            style={[main.editIcon, main.ml4]}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default EditProfileHeader
