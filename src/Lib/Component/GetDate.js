//const server = "http://104.154.41.85";

import moment from 'moment';
export const date = (dateIn) =>{
   
   let start = new Date( moment.utc(dateIn).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]') )
   let min = start.getMinutes();
    if (min < 10) {
      min = "0" + min
    }
    const date = `${start.getDate()}/${start.getMonth()+1}/${start.getFullYear()} - ${start.getHours()} : ${min}`

   return date
}

export const Hour = (dateIn) => {
   
}

export default date