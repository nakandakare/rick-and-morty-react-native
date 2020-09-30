import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Item() {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("ItemDetail")}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Episode/Locaiton Name</Text>
        <Text style={styles.itemText}>Attribute</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "90%",
    height: 60,
    backgroundColor: "#383d42",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginVertical: "2%",
    borderRadius: 10,
    paddingLeft: "8%",
  },
  itemTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  itemText: {
    color: "white",
  },
});
