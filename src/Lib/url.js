const server = "http://104.155.128.140"
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
   getDrs:server + "/api/user/doctor/list"
};

export default urlStat