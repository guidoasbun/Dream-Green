import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import VotingChart from "../components/VotingChart";

const logoImage = require("../assets/logos/dreamGreen2.png");
const okButton = require("../assets/buttons/okButton.png");

export const VotingResults = ({ route, navigation }) => {
  const { BGVote, FGVote, CGVote, OTVote, OTText } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.modelViewContainer}>
        <View style={styles.buttonContainer}>
          <Image style={styles.logoIcon} source={logoImage} />
        </View>
        <View style={styles.thankYouText}>
          <Text style={styles.header}>Thank You!!</Text>
        </View>

        <View style={styles.chartContainer}>
          <VotingChart />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={() => {navigation.popToTop()}}
          >
            <Image style={styles.okButton} source={okButton} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    justifyContent: "center",
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
  bottomButtomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 425,
  },
  votingButtonsContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
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
  listItem: {
    alignItems: "center",
    fontSize: 20,
    padding: 5,
    marginVertical: 5,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  thankYouText: {
    alignItems: "center",
  },
  bodyText: {
    fontSize: 20,
  },
  okButton: {
    margin: 15,
    width: 190,
    height: 50,
  },
  chartContainer: {
    maxHeight: 500
  }
});
