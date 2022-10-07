//手機選單
function mobile_menu() {
    var winWidth = $(window).width();

    //漢堡線
    $("#mobile_menu_labIcon").click(function() {
        $(".nav-bar").toggleClass("on");
        $(".portfolio-filter.isotope-filter.pull-center").toggleClass("on");
        $("#greybg").toggle();
        $('.hamburger').toggleClass('is-active');

    })

    $("#greybg").click(function() {

        $(this).toggle();
        $(".portfolio-filter.isotope-filter.pull-center").removeClass("on");
        $('.hamburger').removeClass('is-active');
    })

}




//header置頂
function headerTop() {
    $(window).scroll(function() {
        var winWidth = $(window).width(),
            topWindow = $(window).scrollTop();
        if (topWindow > 0 && winWidth > 980) {
            $('header').addClass("small animated fadeInDown");
        } else {
            $('header').removeClass("small animated fadeInDown ");
        }
    });



    var winWidth = $(window).width();
    if (winWidth < 980) {
        $(".submenu li.nsdnmenu ").click(function() {
            $(this).toggleClass("on");
            $(this).children(".hasChild").stop().slideToggle();

            $(this).siblings(".submenu li.nsdnmenu").removeClass("on").children(".hasChild").stop().slideUp();
        });
    }
}
//手機次選單
function MobileSubmenu() {
    var winWidth = $(window).width();
    if (winWidth < 980) {

        $("#greybg").css("display", "none");
        $(".portfolio-filter.isotope-filter.pull-center,.hamburger").removeClass("on");
        $('.hamburger').removeClass('is-active');

    } else {

        $("#greybg").css("display", "none");

    }
}


//圖片展開
function imgscript() {

    //tab切換
    $(".all,.badge1,.pro_detail_title").on('click', function() {
        $(this).toggleClass('active');
        $(this).next().stop().slideToggle();

    });

}


$(function() {
    mobile_menu(); //手機選單
    headerTop(); //header置頂
    MobileSubmenu(); //手機次選單

    imgscript(); //圖片展開

});