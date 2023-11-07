import { View, Text, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import COLORS from '../../assets/colors'
import BackButton from '../../components/BackButton/BackButton'
import style from './style'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import Rating from '../../components/Rating/Rating'
import STRINGS from '../../assets/strings'
import CarouselCards from '../../components/Carousel/CarouselCard'
import CustomButton from '../../components/Button/CustomButton'
import FONTS from '../../assets/fonts'
import { useHeight } from '../../constants/Screen'
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/actions'

const  DetailScreen = ({ route, navigation, productList })  => {
  const { itemId } = route.params
  const baseURL = `https://dummyjson.com/products/${itemId}`
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetchDetails();
  }, [])

  const fetchDetails = async (data) => {
    try {
      const response = await fetch( `${baseURL}`);
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('DEETSS', data);
      setDetails(data);
      return data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };

  const goBack = () => {
    navigation.goBack();
  }

  const amountOff = (amount, off) => {
    const offer = amount * (off/100);
    return offer.toFixed(2);
  }

  const moveToCart = () => {
    navigation.navigate('Cart')
  }
  
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={style.header}>
        <BackButton handlePress={goBack}/>
        <TouchableOpacity onPress={moveToCart}>
          <SimpleLineIcon name="handbag" size={20} color={COLORS.dark} />
        </TouchableOpacity>
      </View>

      <Text style={style.titleTxt}>{productList[itemId]?.title}</Text>
      <Text style={[style.titleTxt, {fontFamily: FONTS.ExtraBold, marginBottom: useHeight(2)}]}>{details.brand}</Text>

      <View style={style.ratings}>
        <Rating rating={details.rating} />
        <Text style={style.reviewTxt}>{STRINGS.REVIEWS}</Text>
      </View>
      
      <CarouselCards/>

      <View style={style.amount}>
        <Text style={style.priceTxt}>{'$'}{details.price}</Text>
        <View style={style.offStyle}>
          <Text style={style.offTxt}>{amountOff(details.price , details.discountPercentage)}{' OFF'}</Text>
        </View>
      </View>

      <View style={style.btns}>
        <CustomButton 
          title={STRINGS.ADD_CART} 
          style={style.btn}
          onPress={() => console.log('ADD TO CART')}
        />
        <CustomButton 
          title={STRINGS.BUY_NOW} 
          style={[style.btn, {backgroundColor: COLORS.primary}]}
          txtStyle={{color: 'white'}}
          onPress={() => console.log('BUY NOW')}
        />
      </View>

      <Text style={style.detailTxt}>{STRINGS.DETAILS}</Text>
      <Text style={style.descTxt}>{details.description}</Text>
    </View>
  )
}

const mapStateToProps = (state) => {
  console.log('STATE 23', state);
  return {
    productList: state.app.productList,
  };
};

export default connect(mapStateToProps, { addToCart })(DetailScreen);