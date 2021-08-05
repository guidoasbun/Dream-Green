import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const VotingSelectors = () => {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.listItem}>Botanical Garden</Text>
        <Text style={styles.listItem}>Food Garden</Text>
        <Text style={styles.listItem}>Community Garden</Text>
        <Text style={styles.listItem}>Other</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    margin: 2,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
  },
});
