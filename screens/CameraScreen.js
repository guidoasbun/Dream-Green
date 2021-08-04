import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Camera } from "expo-camera";

import { VotingModal } from "./VotingModal";

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
            <Image
              style={styles.iconButtons}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/lots-parks-sea.appspot.com/o/buttons%2FcameraFlip.png?alt=media&token=5cd9bea8-5828-4775-9c7a-46d5c0118b70",
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomButtomContainer}>
          <View>
            <Text style={styles.text}> Tap to</Text>
            <Text style={styles.text}>Change</Text>
          </View>

          <VotingModal/>

          <CameraBottomButtons />
        </View>
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
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 10,
  },
  iconButtons: {
    width: 25,
    height: 30,
  },
  voteButtonContainer: {
    flex: 1,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "white",
  },
  bottomButtomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 425,
  },
  voteButton: {
    margin: 15,
    width: 110,
    height: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
