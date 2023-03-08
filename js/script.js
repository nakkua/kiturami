$(function(){
    mainInit();
    //링크막아주기 넣기
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
  })

  function mainInit(){
    gnb_menu();
    scroll();
    visual();
  }

  //메뉴
  function gnb_menu(){


  }

  // scroll
  function scroll(){
    let top = 0;
    let h = $('#header').height();
    let posY = $('#visual').offset().top;

    $(window).on('scroll',function(){
      top = $(window).scrollTop();
      
      // $('html,body').animate({scrollTop:posY},600);

      if(top > h){
        $('#header').addClass('on');
        $('#header h1 img').attr('src','images/00_logo.png');
      } else {
        $('#header').removeClass('on');
        $('#header h1 img').attr('src','images/00_logo_W.png');
      }
    })
  }

  // visual
  function visual(){
    let $bannerLi = $('#visual .banner li');
    let $h2 = $('#visual .txt-wrap h2');
    let $h3 = $('#visual .txt-wrap .business-more a h3');
    let $bar = $('#visual .txt-wrap .btn-wrap .bar span');
    let $prev = $('#visual .txt-wrap .btn-wrap .prev');
    let $next = $('#visual .txt-wrap .btn-wrap .next');
    let cnt=0, size=$bannerLi.length, timer=null, interval=7000;

    $bannerLi.hide().eq(cnt).show();
    timer=setInterval(make,interval);
    function make(){
      cnt++;
      if(cnt > size-1){
        cnt=0;
      }
      $bannerLi.fadeOut(500).eq(cnt).fadeIn(500);
      $bar.css({width:0}).animate({width:100},700);
    }
  }