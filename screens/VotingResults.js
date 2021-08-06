import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const VotingResults = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hello, I am the voting results screen!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
