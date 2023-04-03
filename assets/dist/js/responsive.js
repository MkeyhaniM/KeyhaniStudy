$(document).ready(e => {
    $("#barNavigator").click(e => {
        if (!$('section.container-fluid section#allWidthHeight nav#navigator div:first-child').hasClass("responsive")) {
            $('section.container-fluid section#allWidthHeight nav#navigator div:first-child').addClass('responsive')
        } else {
            $('section.container-fluid section#allWidthHeight nav#navigator div:first-child').removeClass('responsive')
        }
    })
})