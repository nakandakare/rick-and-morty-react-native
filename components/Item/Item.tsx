import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { itemStyles } from "../../utilities/styles";

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
      <View style={itemStyles.items}>
        <Text style={itemStyles.itemTitle}>{item.name}</Text>
        <Text style={itemStyles.itemText}>{item.dimension || item.episode} </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Item;
