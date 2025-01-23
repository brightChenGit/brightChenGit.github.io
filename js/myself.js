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
    if (hostname === 'brightchen.top' || hostname==='www.brightchen.top'||hostname === '192.168.31.229' ) {
        // 显示备案信息的逻辑  nofollow 告知搜索引擎不要追踪此链接或传递权重
        $('#footer-wrap').append('<a href="http://beian.miit.gov.cn/" rel="nofollow" style="" target="_blank">粤ICP备2024355392号-1</a>&nbsp;|&nbsp;')
        $('#footer-wrap').append('<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010602013390" rel="nofollow" style="" target="_blank"><img src="https://www.brightchen.top/img/beian.png" alt="备案" align="absmiddle" width="20px" height="20px">粤公网安备44010602013390号</a><br>')
    } else {
        // console.log('当前页面不符合条件');
    }
    $('#footer-wrap').append('本网站由<a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" rel="nofollow" style="" target="_blank"><img src="https://www.brightchen.top/img/upyun.png" alt="又拍云" align="absmiddle" width="59.4px" height="30.2px"></a>提供CDN加速/云存储服务')

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


// 定义一个标志变量，用于防止重复加载 Mermaid.js
let mermaidLoaded = typeof window.mermaid !== 'undefined';
// 检查页面中是否已经引用了 mermaid.min.js
function isMermaidScriptPresent() {
    const scripts = Array.from(document.querySelectorAll('script'));
    return scripts.some(script => script.src.includes('mermaid.min.js'));
}
// 异步加载 Mermaid JS 文件的函数
async function loadMermaidJS() {
    if (mermaidLoaded || isMermaidScriptPresent()) return;

    try {
        const script = document.createElement('script');
        script.src = 'https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/mermaid/11.1.0/mermaid.min.js';
        script.onload = () => {
            console.log('Mermaid library loaded successfully.');
            mermaidLoaded = true;
        };
        script.onerror = () => {
            throw new Error('Failed to load Mermaid library.');
        };
        document.head.appendChild(script);

        // 等待脚本加载完成
        await new Promise((resolve, reject) => {
            if (mermaidLoaded) resolve();
            else script.onload = resolve;
            script.onerror = reject;
        });
    } catch (error) {
        console.error('Failed to load Mermaid library:', error);
        throw error;
    }
}

// 初始化 Mermaid 图表的函数
function initializeMermaidCharts(container,mermaidElements) {
    // 检查是否存在 .mermaid 或 .language-mermaid 元素
    if (mermaidElements.length > 0) {
        try {
            // 如果 Mermaid 尚未初始化，则先初始化它
            if (!mermaidLoaded) {
                mermaid.initialize({ startOnLoad: false });
            }

            // 初始化这些图表
            mermaid.init(undefined, Array.from(mermaidElements));
            // console.log('Mermaid charts initialized successfully.');
        } catch (error) {
            console.error('Failed to initialize Mermaid charts:', error);
        }
    }
}


// 处理 Mermaid 图表初始化的公共函数
async function handleMermaidInitialization() {
    // 使用整个 <body> 作为容器
    const container = document.body;

    // 检查新加载的内容中是否存在 .mermaid 或 .language-mermaid 元素
    const mermaidElements = container.querySelectorAll('.mermaid, .language-mermaid');
    if (mermaidElements.length > 0) {
        // 动态加载 Mermaid JS 文件（如果尚未加载并且页面中没有 mermaid.min.js 的 <script> 标签）
        await loadMermaidJS();

        // 初始化页面中的 Mermaid 图表
        initializeMermaidCharts(container,mermaidElements);
    }
}

// 监听 pjax:complete 事件以处理新加载的内容
document.addEventListener('pjax:complete', async () => {
    await handleMermaidInitialization();
});

// 监听 DOMContentLoaded 事件以处理初始页面加载
document.addEventListener('DOMContentLoaded', async () => {
    await handleMermaidInitialization();
});