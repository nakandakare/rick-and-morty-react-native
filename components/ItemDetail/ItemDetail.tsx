import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CharacterItem from "../CharacterItem/CharacterItem";

export default function ItemDetail() {
  return (
    <View style={styles.itemDetailContainer}>
      <View style={styles.itemDetailInner}>
        <View style={styles.itemDetailMain}>
          <Text style={styles.itemName}>CHARACTER NAME</Text>
        </View>
        <View>
          <Text style={styles.subText}>DataTitle1: Data1</Text>
          <Text style={styles.subText}>DataTitle2: Data2</Text>
          <Text style={styles.subText}>DataTitle3: Data3</Text>
        </View>
        <View>
          <View>
            <Text style={styles.characterNameTitle}>Characters</Text>
          </View>
          <ScrollView contentContainerStyle={styles.characters}>
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemDetailContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#18191a",
  },
  itemDetailInner: {
    padding: "8%",
  },
  itemDetailMain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: "3%",
  },
  subText: {
    color: "white",
    marginVertical: 15,
    fontSize: 15,
  },
  characterNameTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    paddingVertical: "5%",
  },
  characters: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
