import React, { useState, useEffect, useRef } from "react";
import Colors from "../constants/Colors";
import { StyleSheet, View, Image, Text } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker, Callout, Circle } from "react-native-maps";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/Colors";
import db from "../firebase";
import firebase from "@firebase/app";

const mapEmoji = require("../assets/mapImages/mapEmoji2.png");
const lotImage = require("../assets/mapImages/lotsIcon.png");
const voteButton = require("../assets/mapImages/voteNowButton.png");
const directionsButton = require("../assets/mapImages/directionsButton.png");

const LOS_ANGELES_REGION = {
  latitude: 34.0522,
  longitude: -118.2437,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const DEMO_LOCATION = {
  latitude: 33.824555,
  longitude: -118.285904,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const LOT1 = {
  latitude: 33.831378,
  longitude: -118.28572,
};
const LOT2 = {
  latitude: 33.841896,
  longitude: -118.276482,
};
const LOT3 = {
  latitude: 33.823936,
  longitude: -118.298576
}

export default function MapScreen({ navigation }) {
  const [currLocation, setCurrLocation] = useState(null);
  const mapView = useRef(null);
  const [lots, setLots] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrLocation(location.coords);
    })();
  }, []);

  useEffect(() => {
    db.collection("Lots")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setLots(doc.data());
        });
      });
  }, []);
  // let lotsArray = Object.values(lots);

  const goToCurrLocation = () => {
    mapView?.current.animateToRegion(
      {
        // latitude: currLocation.latitude,
        // longitude: currLocation.longitude,
        latitude: 33.829982,
        longitude: -118.285895,
        latitudeDelta: 0.01,
        longitudeDelta: 0.0421,
      },
      1000
    );
  };

  // Replace ALL DEMO_LOCATION for currLocation in priduction

  return (
    <>
      <MapView
        ref={mapView}
        style={styles.map}
        initialRegion={LOS_ANGELES_REGION}
      >
        {DEMO_LOCATION ? (
          <>
            <Marker coordinate={DEMO_LOCATION}>
              <Image style={styles.mapEmoji} source={mapEmoji} />
            </Marker>

            <Marker
              coordinate={LOT1}
              onCalloutPress={(e) => {
                navigation.navigate("Camera");
              }}
            >
              <Image style={styles.lotIcon} source={lotImage} />
              <Callout>
                <View style={styles.calloutContainer}>
                  <Image
                    style={styles.locationImage}
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/lots-parks-sea.appspot.com/o/locationImages%2F21704SFigueroaSt.png?alt=media&token=11c3a127-cd02-4974-a6f9-2e230d36cc8f",
                    }}
                  />
                  <Text style={styles.headerText}>Carson Lot A - DreamGreen Location</Text>
                  <Text>21704 S Figueroa St Carson, CA 90745</Text>
                  <View style={styles.buttonContainer}>
                    <Image style={styles.voteButton} source={voteButton} />
                    <Image
                      style={styles.voteButton}
                      source={directionsButton}
                    />
                  </View>
                </View>
              </Callout>
            </Marker>

            <Marker
              coordinate={LOT2}
              onCalloutPress={(e) => {
                navigation.navigate("Camera");
              }}
            >
              <Image style={styles.lotIcon} source={lotImage} />
              <Callout>
                <View style={styles.calloutContainer}>
                  <Image
                    style={styles.locationImage}
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/lots-parks-sea.appspot.com/o/locationImages%2F20808JamisonAve.png?alt=media&token=59d2c6ce-05a4-4d04-a139-e51ffe0d8b8c",
                    }}
                  />
                  <Text style={styles.headerText}>Carson Lot A - DreamGreen Location</Text>
                  <Text>21704 S Figueroa St Carson, CA 90745</Text>
                  <View style={styles.buttonContainer}>
                    <Image style={styles.voteButton} source={voteButton} />
                    <Image
                      style={styles.voteButton}
                      source={directionsButton}
                    />
                  </View>
                </View>
              </Callout>
            </Marker>

            <Marker
              coordinate={LOT3}
              onCalloutPress={(e) => {
                navigation.navigate("Camera");
              }}
            >
              <Image style={styles.lotIcon} source={lotImage} />
              <Callout>
                <View style={styles.calloutContainer}>
                  <Image
                    style={styles.locationImage}
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/lots-parks-sea.appspot.com/o/locationImages%2F1257W223rdSt.png?alt=media&token=26c06145-60ba-4b41-bc36-0a02ee711c2d",
                    }}
                  />
                  <Text style={styles.headerText}>Carson Lot A - DreamGreen Location</Text>
                  <Text>21704 S Figueroa St Carson, CA 90745</Text>
                  <View style={styles.buttonContainer}>
                    <Image style={styles.voteButton} source={voteButton} />
                    <Image
                      style={styles.voteButton}
                      source={directionsButton}
                    />
                  </View>
                </View>
              </Callout>
            </Marker>

            <Circle
              center={DEMO_LOCATION}
              radius={2100}
              fillColor={"rgba(200, 300, 200, 0.5)"}
            />

            {/* <Marker
              coordinate={LOT2}
              title={"20808 Jamison Ave"}
              description={"Hello I am an empty lot waiting to be a park!!"}
              onCalloutPress={(e) => {
                // console.log(e.nativeEvent);
                navigation.navigate("Camera");
              }}
            >
              <Image style={styles.lotIcon} source={lotImage} />
            </Marker> */}
          </>
        ) : null}
      </MapView>
      {DEMO_LOCATION ? (
        <View style={styles.locateButtonContainer}>
          <TouchableOpacity
            style={styles.locateButton}
            onPress={goToCurrLocation}
          >
            <Ionicons
              name={"navigate"}
              size={40}
              color={Colors.snapblue}
              style={{ marginTop: 5, marginLeft: 3 }}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  locateButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  locateButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.snapyellow,
  },
  mapEmoji: {
    height: 100,
    width: 100,
  },
  lotIcon: {
    height: 50,
    width: 50,
  },
  locationImage: {
    height: 125,
    width: 300,
    marginBottom: 10,
  },
  voteButton: {
    height: 25,
    width: 125,
    margin: 10,
  },
  calloutContainer: {
    flex: 1,
    alignItems: "center",
    maxHeight: 225,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontWeight: 'bold',
  }
  
});
