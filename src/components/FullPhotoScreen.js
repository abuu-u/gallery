import React from 'react';
import { useSelector } from 'react-redux';
import withCalculatedWidth from '../hocs/withCalculatedWidth';
import { getPhotoById } from '../reducer/selectors';
import FullPhoto from './FullPhoto';

const FullPhotoWithCalculatedWidth = withCalculatedWidth(FullPhoto);

const FullPhotoScreen = ({ route }) => {
  const photo = useSelector((state) => getPhotoById(state, route.params.id));

  return <FullPhotoWithCalculatedWidth photo={photo} isFull={true} />;
};

export default FullPhotoScreen;
