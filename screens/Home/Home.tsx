import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";
import CharacterItem from "../../components/CharacterItem/CharacterItem";
import Item from "../../components/Item/Item";

interface IFilterType {
  filter: string
}

export default function Home() {

  const [filterType, filterTypeSet] = useState<IFilterType>({filter: 'characters'});

  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.homeInnerContainer}>
        <View style={styles.homeSearchContainer}>
          <SearchBar placeholder={`Search ${filterType.filter}`} />
        </View>
        <ScrollView contentContainerStyle={styles.itemContainer}>
          <CharacterItem />
          <Item />
        </ScrollView>
        <View style={styles.bottomOptionContainer}>
          <View style={styles.bottomOptionInner}>
            <Text style={[styles.text, styles.borderRight]} onPress={() => filterTypeSet({...filterTypeSet, filter: 'characters'})}>Characters</Text>
            <Text style={[styles.text, styles.borderRight]} onPress={() => filterTypeSet({...filterTypeSet, filter: 'locations'})}>Locations</Text>
            <Text style={styles.text} onPress={() => filterTypeSet({...filterTypeSet, filter: 'episodes'})}>Episodes</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#18191a",
  },
  homeInnerContainer: {
    height: "100%",
    width: "100%",
    paddingTop: "0%",
    display: "flex",
    justifyContent: "space-between",
  },
  homeSearchContainer: {
    height: "9%",
    width: "100%",
  },
  bottomOptionContainer: {
    display: "flex",
    justifyContent: "center",
    height: "9%",
    borderWidth: 1,
    borderTopColor: "white",
  },
  bottomOptionInner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    color: "white",
    width: "33.3%",
    textAlign: "center",
  },
  borderRight: {
    borderRightColor: "white",
    borderRightWidth: 1,
  },
  itemContainer: {
    display: "flex",
    alignItems: "center",
  },
  itemInner: {
    width: "90%",
    height: "10%",
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
    marginRight: "5%",
  },
  characterName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
