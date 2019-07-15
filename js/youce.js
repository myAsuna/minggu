$(document).ready(function(){
    var isHiden = true;
    $('#side_btn').click(function(){
        if(isHiden){
            $('#side_open').animate({right:'+=200px'});
        }else{
            $('#side_open').animate({right:'-=200px'});
        }
        isHiden = !isHiden;
    });
	var index = 0;
    $('#side_btn').click(function(){
        if($('#side_btn ul li').is(":animated")){
            return;
        }
        $('#side_btn ul li').eq(index).fadeOut(0,function(){
            index --;
            if(index < 0){
                index = 1;
            }
            $('#side_btn ul li').eq(index).fadeIn(0);
        });
    });
});
//手拉琴
$(".accordion").on("click",".title",e=>
      $(e.target).next(".content").toggleClass("in")
        .siblings(".content").removeClass("in")
    );