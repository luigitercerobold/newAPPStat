import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    
} from 'react-native'
import {Picker} from '@react-native-community/picker';
import RNPickerSelect from 'react-native-picker-select';


function Cita(props) {
    
    return(
       <View>
           <Text>{props.title}</Text>
           <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
       </View> 
    )
}


export default Cita
