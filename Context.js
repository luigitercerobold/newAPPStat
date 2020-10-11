
import React ,{createContext,useContext,useReducer, useState } from 'react';
import { Text } from 'react-native';
const Context = createContext()

const Provider = ({children}) => {
   const  [isAuth, setIsAuth] = useState(false)

   const value = {
      isAuth,
      activateAuth: () => {
         setIsAuth(true)
      },
      logAuth: () =>{

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