import { TouchableOpacity, Image, Text, View } from 'react-native'
import Constants from '../contants'
import {
    Login,
    SignUp,
    ForgotPassword,
    Mobile,
    MobileOtp,
    OTP,
    SelectCountry,
    ResetPassword,
} from '../screens/Auth'
import {
    AboutUs,
    EditProfile,
    PrivacyPolicy,
    TermsAndConditions,
    AddBank,
    AccountVerfication,
    ContactUs,
    Settings,
    ChangePassword,
} from '../screens/MyAccount'

import { AddGroup, GroupDetails, MyGroups } from '../screens/Groups'

import { TournmentSerachList } from '../screens/PredictWin'

import { WithdrawAmount } from '../screens/WithdrawAmount'
import { RulesAndRegulation } from '../screens/RulesAndRegulations'
import { PredictWin } from '../screens/PredictWin'
import { MyAccount } from '../screens/MyAccount'
import { ScoreSchedules } from '../screens/ScoreSchedules'
import main from '../styles/main'
import React from 'react'
import { camelToPascal } from '../utils/func'
import {
    MyPrediction,
    PointTable,
    PointTableActual,
} from '../screens/MyPrediction'
import { ActualScore } from '../screens/ActualScore'
import { PlayerRanking, InviteUser } from '../screens/PlayerRanking'
import { Transactions } from '../screens/Transaction'
import { Notifications } from '../screens/Notifications'

export const RoutesName = {
    LOGIN: 'login',
    ForgotPassword: 'forgotPassword',
    Mobile: 'Mobile',
    MobileOtp: 'MobileOtp',
    SIGNUP: 'signUp',
    ScoreSchedules: 'scoreSchedules',
    PredictWin: 'predictWin',
    OTP: 'otp',
    ResetPassword: 'resetpassword',
    SelectCountry: 'selectCountry',
    RulesAndRegulation: 'rulesAndRegulation',
    AboutUs: 'aboutUs',
    PrivacyPolicy: 'privacyPolicy',
    TermsAndConditions: 'termsAndConditions',
    AddBank: 'addBank',
    AccountVerfication: 'accountVerfication',
    ContactUs: 'contactUs',
    MyAccount: 'myAccount',
    WithdrawAmount: 'withdrawAmount',
    MyPrediction: 'myPrediction',
    ActualScore: 'actualScore',
    PlayerRanking: 'playerRanking',
    Settings: 'settings',
    EditProfile: 'editProfile',
    Transactions: 'transactions',
    ChangePassword: 'changePassword',
    Notifications: 'notifications',
    TournmentSerachList: 'tournmentSerachList',
    AddGroup: 'AddGroup',
    InviteUser: 'InviteUser',
    MyGroups: 'MyGroups',
    PointTable: 'pointTable',
    PointTableActual: 'pointTableActual',
    GroupDetails: 'groupDetails',
}

const defaultHeaderStyle = {
    backgroundColor: Constants.Colors.ACCENT,
    borderWidth: 0,
    shadowColor: Constants.Colors.TRANSPARENT,
}

const defaultHeaderOptions = (
    { navigation: { goBack, navigate }, route },
    moreOptions = {}
) => ({
    headerStyle: { ...defaultHeaderStyle },
    headerTitle: '',
    headerTintColor: Constants.Colors.WHITE,
    headerBackTitleVisible: false,
    headerLeft: () => (
        <View style={main.row}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() =>
                    moreOptions?.backTo
                        ? navigate(moreOptions?.backTo)
                        : goBack()
                }
            >
                <Image
                    source={Constants.Images.backIcon}
                    style={main.backIcon}
                />
            </TouchableOpacity>
            {moreOptions?.showHeaderTitle && (
                <Text style={main.title}>
                    {Routes[camelToPascal(route?.name)]?.title}
                </Text>
            )}
        </View>
    ),
    ...moreOptions,
})

