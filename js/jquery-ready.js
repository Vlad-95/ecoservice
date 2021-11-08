$(document).ready(function() {
    //===========Мобильное меню
    let body = $('body')
    let windowWidth = window.innerWidth;
    let header = $('.header');
    let headerWrap = $('.header__wrap');
    let time = header.find('.nav__item.time');
    let mail = header.find('.nav__item.mail');
    let address = header.find('.nav__item.address');
    let phone = header.find('.nav__item.phone')
    let burger = $('.burger');
    let windowHeight = $(window).height();

    if (windowWidth <= 992) {
        //создаем контейнер для менюшки
        let mobileMenu = $(document.createElement('div'));
        let nav = $(document.createElement('div'));
        mobileMenu.addClass('mobile-menu');
        nav.addClass('nav');

        headerWrap.append(mobileMenu)
        mobileMenu.append(nav)

        //клонируем элементы хедера
        let mobileTime = time.clone();
        let mobileMail = mail.clone();
        let mobileAddress = address.clone();
        let mobilePhone = phone.clone();
        
        nav.append(mobilePhone); 
        nav.append(mobileMail);  
        nav.append(mobileAddress);  
        nav.append(mobileTime);   
              
    }

    function showMenu() {
        let mobileMenu = $('.mobile-menu');

        burger.toggleClass('active');
        body.toggleClass('no-scroll');
        mobileMenu.toggleClass('active');
        console.log(1)
    }

    burger.click(showMenu);

    //============Мобильное меню (КОНЕЦ)

    //======Главный слайдер==========
    if ($('.intro').length) {
        $('.intro .slider').slick({
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 769, 
                    settings: {
                        arrows: false
                    }
                }
            ]
        })
    }

    //======Главный слайдер КОНЕЦ

    //=======Слайдер ОТЗЫВЫ=============
    if ($('.reviews').length) {
        $('.reviews .slider').slick({
            slidesToShow: 1,
            dots: true,
            arrows: false
        })
    }

    //=======Слайдер ОТЗЫВЫ КОНЕЦ=======

    //=======одинаковая высота текстовых блоков========
    if ($('.license').length) {
        $('.license__item .name').matchHeight();
    }
    
    //=======одинаковая высота текстовых блоков КОНЕЦ========

});
