import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "../../RootStackParamList";
import { introductionStyles } from '../../utilities/styles';

type introductionScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;

type Props = {
  navigation: introductionScreenNavigationProp;
};

export default function Introduction({ navigation }: Props) {
  return (
    <SafeAreaView style={introductionStyles.screenContainer}>
      <View style={introductionStyles.screenInnerContainer}>
        <View style={introductionStyles.screenElem}>
          <Text style={introductionStyles.title}>REACT NATIVE CHALLENGE</Text>
          <Text style={introductionStyles.text}>KEVIN NAKANDAKARE</Text>
        </View>
        <View style={introductionStyles.screenElem}>
          <TouchableOpacity
            style={introductionStyles.screenButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={introductionStyles.buttonText}>ENTER</Text>
          </TouchableOpacity>
          <Text style={introductionStyles.text}>29/09/2020</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

