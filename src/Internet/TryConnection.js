import { DefaultTheme } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, View, ActivityIndicator, FlatList } from 'react-native'
import Http from '../Lib/http'
import TextBox from '../Login/Component/TextBox'
const TryConnection = () => {
   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   const [data2, setData2] = useState();
   const [isLoading2, setLoading2] = useState(true);
   const [info, setInfo] = useState("ningun error");
   const [server, setServer] = useState('');

   const [serverloading, setServerLoading] = useState(true);
   const [serverError, setServerErro] = useState('ningun error');


   useEffect(() => {
      fetch('https://reactnative.dev/movies.json')
         .then((response) => response.json())
         .then((json) => setData(json.movies))
         .catch((error) => console.error(error))
         .finally(() => setLoading(false));
   }, []);

   useEffect(() => {
      fetch('http://104.155.128.140/api/auth/login', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            email: 'estuardo@bold.gt',
            password: '123456789'
         })
      })
         .then((response) => response.json())
         .then((json) => setData2(json))
         .catch((error) => setInfo(error))
         .finally(() => setLoading2(false));

      ;
   }, [])
   
   useEffect(() => {
      fetch('http://104.155.128.140/api/status/ping')
         .then((response) => response.json())
         .then((json) => setServer(json.message))
         .catch((error) => setServerErro(error))
         .finally(() => setServerLoading(false));
   }, []);


   


   const getData = async () => {
      Http.instance.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')

   }

   return (
      <View style={{ flex: 1, padding: 24 }}>
         <Text>hola</Text>
         {isLoading ? <ActivityIndicator /> : (
            <FlatList
               data={data}
               keyExtractor={({ id }, index) => id}
               renderItem={({ item }) => (
                  <Text>{item.title}, {item.releaseYear}</Text>
               )}
            />


         )}

         {isLoading2 ? <ActivityIndicator /> : (
            <View>
               <Text>info</Text>
               <Text>{data2?.data.id}</Text>
               <Text>info2</Text>
               <Text>{ JSON.stringify(info)}</Text>
            </View>
         )}

      {serverloading ? <ActivityIndicator /> : (
            <View>
               <Text>info</Text>
               <Text>{server}</Text>
               <Text>info2</Text>
               <Text>{ JSON.stringify(serverError)}</Text>
            </View>
         )}
      </View>
   )
}

export default TryConnection;