export const Routes = {
    LOGIN: {
        name: RoutesName.LOGIN,
        component: Login,
        safeArea: true,
        options: (props) => defaultHeaderOptions(props, { headerShown: false }),
    },
    ForgotPassword: {
        name: RoutesName.ForgotPassword,
        component: ForgotPassword,
        safeArea: true,
        options: defaultHeaderOptions,
    },
    Mobile: {
        name: RoutesName.Mobile,
        component: Mobile,
        safeArea: true,
        options: defaultHeaderOptions,
    },
    MobileOtp: {
        name: RoutesName.MobileOtp,
        component: MobileOtp,
        safeArea: true,
        options: defaultHeaderOptions,
    },
    OTP: {
        name: RoutesName.OTP,
        component: OTP,
        safeArea: true,
        options: defaultHeaderOptions,
    },
    SIGNUP: {
        name: RoutesName.SIGNUP,
        component: SignUp,
        safeArea: true,
        options: defaultHeaderOptions,
    },
    ResetPassword: {
        name: RoutesName.ResetPassword,
        component: ResetPassword,
        safeArea: true,
        options: defaultHeaderOptions,
    },
    ChangePassword: {
        name: RoutesName.ChangePassword,
        component: ChangePassword,
        title: 'Change Password',
        safeArea: true,
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    SelectCountry: {
        name: RoutesName.SelectCountry,
        component: SelectCountry,
        safeArea: true,
        options: defaultHeaderOptions,
    },
    ScoreSchedules: {
        name: RoutesName.ScoreSchedules,
        component: ScoreSchedules,
        title: 'Scores & Schedules',
        safeArea: true,
        options: defaultHeaderOptions,
    },
    PredictWin: {
        name: RoutesName.PredictWin,
        component: PredictWin,
        title: 'Predict & Win',
        safeArea: true,
        options: {
            headerShown: false,
        },
    },
    MyAccount: {
        name: RoutesName.MyAccount,
        component: MyAccount,
        title: 'My Account',
        safeArea: true,
        options: defaultHeaderOptions,
    },
    RulesAndRegulation: {
        name: RoutesName.RulesAndRegulation,
        component: RulesAndRegulation,
        safeArea: true,
        title: 'Rules & Regulations',
        options: (props) =>
            defaultHeaderOptions(props, {
                showHeaderTitle: true,
            }),
    },
    MyPrediction: {
        name: RoutesName.MyPrediction,
        component: MyPrediction,
        safeArea: true,
        title: 'My Prediction',
        options: (props) =>
            defaultHeaderOptions(props, {
                showHeaderTitle: true,
                backTo: RoutesName.PredictWin,
            }),
    },
    ActualScore: {
        name: RoutesName.ActualScore,
        component: ActualScore,
        safeArea: true,
        title: 'Actual Score',
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    PlayerRanking: {
        name: RoutesName.PlayerRanking,
        component: PlayerRanking,
        safeArea: true,
        title: 'Players Ranking',
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    AboutUs: {
        name: RoutesName.AboutUs,
        component: AboutUs,
        safeArea: true,
        title: 'About Us',
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    AddGroup: {
        name: RoutesName.AddGroup,
        component: AddGroup,
        safeArea: true,
        title: 'Add Group',
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    InviteUser: {
        name: RoutesName.InviteUser,
        component: InviteUser,
        safeArea: true,
        title: 'Invite User',
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    MyGroups: {
        name: RoutesName.MyGroups,
        component: MyGroups,
        safeArea: true,
        title: 'My Groups',
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    GroupDetails: {
        name: RoutesName.GroupDetails,
        component: GroupDetails,
        safeArea: true,
        title: 'Group Details',
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    EditProfile: {
        name: RoutesName.EditProfile,
        component: EditProfile,
        safeArea: true,
        title: 'Edit Profile',
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    PrivacyPolicy: {
        name: RoutesName.PrivacyPolicy,
        component: PrivacyPolicy,
        safeArea: true,
        title: 'Privacy Policy',
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    TermsAndConditions: {
        name: RoutesName.TermsAndConditions,
        component: TermsAndConditions,
        safeArea: true,
        title: 'Terms & Conditions',
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    AccountVerfication: {
        name: RoutesName.AccountVerfication,
        component: AccountVerfication,
        safeArea: true,
        title: 'Account Verification',
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    AddBank: {
        name: RoutesName.AddBank,
        component: AddBank,
        safeArea: true,
        title: 'Add bank account',
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    ContactUs: {
        name: RoutesName.ContactUs,
        component: ContactUs,
        safeArea: true,
        title: 'Contact Us',
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    WithdrawAmount: {
        name: RoutesName.WithdrawAmount,
        component: WithdrawAmount,
        safeArea: true,
        title: 'Withdraw Amount',
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    Settings: {
        name: RoutesName.Settings,
        component: Settings,
        title: 'Settings',
        safeArea: true,
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    Transactions: {
        name: RoutesName.Transactions,
        component: Transactions,
        title: 'Transactions',
        safeArea: true,
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    Notifications: {
        name: RoutesName.Notifications,
        component: Notifications,
        title: 'Notifications',
        safeArea: true,
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    TournmentSerachList: {
        name: RoutesName.TournmentSerachList,
        component: TournmentSerachList,
        title: 'Search',
        safeArea: true,
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    PointTable: {
        name: RoutesName.PointTable,
        component: PointTable,
        title: 'My Prediction',
        safeArea: true,
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
    PointTableActual: {
        name: RoutesName.PointTableActual,
        component: PointTableActual,
        title: 'Actual Score',
        safeArea: true,
        options: (props) =>
            defaultHeaderOptions(props, { showHeaderTitle: true }),
    },
}
