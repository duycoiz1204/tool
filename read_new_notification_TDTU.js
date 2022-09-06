var close = []
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    close.push(win);
}

function closeTab() {
    for (let x of close) {
        x.close();
    }
    close = []
}

function test() {
    setInterval(function () {
        const arr = document.getElementsByClassName('link-detail');
        if (arr.length > 0) {
            for (let i = 0; i < 3 && i < arr.length; i++) {
                const x = arr[i];
                const e = jQuery.Event("click");
                e.ctrlkey = true;
                $(x).trigger(e);
            }
            const e = jQuery.Event("click");
            $('.page-number[style="font-weight: bold;color: #f03800;"]').trigger(e);
            setTimeout(closeTab, 3000);
        }
        else {
            const e = jQuery.Event("click");
            let arr = $('.jplist-next');
            $(arr[0]).trigger(e);
        }
    }, 8000)
}
test();