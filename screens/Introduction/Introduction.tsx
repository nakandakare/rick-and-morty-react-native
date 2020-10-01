import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "../../RootStackParamList";

type introductionScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;

type Props = {
  navigation: introductionScreenNavigationProp;
};

export default function Introduction({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.screenInnerContainer}>
        <View style={styles.screenElem}>
          <Text style={styles.title}>REACT NATIVE CHALLENGE</Text>
          <Text style={styles.text}>KEVIN NAKANDAKARE</Text>
        </View>
        <View style={styles.screenElem}>
          <TouchableOpacity
            style={styles.screenButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>ENTER</Text>
          </TouchableOpacity>
          <Text style={styles.text}>29/09/2020</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#18191a",
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  screenInnerContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "20%",
  },
  screenElem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    width: "100%",
    fontSize: 20,
    color: "white",
  },
  text: {
    width: "100%",
    fontSize: 15,
    color: "white",
    padding: "5%",
  },
  screenButton: {
    alignItems: "center",
    backgroundColor: "#18191a",
    paddingHorizontal: 25,
    paddingVertical: 10,
    width: "25%",
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
  },
  buttonText: {
    width: "100%",
    color: "white",
  },
});
