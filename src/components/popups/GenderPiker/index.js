import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import Constants from '../../../contants'
import main from '../../../styles/main'
import { setGender } from '../../../utils/helpers/AuthHelper'
import MsgBox from '../../MsgBox'
import Modal from '../index'
import styles from './styles'

class GenderPicker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gender: this.props.defaultGender || '',
            error: '',
        }
    }

    selectGender = async (gender) => {
        this.setState({ gender, error: '' }, async () => {
            try {
                await setGender(gender)
                this.props.setGender(gender)
                this.props.toggleVisible()
            } catch (error) {
                this.setState({ error: 'Unable to select gender' })
            }
        })
    }

    render() {
        const { visible = false, toggleVisible, cross = false } = this.props

        return (
            <Modal
                visible={visible}
                cross={cross}
                toggleVisible={toggleVisible}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>Select Gender</Text>
                    <TouchableOpacity
                        onPress={() => this.selectGender('Male')}
                        style={styles.genderWrapper}
                    >
                        <Text style={styles.genderText}>Male</Text>
                        {'Male' === this.state.gender ? (
                            <Image
                                source={Constants.Images.check}
                                style={main.iconMd}
                            />
                        ) : null}
                    </TouchableOpacity>
                    <View style={styles.seprator} />
                    <TouchableOpacity
                        onPress={() => this.selectGender('Female')}
                        style={styles.genderWrapper}
                    >
                        <Text style={styles.genderText}>Female</Text>
                        {'Female' === this.state.gender ? (
                            <Image
                                source={Constants.Images.check}
                                style={main.iconMd}
                            />
                        ) : null}
                    </TouchableOpacity>
                    <MsgBox error={this.state.error} msg={this.state.error} />
                </View>
            </Modal>
        )
    }
}

export default GenderPicker
