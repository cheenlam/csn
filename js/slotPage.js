var blockOrder = 0;
var blockLen = $(`#moduleBlock>li`).length;
$(`#moduleBlock>li:eq(0)`).css('display', 'block');

$('#moduleBar li').click(function () {
    blockOrder = $('#moduleBar li').index(this);
    blockChg();
})

$('.moduleArrow_R').click(function () {
    blockOrder == blockLen - 1 ? blockOrder = 0 : blockOrder++
    blockChg();
    console.log(blockOrder)
})

$('.moduleArrow_L').click(function () {
    blockOrder == 0 ? blockOrder = blockLen - 1 : blockOrder--
    blockChg();
})

function blockChg(index) {
    $('#moduleBar li,#moduleTitle li').removeClass('on');
    $(`#moduleBar li:eq(${blockOrder}),#moduleTitle li:eq(${blockOrder})`).addClass('on');

    $(`#moduleBlock>li`).css('display', 'none');
    $(`#moduleBlock>li:eq(${blockOrder})`).fadeIn(700);
}