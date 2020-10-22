import React,{useState} from 'react'
import TextBox from '../../../Lib/Component/TexBox'

const ProviderSearch = ({onChange,style}) => {
   
   const [query, setQuery] = useState('');
   const handleText = (query) => {
      setQuery(query)
      if(onChange){
         onChange(query)
      }
   }

   return (
      <TextBox
         placeholder="Buscar"
         value ={query}
         onChangeText={text => handleText(text)}
         style={style}
         
      />

   )
}
export default ProviderSearch