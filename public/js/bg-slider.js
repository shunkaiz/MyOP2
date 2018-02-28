$(function(){
	var curr_page = 1;
	var page_num = 4;
	$("#next").click(function(){
		$parent = $(this).parents("div.body-bg");
		$list = $parent.find("div.bg-list");
		$width = 1903;
		if( !$list.is(":animated") ){
			if(curr_page >= page_num){
				$list.animate({ left : '0px'}, "slow");
				curr_page = 1;
			}else{
				$list.animate({ left : '-='+ $width }, "slow");
				$list.animate({	left : "-=" +"4px"}, 1);
				curr_page++
			}
		}
	});
	$("#prev").click(function(){
		$parent = $(this).parents("div.body-bg");
		$list = $parent.find("div.bg-list");
		$width = 1903;
		if( !$list.is(":animated") ){
			if(curr_page == 1){
				$list.animate({ left : '-5709px'}, "slow");
				curr_page = 4;
			}else{
				$list.animate({ left : '+='+ $width }, "slow");
				$list.animate({	left : "+=" +"4px"}, 1);
				curr_page--
			}
		}
	});			
});