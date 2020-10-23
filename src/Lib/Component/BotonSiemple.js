import React from 'react'
import SimpleButtom from '../../Login/Component/BtnSimple'

const BotonSimple = ({onPress,title,style}) => {
return(
   <SimpleButtom
   onPress ={onPress}
   title = {title}
   style ={style}
/>
)
  
}

export default BotonSimple