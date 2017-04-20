$(function(){
    $(".narrow-menu").click(function(){
        $(".narrow-menu-list").show();
    });
    $(".narrow-menu-list>.close").click(function(){
        $(".narrow-menu-list").hide();
    });
});
