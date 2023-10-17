import React, { Component } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Constants from '../../contants'
import main from '../../styles/main'
import styles from './styles'

class ProfileHeader extends Component {
    render() {
        const { username, imageUrl, goNotification, notificationCount } =
            this.props
        return (
            <View style={styles.headerWrapper}>
                <View style={styles.headerLeft}>
                    <Image source={{ uri: imageUrl }} style={main.profilePic} />
                    <Text style={styles.userName}>Hello {username}</Text>
                </View>
                <View style={styles.headerRight}>
                    {notificationCount ? <View style={styles.dot} /> : null}
                    <View style={styles.bellContainer}>
                        <TouchableOpacity onPress={goNotification}>
                            <Image
                                source={Constants.Images.notifications}
                                style={[main.icon, main.ml4]}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({
    auth: {
        user: { username, imageUrl },
    },
    settings: { notificationCount },
}) => {
    return {
        username,
        imageUrl,
        notificationCount,
    }
}

export default connect(mapStateToProps)(ProfileHeader)
