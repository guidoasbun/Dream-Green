import React from "react"
import { StyleSheet, Text, View } from "react-native"

export const VoteText = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>CAST YOUR VOTE !!</Text>
            <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        maxHeight: 200
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 15
    },
    body: {
        fontSize: 20,
        margin: 15
    }
})