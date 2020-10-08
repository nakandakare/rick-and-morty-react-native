import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, Platform } from "react-native";
import { SearchBar } from "react-native-elements";
import BottomOption from "../../components/BottomOption/BottomOption";
import ItemsOverview from "../../components/ItemsOverview/ItemsOverview";


export default function Home() {

  const [searchInput, setSearchInput] = useState<string>("");
  const [filterType, setFilterType] = useState<string>('characters');
  
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.homeInnerContainer}>
        <View style={styles.homeSearchContainer}>
          <SearchBar placeholder={`Search ${filterType}`} onChangeText={(s) => setSearchInput(s)} value={searchInput}/>
        </View>
        <View style={styles.itemOverviewContainer}>
          <ItemsOverview searchInput={searchInput} filterType={filterType}/>
        </View>
        <View style={styles.bottomOptionContainer}>
          <BottomOption filterState={[filterType, setFilterType]}/>
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
    paddingTop: Platform.OS === 'android' ? 25 : 0
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
    zIndex: 1
  },
  bottomOptionContainer: {
    display: "flex",
    justifyContent: "center",
    height: "9%",
    borderWidth: 1,
    borderTopColor: "white"
  },
  itemOverviewContainer: {
    height: "81%"
  }
});
