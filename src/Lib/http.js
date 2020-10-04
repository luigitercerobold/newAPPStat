
class Http {
   static instance = new Http()
   constructor(){
      this.token=null
      this.id=null
   }
   setToken =(token)=> {
      this.token=token
   }
   getToken = ()=> {
      return this.token
   }
   setId =(id)=> {
      this.id=id
   }
   getId = ()=> {
      return this.id
   }


   get = async (url) => {
      console.log("eviando", url)
      try {
         let req = await fetch(url);
         let json = await req.json();
         return json
      }catch(err){
         console.log("http get method err", err);
         throw Error(err);
      }
   }
   post = async (url,body) => {
      try {
         let req = await fetch (url,{
            headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json',
             },
            method:"POST",
            body
         });
         
         let json = await req.json();
         return json;
      }catch(err){
         console.log("http method post err", err);
         throw Error(err);
      }
   }
   get = async (url,token) => {
      console.log("eviando2", url)
      try {
         let req = await fetch(url,{
            method:"GET",
            headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json',
               'Authorization':token
             },
         });
         let json = await req.json();
         console.log(json)
         return json
      }catch(err){
         console.log("http get method err", err);
         throw Error(err);
      }
   }
   post = async (url,body,token) => {
      try {
         console.log("enviar post",url,body,token)
         let req = await fetch (url,{
           
            headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json',
               'Authorization':token
             },
            method:"POST",
            body
         });
         
         let json = await req.json();
         return json;
      }catch(err){
         console.log("http method post err", err);
         throw Error(err);
      }
   }
}
export default Http