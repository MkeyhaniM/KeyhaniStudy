$(document).ready(function () {
    $("#systemOperation").hover(function () {
        $(this).css({"backgroundColor": "ghostwhite"})
        $("#systems").slideDown();
    }, function () {
        $(this).css({"backgroundColor": "whitesomke"})
        $("#systems").slideUp();
    });
    $("#getTheMineOfPage").click(eGetMineOfPage => {
        window.scrollTo({
            behavior: "smooth",
            top: 1100
        })
    })

    $("#barNabigation").click(e => {
        if (!$('section.container-fluid section#allWidthHeight nav#navigator div:first-child').hasClass("responsive")) {
            $('section.container-fluid section#allWidthHeight nav#navigator div:first-child').addClass('responsive')
        } else {
            $('section.container-fluid section#allWidthHeight nav#navigator div:first-child').removeClass('responsive')
        }
    })

    $(".owl-carousel").owlCarousel({
        margin: 10,
        items: 3,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        time: 3000,
        loop: true,
        merge: true,
        nav: true,
        responsive: {
            200: {
                items: 1,
                nav: false
            },
            300: {
                merge: false,
                items: 1,
                nav: false,
                autoplayTimeout: 5000,
                stagePadding: 0,
                autoplayHoverPause: true,
            },
            400: {
                items: 1,
                margin: 10,
                nav: false
            },
            500: {
                items: 2,
                nav: false
            },
            678: {
                mergeFit: false,
                items: 2,
            },
            680: {
                items: 3
            },
            900: {
                items: 3,
            },
            1000: {
                items: 4,
            },
            1300: {
                mergeFit: true
            },
            1600: {
                mergeFit: true
            }
        }
    });


});

window.addEventListener("scroll", e => {
    let sTop = document.documentElement.scrollTop;
    let sHeight = document.documentElement.scrollHeight;
    let cHeight = document.documentElement.clientHeight;

    let mainProgress = Math.floor(sTop / (sHeight - cHeight) * 100)
    document.getElementById('progressBar').style.width = mainProgress + "%"
})
