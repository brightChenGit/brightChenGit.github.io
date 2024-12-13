$(document).ready(function (e) {
    $('#footer-wrap').append('<div class="framework-info"></div>')
    show_date_time();
})

var pastTimeString = "2024-12-13T18:00:00"; // 格式：YYYY-MM-DDTHH:mm:ss
var pastTime = new Date(pastTimeString);

function calculateTimeDifference() {
    var currentTime = new Date();
    var timeDiff = currentTime - pastTime; // 时间差，单位为毫秒

    // 计算天数、小时数、分钟数和秒数
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    timeDiff -= days * (1000 * 60 * 60 * 24);

    var hours = Math.floor(timeDiff / (1000 * 60 * 60));
    timeDiff -= hours * (1000 * 60 * 60);

    var minutes = Math.floor(timeDiff / (1000 * 60));
    timeDiff -= minutes * (1000 * 60);

    var seconds = Math.floor(timeDiff / 1000);

    // 将结果格式化为字符串
    var result = days + "天" +
        hours.toString().padStart(2, '0') + "时" +
        minutes.toString().padStart(2, '0') + "分" +
        seconds.toString().padStart(2, '0') + "秒";

    return result;
}


//本站运行时间，更改自己1建立站点的时间
function show_date_time() {
    var timeDifference = calculateTimeDifference();
    $('.framework-info').html('安全运行<span>' + timeDifference + '</span>');
    window.setTimeout("show_date_time()", 1000);
}