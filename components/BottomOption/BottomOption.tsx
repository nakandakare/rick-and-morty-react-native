import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface OptionProps {
    filterState: [string, React.Dispatch<React.SetStateAction<string>>];
}

const BottomOption: React.FC<OptionProps> = ({filterState: [filterType, setFilterType]}) => {
    return(
          <View style={styles.bottomOption}>
            <Text style={[styles.text, styles.borderRight]} onPress={() => setFilterType('characters')}>Characters</Text>
            <Text style={[styles.text, styles.borderRight]} onPress={() => setFilterType('locations')}>Locations</Text>
            <Text style={styles.text} onPress={() => setFilterType('episodes')}>Episodes</Text>
          </View>
    )
}

export default BottomOption;

const styles = StyleSheet.create({
      bottomOption: {
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
  });