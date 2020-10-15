import React, { useEffect } from 'react'
import Gallery from 'react-native-image-gallery';

const GaleryProduct = ({navigation,route}) => {
   useEffect(()=> {

      console.log('gallerty',route.params.img )
   })
   return (
      <Gallery
         style={{ flex: 1, backgroundColor: 'black' }}
         images={route.params.img}
      />
   )

}

export default GaleryProduct