import React, { Component } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styles from '../styles'
import main from '../../../styles/main'
import { FormInput } from '../../../components/Form'
import Constants from '../../../contants'
import Button from '../../../components/Button'
import FuzzySearch from 'fuzzy-search'
import {
    getSelectedCountry,
    setSelectedCountry,
} from '../../../utils/helpers/AuthHelper'
import MsgBox from '../../../components/MsgBox'
import { getAuthorization } from '../../../services/api_services'
import API from '../../../contants/apis'
import Loader from '../../../components/Loader'
import { countryList } from '../../../redux/actions/authActions'

class SelectCountry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            selectedCountry: '',
            errorMsg: '',
            countries: [],
            isLoading: true,
            error: false,
            msg: '',
        }
    }

    selectCountry = (item) => {
        this.setState({ selectedCountry: item, error: '' })
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.countryWrapper}
                onPress={() => this.selectCountry(item)}
            >
                <Text style={styles.countryName}>{item?.countryName}</Text>
                {item?.countryId === this.state.selectedCountry?.countryId ? (
                    <Image
                        source={Constants.Images.check}
                        style={main.iconMd}
                    />
                ) : null}
            </TouchableOpacity>
        )
    }

    seprator = () => <View style={main.seprator}></View>

    onSave = async () => {
        const { selectedCountry } = this.state
        if (!selectedCountry) {
            this.setState({ errorMsg: 'Please select your country' })
            return true
        }
        try {
            await setSelectedCountry(selectedCountry)
            this.props.navigation.goBack()
        } catch (error) {
            this.setState({ error: 'Unable to store country' })
        }
    }

    saveSelectedCountry = async () => {
        const selectedCountry = await getSelectedCountry()
        this.setState({ selectedCountry })
    }

    getCountryList = async () => {
        try {
            const res = await getAuthorization(API.COUNTRIES)
            if (res?.data?.status) {
                this.setState({
                    countries: res?.data?.data,
                    isLoading: false,
                    error: false,
                    msg: res?.data?.message,
                })
            } else {
                this.setState({
                    isLoading: false,
                    error: true,
                    msg: res?.data?.message,
                })
            }
        } catch (error) {
            this.setState({
                isLoading: false,
                error: true,
                msg: error?.message,
            })
        }
    }

    componentDidMount() {
        this.saveSelectedCountry()
        this.props.countryList()
    }

    render() {
        const { search, error, msg, errorMsg } = this.state
        const { countries, countryListLoader, countryListError } = this.props
        const searchData = new FuzzySearch(countries, ['countryName'])
        const searchResult = searchData.search(search)

        return (
            <View style={styles.container}>
                <FormInput
                    placeholder="Search country by name..."
                    value={search}
                    onChangeText={({ value }) =>
                        this.setState({ search: value })
                    }
                    inputLeft={() => (
                        <Image
                            style={main.icon}
                            source={Constants.Images.search}
                        />
                    )}
                    error={error ? msg : ''}
                />
                <Loader isLoading={countryListLoader} />
                <View style={[styles.container, main.my2]}>
                    <FlatList
                        data={searchResult}
                        keyExtractor={(item, i) => i.toString()}
                        renderItem={this.renderItem}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={this.seprator}
                    />
                </View>
                <MsgBox
                    error={countryListError || errorMsg}
                    msg={countryListError || errorMsg}
                />
                <Button title={'Save'} onPress={this.onSave} />
            </View>
        )
    }
}

const mapStateToProps = ({
    auth: { countryList, countryListLoader, countryListError },
}) => ({
    countries: countryList,
    countryListLoader,
    countryListError,
})

const mapDispatchToProps = {
    countryList: countryList,
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCountry)
