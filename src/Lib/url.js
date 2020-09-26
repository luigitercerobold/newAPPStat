const server = "http://192.168.1.16:3000";

const urlStat={
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
   getProviderProducts: server+"/api/product/provider-products"
};

export default urlStat