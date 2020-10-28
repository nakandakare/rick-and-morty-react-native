import React from "react";
import { Text, View, Image } from "react-native";
import { charDetailStyles } from "../../utilities/styles";

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
    <View style={charDetailStyles.characterDetailContainer}>
      <View style={charDetailStyles.characterDetailInner}>
        <View style={charDetailStyles.characterDetailMain}>
          <Image
            source={{
              uri: image,
            }}
            style={charDetailStyles.characterImg}
          />
          <Text style={charDetailStyles.characterName}>{name}</Text>
        </View>
        <View>
            <Text style={charDetailStyles.subText}>Species: {species}</Text>
            <Text style={charDetailStyles.subText}>Gender: {gender}</Text>
            <Text style={charDetailStyles.subText}>Type: {type}</Text>
        </View>
      </View>
    </View>
  );
}
