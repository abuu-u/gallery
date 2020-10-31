import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { COLUMNS_COUNT } from '../const';
import withCalculatedWidth from '../hocs/withCalculatedWidth';
import { Operation } from '../reducer/reducer';
import { getPhotos } from '../reducer/selectors';
import Photo from './Photo';

const PhotoWithCalculatedWidth = withCalculatedWidth(Photo);

const Gallery = ({ navigation }) => {
  useDispatch()(Operation.loadPhotos());
  const photos = useSelector((state) => getPhotos(state));
  const renderItem = ({ item }) => (
    <PhotoWithCalculatedWidth
      photo={item}
      isFull={false}
      navigation={navigation}
    />
  );

  return (
    <View>
      {photos.length ? (
        <FlatList
          data={photos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={COLUMNS_COUNT}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Gallery;
