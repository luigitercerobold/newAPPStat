


   
    import React from 'react';
import { Component } from 'react';
import {View,FlatList, Button,Text,ScrollView,StyleSheet} from 'react-native';

import Title from '../../../../Lib/Title'
import bodyPart from  'newAPPStat/src/Lib/bodyParts'
import ListItem from '../../Component/Listitem'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'


class Body extends Component {
   state={
      products:bodyPart,
      loading:false
   }
   
   componentDidMount(){
      this.getBoddy()
   }

   onPress = () => {
      this.props.navigation.navigate('ElegirBody')
   }

   handlePress=(item)=>{
      console.log(item)
      this.props.navigation.navigate('Procedimiento',{body:item})
   }

   getBoddy = async () => {
      this.setState({ loading: true })
      const proveedor = await http.instance.get(urlStat.getBoddy, http.instance.getToken())
      this.setState({ products: proveedor.data, loading: false })
      console.log(this.state.products)
      return proveedproductsor
   }

   render(){
      const {products} = this.state
      return (
         <View>
            <Title title="Elige la parte del cuerpo"/>
            <FlatList
               data={products}
               style={styles.flatList}
               renderItem={({ item }) => <ListItem onPress={()=>this.handlePress(item)} item={item.name} />}
            />
         </View>
      )
   }

}
export default Body;

const styles = StyleSheet.create({
   flatList: {
      height: 300,
    
      flexGrow: 0
    }
})