$(document).ready(function(){
    function scrollTopPag(){
        $("html, body").animate({
            scrollTop: 0
        }, 600, "swing")
        
    }
    $(".scroll_top").find("a").click(function(e){
          e.preventDefault()
          var target = $(this).attr("href")
          scrollTopPag();
    })

    $(window).scroll(function(){
      var scroll_top = $(window).scrollTop();
      // if (scroll_top > 1000) {
      //   $(".scroll_top").find("a").addClass("active_scroll")
      // }else{
      //   $(".scroll_top").find("a").removeClass("active_scroll")
      // }


      //top Header
       if (scroll_top > 40) {
          $(".navs").addClass("active_header")
        }else{
          $(".navs").removeClass("active_header")
        }
    })

    //Sectop scroll spy
    $(".side_nav").find("li").find("a").click(function(e){
      e.preventDefault();
      let target = $(this).attr("href");      
      $('html, body').stop().animate({
        scrollTop: $(target).offset().top - 80
        
      }, 0, function() {
          location.hash = $(target).offset().top - 80;
      });

      // return false;

    })


    $('.brand').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
   

})
