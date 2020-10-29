//const server = "http://104.154.41.85";
const server = "http://192.168.0.108:3000"
const imgServer = 'https://storage.googleapis.com/stat-storage-dev/images/'
const urlStat = {
   img: imgServer,
   login: server + '/api/auth/login',
   getHospital: server + "/api/schedule/hospital/all",
   getProveedor: server + '/api/provider/all',
   getProduct: server + '/api/product/filtered',
   getBoddy: server + '/api/provider/getAllBodyParts',
   getCirugias: server + '/api/schedule/all',
   saveCirugia: server + '/api/schedule/',
   getBoddy: server + "/api/product/body-parts",
   creteUser: server + "/api/user",
   confirmUser: server + "/api/user/confirm",
   anatomipart: server + "/api/product/anatomic-regions",
   getDrs: server + "/api/user/doctor/list",
   getAllProduct: server + "/api/product/products",
   getByBodypart: server + "/api/provider/by-body-part",
   getProviderProducts: server + "/api/product/provider-products",
   ping: server + "/api/status/ping",
   getCategories: server + "/api/product/categories",
   getGalery: (id) => {
      return `${server}/api/product/${id}/gallery/`
   },
   addContact: server + "/api/user/contact",
   getContacts: server + "/api/user/contacts",
   searchContact: server + "/api/user/doctor/search",
   editNameAndPhone: server + "/api/user/edit",
   getInvitation: server + "/api/schedule/invited",
   editPassword: server + "/api/auth/change-password",
   recoverPassword: server + "/api/auth/recover-password",
   getDetails: (id) => {
      return `${server}/api/schedule/details/${id}`
   },
   getNextSurgery: server + "/api/schedule/next",
   onDemandAddDoctrs: server + "/api/schedule/invited-doctor",
   onDemandDeleteDoctrs: (id) => {
      return `${server}/api/schedule/invited-doctor/${id}`
   },
   onDemandDeleteProduct: (id) => {
      return `${server}/api/schedule/product/${id}`
   },
   getProductFromschedule: (id) => {
      return `${server}/api/schedule/products/${id}`

   },
   getDoctorsFromschedule: (id) => {
      return `${server}/api/schedule/doctors-invited/${id}`
   },
   addDoctorOnDemand: server + "/api/schedule/invited-doctor",
   addProductOnDemand: server +"/api/schedule/product",
   deleteContanct: (id) => {
      return `${server}/api/user/contact/${id}`
   },
   editPhoto: server + '/api/user/photo',
   sendEmail:server + '/api/user/send-invitation'

   
};

export default urlStat