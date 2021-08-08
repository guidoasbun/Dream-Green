import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { CheckBox } from "react-native-elements";
import { VoteText } from "../components/VoteText";

const logoImage = require("../assets/logos/dreamGreen2.png");
const voteButton = require("../assets/buttons/voteButton2.png");

export default function VotingModalFull({ navigation }) {
  const [bgVote, setBgVote] = useState(false);
  const [fgVote, setFgVote] = useState(false);
  const [cgVote, setCgVote] = useState(false);
  const [otVote, setOtVote] = useState(false);
  const [text, onChangeText] = useState("");

  const onPressbgVote = () => {
    if (bgVote === false) setBgVote(true);
    if (bgVote === true) setBgVote(false);
  };

  const onPressFgVote = () => {
    if (fgVote === false) setFgVote(true);
    if (fgVote === true) setFgVote(false);
  };

  const onPressCgVote = () => {
    if (cgVote === false) setCgVote(true);
    if (cgVote === true) setCgVote(false);
  };

  const onPressOtVote = () => {
    if (otVote === false) setOtVote(true);
    if (otVote === true) setOtVote(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container2}
    >
      <View style={styles.container}>
        <View style={styles.modelViewContainer}>
          <View style={styles.buttonContainer}>
            <Image style={styles.logoIcon} source={logoImage} />
          </View>
          <VoteText />
          <View style={styles.votingButtonsContainer}>
            <View style={styles.votingButtons}>
              <CheckBox
                title="Botanical Garden                    "
                textStyle={styles.listItem}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={bgVote}
                onPress={onPressbgVote}
              />
              <CheckBox
                title="Food Garden"
                textStyle={styles.listItem}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={fgVote}
                onPress={onPressFgVote}
              />
              <CheckBox
                title="Comunity Garden"
                textStyle={styles.listItem}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={cgVote}
                onPress={onPressCgVote}
              />
              <CheckBox
                title="Other"
                textStyle={styles.listItem}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={otVote}
                onPress={onPressOtVote}
              />
              {otVote ? (
                <TextInput
                  placeholder="Enter your opinion."
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                />
              ) : (
                <></>
              )}
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("VotingResults", {
                  BGVote: bgVote,
                  FGVote: fgVote,
                  CGVote: cgVote,
                  OTVote: otVote,
                  OTText: text,
                });
              }}
            >
              <Image style={styles.voteButton} source={voteButton} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
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
  logoIcon: {
    width: 355,
    height: 35,
  },
  voteButton: {
    margin: 15,
    width: 140,
    height: 50,
  },
  iconButtons: {
    width: 30,
    height: 15,
  },
  votingButtonsContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  votingButtons: {
    flex: 1,
    maxHeight: 490,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderBottomWidth: 1,
  },
  listItem: {
    alignItems: "center",
    fontSize: 20,
    padding: 5,
    marginVertical: 5,
  },
});
