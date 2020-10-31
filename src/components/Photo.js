import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { COLUMNS_COUNT, IMAGE_HEIGHT } from '../const';

const Photo = ({ photo, calculatedWidth, windowSize, navigation }) => {
  const imgUrl = `${photo.url}&w=${calculatedWidth / COLUMNS_COUNT}`;
  const description = photo.description
    ? photo.description
    : photo.altDescription;

  return (
    <Pressable
      onPress={() => navigation.navigate('Photo', { id: photo.id })}
      style={styles.container}>
      <Image
        style={{
          width: windowSize.width / COLUMNS_COUNT,
          height: IMAGE_HEIGHT,
        }}
        source={{ uri: imgUrl }}
      />
      <View style={styles.textWrapper}>
        <Text style={[styles.text, styles.author]}>{photo.user.name}</Text>
        <Text
          style={[styles.text, styles.description]}
          ellipsizeMode="tail"
          numberOfLines={2}>
          {description}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textWrapper: {
    height: '40%',
    padding: 10,
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba( 0, 0, 0, 0.5)',
    position: 'absolute',
  },
  text: {
    fontSize: 12,
  },
  author: {
    color: '#fff',
    fontWeight: '700',
  },
  description: {
    color: '#ddd',
    fontWeight: '300',
  },
});

export default Photo;
