
import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';
import { Text } from 'react-native';
import { set } from 'react-native-reanimated';
import Http from '../../../Lib/http';
import urlStat from '../../../Lib/url';



export const Context = createContext()

const Provider = ({ children }) => {
  
   const [loading, setLoading] = useState(false)
   const [proximaCirugia, setProximaCirugia] = useState(Http.instance.get(urlStat.getNextSurgery, Http.instance.getToken()).data)
   const [cirugiaAgendadas, setCirugiaAgendadas] = useState([])
   const [saludo, setSaludo] = useState("hola")
   const [date, setDate] = useState({
      date: null,
      timer: null
   })
   const [procedimiento, setProcedimiento] = useState({})
   const [asistentes, setAsistentes] = useState([])
   const [productos, setProductos] = useState([])



   const getproximaCirugia = async () => {
      setLoading(true)
      const req = await Http.instance.get(urlStat.getNextSurgery, Http.instance.getToken())
      setProximaCirugia(req.data)
      setLoading(false)
      return req.data
   }

   const getCirugiasAgendandas = async (today) => {
      const body = JSON.stringify({
         "minDate": `${today.getFullYear()}-${today.getMonth() + 1}-1`,
         "maxDate": `${today.getFullYear()}-${today.getMonth() + 2}-1`

      })

      const cirugia = await http.instance.post(urlStat.getInvitation, body, http.instance.getToken())

   }

   const value = {
      productos,
      date,
      setDate,
      procedimiento,
      setProcedimiento,
      asistentes,
      setAsistentes,
      setProductos,
      cirugiaAgendadas,
  
      loading,
      proximaCirugia,
      saludo,
      setSaludo,
      getproximaCirugia,
     
   }

   return (
      <Context.Provider value={value}>
         {children}
      </Context.Provider>
   )
}

export default {
   Provider,
   Consumer: Context.Consumer
}

export function useAuth() {
   const context = useContext(Context)
   if (!context) {
      throw new Error('auth debe estar dentro de proveedor')
   }

   return context
}

export function useCirugia() {
   const context = useContext(Context)
   if (!context) {
      throw new Error('auth debe estar dentro de proveedor')
   }

   return context
}