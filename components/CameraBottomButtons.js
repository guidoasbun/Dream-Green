import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

export default function CameraBottomButtons() {
  return (
    <View style={styles.lensButtonContainer}>
      {/* Input Lens Buttons Here */}
      <TouchableOpacity>
        <Image
          style={styles.sideButton}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/lots-parks-sea.appspot.com/o/buttonSides.png?alt=media&token=402df8f9-db40-4b3c-a677-41e4484a6115",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.sideButton}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/lots-parks-sea.appspot.com/o/buttonSides.png?alt=media&token=402df8f9-db40-4b3c-a677-41e4484a6115",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.centerButton}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/lots-parks-sea.appspot.com/o/buttonCenter.png?alt=media&token=dbb97637-a4d7-4118-9250-adddcf1e43ae",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.sideButton}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/lots-parks-sea.appspot.com/o/buttonSides.png?alt=media&token=402df8f9-db40-4b3c-a677-41e4484a6115",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.sideButton}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/lots-parks-sea.appspot.com/o/buttonSides.png?alt=media&token=402df8f9-db40-4b3c-a677-41e4484a6115",
          }}
        />
      </TouchableOpacity>
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
