import React from "react";
import { View, ActivityIndicator } from "react-native";
import { spinnerStyles } from "../../utilities/styles";

const Spinner = () => {
  return (
    <View style={[spinnerStyles.container]}>
      <ActivityIndicator color="#FFFFFF" size="large" />
    </View>
  );
};

export default Spinner;

