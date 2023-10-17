import React, { Component } from 'react'
import { View, Modal, TouchableOpacity, Text } from 'react-native'
import Constants from '../../contants'
import styles from './styles'
import typography from '../../contants/typography'
import Icon from 'react-native-vector-icons/Feather'

export const ImagePopUp = ({
    visible,
    alertTitle,
    title,
    rightButtonText,
    leftButtonText,
    onPressLeftButton,
    onPressRightButton,
    cancelButtonText,
    onPressCancel,
}) => {
    return (
        <Modal visible={visible} animationType="fade" transparent={true}>
            <TouchableOpacity activeOpacity={1} onPress={onPressCancel}>
                <View style={styles.v1}>
                    <View style={styles.v2}>
                        <Text
                            style={{
                                fontSize: Constants.BaseStyle.scale(16),
                                fontFamily: typography.FONT_FAMILY_BOLD,
                                color: Constants.Colors.SECONDARY,
                                marginTop:
                                    title != '' ||
                                    title != null ||
                                    title != undefined
                                        ? Constants.BaseStyle.scale(10)
                                        : Constants.BaseStyle.scale(20),
                            }}
                        >
                            {alertTitle}
                        </Text>

                        <View style={styles.v3}>
                            <TouchableOpacity
                                onPress={onPressLeftButton}
                                style={styles.left_btn}
                            >
                                <Text style={styles.btn}>{leftButtonText}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={onPressRightButton}
                                style={styles.T1}
                            >
                                <Text style={styles.ryt_btn}>
                                    {rightButtonText}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}
