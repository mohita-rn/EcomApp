import { StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../../assets/colors'
import { useHeight, useWidth } from '../../constants/Screen'
import FONTS from '../../assets/fonts'

export default styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: useHeight(3),
        // marginBottom: useHeight(3),
        marginHorizontal: useWidth(5)
    }, headerTitle: {
        fontFamily: FONTS.Regular,
        fontSize: 16,
        color: COLORS.darkScale,
        marginLeft: useWidth(8)
    }, cartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: useWidth(5),
    }, quantity: {
        flex: 1,
        flexDirection: 'row',
        right: -55,
        width: useWidth(10),
    }, img: { 
        height: 35, 
        width: 35, 
        borderRadius: 8,
        margin: 20
    }, cartItem: {
        flex:1,
        width: useWidth(10),
    }, qTxt: {
        fontFamily: FONTS.Medium,
        fontSize: 14,
        color: COLORS.darkScale,
        marginHorizontal: 10
    }, addSub: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 10
    }, cartItemTxt: {
        fontFamily: FONTS.Medium,
        fontSize: 14,
        color: COLORS.darkScale,
    }, line: {
        backgroundColor: COLORS.line,
        height: 1,
        marginHorizontal: useWidth(5)
    }, edit: {
        fontFamily: FONTS.Medium,
        fontSize: 12,
        color: COLORS.primary,
        textAlign: 'right',
        marginRight: useWidth(5),
        top: -50
    }, total: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: useWidth(7),
        marginVertical: useHeight(0.5)
    }, totalTxt: {
        fontFamily: FONTS.Regular,
        fontSize: 14,
        color: COLORS.lightGrayScale
    }, totalBox: {
        backgroundColor: COLORS.white,
        borderTopEndRadius: 30, 
        borderTopStartRadius: 30,
        marginHorizontal: useWidth(2),
        paddingTop: 40
    }, btn: {
        backgroundColor: COLORS.primary, 
        marginHorizontal: useWidth(5), 
        marginVertical: 20
    }
});