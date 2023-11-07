import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import COLORS from '../../assets/colors'
import STRINGS from '../../assets/strings'
import BackButton from '../../components/BackButton/BackButton'
import style from './style'
import data from './data'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FONTS from '../../assets/fonts'
import CustomButton from '../../components/Button/CustomButton'
import { useWidth } from '../../constants/Screen'
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/actions'

const CartScreen = ({navigation, cartItems}) => {

  const [cart, setCart] = useState(data);

  const CartItems = ({item}) => {
    return (
      <View style={style.cartContainer}>
        <Image source={{uri: item.thumbnail}} style={style.img} />
        <View style={style.cartItem}>
          <Text style={style.cartItemTxt}>{item.title}</Text>
          <Text style={[style.cartItemTxt, {fontFamily: FONTS.Regular}]}>{'$'}{item.price}</Text>
        </View>
        <View style={style.quantity}>
          <TouchableOpacity style={style.addSub}>
            <AntDesign name="minus" size={10} color={COLORS.dark} />
          </TouchableOpacity>
          <Text style={style.qTxt}>{item.quantity}</Text>
          <TouchableOpacity style={style.addSub}>
            <AntDesign name="plus" size={10} color={COLORS.dark} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const ItemDivider = () => {
    return(
      <View style={style.line} />
    )
  }
 
  const goBack = () => {
    navigation.goBack();
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>

      <View style={style.header}>
        <BackButton handlePress={goBack}/>
        <Text style={style.headerTitle} >{STRINGS.SHOPPING_CART}({data.length})</Text>
      </View>

    <FlatList
      data={cart}
      renderItem={CartItems}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemDivider}
      ListFooterComponent={ItemDivider}
    />
    
    <Text style={style.edit}>{STRINGS.EDIT}</Text>

      <View style={style.totalBox}>
        <View style={style.total}>
          <Text style={style.totalTxt}>{STRINGS.SUBTOTAL}</Text>
          <Text style={[style.totalTxt, {color: COLORS.darkScale, fontFamily: FONTS.Medium}]}>{'$'}{34.01}</Text>
        </View>
        <View style={style.total}>
          <Text style={style.totalTxt}>{STRINGS.DELIVERY}</Text>
          <Text style={[style.totalTxt, {color: COLORS.darkScale, fontFamily: FONTS.Medium}]}>{'$'}{2.00}</Text>
        </View>
        <View style={style.total}>
          <Text style={style.totalTxt}>{STRINGS.TOTAL}</Text>
          <Text style={[style.totalTxt, {color: COLORS.darkScale, fontFamily: FONTS.Medium}]}>{'$'}{36.01}</Text>
        </View>
        <CustomButton 
          title={STRINGS.CHECKOUT}
          style={{backgroundColor: COLORS.primary, marginHorizontal: useWidth(5)}}
          txtStyle={{color: COLORS.white}}
        />
      </View>

      </View>

  )
}

const mapStateToProps = (state) => {
  console.log('STATE', state);
  return {
    cartItems: state.app.cartItems,
  };
};

export default connect(mapStateToProps, { addToCart })(CartScreen);