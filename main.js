//'use strict';
new WOW({
    boxClass:     'wow',
    animateClass: 'animate__animated',
    offset:       200,
    mobile:       true,
    live:         true
}).init();

//////////////////////
$('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});
/*
$('.image-popup-link').magnificPopup({
    type:'image',
    gallery:{enabled:true}
});
*/
////////////////////////////
document.getElementById('small-menu').onclick = function () {
    document.getElementById('menu').classList.add('open');
}
document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})
//////////////////////////----------
let owl2 = $('.advantages .owl-carousel');
let owl3 = $('.gallery-items .owl-carousel');
let owl4 = $('.menu-portfolio .owl-carousel');
let workClass = ".advantages";
$(document).ready(function () {
    $(window).on('resize', function () {
        if ($(window).width() <= 767) {
            owl2 = $(workClass).addClass('owl-carousel');
            //owl2 = $('.advantages').addClass('owl-carousel');

            owl2.owlCarousel({
                items: 1,
                margin: 10,
                responsive: {
                    0: {
                        items: 1,
                        margin: 10,
                        autoWidth: false,
                    },
                    400: {
                        loop: true,
                        items: 1,
                        margin: 10,
                        autoWidth: true,
                        center: true
                    },
                    768: {
                        items: 2,
                        margin: 10
                    }
                },
                autoWidth: false,
                onInitialized: function (e) {
                    $('.counter-advantage').text('1 / ' + this.items().length)
                    // console.log();
                }

            });

            // console.log('add');
        } else {
            $('.advantages').trigger("destroy.owl.carousel").removeClass('owl-carousel');
            console.log('remove');
        }
    }).trigger('resize');

    owl2.on('changed.owl.carousel', function (e) {
        $('.counter-advantage').text(++e.page.index + ' / ' + e.item.count)
    });

    $('.customPrevBtnAdvantage').click(function () {
        owl2.trigger('prev.owl.carousel');
    });

    $('.customNextBtnAdvantage').click(function () {
        owl2.trigger('next.owl.carousel');
    });
});
$(document).ready(function () {
    $(window).on('resize', function () {
        if ($(window).width() <= 767) {
            owl3 = $('.gallery-items').addClass('owl-carousel');
            // console.log(owl3);
            owl3.owlCarousel({
                //          $('.advantages').addClass('owl-carousel').owlCarousel({
                items: 1,
                margin: 10,
                responsive: {
                    0: {
                        //loop: true,
                        items:1,
                        margin: 15,
                     autoWidth: false,
                  autoHeight:true,
                      //  center: true
                    },
                    400: {
                        loop: true,
                        items: 1,
                        margin: 15,
                       autoWidth: true,
                       autoHeight:true,
                       center: true
                    },
                    768: {
                        items: 2,
                        margin: 15
                    }
                },
                autoWidth: false,
                onInitialized: function (e) {
                    $('.counter-gallery-items').text('01  /  0' + this.items().length)
                    console.log();
                }

            });

            console.log('add carousel in gallery-items');
        } else {
            $('.gallery-items').trigger("destroy.owl.carousel").removeClass('owl-carousel');
            console.log('remove');
        }
    }).trigger('resize');

    owl3.on('changed.owl.carousel', function (e) {
        $('.counter-gallery-items').text('0' + ++e.page.index + ' / 0' + e.item.count)
    });

    $('.customPrevBtnGallery').click(function () {
        owl3.trigger('prev.owl.carousel');
    });

    $('.customNextBtnGallery').click(function () {
        owl3.trigger('next.owl.carousel');
    });
});
$(document).ready(function () {
    $(window).on('resize', function () {
        if ($(window).width() <= 767) {
            owl4 = $('.menu-portfolio').addClass('owl-carousel');
            owl4.owlCarousel({
                items: 1,
                margin: 10,
                responsive: {
                    0: {
                        loop: true,
                        items:4,
                        //margin: 10,
                           autoWidth: true,
                        // autoHeight:true,
                      // center: true
                    },
                    400: {
                        loop: true,
                        items: 3,
                        //margin: 10,
                        // autoWidth: true,
                        //autoHeight:true,
                        center: true
                    },
                    768: {
                        items: 4,
                        margin: 10
                    }
                },
                autoWidth: false
            });
        } else {
            $('.menu-portfolio').trigger("destroy.owl.carousel").removeClass('owl-carousel');
            console.log('remove');
        }
    }).trigger('resize');

});
///////////////////////////
let owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    center: true,
    autoWidth: true,
    items: 3,
    margin: 30,
    navigation: false,
    // navText : ["<img src='images/down-arrow1.png'>","<img src='images/down-arrow2.png'>"],
    navText: ["", ""],
    pagination: true,
    responsive: {
        0: {
            items: 1,
            // nav: true,
            margin: 10,
            autoWidth: false,
        },
        660: {
            items: 1,
        },
        1080: {
            items: 2,
        }
    },
    onInitialized: function (e) {
        $('.counter').text('1 / ' + this.items().length)
        console.log();
    }
});
owl.on('changed.owl.carousel', function (e) {
    $('.counter').text(++e.page.index + ' / ' + e.item.count)
});

