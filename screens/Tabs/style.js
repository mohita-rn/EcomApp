import { StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../../assets/colors'
import { useHeight, useWidth } from '../../constants/Screen'
import FONTS from '../../assets/fonts'

export default styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.primary
    }, username: {
        fontFamily: FONTS.SemiBold,
        fontSize: 22,
        color: COLORS.white
    },
    headerObj: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: useHeight(3), 
        marginBottom: useHeight(3),
        marginHorizontal: useWidth(5)
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 28,
        padding: 10,
        marginHorizontal: 20,
        backgroundColor: COLORS.primaryDark,
        marginBottom: useHeight(5)
    },
    headerSearchBox: {
        fontFamily: FONTS.Medium,
        color: COLORS.greyScale,
        fontSize: 14,
        marginLeft: 5,
    },
    searchIcon : {
        margin: 5,
    },
    deliveryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: useWidth(5),
        marginBottom: useHeight(2)
    },
    deliveryInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    deliveryTitle: {
        fontFamily: FONTS.ExtraBold,
        fontSize: 11,
        color: COLORS.greyScale
    }, deliveryInfoTxt: {
        fontFamily: FONTS.Medium,
        fontSize: 14,
        color: COLORS.white,
        marginRight: 5
    }, couponBody: {
        flexDirection: 'row',
        backgroundColor: COLORS.secondary,
        borderRadius: 16,
        padding: 15, 
        margin: 20
    }, couponImg: {
        opacity: 0.6,
        alignItems: 'center',
        justifyContent: 'center'
    }, couponDesc: {
        marginLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    }, line1: {
        fontFamily: FONTS.Light,
        fontSize: 20,
        color: COLORS.white
    }, line2: {
        fontFamily: FONTS.ExtraBold,
        fontSize: 26,
        color: COLORS.white
    }, line3: {
        fontFamily: FONTS.Light,
        fontSize: 13,
        color: COLORS.white
    }, recomTxt: {
        marginLeft: useWidth(5),
        fontFamily: FONTS.Regular,
        fontSize: 30,
        color: COLORS.darkScale,
        marginBottom: useHeight(2)
    }, productBox: {
        backgroundColor: COLORS.light,
        borderRadius: 10,
        marginHorizontal: useWidth(5), 
        marginVertical: useHeight(2),
        padding: 20,
        width: 160,
        height: 194
    }, thumbnail: {
        height: 100,
        width: 100
    }, itemdesc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: useWidth(3)
    }, addIcon: {
        backgroundColor: COLORS.primaryDark,
        borderRadius: 10,
        height: 20,
        width: 20
    }, price: {
        fontFamily: FONTS.SemiBold,
        fontSize: 14,
        color: COLORS.darkScale
    }, title: {
        fontFamily: FONTS.Regular,
        fontSize: 16,
        color: COLORS.lightGrayScale
    }, heartContainer: {
        position: "absolute",   
    }, count: {
        position: 'absolute',
        right: -5,
        top: -2,
        backgroundColor: COLORS.secondary,
        borderRadius: 8,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }, counTxt: {
        fontFamily: FONTS.SemiBold,
        fontSize: 11,
        color: 'white'
    }
})