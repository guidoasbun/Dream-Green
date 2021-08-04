import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";

import CameraBottomButtons from "../components/CameraBottomButtons";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Image
            style={styles.voteButton}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/lots-parks-sea.appspot.com/o/voteButton.png?alt=media&token=dcc218a7-53fe-4b56-bb40-cdbe9382e0e2",
            }}
          />
        </TouchableOpacity>

        <CameraBottomButtons />
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  lensButtonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 50,
  },
  centerButton: {
    width: 65,
    height: 65,
  },
  sideButton: {
    width: 45,
    height: 45,
  },
  voteButton: {
    flexDirection: "row",
    marginLeft: 150,
    marginTop: 500,
    width: 110,
    height: 30,
  },
});
