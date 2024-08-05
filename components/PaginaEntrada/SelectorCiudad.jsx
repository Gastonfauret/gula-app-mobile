import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

export default function SelectorCiudad({ value, onValueChange }) {
    //const [selectedValue, setSelectedValue] = useState(null);

    const placeholder = {
        label: 'Seleccione su ciudad...',
        value: null,
    };

    const options = [
        { label: 'Benito Juarez', value: 'Benito Juarez' },
        { label: 'Villa Cacique', value: 'Villa Cacique' },
        { label: 'Barker', value: 'Barker' },
        { label: 'Tedin Uriburu', value: 'Tedin Uriburu' },
        { label: 'Estacion Lopez', value: 'Estacion Lopez' },
    ];

    return (
        <View style={styles.cityPickerContainer}>            
            <RNPickerSelect                               
                placeholder={placeholder}
                items={options}
                onValueChange={onValueChange}                
                value={value}
            />
            {/* {selectedValue && <Text></Text>} */}
        </View>
    );
}; 

const styles = StyleSheet.create({
    cityPickerContainer: {
        width: '81%',
        height: 50,
        backgroundColor: 'white',
        alignContent: 'center'
    }
})



