import { StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../../assets/colors'
import { useHeight, useWidth } from '../../constants/Screen'
import FONTS from '../../assets/fonts'

export default styles = StyleSheet.create({
    header: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: useHeight(3), 
        // marginBottom: useHeight(3),
        marginHorizontal: useWidth(5)
    }, ratings: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: useWidth(5)
    }, reviewTxt: {
        fontFamily: FONTS.Regular,
        fontSize: 14,
        color: COLORS.reviewTxt,
        marginLeft: 5
    }, amount: {
        flexDirection: 'row',
        marginLeft: useWidth(5),
        alignItems: 'center',
        marginTop: -40
    }, priceTxt: {
        fontFamily: FONTS.Bold,
        fontSize: 16,
        color: COLORS.primary,
        marginRight: useWidth(2),
    }, offTxt: {
        fontFamily: FONTS.Regular,
        fontSize: 12,
        color: COLORS.white
    }, offStyle: {
        backgroundColor: COLORS.primary,
        borderRadius: 70, 
        paddingHorizontal: 10,
        paddingVertical: 3
    }, btns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: useWidth(5),
        marginVertical: useHeight(3)
    }, btn: {
        paddingHorizontal: 50
    }, detailTxt: {
        fontFamily: FONTS.Regular,
        fontSize: 16,
        color: COLORS.darkScale,
        marginLeft: useWidth(5),
        marginBottom: useHeight(1)
    }, descTxt: {
        fontFamily: FONTS.Regular,
        fontSize: 16,
        color: COLORS.greyScale,
        marginHorizontal: useWidth(5)
    }, titleTxt: {
        fontFamily: FONTS.Light,
        fontSize: 50,
        color: COLORS.darkScale,
        marginHorizontal: useWidth(5)
    }, 
});