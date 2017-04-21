$(function(){
    init();
    $(window).scroll(function(){
        $(".navbar-inner").css("margin-top","0");
        init();
    });
    function init(){
        if($(window).scrollTop()==0){
            $(".navbar-inner").css("margin-top","50px");
        }
        else{
            $(".navbar-inner").css("margin-top","0");
        }
    }
});
