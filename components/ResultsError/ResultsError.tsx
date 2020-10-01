import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface resultsErrorProps {
    message: string
}

const ResultsError: React.FC<resultsErrorProps> = ({message}) => {
    return (<View style={styles.resultsErrorContainer}>
        <Text style={styles.errorText}>
            {message}
        </Text>
    </View>)
}

const styles = StyleSheet.create({
    resultsErrorContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        height: "100%",
        width: "100%"
    },
    errorText: {
        color: "white"
    }
})

export default ResultsError;