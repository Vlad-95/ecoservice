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
    if ($('.intro .slider').length) {
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

    if ($('.project').length) {
        $('.project__item .name').matchHeight();
    }    
    //=======одинаковая высота текстовых блоков КОНЕЦ========

    //=======попап в проектах=========
    if ($('.project').length) {
        $('.project__item').click(function () {
            let currentProject = $(this);
            let currentProjectColor = $(this).find('.content').css('background-color');
            let currentImgHref = currentProject.find('.image img').attr('src');
            let currentAnotherImgHref = currentProject.attr('data-img');
            console.log(Boolean(currentAnotherImgHref))
            let currentName = currentProject.find('.content .name');
            let currentInfo = currentProject.find('.content .info');
            let currentWysiwyg = currentProject.find('.hidden .wysiwyg');

            let popup = $('.project-popup');
            let popupContent = popup.find('.project-popup__wrap .content');
            popup.find('.image img').attr('src', '');
            popupContent.html('');
            popupContent.css('background-color', currentProjectColor)

            if (Boolean(currentAnotherImgHref) == false) {
                popup.find('.image img').attr('src', currentImgHref);
            } else {
                popup.find('.image img').attr('src', currentAnotherImgHref);
            }
            

            let popupContentName = currentName.clone();
            let popupContentInfo = currentInfo.clone();
            let popupContentWysiwyg = currentWysiwyg.clone();

            popupContent.append(popupContentName);
            popupContent.append(popupContentInfo);
            popupContent.append(popupContentWysiwyg);

            popup.fadeIn();

            $('body').addClass('no-scroll');
        })

        $('.project-popup').on('click', '.close', function() {
            $(this).closest('.project-popup').fadeOut();
            $('body').removeClass('no-scroll');
        })
    }
    //=======попап в проектах КОНЕЦ=========


    //=======попап Консультации=========
    if ($('.consultant').length) {
        $('.consultant .btn').click(function () {
            $('.consultant-popup').fadeIn();

            $('body').addClass('no-scroll');
        })

        $('.consultant-popup').on('click', '.close', function() {
            $(this).closest('.consultant-popup').fadeOut();
            $('body').removeClass('no-scroll');
        })
    }
    //=======попап Консультации КОНЕЦ=========
});
