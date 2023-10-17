import moment from 'moment'
import { Platform } from 'react-native'
import Constants from '../contants'

export const validateEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

export const camelToPascal = (text) => {
    return text[0].toUpperCase() + text.slice(1)
}

export const getDeviceType = () => {
    return Platform.select({ ios: 2, android: 1 })
}

export const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
}) => {
    const paddingToBottom = 20
    return (
        layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom
    )
}

export const dateTwister = (dateS) => {
    let [date, month, year] = dateS.replace(/ /gi, '').split('/')
    return `${year}/${month}/${date}`
}

export const homeDataCoversion = (data = []) => {
    let uni = [...new Set(data.map((item) => item.league.name))]

    return uni.reduce((item, i) => {
        let ne = data.filter((o) => o?.league.name == i)
        let newd = ne.reduce((a, b) => {
            let startTime =
                b.fixture.status.short === 'NS'
                    ? moment(b.fixture.timestamp).format('YYYY-MM-DD LT')
                    : null
            let colorScore =
                b.fixture.status.short === 'FT' ||
                b.fixture.status.long === 'Match Finished'
                    ? Constants.Colors.SUCCESS
                    : Constants.Colors.WARNING

            let group = b?.league?.round.toLowerCase().includes('group')
                ? true
                : false

            let goals = {
                home: b?.goals?.home == null ? null : String(b?.goals?.home),
                away: b?.goals?.away === null ? null : String(b?.goals?.away),
            }

            let score = {
                halftime: {
                    home:
                        b?.score?.halftime?.home === null
                            ? null
                            : String(b?.score?.halftime?.home),
                    away:
                        b?.score?.halftime?.away === null
                            ? null
                            : String(b?.score?.halftime?.away),
                },
                fulltime: {
                    home:
                        b?.score?.fulltime?.home === null
                            ? null
                            : String(b?.score?.fulltime?.home),
                    away:
                        b?.score?.fulltime?.away === null
                            ? null
                            : String(b?.score?.fulltime?.away),
                },
                extratime: {
                    home:
                        b?.score?.extratime?.home === null
                            ? null
                            : String(b?.score?.extratime?.home),
                    away:
                        b?.score?.extratime?.away === null
                            ? null
                            : String(b?.score?.extratime?.away),
                },
                penalty: {
                    home:
                        b?.score?.penalty?.home === null
                            ? null
                            : String(b?.score?.penalty?.home),
                    away:
                        b?.score?.penalty?.away === null
                            ? null
                            : String(b?.score?.penalty?.away),
                },
            }

            if (!['TBD'].includes(b.fixture.status.short)) {
                a.push({
                    ...b,
                    fixture: {
                        ...b.fixture,
                        ...b.fixture.status,
                        startTime,
                        colorScore,
                    },
                    group,
                    goals,
                    score,
                })
            }

            return a
        }, [])
        let leagueId = data.find((o) => o.league.name === i)?.league?.id

        if (
            i.toLowerCase().includes('world cup') ||
            i.toLowerCase().includes('euro') ||
            i.toLowerCase().includes('international') ||
            i.toLowerCase().includes('copa america') ||
            i.toLowerCase().includes('friendlies')
        ) {
            if (newd?.length) {
                item.push({
                    leagueId,
                    leagueName: i,
                    matchData: newd,
                })
            }
        }

        return item
    }, [])
}

