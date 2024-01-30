import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const App = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const pressCamera = async () => {
    try {
      const result = await launchCamera({ mediaType: 'photo' });
      if (!result.didCancel) {
        setImageUrl(result.assets[0].uri);
        console.log(result);
      }
    } catch (error) {
      console.error('Kamera hatası:', error);
    }
  };

  const pressGallery = async () => {
    try {
      const result = await launchImageLibrary({ mediaType: 'photo' });
      if (!result.didCancel) {
        setImageUrl(result.assets[0].uri);
        console.log(result);
      }
    } catch (error) {
      console.error('Galeri hatası:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button onPress={pressCamera} title="Kamera" />
      <Button onPress={pressGallery} title="Galeri" />
      {imageUrl && <Image style={styles.image} source={{ uri: imageUrl }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginVertical: 20,
  },
});

export default App;
