import React from 'react';
import { Component } from 'react';
import ProductoProveedor from '../../../Productos/Views/ProductosDeProveedores'

class Productos extends ProductoProveedor {
   
   goToDetalleProdcuto (query) {
      query.products = this.props.route.params.products
      query.schedule=this.props.route.params.schedule
      this.props.navigation.navigate('AddProductos', query)
   }

}
export default Productos;
