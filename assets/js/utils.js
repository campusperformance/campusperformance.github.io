$(function(){
    $('.lazy').lazy();
});

$(".portfolio-modal").on('show.bs.modal', function (e) {
    $(".lazy-modal").Lazy();
});

$(".portfolio-modal").on('hide.bs.modal', function (e) {
    $(this).find("iframe").attr("src", $(this).find("iframe").attr("src"));
});