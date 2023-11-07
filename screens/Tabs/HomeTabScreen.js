import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import COLORS from '../../assets/colors'
import STRINGS from '../../assets/strings'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useHeight, useWidth } from '../../constants/Screen'
import style from './style'
import FONTS from '../../assets/fonts'
import { getItems } from '../../utils/Api'
import { connect } from 'react-redux';
import { addProducts, addToCart, addToFavorites, removeFromFavorites } from '../../redux/actions/actions'

const HomeTabScreen = ({navigation}) => {
  let badgeCount = 4;
  const [searchTxt, setSearchTxt] = useState(STRINGS.SEARCH_PRODUCT_STORE);
  const [likedItems, setLikedItems] = useState({});
  const couponData = [
    {
      id: 1,
      line1: 'GET',
      line2: '50% OFF',
      line3: 'On first 03 order',
      isHighlighted: true
    },
    {
      id: 2,
      line1: 'GET',
      line2: '50% OFF',
      line3: 'On first 03 order',
      isHighlighted: false
    },
    {
      id: 3,
      line1: 'GET',
      line2: '50% OFF',
      line3: 'On first 03 order',
      isHighlighted: false
    }
  ]
const [highlightedItem, setHighlightedItem] = useState(couponData.find((item) => item.isHighlighted));
const [productList, setProductList] = useState([]);

useEffect(() => {
  fetchProductList();
}, []);

const fetchProductList = () => {
  getItems().then(res => { 
    if (res.products) {
      console.log('PRODUCTSS', res);
      setProductList(res.products);
      addProducts(res.products)
    } else {
      console.log('ERROR');
    }
    
  })
}
const handleItemPress = (item) => {
  setHighlightedItem(item);
};

const toggleLike = (itemId) => {
  setLikedItems((prevLikedItems) => {
    const updatedLikedItems = { ...prevLikedItems };
    updatedLikedItems[itemId] = !prevLikedItems[itemId];
    addToFavorites()
    return updatedLikedItems;
  });
};

  const onChangeSearchText = text => {
    setSearchTxt(text);
  }

  const moveToCart = () => {
    navigation.navigate('Cart')
  }

  const CouponComponent = ({item}) => {
    return (
      <TouchableOpacity
      onPress={() => handleItemPress(item)}
       style={item.isHighlighted ? style.couponBody : [style.couponBody, {opacity: 0.6 }]}
       >
        <Ionicon name="image-outline" size={70} color={COLORS.white} style={style.couponImg}/>
        <View style={style.couponDesc}>
          <Text style={style.line1}>{item.line1}</Text>
          <Text style={style.line2}>{item.line2}</Text>
          <Text style={style.line3}>
            {/* {item.line3} */}
            {item.line3.split(" ").map((word, index) => (
          <Text key={index} style={word === "03" ? {fontFamily: FONTS.Medium} : styles.line3}>
            {word}{" "}
          </Text>
        ))}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  const ProductComponent = ({item}) => {
    const isLiked = likedItems[item.id] || false;
    return(
      <TouchableOpacity 
        onPress={() => moveToDetailScreen(item.id)}
        style={style.productBox}
      >
        <View>
        {/* {item.thumbnail ? <Image fallback={true} source={{uri: item.thumbnail}} style={style.thumbnail} resizeMode="contain"/> : */}
          <Ionicon name="image-outline" size={100} color={COLORS.light} style={{width: 100, height: 100, left: 15}}/>
          {/* }  */}
        <TouchableOpacity
        style={styles.heartContainer}
        onPress={() => toggleLike(item.id)}
      >
        <AntDesign
          name={isLiked ? "heart" : "hearto"} 
          size={20}
          color={isLiked ? "red" : "black"} 
        />
      </TouchableOpacity>
        </View>
        <View style={style.itemdesc}>
          <View style={{marginLeft: -10, marginBottom: -20}}>
            <Text style={style.price}>{'$'}{item.price}</Text>
            <Text style={style.title}>{item.title}</Text>
          </View>
          <TouchableOpacity style={style.addIcon} onPress={() => addToCart(item.id)}>
          <AntDesign name="plus" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }

  const moveToDetailScreen = (id) => {
      navigation.navigate('Details', {itemId: id})
  }

  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>

      {/* Header */}
      <View style={style.header}>
        <View style={style.headerObj}>
          <Text style={style.username}>{STRINGS.HEY} Rahul</Text>
          <TouchableOpacity onPress={moveToCart}>
            <SimpleLineIcon name="handbag" size={20} color={COLORS.white} />
            {badgeCount && badgeCount > 0 && 
              <View style={style.count}>
                <Text style={style.counTxt}>{badgeCount}</Text>
              </View>
            }
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={style.searchContainer}>
          <AntDesign name="search1" size={20} color={COLORS.white} style={style.searchIcon}/>
          <TextInput 
            value={searchTxt}
            onChangeText={onChangeSearchText}
            style={style.headerSearchBox}
          />
        </TouchableOpacity>
        <View style={style.deliveryContainer}>
          <View>
            <Text style={style.deliveryTitle}>{STRINGS.DELIVERY_TO}</Text>
            <View style={style.deliveryInfo}>
              <Text style={style.deliveryInfoTxt}>Green Way 3000, Sylhet</Text>
              <AntDesign name="down" size={10} color={COLORS.greyScale} />
            </View>
          </View>
          <View>
            <Text style={style.deliveryTitle}>{STRINGS.WITHIN}</Text>
            <View style={style.deliveryInfo}>
              <Text style={style.deliveryInfoTxt}>1 Hour</Text>
              <AntDesign name="down" size={10} color={COLORS.greyScale} />
            </View>
          </View>
        </View>
      </View>
      
      {/* Coupons Flatlist */}
      <FlatList 
        data={couponData}
        renderItem={CouponComponent}
        horizontal={true}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        extraData={highlightedItem}
      />

      <Text style={style.recomTxt}>{STRINGS.RECOMMENDED}</Text>

      {/* Product list */}

      <FlatList 
        data={productList}
        renderItem={ProductComponent}
        numColumns={2}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />

    </ScrollView>
  )
}

const mapStateToProps = (state) => {
  return {
    productList: state.app.productList,
  };
};

export default connect(mapStateToProps, { addProducts, addToCart, addToFavorites, removeFromFavorites })(HomeTabScreen);