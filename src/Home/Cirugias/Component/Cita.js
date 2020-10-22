import React from 'react';
import {
    View,
    Text,
    StyleSheet,

} from 'react-native'
import { Picker } from '@react-native-community/picker';
import RNPickerSelect from 'react-native-picker-select';
import StatFont from '../../../Lib/Component/StatFont'

function Cita(props) {

    return (
        <View>
            <StatFont>{props.title}</StatFont>
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
