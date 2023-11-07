import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import COLORS from "../../assets/colors";

const Rating = ({ rating }) => {
  const maxRating = 5;
  const fullStars = Math.floor(rating);
  const remainingRating  = rating - fullStars === 0.5;
  const stars = [];

 // Render full stars
 for (let i = 0; i < fullStars; i++) {
    stars.push(<Icon key={i} name="star" style={styles.star} />);
  }

  // Render half-filled star if applicable
  if (remainingRating >= 0.25 && remainingRating <= 0.75) {
    stars.push(<Icon key="half" name="star-half" style={styles.star} />);
  }

  // Fill in empty stars to reach maxRating
  while (stars.length < maxRating) {
    stars.push(<Icon key={stars.length} name="star-o" style={styles.star} />);
  }

  return (
    <View style={styles.container}>
      {stars}
    </View>
  );
};
   

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    fontSize: 16,
    color: COLORS.secondary,
  },
});

export default Rating;
