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
import  VotingSelectors  from "../components/VotingSelectors";

const logoImage = require("../assets/logos/LAlandTrustIcon.png");
const closeButtonImage = require("../assets/buttons/closeButton3.png");
const voteNowButton = require("../assets/buttons/voteButton.png");

export const VotingModal = ({ navigation }) => {
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
            <Image style={styles.landTrustIcon} source={logoImage} />
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Image style={styles.iconButtons} source={closeButtonImage} />
            </TouchableOpacity>
          </View>

          <VoteText />
          <VotingSelectors />
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image style={styles.voteButton} source={voteNowButton} />
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
    width: 30,
    height: 15,
  },
  bottomButtomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 425,
  },
});
