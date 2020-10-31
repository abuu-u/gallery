import React from 'react';
import { useWindowDimensions } from 'react-native';

const withCalculatedWidth = (Component) => {
  const WithCalculatedWidth = (props) => {
    const { photo, isFull } = props;
    const windowSize = useWindowDimensions();
    const imgRatio = photo.size.width / photo.size.height;
    const scaledWindowWidth = windowSize.width * windowSize.scale;
    const calculatedWidth =
      isFull || imgRatio > 1 ? scaledWindowWidth * imgRatio : scaledWindowWidth;

    return (
      <Component
        {...props}
        calculatedWidth={calculatedWidth}
        windowSize={windowSize}
      />
    );
  };

  return WithCalculatedWidth;
};

export default withCalculatedWidth;
