import React, { Component } from 'react'
import { Text, View, Image, Modal, Platform } from 'react-native'
import Constants from '../../../contants'
import styles from '../styles'
import { TouchView } from '../../../components/TouchView'
import { RoutesName } from '../../../navigation/routes.config'
import EditProfileHeader from '../../../components/EditProfileHeader'
import { getProfileRequest } from '../../../redux/actions/profileAction'
import { connect } from 'react-redux'
import Loader from '../../../components/Loader'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-crop-picker'
import {
    profileUploadRequest,
    setProfileUploadLoader,
} from '../../../redux/actions/settingsActions'
import config from '../../../config/config'
import { postAuthorization } from '../../../services/api_services'
import {
    LOGIN_SUCCESS,
    UPDATE_USER_IMAGE,
} from '../../../redux/actionsTypes/authActionsTypes'
import { ImagePopUp } from '../../../components/ImagePopUp'
import {
    getCountryCode,
    getSelectedCountry,
    setSelectedCountry,
} from '../../../utils/helpers/AuthHelper'

export class MyAccount extends Component {
    constructor() {
        super()
        this.state = {
            image_url: '',
            image_name: '',
            visible: false,
            modal: false,
            isLoading: false,
            imageModal: false,
        }
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible })
    }

    onTransctions = () => {
        this.props.navigation.navigate('transactions')
    }
    onSetting = () => {
        this.props.navigation.navigate('settings')
    }
    onContactUS = () => {
        this.props.navigation.navigate('contactUs')
    }
    saveMyCountry = async () => {
        const { countries, auth } = this.props
        const myCountry = countries?.find(
            (i) => i?.countryId === auth?.nationality
        )

        await setSelectedCountry(myCountry)
    }
    onEditProfile = () => {
        this.saveMyCountry().then(async () => {
            let { countryName } = await getSelectedCountry()
            let countryCode = await getCountryCode()
            this.props.navigation.navigate(RoutesName.EditProfile, {
                hideError: true,
                saveMy: true,
                nationality: countryName,
                countryCode,
            })
        })
    }

    chooseImage = async (imageIndex) => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            includeBase64: true,
        }).then((image) => {
            const formdata = new FormData()
            formdata.append('image_url', {
                uri:
                    Platform.OS === 'android'
                        ? image.path
                        : image.path.replace('file://', ''),
                name: 'test.jpg',
                type: 'image/jpg',
            })

            const url = `${config.apiUrl}/update_profile_image`

            postAuthorization(url, formdata)
                .then((res) => {
                    if (res?.data?.status) {
                        this.props.updateUserImage(res?.data?.data?.imageUrl)
                    }
                })
                .catch((error) => {})
                .finally(() => {
                    this.setState({
                        isLoading: false,
                        imageModal: false,
                    })
                })
        })
    }

    takePhoto = async (imageIndex) => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            includeBase64: true,
        }).then((image) => {
            const formdata = new FormData()
            formdata.append('image_url', {
                uri:
                    Platform.OS === 'android'
                        ? image.path
                        : image.path.replace('file://', ''),
                name: 'test.jpg',
                type: 'image/jpg',
            })

            const url = `${config.apiUrl}/update_profile_image`

            postAuthorization(url, formdata)
                .then((res) => {
                    if (res?.data?.status) {
                        this.props.updateUserImage(res?.data?.data?.imageUrl)
                    }
                })
                .catch((error) => {})
                .finally(() => {
                    this.setState({
                        isLoading: false,
                        imageModal: false,
                    })
                })
        })
    }

    render() {
        const { auth, profileLoader } = this.props

        return (
            <View style={styles.container}>
                <Loader center isLoading={this.state.isLoading} />

                <EditProfileHeader
                    onPress={this.onEditProfile}
                    goBack={() => this.props.navigation.goBack()}
                />

                <View style={styles.viewWrappper}>
                    {auth.imageUrl == '' ? (
                        <Image
                            source={Constants.Images.userPic}
                            style={styles.shaunPic}
                        />
                    ) : (
                        <View
                            style={{
                                marginRight: 8,
                                flexDirection: 'row-reverse',
                            }}
                        >
                            <TouchableOpacity
                                onPress={() =>
                                    this.setState({ imageModal: true })
                                }
                            >
                                <ImagePopUp
                                    visible={this.state.imageModal}
                                    alertTitle={'Select Options'}
                                    rightButtonText={'Gallery'}
                                    cancelButtonText={'X'}
                                    leftButtonText={'Camera'}
                                    onPressLeftButton={this.takePhoto}
                                    onPressRightButton={this.chooseImage}
                                    onPressCancel={() =>
                                        this.setState({ imageModal: false })
                                    }
                                />

                                <Image
                                    source={Constants.Images.editIocn}
                                    style={[styles.editIcon]}
                                />
                            </TouchableOpacity>
                            <Image
                                source={{ uri: auth.imageUrl }}
                                style={styles.shaunPic}
                            />
                        </View>
                    )}

                    <View style={styles.textWrap}>
                        <Text style={styles.shaun}>{auth.fullName}</Text>
                        <Text style={styles.yearText}>{auth.gender}</Text>
                        <Text style={styles.mail}>{auth.emailAddress}</Text>
                        <Text style={styles.mail}>
                            {auth.countryCode + ' ' + auth.mobileNumber}
                        </Text>
                    </View>
                </View>
                <View style={[styles.wrap, styles.m2]}>
                    <TouchView
                        title={'Transactions'}
                        onPress={this.onTransctions}
                    />

                    <TouchView title={'Settings'} onPress={this.onSetting} />

                    <TouchView
                        title={'Contact Us'}
                        onPress={this.onContactUS}
                    />
                </View>
            </View>
        )
    }
}

// =============== REDUX CONNECT & RESPONSE ===============

const mapStateToProps = (res) => {
    return {
        profile: res.profile?.getProfile,
        auth: res.auth?.user,
        countries: res?.auth?.countryList,
    }
}

const mapDispatchToProps = {
    updateUserImage: (data) => ({ type: UPDATE_USER_IMAGE, payload: data }),
}
export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)