export const predictionDataCoversion = (data = []) => {
    let uni = [
        ...new Set(
            data.map((item) =>
                moment(item.fixture.date).format('ddd, D MMM YYYY')
            )
        ),
    ]

    let groups = [...new Set(data.map((item) => item.league.round))]
    let short = [...new Set(data.map((item) => item.fixture.status.short))]
    let long = [...new Set(data.map((item) => item.fixture.status.long))]

    const matchList = uni.reduce((item, i) => {
        let ne = data.filter(
            (o) => moment(o?.fixture.date).format('ddd, D MMM YYYY') === i
        )

        let newd = ne.reduce((a, b) => {
            let startTime =
                b.fixture.status.short === 'NS'
                    ? `${moment(b.fixture.timestamp).format('YYYY-MM-DD LT')}`
                    : null
            let colorScore =
                b.fixture.status.short === 'FT' ||
                b.fixture.status.long === 'Match Finished'
                    ? Constants.Colors.SUCCESS
                    : b.fixture.status.short === 'NS'
                    ? Constants.Colors.PRIMARY2
                    : Constants.Colors.WARNING

            let group = b?.league?.round.toLowerCase().includes('group')
                ? true
                : false

            let predictionEndTime = parseInt(
                `${moment(b.fixture.timestamp * 1000)}`
            )

            let predictionEnd = moment(predictionEndTime).isSameOrBefore(
                moment()
            )
                ? true
                : false

            let goals = {
                home: b?.goals?.home == null ? null : String(b?.goals?.home),
                away: b?.goals?.away === null ? null : String(b?.goals?.away),
            }

            let score = {
                halftime: {
                    home:
                        b?.score?.halftime?.home === null
                            ? null
                            : String(b?.score?.halftime?.home),
                    away:
                        b?.score?.halftime?.away === null
                            ? null
                            : String(b?.score?.halftime?.away),
                },
                fulltime: {
                    home:
                        b?.score?.fulltime?.home === null
                            ? null
                            : String(b?.score?.fulltime?.home),
                    away:
                        b?.score?.fulltime?.away === null
                            ? null
                            : String(b?.score?.fulltime?.away),
                },
                extratime: {
                    home:
                        b?.score?.extratime?.home === null
                            ? null
                            : String(b?.score?.extratime?.home),
                    away:
                        b?.score?.extratime?.away === null
                            ? null
                            : String(b?.score?.extratime?.away),
                },
                penalty: {
                    home:
                        b?.score?.penalty?.home === null
                            ? null
                            : String(b?.score?.penalty?.home),
                    away:
                        b?.score?.penalty?.away === null
                            ? null
                            : String(b?.score?.penalty?.away),
                },
            }

            if (!['TBD'].includes(b.fixture.status.short)) {
                a.push({
                    ...b,
                    fixture: {
                        ...b.fixture,
                        ...b.fixture.status,
                        startTime,
                        colorScore,
                        predictionEndTime,
                        predictionEnd,
                    },
                    group,
                    goals,
                    score,
                })
            }

            return a
        }, [])

        let leagueId = data.find(
            (o) =>
                moment(o?.fixture.date).format('ddd, D MMM YYYY') ==
                moment(i).format('ddd, D MMM YYYY')
        )?.league?.id

        if (moment(i).isSameOrAfter(moment().format('YYYY'))) {
            item.push({
                leagueId,
                leagueDate: `${moment(i).format('ddd, D MMM YYYY')}`,
                matches: newd,
            })
        }

        return item
    }, [])

    return { matchList, groups, short, long }
}

export const getGrouspConversion = (data) => {
    let standing = data[0]?.league?.standings
    let groups = [...new Set(standing.map((item) => item[0]?.group))]
    groups.splice(-1, 1)
    return groups
}

export const leagueDataConversion = (data) => {
    let newData = data?.reduce((list, item) => {
        let season = item?.seasons.find((i) =>
            moment(i?.end).isSameOrAfter(moment().format('YYYY'))
        )

        if (season) {
            if (
                [
                    'Euro Championship',
                    // 'World Cup',
                    // 'Copa America',
                    // 'International Champions Cup',
                ].includes(item?.league.name)
            ) {
                list.push({ ...item, season })
            }
        }
        return list
    }, [])

    let internatonal = newData.filter((i) => i.country.name === 'World')
    let national = newData.filter((i) => i.country.name !== 'World')

    return [...internatonal, ...national]
}
