
import React ,{createContext,useContext,useReducer, useState } from 'react';
import { Text } from 'react-native';
const Context = createContext()

const Provider = ({children}) => {
   const  [isAuth, setIsAuth] = useState(false)
   const  [name, setName] = useState("")
   const  [img, setImg] = useState("")

   const value = {
      isAuth,
      activateAuth: () => {
         setIsAuth(true)
      },
      logAuth: () =>{
         setIsAuth(false )
      },
      name,
      img,
      newImg:(img)=>{
         setImg(img)
      },
      newName:(name)=>{
         setName(name)
      }
      
   }
   return(
      <Context.Provider value ={value}>
         {children}
      </Context.Provider>
   )
}

export default {
   Provider,
   Consumer:Context.Consumer
}

export function useAuth  () {
   const context= useContext(Context)
   if (!context) {
      throw new Error('auth debe estar dentro de proveedor')
   }

   return context
}