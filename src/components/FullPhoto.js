import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const FullPhoto = ({ photo, calculatedWidth, windowSize }) => {
  const imgUrl = `${photo.url}&w=${calculatedWidth}`;

  return (
    <View style={styles.container}>
      <Image
        style={{ width: windowSize.width, height: windowSize.height }}
        source={{ uri: imgUrl }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FullPhoto;