$('.customPrevBtn').click(function () {
    owl.trigger('prev.owl.carousel');
});

$('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
});

////////////////////////////////////////////
//    loader.css('display','flex');
/// по нажатию кнопки скролинг к галерее портфолио
$('.btn-portfolio').click((e) => {
    $('.gallery-items')[0].scrollIntoView({behavior: "smooth"});
});

/////////////////
let loader = $('.loader');
let form = $('.order');
let ordered = $('.ordered-block');

const ErrorBorderColor = $('.record-input').css('border-color');
const ErrorTextColor = $('.form-check-label').css('color');

$('#submitForm').click(function () {

    let name = $('#nameForm');
    let phone = $('#phoneForm');
    let agreement = $('#agreementForm');
    // let agreement = $('#agreementForm');
    const checkbox = document.getElementById('agreementForm');


    phone.inputmask({"mask": "+380 (99) 999 - 99 - 99", greedy: true}); //specifying options

    let hasError = false;
    $('.error-input').hide();
    $('.record-input').css('border-color', ErrorBorderColor);
    $('.form-check-label').css('color', ErrorTextColor);

    if (!name.val()) {
        name.next().show();
        name.css('border-color', 'red');
        hasError = true;
        alert("Введите имя!")
    }

    if (!phone.val()) {
        phone.css('border-color', 'red');
        phone.next().show();
        hasError = true;
        alert("Введите телефон!")
    }

    if (!checkbox.checked) {
        alert("Ошибка, вы должны принять соглашение");
        hasError = true;
        $('.form-check-label').css('color', 'red');
        agreement.next().next().show();
    }

    if (!hasError) {
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "http://testologia.site/checkout",
            data: {name: name.val(), phone: phone.value}
        })
            .done(function (msg) {
                loader.hide();
                if (msg.success) {
                    alert("Спасибо, мы свяжемся с вами в ближайшее время!");

                    form.hide();
                } else {
                    alert("Возникла ошибка при отправке данных");
                }
                console.log(msg);//name itlogia success=1
            });
    } else (console.log('hasError'));
})

$('#submitFormCall').click(function () {

    let name = $('#nameFormCall');
    let phone = $('#phoneFormCall');
    let agreement = $('#agreementFormCall');
    // let agreement = $('#agreementForm');
    const checkbox = document.getElementById('agreementFormCall');


    phone.inputmask({"mask": "+380 (99) 999 - 99 - 99", greedy: true}); //specifying options
    // loader.css('display', 'flex');
    let hasError = false;
    $('.error-input').hide();
    $('.record-input').css('border-color', ErrorBorderColor);
    $('.form-check-label').css('color', ErrorTextColor);

    if (!name.val()) {
        name.next().show();
        name.css('border-color', 'red');
        hasError = true;
        alert("Введите имя!")
    }

    if (!phone.val()) {
        phone.css('border-color', 'red');
        phone.next().show();
        hasError = true;
        alert("Введите телефон!")
    }

    if (!checkbox.checked) {
        alert("Ошибка, вы должны принять соглашение");
        hasError = true;
        $('.form-check-label').css('color', 'red');
        agreement.next().next().show();
    }

    if (!hasError) {

        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "http://testologia.site/checkout",
            data: {name: name.val(), phone: phone.value}
        })
            .done(function (msg) {
                loader.hide();
                if (msg.success) {
                    // alert("Спасибо, мы свяжемся с вами в ближайшее время!");
                    ordered.css('max-width', form.css('width'));
                    ordered.css('height', form.css('height'));
                    ordered.css('display', 'flex');
                    form.hide();


                } else {
                    alert("Возникла ошибка при отправке данных");

                }
                console.log(msg);//name itlogia success=1
            });
    } else (console.log('hasError'));
})