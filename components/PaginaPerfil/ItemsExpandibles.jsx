import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

export default function ItemsExpandibles({ title, content }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={toggleExpansion}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>
            {isExpanded && (
                <View style={styles.contentContainer}>
                    {content.map((item, index) => (
                        <Text key={index} style={styles.content}>
                            {item}
                        </Text>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        paddingVertical: 10,
    },
    titleContainer: {
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    content: {
        paddingHorizontal: 10,
        paddingTop: 5,
        color: 'gray',
    },
});


