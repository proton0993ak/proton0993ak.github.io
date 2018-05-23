
$(function(){

    $('.icon-menu').on('click', function() {
       $('.header-group').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });

});