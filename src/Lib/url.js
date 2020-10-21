const server = "http://104.154.41.85";
//const server = "http://192.168.0.108:3000"
const imgServer = 'https://storage.googleapis.com/stat-storage-dev/images/'
const urlStat={
   img: imgServer,
   login: server +'/api/auth/login',
   getHospital:server+"/api/schedule/hospital/all",
   getProveedor:server+'/api/provider/all',
   getProduct:server +'/api/product/filtered',
   getBoddy:server+'/api/provider/getAllBodyParts',
   getCirugias:server+'/api/schedule/all',
   saveCirugia:server +'/api/schedule/',
   getBoddy:server +"/api/product/body-parts",
   creteUser:server +"/api/user",
   confirmUser:server +"/api/user/confirm",
   anatomipart:server +"/api/product/anatomic-regions",
   getDrs:server + "/api/user/doctor/list",
   getAllProduct:server +"/api/product/products",
   getByBodypart: server+"/api/provider/by-body-part",
   getProviderProducts: server+"/api/product/provider-products",
   ping: server+"/api/status/ping",
   getCategories:server +"/api/product/categories",
   getGalery: (id) => {
      return `${server}/api/product/${id}/gallery/`
   },
   addContact :server + "/api/user/contact",
   getContacts:server + "/api/user/contacts",
   searchContact: server +"/api/user/doctor/search"
};

export default urlStat