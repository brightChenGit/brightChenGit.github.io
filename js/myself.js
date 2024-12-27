$(document).ready(function (e) {
    $('#footer-wrap').append('<div class="framework-info"></div>')
    show_date_time();
    showIcp();
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


function  showIcp(){

    // 获取当前域名和路径 指定 域名下首页展示备案信息
    const hostname = window.location.hostname;
    const isHomePage = typeof GLOBAL_CONFIG_SITE !== 'undefined' && GLOBAL_CONFIG_SITE.isHome;
    // 检查是否满足条件
    if (hostname === 'brightchen.top' || hostname==='www.brightchen.top') {
        // 显示备案信息的逻辑  nofollow 告知搜索引擎不要追踪此链接或传递权重
        $('#footer-wrap').append('<a href="http://beian.miit.gov.cn/" rel="nofollow" style="" target="_blank">粤ICP备2024355392号-1</a> 丨 ')
    } else {
        // console.log('当前页面不符合条件');
    }
    $('#footer-wrap').append('本网站由<a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" rel="nofollow" style="" target="_blank"><img src="https://www.brightchen.top/img/upyun.png" alt="又拍云" align="absmiddle" width="66px" height="31px"></a>提供CDN加速/云存储服务')

}
// 参考https://www.tjsky.net/tutorial/1026
//反代理问题
const host = window.location.host
// 使用原生JavaScript的btoa函数进行base64编码
var encodedString = window.btoa(host);
if (encodedString !== 'YnJpZ2h0Y2hlbi50b3A='
    &&encodedString !== 'd3d3LmJyaWdodGNoZW4udG9w'
    &&encodedString !== 'YnJpZ2h0Y2hlbmdpdC5naXRodWIuaW8='
    &&!host.startsWith('192.168.31.229')
    && ! host.startsWith('localhost')
    && ! host.startsWith('127.0.0.1')) {
    document.body.innerHTML = [
        '<div style="margin: auto;">',
        '<h1>当前页面并非本文作者的主页，将在五秒后跳转。</h1>',
        '<br />',
        '<h1>请此站点持有者联系我: 1024347104@qq.com</h1>',
        '</div>',
    ].join('')
    document.body.style = [
        'background-color: white;',
        'color: black;',
        'text-align: center;',
        'font-size: 50px;',
        'width: 100vw;',
        'height: 100vh;',
        'display: flex;',
    ].join('')
    setTimeout(() => {
        window.location.href = 'https://brightchen.top'
    }, 5000)
}

