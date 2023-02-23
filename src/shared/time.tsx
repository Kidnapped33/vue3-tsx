

// export const time = (date = new Date()) => {
//  /**
//   *  new Date() //Fri Feb 24 2023 03:07:47 GMT+0800
//   * 1.分别提取年/月/日 2023/2/24
//   * 2.写好"YYYY-MM-DD"格式，用上面的年月日去替换它 "2023-02-24"
//   */
//   const api = {
//     format: (pattern = "YYYY-MM-DD") => {
//       const year = date.getFullYear();
//       const month = date.getMonth() + 1;
//       const day = date.getDate();
//       const hour = date.getHours();
//       const minute = date.getMinutes();
//       const second = date.getSeconds();
//       const msecond = date.getMilliseconds();
//       return pattern
//       .replace(/YYYY/, year.toString())
//       .replace(/MM/, month.toString().padStart(2, "0"))
//       .replace(/DD/, day.toString().padStart(2, "0"))
//       .replace(/HH/, hour.toString().padStart(2, "0"))
//       .replace(/mm/, minute.toString().padStart(2, "0"))
//       .replace(/ss/, second.toString().padStart(2, "0"))
//       .replace(/sss/, msecond.toString().padStart(3, "0"));
    
//     },
//   };
//   return api;
// };

/**
 *  use
 *  const time = new Time(new Date())
 *  time.format()
 */
export class Time {
  date: Date;
  constructor(date = new Date()){
    this.date = date
  }

  format(pattern = "YYYY-MM-DD"){
    const year = this.date.getFullYear();
    const month = this.date.getMonth() + 1;
    const day = this.date.getDate();
    const hour = this.date.getHours();
    const minute = this.date.getMinutes();
    const second = this.date.getSeconds();
    const msecond = this.date.getMilliseconds();
    return pattern
    .replace(/YYYY/, year.toString())
    .replace(/MM/, month.toString().padStart(2, "0"))
    .replace(/DD/, day.toString().padStart(2, "0"))
    .replace(/HH/, hour.toString().padStart(2, "0"))
    .replace(/mm/, minute.toString().padStart(2, "0"))
    .replace(/ss/, second.toString().padStart(2, "0"))
    .replace(/sss/, msecond.toString().padStart(3, "0"));
  
  }
}

