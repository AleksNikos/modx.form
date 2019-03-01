var hoverMenu = {
  init: function(selector, attr, active, link, bot4, mob){
     function hover(hover, link, bot4, mob) {
        var hover   	= hover ? hover : false,
            link        = link,
            bot4        = bot4 ? 'show' : 'open',
            mob         = mob ? mob : 768;

        $(selector).find(attr).each(function(){
           var ths         = $(this),
               drop        = ths.data('toggle');
           if (hover && $(window).width() >= mob) {
              if(drop == 'dropdown') {
                 $(this).hover(
                     function () {
                        $(this).parent().addClass(bot4).find('.dropdown-menu').addClass(bot4);
                        link ? $(this).attr('data-toggle', '') : '';
                     }, function () {
                        $(this).parent().removeClass(bot4).find('.dropdown-menu').removeClass(bot4);
                        link ? $(this).attr('data-toggle', 'dropdown') : '';
                     },
                     $(this).parent().find('.dropdown-menu').hover(
                         function () {
                            $(this).parent().addClass(bot4).find('.dropdown-menu').addClass(bot4);
                         }, function () {
                            $(this).parent().removeClass(bot4).find('.dropdown-menu').removeClass(bot4);
                         }
                     )
                 )
              } else {
                 $(this).parent().removeClass(bot4).find('.dropdown-menu').removeClass(bot4);
              }
           }
           if (drop == 'nodrop'){
              $(this).parents('.dropdown').find('.dropdown-menu').addClass('ndm');
           }
           /*
           if(drop == 'fa-dropdown') {
               $(this).click(function () {
                   if ($(this).parent().hasClass(bot4)) {
                       $(this).parent().removeClass(bot4).find('.drop-fa').removeClass(bot4);
                   } else {
                       //ths.parent('li').removeClass(bot4);
                       $(this).parent().toggleClass(bot4).find('.drop-fa').toggleClass(bot4);
                   }
                   //$(this).toggleClass('fa-angle-up');
                   return false;
               });
           }
           if (drop == 'inner-statics') {
               $(this).parents('.dop-menu').addClass('inner-statics');
           }
           */
        })
     }
     hover(active, link, bot4, mob);
  }
}; hoverMenu.init('.nav-menu', '[data-toggle]', true, false, false, 768);
