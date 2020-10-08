import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

interface navigationProp {
  route: {
    params: {
      item: {
        name: string,
        image: string,
        species: string,
        gender: string,
        type: string
      }
    }
  }
}

export default function CharacterDetail({route}: navigationProp) {
    /*get the param from navigation*/ 
    const {name, image, species, gender, type} = route.params.item;
  return (
    <View style={styles.characterDetailContainer}>
      <View style={styles.characterDetailInner}>
        <View style={styles.characterDetailMain}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.characterImg}
          />
          <Text style={styles.characterName}>{name}</Text>
        </View>
        <View>
            <Text style={styles.subText}>Species: {species}</Text>
            <Text style={styles.subText}>Gender: {gender}</Text>
            <Text style={styles.subText}>Type: {type}</Text>
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
    fontSize: 20
  }
});
