import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CharacterItem() {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("CharacterDetail")}
    >
      <View style={styles.characterItem}>
        <Image
          style={styles.characterImg}
          source={{
            uri: "https://rickandmortyapi.com/api/character/avatar/253.jpeg",
          }}
        />
        <Text style={styles.characterName}>Character Name</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  characterItem: {
    width: "90%",
    height: 60,
    backgroundColor: "#383d42",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingVertical: "10%",
    marginVertical: "2%",
    borderRadius: 10,
  },
  characterImg: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginRight: "5%",
  },
  characterName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
