$(function(){
	$("#signupUsername").blur(function(){
		$(this).popover('hide');
		if($(this).val() === ""){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ban-circle customempty');
		}else if($(this).val().length<6){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-remove-circle customfalse');
		}else{
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ok-circle customtrue');
		}
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).popover('show');
	});

	$("#signupEmail").blur(function(event){
		$value = $(this).val();
		$(this).popover('hide');
		$(this).popover('hide');
		if($(this).val() === ""){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ban-circle customempty');
		}else if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test($value ))){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-remove-circle customfalse');
		}else{
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ok-circle customtrue');
			$(this).popover('hide');
		}	   			
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).popover('show');
	});
	$ycode = "10000";
	$("#ycode").blur(function(){ 			
		$(this).popover('hide');
		if($(this).val() === ""){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ban-circle customempty');
		}else if($(this).val() != $ycode){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-remove-circle customfalse');
		}else if($(this).val() == $ycode){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ok-circle customtrue');
		}	   			
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).popover('show');
	});
	   			   		   			
	$("#signupPassword").blur(function(){	   			
		$(this).popover('hide');
		if($(this).val() === ""){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ban-circle customempty');
		}else{
         	$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ok-circle customtrue');
		}	   			
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).popover('show');
	});

	$("#repsw").blur(function(){	   			
		$psw = $("#signupPassword").val();
		$(this).popover('hide');
		if($(this).val() ===""){
         $($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ban-circle customempty');
		}else if($psw != $(this).val()){
         $($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-remove-circle customfalse');
		}else{
         $($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ok-circle customtrue');
		}	   			
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).popover('show');
	});



	// $("#signupButton").click(function(){
	// 	$email = $(this).parents("#signupForm").find("#signupEmail");
	// 	if($(this).parents("#signupForm ul").children(':nth-child(2)').children(':nth-child(3)').hasClass('customtrue')){
	// 		var para = {email: $email.val()};
	// 		$.ajax({
	// 		        url: '/users/email',
	// 		        dataType: "JSON",
	// 		        type: "GET",
	// 		        data: para,
	// 		        success: function (returl) {
	// 		            alert('email sent');
	// 		        },
	// 		        error: function (jqXHR, responseText, textStatus) {
	// 		            alert(jqXHR.responseText);
	// 		        }
	// 		    });

	// 	}else{
	// 		$email.popover('show');
	// 	}
	// 	// if($(this).parents("#form1").find("#emaili").children("span").last().hasClass("customtrue")){
	// 	// 	$(".ycode-box").hide();
	// 	// 	$("#ycode").show();
	// 	// 	var $address = $email.val();
	// 	// 	$.post("../myop/php/email-verify.php", {to: $address}, function(data){
	// 	// 		$ycode = data;
	// 	// 	});
	// 	// }else{
	// 	// 	$email.popover('show');
	// 	// }
	// });

});