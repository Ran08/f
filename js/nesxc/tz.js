//倒计时方法
function TimeLocation = (href, elemId) => {
  var elem = document.getElementById(elemId);
  var interval = setInterval(function () {
    var time = --elem.innerHTML;
    if (time <= 0) {
      location.href = href;
      clearInterval(interval);
    }
  }, 1000);
}

//调用倒计时方法，并传入想要跳转的地址及显示倒计时节点Id
TimeLocation("www.nesxc.com","timer");