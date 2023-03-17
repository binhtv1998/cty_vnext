$(document).ready(function () {
    $('.modal-open').click(function (e) {
        $('#modal-detail').show();
        $(".modal-description").scrollTop(0);
        $('html, body').css({
            overflow: 'hidden'
        });
    });

    $('.modal-close').click(function (e) {
        $('#modal-detail').hide();
        $('html, body').css({
            overflow: 'auto'
        });
    });
});