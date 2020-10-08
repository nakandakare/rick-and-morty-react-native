import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import CharacterItem from "../CharacterItem/CharacterItem";

interface navigationProp {
  route: {
    params: {
      item: {
        name: string,
        dimension: string,
        episode: string,
        air_date: string,
        type: string,
        residents: [] | undefined,
        characters: [] | undefined
      }
    }
  }
}

const ItemDetail: React.FC<navigationProp> = ({ route }) => {
  /*get the param from navigation*/
  const { name, dimension, type, episode, air_date } = route.params.item;
  return (
    <View style={styles.itemDetailContainer}>
      <View style={styles.itemDetailInner}>
        <View style={styles.itemDetailMain}>
          <Text style={styles.itemName}>{name}</Text>
        </View>
        <View>
          <Text style={styles.subText}>
            {dimension ? `Dimension: ${dimension}` : `Episode: ${episode}`}
          </Text>
          <Text style={styles.subText}>
            {type ? `Type: ${type}` : `Air Date: ${air_date}`}
          </Text>
        </View>
        <View>
          <View>
            <Text style={styles.characterNameTitle}>Characters</Text>
          </View>
            <FlatList
              contentContainerStyle={styles.characters}
              data={route.params.item.residents || route.params.item.characters}
              renderItem={({ item }) => <CharacterItem item={item} />}
              keyExtractor={(item, index) => index.toString()}
            />
        </View>
      </View>
    </View>
  );
}

export default ItemDetail;

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
    alignItems: "center",
  },
});
