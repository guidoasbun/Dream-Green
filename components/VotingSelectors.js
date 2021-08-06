import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { CheckBox } from "react-native-elements";

const voteButton = require("../assets/buttons/voteButton2.png");

export default function VotingSelectors({ navigation }) {
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
    <View style={styles.container}>
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
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        ) : (
          <></>
        )}
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("VotingResults");
          }}
        >
          <Image style={styles.voteButton} source={voteButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  listItem: {
    alignItems: "center",
    fontSize: 20,
    padding: 5,
    marginVertical: 5,
  },
  votingButtons: {
    flex: 1,
    maxHeight: 375,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderBottomWidth: 1,
  },
  voteButton: {
    margin: 15,
    width: 110,
    height: 40,
  },
});
