import React ,{ useState, useEffect } from 'react'
import { Pressable, Text, View, StyleSheet,Dimensions } from 'react-native'
import Colors from '../../Lib/Colors'
import LineSelect from '../component/LineSelect'

const messure = {
   btnWidth: 86,
   punto: 15,
   btnHeigh: 40*.80
}

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Btn = ({ text, top, right, onPress,line,imgWidthBruto,imgWidthNeto }) => {
   const [dimensions, setDimensions] = useState({ window, screen });
   const onChange = ({ window, screen }) => {
      setDimensions({ window, screen });
  

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
      return 0
   }
   const originLine = (poss) => {
      
      return   (poss)*(imgWidthNeto/2-5)/5 + (imgWidthBruto - imgWidthNeto)/2
   }
   const press = () => {
    
      return onPress()
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
      paddingVertical: 6,
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
