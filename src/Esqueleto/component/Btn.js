import React ,{ useState, useEffect } from 'react'
import { Pressable, Text, View, StyleSheet,Dimensions } from 'react-native'
import Colors from '../../Lib/Colors'
import LineSelect from '../component/LineSelect'

const messure = {
   btnWidth: 88,
   punto: 15,
   btnHeigh: 40
}

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Btn = ({ text, top, right, onPress,line }) => {
   const [dimensions, setDimensions] = useState({ window, screen });
   const onChange = ({ window, screen }) => {
      setDimensions({ window, screen });
      console.log ('cambio')

   };
   useEffect(() => {
      Dimensions.addEventListener("change", onChange);
      return () => {
         Dimensions.removeEventListener("change", onChange);
      };
   });

   const rightCorner = () => {
      if (right) {
         return styles.right
      }
   }

   const imaginaryLine = () => {
      return 55
   }
   const originLine = (poss) => {
      return (poss)*(dimensions.window.width/2-messure.btnWidth-messure.punto-3)/5
   }
   const press = () => {
      console.log("clic", text)
      //return onPress()
   }
   const rowType = () =>{
      if (right){
         return 'row-reverse'
      }else {
         return 'row'
      }
   }

   const btn = () => {
      return (<Pressable
         onPress={press}
         style={styles.btn}
      >
         <Text style={styles.text}>{text} </Text>
      </Pressable>)
   }
   return (
      <View

         style={[styles.container, rightCorner(), { top: top,flexDirection:rowType() }]}>
            
             { btn()}
             

         <LineSelect
            line={originLine(line)}
            imaginaryLine={imaginaryLine()}
            btnHeigh={messure.btnHeigh}
            radioPunto={messure.punto}
            revese={right}
            
         />
        

      </View>
   )
}

export default Btn

const styles = StyleSheet.create({
   noneLine: {
      width: 200
   },
   container: {
      color: "white",
      fontSize: 10,
      fontWeight: "bold",
      position: 'absolute',

      marginHorizontal: 10,
      padding: 0,

      paddingVertical: 10,
      borderRadius: 50,
      paddingHorizontal: 0,
      width: 130,
      
   },
   line: {

      borderBottomWidth: 1,
      borderBottomColor: Colors.blue,
      width: 1,
      height: messure.btnHeigh / 2
   },
   line2: {
      backgroundColor: 'red',
      width: 1,

   },
   row: {
      flexDirection: 'row'
   },
   puntoContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
   },
   punto: {
      backgroundColor: Colors.blue,
      borderRadius: 100,
      width: messure.punto,
      height: messure.punto
   },
   btn: {
      color: "white",
      
      fontWeight: "bold",

      backgroundColor: Colors.blue,
      paddingVertical: 10,
      borderRadius: 50,

      width: messure.btnWidth,
      height: messure.btnHeigh,
      zIndex: 2


   },
   text: {
      color: Colors.white,
      textAlign: 'center',
      fontSize:12
   },

   right: {
      right: 0
   }


});