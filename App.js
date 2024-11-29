import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
import DogList from './components/DogList';
import CameraView from './components/CameraView';

export default function App() {
  const [showCamera, setShowCamera] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  const handleCapturePhoto = (photo) => {
    setCapturedPhoto(photo);
    setShowCamera(false);
  };

  return (
    <View style={styles.container}>
      {showCamera ? (
        <CameraView onCapture={handleCapturePhoto} />
      ) : (
        <>
          <DogList />
          {capturedPhoto && (
            <Image source={{ uri: capturedPhoto }} style={styles.photo} />
          )}
          <Button title="Tirar Foto" onPress={() => setShowCamera(true)} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  photo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
  },
});
