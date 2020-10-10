import React from 'react'
import SimpleButtom from '../../Login/Component/BtnSimple'

const BotonSimple = ({onPress,title}) => {
return(
   <SimpleButtom
   onPress ={onPress}
   title = {title}
/>
)
  
}

export default BotonSimple