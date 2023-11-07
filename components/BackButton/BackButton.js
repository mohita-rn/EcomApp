import { TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import COLORS from '../../assets/colors'

export default function BackButton({handlePress}) {

  return (
    <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Feather name="chevron-left" size={20} color={COLORS.dark}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: COLORS.white,
        borderRadius:40,
        padding: 15
    }
})