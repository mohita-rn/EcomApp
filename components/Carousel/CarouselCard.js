import React, { useRef, useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import COLORS from '../../assets/colors'
import { SCREEN_WIDTH, useHeight } from '../../constants/Screen'
import AntDesign from 'react-native-vector-icons/AntDesign'

const data = [
    {
    id:1,
      title: "Aenean leo",
      body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
        id:2,
      title: "In turpis",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
        id:3,
      title: "Lorem Ipsum",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];
const SLIDER_WIDTH = SCREEN_WIDTH + 80
   
const CarouselCards = () => {
    const isCarousel = useRef(null)
    const [index, setIndex] = useState(0);
    // console.log('----', data);
    const [liked, setLiked] = useState(false);
    
    const isLiked = (itemId) => likedItems.includes(itemId);
    
        const toggleLike = () => {
            setLiked(!liked);
          };

    const CarouselItem = ({item, index}) => {
        console.log('&&&&', item.id);
      return (
        <View style={styles.container} key={index}>
          <Image
            source={{ uri: item.imgUrl }}
            style={styles.image}
          />
        </View>
      )
    }

    return (
        <View style={{marginTop: useHeight(3)}}>
            <Carousel
                layout="default"
                // layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={CarouselItem}
                sliderWidth={SCREEN_WIDTH}
                itemWidth={SCREEN_WIDTH}
                inactiveSlideShift={0}
                // useScrollView={true}
                onSnapToItem={(index) => setIndex(index)}
            />
            <TouchableOpacity style={styles.heartContainer} onPress={toggleLike}>
                <AntDesign
                    name={liked ? "heart" : "hearto"}
                    size={20}
                    color={liked ? "red" : "black"}
                />
            </TouchableOpacity>
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 20,
                    height: 5,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    top: -60,
                    left: -120,
                    backgroundColor: COLORS.secondary
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>
    )
}


export default CarouselCards;

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
        right: 40,
        top: 10,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 20
    }
  })