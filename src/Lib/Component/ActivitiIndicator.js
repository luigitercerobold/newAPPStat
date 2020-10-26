import React from 'react'
import { ActivityIndicator as A, View } from 'react-native'
import Color from '../../Lib/Colors'
const ActivityIndicator = () => {

   return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
         < A color={Color.blue} size="large" />
      </View>

   )
}

export default ActivityIndicator