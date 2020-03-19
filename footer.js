$(document).ready(function(){

    $("[data-toggle='collapse']").removeAttr("data-toggle");
    if($(window).width()<768)
    {
        $(".taber").attr("data-toggle","collapse");
        $('.collapse').collapse("hide");
    }
});