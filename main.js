$(window).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>=20){
            $(".sc").addClass("show");
        }
        else{
            $(".sc").removeClass("show");
        }
    })
    $(".sc").click(function(){
        $('html,body').animate({scrollTop : 0},100);
    })
})
