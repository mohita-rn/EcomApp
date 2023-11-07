import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Carousel from 'react-native-snap-carousel';
import { SCREEN_WIDTH } from '../../constants/Screen';
import AntDesign from 'react-native-vector-icons/AntDesign'

export const SLIDER_WIDTH = SCREEN_WIDTH + 80

export default function CarouselItem({item, index}) {
    // const [likedItems, setLikedItems] = useState([]);
    // const isLiked = (itemId) => likedItems.includes(itemId);

    // const toggleLike = (itemId) => {
    //     if (isLiked(itemId)) {
    //       setLikedItems(likedItems.filter((item) => item !== itemId));
    //     } else {
    //       setLikedItems([...likedItems, itemId]);
    //     }
    //   };

  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      {/* <TouchableOpacity
        style={styles.heartContainer}
        onPress={() => toggleLike(item.id)}
      >
        <AntDesign
          name={isLiked ? "heart" : "hearto"} // Use different icon names for filled and outlined hearts
          size={20}
          color={isLiked ? "red" : "black"} // Change the heart color to red when liked
        />
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    image: {
      width: '100%',
      height: 200,
    }, 
    heartContainer: {
        position: 'absolute',
        right: 10
    }
  })
  