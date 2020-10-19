
import FiltrarPorveedore from '../../../Productos/Views/FiltrarProveedores'

class Proveedor extends FiltrarPorveedore {
   goToProductoProveedor (query){
      query.products = this.props.route.params.products
      this.props.navigation.navigate('Productos',query)

   }

  
}
export default Proveedor
   