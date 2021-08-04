import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

import { VoteText } from "../components/VoteText";

export const VotingModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modelViewContainer}>
          <View style={styles.buttonContainer}>
            <Image
              style={styles.landTrustIcon}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/lots-parks-sea.appspot.com/o/icons%2FLAlandTrustIcon.png?alt=media&token=7bafa3b4-34dd-46a1-a5ca-7e5c783860c7",
              }}
            />
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Image
                style={styles.iconButtons}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/lots-parks-sea.appspot.com/o/buttons%2FcloseButton2.png?alt=media&token=99215138-eddc-47c0-87b7-52a5262bc886",
                }}
              />
            </TouchableOpacity>
          </View>

          <VoteText />
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          style={styles.voteButton}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/lots-parks-sea.appspot.com/o/voteButton.png?alt=media&token=dcc218a7-53fe-4b56-bb40-cdbe9382e0e2",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modelViewContainer: {
    flex: 1,
    marginTop: 35,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  landTrustIcon: {
    width: 200,
    height: 50,
    marginRight: 55,
  },
  voteButton: {
    margin: 15,
    width: 110,
    height: 30,
  },
  iconButtons: {
    width: 25,
    height: 30,
  },
  bottomButtomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 425,
  },
});
