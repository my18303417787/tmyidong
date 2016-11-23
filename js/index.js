$(function(){
var flag=false;
$(window).on("scroll",function () {
    var number=jQuery("body").scrollTop();
    if(number>100){
        if(!flag){
            $(".header").addClass("active");
            flag=true;
        }
    }else{
        if(flag){
            $(".header").removeClass("active");}
        flag=false;
        }
    })
$(".back").on("touchend",function () {
    $(".cedao").addClass("active");
})
$(".menu").on("touchend",function () {
    $(".cedao").removeClass("active");
})
$(".dibuguding .close").on("touchend",function () {
    $(".dibuguding").addClass("active");
})
$(".yindao .close").on("touchend",function () {
        $(".yindao").addClass("active");
    })
    
 $(".cedao .cedao-inner .inner-left li").on("touchend",function () {
     var s= $(this).index();
     $(".cedao .cedao-inner .inner-left .active").removeClass("active");
     $(this).addClass("active");
     $(".daohang-box .active").removeClass("active");
     $(".daohang-box .ss").eq(s).addClass("active");
 })
    
})