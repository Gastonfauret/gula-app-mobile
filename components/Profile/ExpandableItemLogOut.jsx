import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

export default function ExpandableItemLogOut({ title, content }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };   

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleExpansion}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableOpacity>
            {isExpanded && (
                <View style={styles.contentContainer}>
                    <TouchableOpacity onPress={() => handleLinkPress(content.url)}>
                        <Text style={styles.link}>{content.text}</Text>
                    </TouchableOpacity>
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
    contentContainer: {
        paddingHorizontal: 10,
        paddingTop: 5,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});


