import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

export default function VotingChart() {
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ["Botanical Gardens", "Food Garden", "Community Garden", "Other"],
    datasets: [
      {
        data: [30, 45, 28, 50],
      },
    ],
  };
  const chartConfig = {
    backgroundColor: "#CCCCCC",
    backgroundGradientFrom: "#CCCCCC",
    backgroundGradientTo: "#CCCCCC",
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(10, 117, 10, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16},
      
  };

  return (
    <View style={styles.container}>
      <BarChart
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        data={data}
        width={screenWidth}
        height={400}
        
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    
    }
});
