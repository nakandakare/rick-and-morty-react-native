import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface characterItemProps {
  name: string;
  image: string;
  species: string;
  genre: string;
  type: string;
}

const CharacterItem: React.FC<characterItemProps> = ({name, image, species, genre, type}) => {
  const navigation = useNavigation();
  
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("CharacterDetail")}
    >
      <View style={styles.characterItem}>
        <Image
          style={styles.characterImg}
          source={{
            uri: image,
          }}
        />
        <Text style={styles.characterName}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CharacterItem;

const styles = StyleSheet.create({
  characterItem: {
    width: "90%",
    height: 60,
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
    borderRadius: 10,
    marginRight: "5%",
  },
  characterName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
