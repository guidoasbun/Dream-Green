import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import VotingChart from "../components/VotingChart";

const logoImage = require("../assets/logos/LAlandTrustIcon.png");

export const VotingResults = ({ route, navigation }) => {
  const { BGVote, FGVote, CGVote, OTVote, OTText } = route.params;

  console.log(FGVote);

  
  return (
    <View style={styles.container}>
      <View style={styles.modelViewContainer}>
        <View style={styles.buttonContainer}>
          <Image style={styles.landTrustIcon} source={logoImage} />
        </View>
        <View style={styles.thankYouText}>
          <Text style={styles.header}>Thank You!!</Text>
          <Text style={styles.bodyText}>We can not wait to make your dreams a reality!</Text>
        </View>
        

        <View>
          <VotingChart />
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
  landTrustIcon: {
    width: 200,
    height: 50,
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
    alignItems: 'center'
  },
  bodyText: {
    fontSize: 20
  }
});
