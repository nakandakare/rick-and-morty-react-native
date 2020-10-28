import React from "react";
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { charItemStyles } from "../../utilities/styles";

interface characterItemProps {
  item: {
    name: string,
    image: string
  }
}

const CharacterItem: React.FC<characterItemProps> = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("CharacterDetail", {item})}
    >
      <View style={charItemStyles.characterItem}>
        <Image
          style={charItemStyles.characterImg}
          source={{
            uri: item.image,
          }}
        />
        <Text style={charItemStyles.characterName}>{item.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CharacterItem;

