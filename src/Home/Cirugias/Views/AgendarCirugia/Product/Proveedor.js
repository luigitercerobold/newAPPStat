
import FiltrarPorveedore from '../../../Productos/Views/FiltrarProveedores'

class Proveedor extends FiltrarPorveedore {
   
   goToProductoProveedor (query){
      query.products = this.props.route.params.products
      query.schedule=this.props.route.params.schedule
      this.props.navigation.navigate('Productos',query)

   }

  
}
export default Proveedor
   