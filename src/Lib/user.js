
class User {
   static instance = new User()
   constructor(){
      this.token=null
      this.id=null
      this.user =null
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
   newUser = (user) => {
      this.user = user
   }
   getUser = () => {
      return this.user
   }
 }
export default User