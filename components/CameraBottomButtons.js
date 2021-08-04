import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

export default function CameraBottomButtons() {
  return (
    <View style={styles.lensButtonContainer}>
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
  lensButtonContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  centerButton: {
    width: 65,
    height: 65,
  },
  sideButton: {
    width: 45,
    height: 45,
  },
});
