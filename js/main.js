$(".navbar_burgur").click(function () {
    $("nav.nav").toggle();
});
$(window).resize(function(){
    if(window.innerWidth >=1082){
        $("nav.nav").css("display","flex");
    }else{
        $("nav.nav").css("display", "none");
    }
})