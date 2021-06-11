let menuSort = 0;
let pageSort = 0;
let findOn = 0
let menuData = ["slot", "round", "egt"]
let sortData = {
    "TW": [
        ["吉宗", "南國育", "北斗神拳"],
        ["15輪-1", "15輪-2"],
        ["EGT"]
    ],
    "EN": [
        ["Gizong", "Nanguoyu", "Beidou"],
        ["15Rounds-1", "15Rounds-2"],
        ["EGT"]
    ]
}

// 初始ready執行
$(document).ready(function() {
    localStorage.setItem("lang", "TW")
    mainInclude('page/slot1_1.html')
    sortList(0)
});

// LOGO點擊事件
$('#hd_logo').click(function() {
    mainInclude('page/slot1_1.html')
    sortList(0)
    menuSort = 0;
    pageSort = 0;
    findOn = 0;
    $('#menu li,#pageStep li').removeClass('on')
    $('#menu li:eq(0),#pageStep li:eq(0)').addClass('on')
    $('#pageStep ul').attr('data-num', '0')
})


$('#menu li').click(function(e) {
    findOn = 0
    $('#pageStep li').removeClass('on');
    $('#pageStep li:eq(0)').addClass('on')
    e.stopPropagation();
    let pageStep;  
    let jdm01 = $('#menu>ul>li').index(this);

    $('#menu>ul>li').removeClass('on');
    if (jdm01 != -1) {
        pageStep = jdm01
        menuSort = jdm01;
        findOn = 0;
        mainInclude(`page/${menuData[jdm01]}1_1.html`);
        $(`#menu>ul>li:eq(${jdm01})`).addClass('on')
        sortList(jdm01)
    } else {
        e.preventDefault();
        let jdm02 = $('#menu>ul>li').index($(this).parents('li'));
        let jdm03 = $('.minMenu li').index(this);
        pageStep = jdm02
        menuSort = jdm02;
        findOn = jdm03;
        mainInclude(`page/${menuData[jdm02]}${jdm03+1}_1.html`);
        $(`#menu>ul>li:eq(${jdm02})`).addClass('on')
        sortList(jdm02)
    }

    if (pageStep == 2) {
        $('#pageStep ul').attr('data-num', '1')

    } else {
        $('#pageStep ul').attr('data-num', '0')
    }
    $('#menu').removeClass('on');
})

// 機台種類切換
$('#sortBar').on("click", 'li', function() {
    $('#sortBar li').removeClass('on');
    $(this).addClass('on');
    let index = $('#sortBar li').index(this);
    $('#pageStep li').removeClass('on');
    $('#pageStep li:eq(0)').addClass('on')
    findOn = index
    mainInclude(`page/${menuData[menuSort]}${findOn + 1}_1.html`);
})

// 步驟切換
$('#pageStep li').click(function() {
    $('#pageStep li').removeClass('on');
    $(this).addClass('on');

    let index = $('#pageStep li').index(this);
    console.log(findOn)
    mainInclude(`page/${menuData[menuSort]}${findOn + 1}_${index + 1}.html`);
})

// 小畫面hd按鈕點擊事件
$('#hd_bar li').click(function() {
    let index = $('#hd_bar li').index(this);
    switch (index) {
        case 0:
            $('#hd_Lang').addClass('on');
            break;
        case 1:
            $('#menu').addClass('on');
            break;

    }
})

$('#menuClose').click(function() {
    $('#menu').removeClass('on');
})

$('#hd_Lang').click(function() {
    $('#hd_Lang').removeClass('on');
})



// 變更語系
$('#hd_Lang li').click(function() {
    let lnagData = [];
    lnagData[0] = $('#langSel').attr("data-lang");
    lnagData[1] = $('#langSel').text();
    lnagData[2] = $(this).attr("data-lang");
    lnagData[3] = $(this).text();

    $(this).attr("data-lang", lnagData[0]);
    $(this).text(lnagData[1])
    $('#langSel').attr("data-lang", lnagData[2]);
    $('#langSel').text(lnagData[3]);

    localStorage.setItem("lang", lnagData[2])
    sortList(0)
    chLang();
})

function chLang() {
    let nowLang = localStorage.getItem("lang");

    $('.txtRsc').each(function() {
        let key = $(this).data('tid');
        let array = key.split(".");
        let length = array.length;
        switch (length) {
            case 2:
                $(this).text(leanData[nowLang][array[0]][array[1]]);
                break;
            case 3:
                $(this).text(leanData[nowLang][array[0]][array[1]][array[2]]);
                break;
            case 4:
                $(this).text(leanData[nowLang][array[0]][array[1]][array[2]][array[3]]);
                break;
        }
    })
}
chLang()



// ======== 函 式 ========
// 更改Include內容
function mainInclude(src) {
    $.ajax({
        url: src,
        success: function(html) {
            $("#pageInclude").html(html);
        }
    });
    window.scrollTo({ top: 0 })
}


function sortList(num) {
    let data = '';
    $('#sortBar li').remove()
    let nowLang = localStorage.getItem("lang");

    for (let i = 0; i < sortData[nowLang][num].length; i++) {
        data += `<li>${sortData[nowLang][num][i]}</li>`
    }

    $('#sortBar ul').html(`${data}`)
    $('#sortBar li:eq(0)').addClass('on')
}

sortList(0)