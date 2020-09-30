import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function CharacterDetail() {
  return (
    <View style={styles.characterDetailContainer}>
      <View style={styles.characterDetailInner}>
        <View style={styles.characterDetailMain}>
          <Image
            source={{
              uri: "https://rickandmortyapi.com/api/character/avatar/253.jpeg",
            }}
            style={styles.characterImg}
          />
          <Text style={styles.characterName}>CHARACTER NAME</Text>
        </View>
        <View>
            <Text style={styles.subText}>DataTitle1: Data1</Text>
            <Text style={styles.subText}>DataTitle2: Data2</Text>
            <Text style={styles.subText}>DataTitle3: Data3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  characterDetailContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#18191a",
  },
  characterDetailInner: {
    padding: "8%"
  },
  characterDetailMain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  characterName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: "3%",
  },
  characterImg: {
    height: 230,
    width: 230,
    borderRadius: 10,
  },
  subText: {
    color: "white",
    marginVertical: 15,
    fontSize: 15
  }
});
