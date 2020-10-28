import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { SearchBar } from "react-native-elements";
import BottomOption from "../../components/BottomOption/BottomOption";
import ItemsOverview from "../../components/ItemsOverview/ItemsOverview";
import { homeStyles } from "../../utilities/styles";

export default function Home() {

  const [searchInput, setSearchInput] = useState<string>("");
  const [filterType, setFilterType] = useState<string>('characters');
  
  return (
    <SafeAreaView style={homeStyles.homeContainer}>
      <View style={homeStyles.homeInnerContainer}>
        <View style={homeStyles.homeSearchContainer}>
          <SearchBar placeholder={`Search ${filterType}`} onChangeText={(s) => setSearchInput(s)} value={searchInput}/>
        </View>
        <View style={homeStyles.itemOverviewContainer}>
          <ItemsOverview searchInput={searchInput} filterType={filterType}/>
        </View>
        <View style={homeStyles.bottomOptionContainer}>
          <BottomOption filterState={[filterType, setFilterType]}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

