$(function() {
    jQuery.fn.tabmenu = function() {
      return this.each(function() {
        var mtcTab = $(this);
        var tabIndex = $(this).find(".show").attr("id").match(/\d+$/);
        $(this).find(".panel").find("#tabContent-" + tabIndex[0]).show();
        $(this).find(".tab_wrap>li>a").click(function() {
          var tabIndex = $(this).attr("id").match(/\d+$/);
            mtcTab.find(".tab_wrap>li>a").removeClass("show");
            $(this).addClass("show");
            mtcTab.find(".panel>div").hide();
            mtcTab.find(".panel").find("#tabContent-" + tabIndex[0]).show();
            return false;
          });
      });
    };
  
    jQuery.fn.intabmenu = function() {
      return this.each(function() {
        var mtcinTab = $(this);
        var intabIndex = $(this).find(".inshow").attr("id").match(/\d+$/);
        $(this).find(".inpanel").find("#intabContent-" + intabIndex[0]).show();
        $(this).find(".intab_wrap>li>a").click(function() {
          var intabIndex = $(this).attr("id").match(/\d+$/);
            mtcinTab.find(".intab_wrap>li>a").removeClass("inshow");
            $(this).addClass("inshow");
            mtcinTab.find(".inpanel>div").hide();
            mtcinTab.find(".inpanel").find("#intabContent-" + intabIndex[0]).show();
            return false;
          });
      });
    };
  
  //이동버튼
  var leftBtn = $('.left_button');
  var rightBtn = $('.right_button');
  leftBtn.addClass('sc_end').attr('disabled', true);
  var padMargin = 60;
  var liLength = $('.tab_scroll a').length;
  var liSize = $('.tab_scroll a').outerWidth(true);
  var listSize = liLength * liSize;
  var listWrapSize = $('.tab_list').outerWidth();
  var listVisible = listWrapSize;
  var listInvisible = listSize - listWrapSize;
    
  if(listWrapSize < listSize ){
    $('.tab_arrow_btn').css('display','block');
    $('.tab_wrap').css('margin-right','66px');
  } else {
    $('.tab_wrap').css('margin-right','0');
  }
  
  $('.tab_wrap').on('scroll', function() {
      listInvisible = listSize - listWrapSize;
    var listPos = $('.tab_wrap').scrollLeft();
      var listEndOffset = listInvisible - padMargin;
  
      if (listPos <= padMargin) {
          $(leftBtn).addClass('sc_end').attr('disabled', true);
          $(rightBtn).removeClass('sc_end').attr('disabled', false);
      } else if (listPos < listEndOffset) {
          $(leftBtn).removeClass('sc_end').attr('disabled', false);
          $(rightBtn).removeClass('sc_end').attr('disabled', false);
      } else if (listPos >= listEndOffset) {
          $(leftBtn).removeClass('sc_end').attr('disabled', false);
          $(rightBtn).addClass('sc_end').attr('disabled', true);
    }
  });
  
  // scroll to left
  $(rightBtn).on('mousedown', function() {
      //$('.tab_wrap').animate( { scrollLeft: listInvisible}, 300); //한번에 끝으로
      $('.tab_wrap').animate( { scrollLeft: "+=200px"}, 300);
  });
  
  // scroll to right
  $(leftBtn).on('mousedown', function() {
      //$('.tab_wrap').animate( { scrollLeft: '0' }, 300); //한번에 앞으로
      $('.tab_wrap').animate( { scrollLeft: "-=200px"}, 300);
  });
  
  }); //end
  
      $(function () {
          $('#tabmenu-1').tabmenu();        
      });
  
  
  