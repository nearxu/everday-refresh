const slice = (arr) => {
    let resLen = arr.length;
    let resArr = [...arr];
    let initArr = [];
    for(let i=0;j=0;i<resLen;i+=8;j++) {
        initArr[i] = resArr.splice(0,8);
    }
}

// rem
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);