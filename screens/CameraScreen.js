import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  
} from "react-native";
import { Camera } from "expo-camera";


import CameraBottomButtons from "../components/CameraBottomButtons";

const cameraFlipButton = require("../assets/buttons/cameraFlip.png");
const voteNowButton = require("../assets/buttons/voteButton.png");

export default function CameraScreen({ navigation }) {
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
            <Image style={styles.iconButtons} source={cameraFlipButton} />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomButtomContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Vote Now!!!")}>
            <Image style={styles.voteButton} source={voteNowButton} />
          </TouchableOpacity>

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
    paddingTop: 500,
  },
  voteButton: {
    margin: 15,
    width: 110,
    height: 30,
    marginBottom: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
