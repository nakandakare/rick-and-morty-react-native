import React from 'react';
import { Text, View } from 'react-native';
import { buttonStyles } from '../../utilities/styles';

interface OptionProps {
    filterState: [string, React.Dispatch<React.SetStateAction<string>>];
}

const BottomOption: React.FC<OptionProps> = ({filterState: [filterType, setFilterType]}) => {
    return(
          <View style={buttonStyles.bottomOption}>
            <Text style={[buttonStyles.text, buttonStyles.borderRight]} onPress={() => setFilterType('characters')}>Characters</Text>
            <Text style={[buttonStyles.text, buttonStyles.borderRight]} onPress={() => setFilterType('locations')}>Locations</Text>
            <Text style={buttonStyles.text} onPress={() => setFilterType('episodes')}>Episodes</Text>
          </View>
    )
}

export default BottomOption;
