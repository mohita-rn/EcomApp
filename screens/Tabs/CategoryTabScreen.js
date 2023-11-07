import { View, Text } from 'react-native'
import React from 'react'
import COLORS from '../../assets/colors'

export default function CategoryTabScreen() {
  return (
    <View style={{
        backgroundColor: COLORS.lightGray,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        }}>
      <Text style={{color: COLORS.secondary}}>CategoryTabScreen</Text>
    </View>
  )
}