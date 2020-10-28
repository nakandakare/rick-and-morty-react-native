import React from "react";
import { Text, View  } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CharacterItem from "../CharacterItem/CharacterItem";
import {itemDetailStyles} from "../../utilities/styles";

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
    <View style={itemDetailStyles.itemDetailContainer}>
      <View style={itemDetailStyles.itemDetailInner}>
        <View style={itemDetailStyles.itemDetailMain}>
          <Text style={itemDetailStyles.itemName}>{name}</Text>
        </View>
        <View>
          <Text style={itemDetailStyles.subText}>
            {dimension ? `Dimension: ${dimension}` : `Episode: ${episode}`}
          </Text>
          <Text style={itemDetailStyles.subText}>
            {type ? `Type: ${type}` : `Air Date: ${air_date}`}
          </Text>
        </View>
        <View>
          <View>
            <Text style={itemDetailStyles.characterNameTitle}>Characters</Text>
          </View>
            <FlatList
              contentContainerStyle={itemDetailStyles.characters}
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
