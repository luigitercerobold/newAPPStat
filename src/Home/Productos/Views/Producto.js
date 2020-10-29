import React from 'react';
import { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import Title from '../../../Lib/Title'
import bodyPart from 'newAPPStat/src/Lib/bodyParts'
import ListItem from '../../../Lib/Component/ListItem'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'
import ActivityIndicatorStat from '../../../Lib/Component/ActivitiIndicator'
import EmptyData from '../../../Lib/Component/EmptyData'
class Productos extends Component {

   state = {
      products: bodyPart,
      proveedor: [],
      loading: false,
      selectProduct: ""
   }

   componentDidMount() {
      console.log.length('producto')
      this.getProdcuts();
   }

   getProdcuts = async () => {
      this.setState({ loading: true })
      const body = JSON.stringify({
         providerId: this.props.route.params?.providerId,
         categoryId: "1",
         bodyPartId: this.props.route.params?.body.id
      })
      const proveedor = await http.instance.post(urlStat.getProduct, body, http.instance.getToken(),)
      this.setState({ proveedor: proveedor.data, loading: false })
      console.log(this.state.proveedor)
      return proveedor
   }

   onPress = () => {

   }

   handlePress = (item) => {
      console.log("seleccionado", item)
      this.setState({ selectProduct: item })
      this.props.navigation.navigate('AddProductos', {
         producto: item
      })
   }

   render() {
      const { products, proveedor, loading } = this.state
      return (
         <View>{loading ?
            <ActivityIndicatorStat color={color.blue} size="large" /> : null
         }
            <Title title="Productos" />
            <FlatList
               ListEmptyComponent={() => <EmptyData />}
               data={proveedor}
               style={styles.flatList}
               renderItem={({ item }) => <ListItem onPress={() => this.handlePress(item)} item={item.name} />}
            />
         </View>
      )
   }

}
export default Productos;

const styles = StyleSheet.create({
   flatList: {
      height: 300,

      flexGrow: 0
   }
})