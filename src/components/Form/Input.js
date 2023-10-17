import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Constants from '../../contants'
import main from '../../styles/main'
import styles from './styles'

class Input extends Component {
    onInputChange = (value) => {
        const { name, onChangeText } = this.props

        onChangeText && onChangeText({ name, value })
    }

    onInputBlur = ({ nativeEvent: { text: valueIOS } }) => {
        const { name, onBlur, value } = this.props

        onBlur && onBlur({ name, value: valueIOS || value })
    }

    render() {
        const { props } = this
        const {
            error,
            children = undefined,
            inputRight: InputRight = null,
            inputLeft: InputLeft = null,
            onPress = null,
            placeholder,
            value,
            multiline = false,
        } = props

        return (
            <View>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() =>
                        onPress ? onPress() : this.refs.input.focus()
                    }
                    style={[
                        styles.inputFieldWrapper,
                        multiline && { height: 150, padding: 20 },
                    ]}
                >
                    {children !== undefined ? (
                        children ? (
                            <View style={[main.row, main.center]}>
                                {InputLeft && <InputLeft />}
                                {children}
                            </View>
                        ) : (
                            <View style={[main.row, main.center]}>
                                {InputLeft && <InputLeft />}
                                <Text
                                    style={[
                                        value
                                            ? styles.inputField
                                            : {
                                                  color: Constants.Colors
                                                      .SECONDARY,
                                              },
                                        InputLeft ? main.ml2 : {},
                                    ]}
                                >
                                    {value || placeholder}
                                </Text>
                            </View>
                        )
                    ) : (
                        <View style={[main.row, main.center]}>
                            {InputLeft && <InputLeft />}
                            <TextInput
                                ref={'input'}
                                style={[
                                    styles.inputField,
                                    InputLeft ? main.ml2 : {},
                                    {
                                        height: multiline ? 120 : undefined,
                                        textAlignVertical: multiline
                                            ? 'top'
                                            : undefined,
                                    },
                                ]}
                                {...props}
                                placeholderTextColor={
                                    Constants.Colors.SECONDARY
                                }
                                underlineColorAndroid={
                                    Constants.Colors.TRANSPARENT
                                }
                                onChangeText={this.onInputChange}
                                onBlur={this.onInputBlur}
                                multiline={multiline}
                            />
                        </View>
                    )}
                    {InputRight && <InputRight />}
                </TouchableOpacity>
                {error ? <Text style={styles.error}>* {error}</Text> : null}
            </View>
        )
    }
}

export default Input
