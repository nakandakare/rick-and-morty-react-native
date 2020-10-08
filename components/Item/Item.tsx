import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface itemProps {
  item: {
    name: string,
    dimension: string | undefined,
    episode: string | undefined
  }
}

const Item: React.FC<itemProps> = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("ItemDetail", { item })}
    >
      <View style={styles.items}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemText}>{item.dimension || item.episode} </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Item;

const styles = StyleSheet.create({
  items: {
    width: 300,
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
