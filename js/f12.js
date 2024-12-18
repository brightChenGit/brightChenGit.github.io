function jump() {
    window.location = "/img/404.jpg";
}


// 右键事件
// document.oncontextmenu = function () { return false; };
// 选择事件
// document.onselectstart = function () { return false; };

document.onkeydown = function (event) {
    event = event || window.event; // 兼容IE8及以下版本
    var keyCode = event.keyCode || event.which;

    if (
        keyCode === 123 || // F12
        (event.ctrlKey && event.shiftKey && (keyCode === 74 || keyCode === 73 || keyCode === 67)) || // Ctrl+Shift+I/J/C
        (event.ctrlKey && keyCode === 85) || // Ctrl+U
        (event.ctrlKey && keyCode === 80) || // Ctrl+P
        (event.ctrlKey && keyCode === 83) // Ctrl+S
    ) {
        event.preventDefault(); // 阻止默认行为
        return false;
    }
};
