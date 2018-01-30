$(function(){
	var curr_page = 1;
	var page = 4;
	$("#next").click(function(){
		$parent = $(this).parents("div.body-bg");
		$list = $parent.find("div.bg-list");
		$width = $parent.width();
		if( !$list.is(":animated") ){
			if(page<=curr_page){
				$list.animate({ left : '0px'}, "slow");
				curr_page  =1;
			}else{
				$list.animate({ left : '-='+"1903px" }, "slow");
				$list.animate({	left : "-=" +"4px"}, 1);
				curr_page++
			}
		}
	});
	$("#prev").click(function(){
		$parent = $(this).parents("div.body-bg");
		$list = $parent.find("div.bg-list");
		$width = $parent.width();
		if( !$list.is(":animated") ){
			if(1==curr_page){
				$list.animate({ left : '0px'}, "slow");
			}else{
				$list.animate({ left : '+='+$width }, "slow");
				$list.animate({	left : "+=" +"4px"}, 1);
				curr_page--
			}
		}
	});			
});