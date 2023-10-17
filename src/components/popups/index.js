import React, { Component } from 'react'
import { Text, View, Modal as RNModal, TouchableOpacity } from 'react-native'
import styles from './styles'

class Modal extends Component {
    render() {
        const {
            children = null,
            visible = false,
            cross = false,
            cancelable = true,
            toggleVisible,
        } = this.props

        return (
            <RNModal visible={visible} transparent>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => (cancelable ? toggleVisible() : null)}
                    style={styles.modal}
                >
                    {cross && (
                        <View style={styles.modalCross}>
                            <TouchableOpacity
                                onPress={toggleVisible}
                                style={styles.modalCrossWrapper}
                            >
                                <Text style={styles.modalCrossText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    <View style={styles.modalContent}>{children}</View>
                </TouchableOpacity>
            </RNModal>
        )
    }
}

export default Modal
