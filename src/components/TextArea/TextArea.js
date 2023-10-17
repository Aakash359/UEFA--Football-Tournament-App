import React, { PureComponent } from 'react';
import {
    View,
    TextInput,
} from 'react-native';
import Constants from '../../contants'
import styles from './styles'
import PropTypes from 'prop-types';

 class TextArea extends PureComponent {

    onInputChange = (value) => {
        
        const { name, onChangeText } = this.props

        onChangeText && onChangeText({ name, value })
    }

    static propTypes = {
        autoFocus: PropTypes.bool,
        containerStyle: PropTypes.object,
        placeholder: PropTypes.string,
        editable: PropTypes.bool,
        keyboardType: PropTypes.string,
    }
    static defaultProps = {
        autoFocus: false,
        placeholder: '',
        keyboardType: Platform.OS === 'android' ? 'visible-password' : 'ascii-capable',
        editable: true,
    }
    constructor(props) {
        super(props);
        this.state = {
            focus: this.props.autoFocus,
        };
    }
    
    onInputBlur = ({ nativeEvent: { text: valueIOS } }) => {
        const { name, onBlur, value } = this.props

        onBlur && onBlur({ name, value: valueIOS || value })
    }
   
    render() {
        const { containerStyle,value } = this.props;
        
       
        return (
            <View style={[containerStyle,]}>
                <TextInput
                    autoFocus={this.props.autoFocus}
                    onChangeText={this.onInputChange}
                    ref={'input'}
                    onBlur={this.onInputBlur}
                    placeholderTextColor= {Constants.Colors.SECONDARY}
                    underlineColorAndroid={this.props.underlineColorAndroid}
                    multiline={this.props.multiline}
                    placeholder={'Description'}
                    value={this.props.value}
                    editable={this.props.editable}
                    style={styles.textAreaWrapper}
                />
            </View>
        );
    }
}

export default TextArea
