$(function(){
    $("#bg-list-hidden").css({'display':'none'});
    setTimeout(()=>{
        $(".intro-video").css({'display': 'none'});
    }, 6000);
    setTimeout(()=>{
        $("#bg-list-hidden").css({'display':'block'});
    }, 6000);
});