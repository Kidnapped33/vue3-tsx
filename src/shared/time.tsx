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

  // firstDayOfMonth()
  firstDayOfMonth(){
    return new Time(new Date(this.date.getFullYear(),this.date.getMonth(),1,0,0,0)) 
  }
  lastDayOfMonth(){
    return new Time(new Date(this.date.getFullYear(),this.date.getMonth()+1,0,0,0,0)) 
  }

  firstDayOfYear(){
    return new Time(new Date(this.date.getFullYear(),0,1,0,0,0)) 
  }
  lastDayOfYear(){
    
    return new Time(new Date(this.date.getFullYear()+1,0,1,0,0,0)) 
  }

  getRaw(){
    return this.date;
  }

  add(amount: number, unit:  "year" | "month"| "day" |"hour" | "minute" | "second" | "millisecond"){
    let date = new Date(this.date.getTime());
    switch (unit) {
      case "year":
        // date.setFullYear(date.getFullYear() + amount);
        const currentDate = date.getDate()
        date.setDate(1)
        date.setFullYear(date.getFullYear() + amount)
        const targetDate = new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0, 0).getDate()
        date.setDate(Math.min(currentDate, targetDate))
        break;
      case "month":
        /**
         *  1. 2021-01-31 + 1 month = 2021-02-28
         * 找到1月第一天 1.1
         * 加一个月2.1
         * 再找到今天的日子 31
         * 找到下个月的最后一天（下下月的第0天）28
         * 对比2天取最小值 28
         */
        const d1 = date.getDate();
        date.setDate(1)
        date.setMonth(date.getMonth() + amount);
        const d2 = new Date(date.getFullYear(),date.getMonth()+1,0,0,0,0).getDate();
        date.setDate(Math.min(d1,d2))
        break;
      case "day":
        date.setDate(date.getDate() + amount);
        break;
      case "hour":
        date.setHours(date.getHours() + amount);
        break;
      case "minute":
        date.setMinutes(date.getMinutes() + amount);
        
        break;
      case "second":
        date.setSeconds(date.getSeconds() + amount);
        break;
      case "millisecond":
        date.setMilliseconds(date.getMilliseconds() + amount);
        break;
      default:
        throw new Error('Time.add: unknown unit');
    }
    return new Time(date)
  }
}

