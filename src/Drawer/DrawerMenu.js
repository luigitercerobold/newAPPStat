import React, { Component } from 'react'
import Drawer from 'react-native-drawer-menu';
import { Easing, View, Text, StyleSheet, Button } from 'react-native'; // Customize easing function (Optional)
import DrawerContent from '../Home/Drawer/Drawer'
class DrawerMenu extends Component {

   render() {
      // prepare your drawer content
      var drawerContent = (<DrawerContent></DrawerContent>)
      // customize drawer's style (Optional)
      var customStyles = {
         drawer: {
            shadowColor: '#000',
            shadowOpacity: 0.4,
            shadowRadius: 10
         },
         mask: {}, // style of mask if it is enabled
         main: {} // style of main board
      };

    
      return (
         <Drawer
            ref={drawer => this.drawer = drawer}
            style={styles.container}
            drawerWidth={300}
            drawerContent={drawerContent}
            type={Drawer.types.Overlay}
            customStyles={{ drawer: styles.drawer }}
            drawerPosition={Drawer.positions.Right}
            onDrawerOpen={() => { console.log('Drawer is opened'); }}
            onDrawerClose={() => { console.log('Drawer is closed') }}
            easingFunc={Easing.ease}
         >

            {this.props.children}
            
         </Drawer>
      );
   }
}

export default DrawerMenu

const styles = StyleSheet.create(
   {
      container: {
         flex: 1,
         backgroundColor: "blue"
      },
      leftTop: {
         backgroundColor: "red"
      },
      leftBottom: {
         backgroundColor: "green"
      },
      drawer: {
         backgroundColor: "gray",
         flex: 1,
      },
      content: {
         backgroundColor: "red",
         flex: 1,

      }
   }
)