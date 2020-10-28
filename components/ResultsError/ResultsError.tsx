import React from 'react';
import { Text, View } from 'react-native';
import { resultsErrorStyles } from '../../utilities/styles';

interface resultsErrorProps {
    message: string
}

const ResultsError: React.FC<resultsErrorProps> = ({message}) => {
    return (<View style={resultsErrorStyles.resultsErrorContainer}>
        <Text style={resultsErrorStyles.errorText}>
            {message}
        </Text>
    </View>)
}

export default ResultsError;