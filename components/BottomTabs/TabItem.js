import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, { useEffect} from 'react';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getPathXCenterByIndex} from '../../utils/Path';
import usePath from '../../hooks/usePath';
import {SCREEN_WIDTH} from '../../constants/Screen';
import COLORS from '../../assets/colors';
import FONTS from '../../assets/fonts';

const ICON_SIZE = 25;
const LABEL_WIDTH = SCREEN_WIDTH / 4;
const AnimatedIcon = Animated.createAnimatedComponent(MaterialIcons);
const TabItem = ({
  label,
  icon,
  index,
  activeIndex,
  onTabPress,
}) => {
  const {curvedPaths} = usePath();
  const animatedActiveIndex = useSharedValue(activeIndex);
  const iconPosition = getPathXCenterByIndex(curvedPaths, index);
  const labelPosition = getPathXCenterByIndex(curvedPaths, index);

  const tabStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? -35 : 20;
    const iconPositionX = iconPosition - index * ICON_SIZE;
    return {
      width: ICON_SIZE,
      height: ICON_SIZE,
      transform: [
        {translateY: withTiming(translateY)},
        {translateX: iconPositionX - ICON_SIZE / 2},
      ],
    };
  });
  const labelContainerStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? 36 : 100;
    return {
      transform: [
        {translateY: withTiming(translateY)},
        {translateX: labelPosition - LABEL_WIDTH / 2},
      ],
    };
  });
  const iconColor = useSharedValue(
    activeIndex === index + 1 ? COLORS.dark : 'white',
  );

  //Adjust Icon color for this first render
  useEffect(() => {
    animatedActiveIndex.value = activeIndex;
    if (activeIndex === index + 1) {
      iconColor.value = withTiming(COLORS.secondary);
    } else {
      iconColor.value = withTiming(COLORS.dark);
    }
  }, [activeIndex]);

  const animatedIconProps = useAnimatedProps(() => ({
    color: iconColor.value,
  }));
  return (
    <>
      <Animated.View style={[tabStyle]}>
        <Pressable
          testID={`tab${label}`}
          //Increasing touchable Area
          hitSlop={{top: 30, bottom: 30, left: 50, right: 50}}
          onPress={onTabPress}>
          <AnimatedIcon
            name={icon}
            size={25}
            animatedProps={animatedIconProps}
          />
        </Pressable>
      </Animated.View>
      <Animated.View style={[labelContainerStyle, styles.labelContainer]}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
    </>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: LABEL_WIDTH,
  },
  label: {
    color: COLORS.greyScale,
    fontSize: 17,
    fontFamily: FONTS.Medium
  },
});