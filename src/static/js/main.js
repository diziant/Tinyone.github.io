$(document).ready(function () {

    body = $("body");

    //menu-burger logic

    let lastFocusedElement;

    $(".header__menu").click(function () {
        body.addClass("fullscreen-menu");
        body.addClass("modal-open");


        lastFocusedElement = document.activeElement;
        $(".mobile-menu").focus();
    });

    $(".mobile-menu__close").click(function () {
        body.removeClass("fullscreen-menu");
        body.removeClass("modal-open");

        lastFocusedElement.focus();
    });

    //scroll to necessary section

    $(".mobile-menu__link").click(function (event) {

        event.preventDefault();

        body.removeClass("fullscreen-menu");
        body.removeClass("modal-open");

        const $this = $(this)

        const necessarySection = $("body").find('#' + $this.data('section') + '.section')
        const necessaryTitle = $("body").find('#' + $this.data('section') + '.section .section__title')

        $('html, body').animate({ scrollTop: necessarySection.position().top }, 1200);

        necessaryTitle.focus();
    });

    //scroll to content

    $('.next-page, .skip-to-content').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $('.content').position().top }, 1200);
        $('.features .title').focus();
    });
});
