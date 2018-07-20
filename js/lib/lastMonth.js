/**
 * 获取上一个月
 * 首先获取当前日期，然后基于当前日期获取上月日期
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */

define(function(){
    // 使用匿名函数挂载
    (function(){
        Date.prototype.format = function() {
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            return currentdate;
        }
    })();
    var getPreMonth = function(date){
        var arr = date.split('-');
        var year = arr[0]; //获取当前日期的年份
        var month = arr[1]; //获取当前日期的月份
        var day = arr[2]; //获取当前日期的日

        var year2 = year;
        var month2 = parseInt(month) - 1;
        if (month2 == 0) {
            year2 = parseInt(year2) - 1;
            month2 = 12;
        }

        var day2 = day;
        var days2 = new Date(year2, month2, 0);
        // 若本月为31号，上月只有30天，则上月日期为30号，如本月7-31，上月则为6-30
        days2 = days2.getDate();//上月共有天数
        if (day2 > days2) {
            day2 = days2;
        }
        if (month2 < 10) {
            month2 = '0' + month2;
        }
        var t2 = year2 + '-' + month2 + '-' + day2;
        return t2;
    };
    return{
        preMonth:getPreMonth
    }
});