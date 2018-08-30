/**
 * 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
 * 可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
 * Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 */
export function formatDate(source, format) {
    if (typeof source === "string") {
      if (source.indexOf("-") > -1) {
        source = convertTime(source);
      }
      source = new Date(source);
    }
  
    if (!(source instanceof Date)) {
      console.log("formatDate：参数不是一个合法的时间字符串或对象");
      return "--";
    }
  
    if (!format) {
      console.log("formatDate：格式不能为空");
      return "--";
    }
  
    const o = {
      "M+": source.getMonth() + 1, // 月份
      "d+": source.getDate(), // 日
      "H+": source.getHours(), // 小时
      "m+": source.getMinutes(), // 分
      "s+": source.getSeconds(), // 秒
      "q+": Math.floor((source.getMonth() + 3) / 3), // 季度
      "f+": source.getMilliseconds() // 毫秒
    };
    const week = {
      "0": "\u65e5",
      "1": "\u4e00",
      "2": "\u4e8c",
      "3": "\u4e09",
      "4": "\u56db",
      "5": "\u4e94",
      "6": "\u516d"
    };
    if (/(y+)/.test(format)) {
      format = format.replace(
        RegExp.$1,
        (source.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    if (/(E+)/.test(format)) {
      format = format.replace(
        RegExp.$1,
        (RegExp.$1.length > 1
          ? RegExp.$1.length > 2
            ? "\u661f\u671f"
            : "\u5468"
          : "") + week[source.getDay() + ""]
      );
    }
    for (let k in o) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return format;
  }
  
  function convertTime(date) {
    return date.replace(/-/g, "/");
  }
  