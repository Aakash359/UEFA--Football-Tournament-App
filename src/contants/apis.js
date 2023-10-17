import config from '../config/config'

const API = {
    LOGIN: `${config.apiUrl}/login`,
    COUNTRIES: `${config.apiUrl}/country_list`,
    home: `https://api-football-v1.p.rapidapi.com/v3/fixtures`,
    score: 'https://api-football-v1.p.rapidapi.com/v3/standings',
    leagueList: `https://api-football-v1.p.rapidapi.com/v3/leagues`,
    myPredictionRapid: `https://api-football-v1.p.rapidapi.com/v3/fixtures`,
    leagueRuleStatus: `${config.apiUrl}/user_league_payment_status`,
    myPrediction: `${config.apiUrl}/my_prediction`,
    makePredict: `${config.apiUrl}/make_prediction`,
    updatePaymentStatus: `${config.apiUrl}/entry_into_league`,
    updateRuleEntry: `${config.apiUrl}/rules_entry`,
    getGroupsRapid: `https://api-football-v1.p.rapidapi.com/v3/standings`,
    ansQues: `${config.apiUrl}/answer_question`,
    userList: `${config.apiUrl}/list_users_except_me`,
    inviteUserGroup: `${config.apiUrl}/invite_group`,
    changeGroupName: `${config.apiUrl}/edit_group_name`,
    removeGroupUser: `${config.apiUrl}/remove_member_group`,
    leaveGroup: `${config.apiUrl}/leave_group`,
    validationCheck: `${config.apiUrl}/check_if_exist`,
}

export default API
